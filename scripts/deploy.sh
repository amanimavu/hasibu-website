#!/usr/bin/env bash
# Build + sync the site to the DigitalOcean droplet, then reload Apache.
# Usage: npm run deploy        (build first, then sync)
#        bash scripts/deploy.sh --no-build   (sync existing dist/ only)
set -euo pipefail

REMOTE="root@139.59.212.6"
DEST="/var/www/html/hasibu-new-website"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$SCRIPT_DIR"

# Install deps only when needed: forced with --ci, or when node_modules is
# missing / older than the lockfile. Skips the slow reinstall on repeat deploys.
needs_install() {
    [[ "${*}" == *"--ci"* ]] && return 0
    [[ ! -d node_modules ]] && return 0
    [[ package-lock.json -nt node_modules ]] && return 0
    return 1
}

if [[ "${1:-}" != "--no-build" ]]; then
    if needs_install "$@"; then
        echo "==> Installing deps (npm ci)"
        npm ci
    fi
    echo "==> Building (astro build)"
    npm run build
fi

if [[ ! -d dist ]]; then
    echo "error: dist/ not found. Run the build first." >&2
    exit 1
fi

echo "==> Syncing dist/ -> ${REMOTE}:${DEST}"
rsync -avz --delete dist/ "${REMOTE}:${DEST}"

echo "==> Reloading Apache on ${REMOTE}"
ssh "${REMOTE}" "systemctl reload apache2"

echo "==> Done."

import { ActionError, actions, isInputError } from "astro:actions";
import { useActionState, useEffect, useState } from "react";
import { withState } from "@astrojs/react/actions";

const InputError = ({ errMessage }: { errMessage: string }) => {
    return <span className="text-xs text-red-500">{errMessage}</span>;
};

export function CustomerSupportForm() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        message: "",
        business: "",
    });
    const [state, action, isPending] = useActionState(
        withState(actions.customerSupport),
        { data: undefined, error: undefined } as any,
    );

    const fieldErrors =
        state.error && isInputError(state.error) ? state.error.fields : null;

    useEffect(() => {
        console.log(state);
    }, []);

    useEffect(() => {
        console.log(state.data);
        if (state.data) {
            setInput(() => ({
                name: "",
                email: "",
                message: "",
                business: "",
            }));
        }
    }, [state.data]);

    return (
        <form
            className="mt-8 space-y-5"
            key="customer-support-form"
            action={action}
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-brand-dark"
                    >
                        Name
                    </label>
                    <input
                        defaultValue={input.name}
                        id="name"
                        name="name"
                        type="text"
                        required
                        onInput={(e) => {
                            const val = e.currentTarget.value;
                            setInput((prevInput) => ({
                                ...prevInput,
                                name: val,
                            }));
                        }}
                        className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                    <InputError
                        errMessage={fieldErrors?.name?.join(",") ?? ""}
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-brand-dark"
                    >
                        Work email
                    </label>
                    <input
                        defaultValue={input.email}
                        id="email"
                        name="email"
                        type="email"
                        required
                        onInput={(e) => {
                            const val = e.currentTarget.value;
                            setInput((prevInput) => ({
                                ...prevInput,
                                email: val,
                            }));
                        }}
                        className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                    <InputError
                        errMessage={fieldErrors?.email?.join(",") ?? ""}
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor="business"
                    className="block text-sm font-medium text-brand-dark"
                >
                    Business name
                </label>
                <input
                    defaultValue={input.business}
                    id="business"
                    name="business"
                    type="text"
                    onInput={(e) => {
                        const val = e.currentTarget.value;
                        setInput((prevInput) => ({
                            ...prevInput,
                            business: val,
                        }));
                    }}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
                <InputError
                    errMessage={fieldErrors?.business?.join(",") ?? ""}
                />
            </div>
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-dark"
                >
                    How can we help?
                </label>
                <textarea
                    defaultValue={input.message}
                    id="message"
                    name="message"
                    rows={4}
                    required
                    onInput={(e) => {
                        const val = e.currentTarget.value;
                        setInput((prevInput) => ({
                            ...prevInput,
                            message: val,
                        }));
                    }}
                    className="mt-2 w-full resize-y rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                ></textarea>
                <InputError
                    errMessage={fieldErrors?.message?.join(",") ?? ""}
                />
            </div>
            <button
                disabled={isPending}
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
                Send message
            </button>
        </form>
    );
}

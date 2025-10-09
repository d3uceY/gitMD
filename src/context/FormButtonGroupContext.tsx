"use client"
import { useContext, useState } from "react";
import React from "react";


type FormButtonGroupType = {
    form: string;
    setForm: (markdown: string) => void;
};

const FormButtonGroup = React.createContext<FormButtonGroupType | null>(null)

export const useFormButtonGroup = () => {
    const context = useContext(FormButtonGroup);
    if (!context) {
        throw new Error("useFormButtonGroup must be used within a FormButtonGroupProvider");
    }
    return context;
};

export function FormButtonGroupProvider({ children }: { children: React.ReactNode }) {
    const [form, setForm] = useState<string>('rn')

    return (
        <FormButtonGroup.Provider value={{ form, setForm }}>
            {children}
        </FormButtonGroup.Provider>
    )
}

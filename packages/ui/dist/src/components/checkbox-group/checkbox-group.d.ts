import { type ReactNode, type HTMLAttributes, type Dispatch, type SetStateAction, type ChangeEvent } from 'react';
type CheckboxGroupContextType = {
    values: string[];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isChecked: (value: string) => boolean;
};
export declare function useCheckboxGroup(): CheckboxGroupContextType;
export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
    values: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    children: ReactNode;
}
export declare function CheckboxGroup({ values, setValues, children, ...props }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export {};

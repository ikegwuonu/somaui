import { type ReactNode, type HTMLAttributes, type Dispatch, type SetStateAction, type ChangeEvent } from 'react';
type RadioGroupContextType = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isChecked: (value: string) => boolean;
};
export declare function useRadioGroup(): RadioGroupContextType;
export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    children: ReactNode;
}
export declare function RadioGroup({ value, setValue, children, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export {};

import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes, Dispatch, SetStateAction, ReactNode } from 'react';

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    children: ReactNode;
}
declare function RadioGroup({ value, setValue, children, ...props }: RadioGroupProps): react_jsx_runtime.JSX.Element;

export { RadioGroup, type RadioGroupProps };

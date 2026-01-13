import * as react_jsx_runtime from 'react/jsx-runtime';
import { HTMLAttributes, Dispatch, SetStateAction, ReactNode } from 'react';

interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
    values: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    children: ReactNode;
}
declare function CheckboxGroup({ values, setValues, children, ...props }: CheckboxGroupProps): react_jsx_runtime.JSX.Element;

export { CheckboxGroup, type CheckboxGroupProps };

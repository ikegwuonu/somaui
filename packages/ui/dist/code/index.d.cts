import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type CodeProps = {
    className?: string;
} & React.HTMLAttributes<HTMLPreElement>;
declare function Code({ children, className, ...props }: React.PropsWithChildren<CodeProps>): react_jsx_runtime.JSX.Element;
declare namespace Code {
    var displayName: string;
}

export { Code, type CodeProps };

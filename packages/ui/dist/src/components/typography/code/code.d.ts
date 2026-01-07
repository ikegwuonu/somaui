import React from 'react';
export type CodeProps = {
    className?: string;
} & React.HTMLAttributes<HTMLPreElement>;
export declare function Code({ children, className, ...props }: React.PropsWithChildren<CodeProps>): import("react/jsx-runtime").JSX.Element;
export declare namespace Code {
    var displayName: string;
}

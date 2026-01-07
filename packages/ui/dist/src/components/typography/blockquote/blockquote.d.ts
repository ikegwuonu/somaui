import React from 'react';
export type BlockquoteProps = {
    className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;
export declare function Blockquote({ children, className, ...props }: React.PropsWithChildren<BlockquoteProps>): import("react/jsx-runtime").JSX.Element;
export declare namespace Blockquote {
    var displayName: string;
}

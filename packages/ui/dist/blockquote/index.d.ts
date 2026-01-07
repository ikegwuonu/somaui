import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type BlockquoteProps = {
    className?: string;
} & React.HTMLAttributes<HTMLQuoteElement>;
declare function Blockquote({ children, className, ...props }: React.PropsWithChildren<BlockquoteProps>): react_jsx_runtime.JSX.Element;
declare namespace Blockquote {
    var displayName: string;
}

export { Blockquote, type BlockquoteProps };

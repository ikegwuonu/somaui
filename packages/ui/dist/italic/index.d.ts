import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type ItalicProps = {
    className?: string;
} & React.HTMLAttributes<any>;
declare function Italic({ children, className, ...props }: React.PropsWithChildren<ItalicProps>): react_jsx_runtime.JSX.Element;
declare namespace Italic {
    var displayName: string;
}

export { Italic, type ItalicProps };

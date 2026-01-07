import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type BoldProps = {
    className?: string;
} & React.HTMLAttributes<any>;
declare function Bold({ children, className, ...props }: React.PropsWithChildren<BoldProps>): react_jsx_runtime.JSX.Element;
declare namespace Bold {
    var displayName: string;
}

export { Bold, type BoldProps };

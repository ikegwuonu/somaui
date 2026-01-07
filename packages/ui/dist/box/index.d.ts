import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ElementType } from 'react';

type BoxProps<T extends ElementType = "div"> = {
    as?: T;
    ref?: React.Ref<any>;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "ref" | "className"> & {
    className?: string;
};
declare function Box<T extends ElementType = "div">({ as, ref, children, className, ...rest }: BoxProps<T>): react_jsx_runtime.JSX.Element;

export { Box, type BoxProps };

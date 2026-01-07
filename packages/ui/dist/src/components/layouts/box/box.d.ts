import React, { type ElementType } from "react";
export type BoxProps<T extends ElementType = "div"> = {
    as?: T;
    ref?: React.Ref<any>;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, "as" | "ref" | "className"> & {
    className?: string;
};
export declare function Box<T extends ElementType = "div">({ as, ref, children, className, ...rest }: BoxProps<T>): import("react/jsx-runtime").JSX.Element;

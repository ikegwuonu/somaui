import React, { type ElementType } from 'react';
import { type VariantProps } from 'tailwind-variants';
declare const flex: import("tailwind-variants").TVReturnType<{
    direction: {
        row: string;
        col: string;
        'row-reverse': string;
        'col-reverse': string;
    };
    justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
    };
    align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
}, undefined, "flex w-full", {
    direction: {
        row: string;
        col: string;
        'row-reverse': string;
        'col-reverse': string;
    };
    justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
    };
    align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    direction: {
        row: string;
        col: string;
        'row-reverse': string;
        'col-reverse': string;
    };
    justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
    };
    align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
}, undefined, "flex w-full", unknown, unknown, undefined>>;
export type FlexProps<T extends ElementType = 'div'> = VariantProps<typeof flex> & {
    as?: T;
    ref?: React.Ref<any>;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, 'as' | 'ref' | 'className'> & {
    className?: string;
};
export declare function Flex<T extends ElementType = 'div'>({ as, ref, children, direction, justify, align, gap, className, ...rest }: FlexProps<T>): import("react/jsx-runtime").JSX.Element;
export {};

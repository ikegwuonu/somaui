import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React, { ElementType } from 'react';

declare const flex: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
type FlexProps<T extends ElementType = 'div'> = VariantProps<typeof flex> & {
    as?: T;
    ref?: React.Ref<any>;
    children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, 'as' | 'ref' | 'className'> & {
    className?: string;
};
declare function Flex<T extends ElementType = 'div'>({ as, ref, children, direction, justify, align, gap, className, ...rest }: FlexProps<T>): react_jsx_runtime.JSX.Element;

export { Flex, type FlexProps };

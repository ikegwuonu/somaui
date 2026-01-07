import * as react_jsx_runtime from 'react/jsx-runtime';
import { ComponentPropsWithRef } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

declare const table: tailwind_variants.TVReturnType<{
    variant: {
        modern: string;
        minimal: string;
        elegant: string;
        retro: string;
        classic: string;
    };
}, undefined, "min-w-full border-collapse", {
    variant: {
        modern: string;
        minimal: string;
        elegant: string;
        retro: string;
        classic: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        modern: string;
        minimal: string;
        elegant: string;
        retro: string;
        classic: string;
    };
}, undefined, "min-w-full border-collapse", unknown, unknown, undefined>>;

type TableVariantProps = VariantProps<typeof table>["variant"];
interface TableProps extends ComponentPropsWithRef<"table"> {
    variant?: TableVariantProps;
}
declare function TableRoot({ className, variant, ref, ...props }: TableProps): react_jsx_runtime.JSX.Element;
declare function TableHeader({ className, ref, ...props }: ComponentPropsWithRef<"thead">): react_jsx_runtime.JSX.Element;
declare function TableBody({ className, ref, ...props }: ComponentPropsWithRef<"tbody">): react_jsx_runtime.JSX.Element;
declare function TableFooter({ className, ref, ...props }: ComponentPropsWithRef<"tfoot">): react_jsx_runtime.JSX.Element;
declare function TableRow({ className, ref, ...props }: ComponentPropsWithRef<"tr">): react_jsx_runtime.JSX.Element;
declare function TableHead({ className, ref, ...props }: ComponentPropsWithRef<"th">): react_jsx_runtime.JSX.Element;
declare function TableCell({ className, ref, ...props }: ComponentPropsWithRef<"td">): react_jsx_runtime.JSX.Element;
declare const Table: typeof TableRoot & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Head: typeof TableHead;
    Cell: typeof TableCell;
};

export { Table, type TableProps, type TableVariantProps };

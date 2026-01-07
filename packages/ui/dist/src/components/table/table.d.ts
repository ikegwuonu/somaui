import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { table } from "@/lib/table-style";
export type TableVariantProps = VariantProps<typeof table>["variant"];
export interface TableProps extends ComponentPropsWithRef<"table"> {
    variant?: TableVariantProps;
}
declare function TableRoot({ className, variant, ref, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
declare function TableHeader({ className, ref, ...props }: ComponentPropsWithRef<"thead">): import("react/jsx-runtime").JSX.Element;
declare function TableBody({ className, ref, ...props }: ComponentPropsWithRef<"tbody">): import("react/jsx-runtime").JSX.Element;
declare function TableFooter({ className, ref, ...props }: ComponentPropsWithRef<"tfoot">): import("react/jsx-runtime").JSX.Element;
declare function TableRow({ className, ref, ...props }: ComponentPropsWithRef<"tr">): import("react/jsx-runtime").JSX.Element;
declare function TableHead({ className, ref, ...props }: ComponentPropsWithRef<"th">): import("react/jsx-runtime").JSX.Element;
declare function TableCell({ className, ref, ...props }: ComponentPropsWithRef<"td">): import("react/jsx-runtime").JSX.Element;
export declare const Table: typeof TableRoot & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Head: typeof TableHead;
    Cell: typeof TableCell;
};
export {};

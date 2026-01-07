import type { ReactNode, Dispatch, SetStateAction } from "react";
import { type VariantProps } from "tailwind-variants";
declare const popover: import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "z-[9999] min-w-max bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border-[length:var(--border-width)] border-border rounded-[var(--border-radius)] shadow-[0px_8px_24px_rgba(149,157,165,0.2)]", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "z-[9999] min-w-max bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border-[length:var(--border-width)] border-border rounded-[var(--border-radius)] shadow-[0px_8px_24px_rgba(149,157,165,0.2)]", unknown, unknown, undefined>>;
type PopoverVariant = VariantProps<typeof popover>;
export type Size = PopoverVariant["size"];
type PopoverContentProps = {
    children: ReactNode | (({ open, setOpen, }: {
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
    }) => ReactNode);
    className?: string;
};
export declare function PopoverContent({ children, className }: PopoverContentProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace PopoverContent {
    var displayName: string;
}
export {};

import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import { type VariantProps } from "tailwind-variants";
declare const advancedCheckbox: import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    alignment: {
        left: string;
        center: string;
    };
}, undefined, "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed peer-disabled:text-muted-foreground rounded-[var(--border-radius)]", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    alignment: {
        left: string;
        center: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    alignment: {
        left: string;
        center: string;
    };
}, undefined, "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed peer-disabled:text-muted-foreground rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
type AdvancedCheckboxVariant = VariantProps<typeof advancedCheckbox>;
export interface AdvancedCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    children: ReactNode;
    size?: AdvancedCheckboxVariant["size"];
    alignment?: AdvancedCheckboxVariant["alignment"];
    inputClassName?: string;
    contentClassName?: string;
    className?: string;
    ref?: Ref<HTMLInputElement>;
}
export declare function AdvancedCheckbox({ size, alignment, children, inputClassName, contentClassName, className, ref, ...props }: AdvancedCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};

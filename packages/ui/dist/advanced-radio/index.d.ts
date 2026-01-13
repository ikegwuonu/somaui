import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { InputHTMLAttributes, ReactNode, Ref } from 'react';

declare const advancedRadio: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    alignment: {
        left: string;
        center: string;
    };
}, undefined, "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:text-muted-foreground peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed rounded-[var(--border-radius)]", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    alignment: {
        left: string;
        center: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    alignment: {
        left: string;
        center: string;
    };
}, undefined, "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:text-muted-foreground peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
type AdvancedRadioVariant = VariantProps<typeof advancedRadio>;
interface AdvancedRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    children: ReactNode;
    size?: AdvancedRadioVariant["size"];
    alignment?: AdvancedRadioVariant["alignment"];
    inputClassName?: string;
    contentClassName?: string;
    className?: string;
    ref?: Ref<HTMLInputElement>;
}
/**
 * A basic widget for getting the user input of radio with advanced design.
 * Here is the API documentation of the AdvancedRadio component.
 * And the rest of the props of AdvancedRadio are the same as the original html input field.
 * You can use props like `value`, `name`, `disabled` etc.
 */
declare function AdvancedRadio({ size, alignment, children, inputClassName, contentClassName, className, ref, ...props }: AdvancedRadioProps): react_jsx_runtime.JSX.Element;

export { AdvancedRadio, type AdvancedRadioProps };

import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

declare const avatar: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    clickable: {
        true: string;
    };
}, undefined, "inline-flex items-center justify-center flex-shrink-0 rounded-full", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    clickable: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    clickable: {
        true: string;
    };
}, undefined, "inline-flex items-center justify-center flex-shrink-0 rounded-full", unknown, unknown, undefined>>;
type AvatarVariant = VariantProps<typeof avatar>;
type AvatarProps = {
    src?: string;
    name: string;
    initials?: string;
    size?: AvatarVariant["size"];
    customSize?: string | number;
    color?: AvatarVariant["color"];
    onClick?: () => void;
    className?: string;
};
declare function Avatar({ src, name, size, initials, customSize, color, onClick, className, }: AvatarProps): react_jsx_runtime.JSX.Element;
declare namespace Avatar {
    var displayName: string;
}

export { Avatar, type AvatarProps };

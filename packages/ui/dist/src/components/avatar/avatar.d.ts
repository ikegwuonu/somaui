import { type VariantProps } from "tailwind-variants";
declare const avatar: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export type AvatarProps = {
    src?: string;
    name: string;
    initials?: string;
    size?: AvatarVariant["size"];
    customSize?: string | number;
    color?: AvatarVariant["color"];
    onClick?: () => void;
    className?: string;
};
export declare function Avatar({ src, name, size, initials, customSize, color, onClick, className, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Avatar {
    var displayName: string;
}
export {};

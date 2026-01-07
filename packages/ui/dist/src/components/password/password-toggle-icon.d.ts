declare const passwordToggleIconClasses: {
    size: {
        sm: string;
        md: string;
        DEFAULT: string;
        lg: string;
        xl: string;
    };
};
interface PasswordToggleIconProps {
    isVisible?: boolean;
    iconSize?: keyof typeof passwordToggleIconClasses.size;
}
export declare function PasswordToggleIcon({ iconSize, isVisible, }: PasswordToggleIconProps): import("react/jsx-runtime").JSX.Element;
export {};

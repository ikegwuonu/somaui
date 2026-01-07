declare const classes: {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
};
export type IconProps = {
    size: keyof typeof classes.size;
    color: 'danger' | 'info' | 'success' | 'warning';
};
export declare function AlertIcon({ size, color }: IconProps): import("react/jsx-runtime").JSX.Element;
export {};

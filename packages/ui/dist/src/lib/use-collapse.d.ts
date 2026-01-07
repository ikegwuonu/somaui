export declare function useCollapse(duration?: number, defaultOpen?: boolean): {
    open: boolean;
    targetEl: import("react").RefObject<any>;
    openTargetEl: boolean;
    slideUp: (target: any) => void;
    slideDown: (target: any) => void;
    toggle: () => void;
};

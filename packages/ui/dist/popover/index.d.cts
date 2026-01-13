import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactElement, ReactNode, Dispatch, SetStateAction } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { Placement } from '@floating-ui/react';

declare function PopoverTrigger({ children, }: {
    children: ReactElement;
}): react_jsx_runtime.JSX.Element;

declare const popover: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "z-[9999] min-w-max bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border-[length:var(--border-width)] border-border rounded-[var(--border-radius)] shadow-[0px_8px_24px_rgba(149,157,165,0.2)]", unknown, unknown, undefined>>;
type PopoverVariant = VariantProps<typeof popover>;
type Size = PopoverVariant["size"];
type PopoverContentProps = {
    children: ReactNode | (({ open, setOpen, }: {
        open: boolean;
        setOpen: Dispatch<SetStateAction<boolean>>;
    }) => ReactNode);
    className?: string;
};
declare function PopoverContent({ children, className }: PopoverContentProps): react_jsx_runtime.JSX.Element | null;
declare namespace PopoverContent {
    var displayName: string;
}

declare const tooltipAnimation: {
    readonly fadeIn: {
        readonly initial: {
            readonly opacity: 0;
        };
        readonly close: {
            readonly opacity: 0;
        };
    };
    readonly zoomIn: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "scale(0.96)";
        };
        readonly close: {
            readonly opacity: 0;
            readonly transform: "scale(0.96)";
        };
    };
    readonly slideIn: {
        readonly initial: {
            readonly opacity: 0;
            readonly transform: "translateY(4px)";
        };
        readonly close: {
            readonly opacity: 0;
            readonly transform: "translateY(4px)";
        };
    };
};
type CommonTypes = {
    showArrow?: boolean;
    enableOverlay?: boolean;
    size?: Size;
    arrowClassName?: string;
    overlayClassName?: string;
};
type PopoverProviderProps = {
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    placement?: Placement;
    animation?: keyof typeof tooltipAnimation;
    gap?: number;
} & CommonTypes;

type PopoverProps = PopoverProviderProps & {
    children: ReactNode;
};
declare function Popover({ isOpen, setIsOpen, gap, animation, placement, enableOverlay, showArrow, size, arrowClassName, overlayClassName, children, }: PopoverProps): react_jsx_runtime.JSX.Element;
declare namespace Popover {
    var Trigger: typeof PopoverTrigger;
    var Content: typeof PopoverContent;
    var displayName: string;
}

export { Popover, type PopoverProps };

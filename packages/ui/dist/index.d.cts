export { cn } from './lib/cn.cjs';
export { useCollapse } from './lib/use-collapse.cjs';
export { FieldClearButton, FieldClearButtonProps } from './components/field-clear-button.cjs';
export { FieldErrorText } from './components/field-error-text.cjs';
export { FieldHelperText, FieldHelperTextProps } from './components/field-helper-text.cjs';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React__default, { InputHTMLAttributes, ReactNode, Ref, MouseEvent, ElementType, HTMLAttributes, Dispatch, SetStateAction, ButtonHTMLAttributes, ReactElement, ComponentPropsWithRef } from 'react';
import { MenuItemsProps, MenuButtonProps, Menu, TabListProps as TabListProps$1, TabProps as TabProps$1, TabPanelsProps as TabPanelsProps$1, TabPanelProps as TabPanelProps$1, TabGroupProps, Listbox } from '@headlessui/react';
import { Placement } from '@floating-ui/react';

declare const actionIcon: tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type ActionIconProps = Omit<VariantProps<typeof actionIcon>, "disabled" | "isLoading"> & Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & React__default.HTMLAttributes<HTMLSpanElement> & {
    as?: "button" | "span";
    type?: "button" | "submit" | "reset";
    children: React__default.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ref?: React__default.Ref<HTMLButtonElement>;
};
declare function ActionIcon({ as, type, children, className, isLoading, variant, size, disabled, ref, ...actionIconProps }: ActionIconProps): react_jsx_runtime.JSX.Element;

declare const advancedCheckbox: tailwind_variants.TVReturnType<{
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
}, undefined, "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed peer-disabled:text-muted-foreground rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
type AdvancedCheckboxVariant = VariantProps<typeof advancedCheckbox>;
interface AdvancedCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    children: ReactNode;
    size?: AdvancedCheckboxVariant["size"];
    alignment?: AdvancedCheckboxVariant["alignment"];
    inputClassName?: string;
    contentClassName?: string;
    className?: string;
    ref?: Ref<HTMLInputElement>;
}
declare function AdvancedCheckbox({ size, alignment, children, inputClassName, contentClassName, className, ref, ...props }: AdvancedCheckboxProps): react_jsx_runtime.JSX.Element;

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

declare const alert: tailwind_variants.TVReturnType<{
    color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
    };
    size: {
        sm: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        md: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        lg: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
    };
    closable: {
        true: {};
    };
}, {
    root: string;
    bar: string;
    iconWrapper: string;
    content: string;
    closeWrapper: string;
}, undefined, {
    color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
    };
    size: {
        sm: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        md: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        lg: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
    };
    closable: {
        true: {};
    };
}, {
    root: string;
    bar: string;
    iconWrapper: string;
    content: string;
    closeWrapper: string;
}, tailwind_variants.TVReturnType<{
    color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
    };
    size: {
        sm: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        md: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
        lg: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
        };
    };
    closable: {
        true: {};
    };
}, {
    root: string;
    bar: string;
    iconWrapper: string;
    content: string;
    closeWrapper: string;
}, undefined, unknown, unknown, undefined>>;
type AlertProps = {
    size?: VariantProps<typeof alert>["size"];
    color: "danger" | "info" | "success" | "warning";
    children: ReactNode;
    closable?: boolean;
    onClose?: (event: MouseEvent) => void;
    icon?: ReactNode;
    closeIcon?: ReactNode;
    className?: string;
    barClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
};
declare function Alert({ size, color, children, closable, onClose, icon, closeIcon, className, barClassName, iconContainerClassName, iconClassName, }: AlertProps): react_jsx_runtime.JSX.Element;
declare namespace Alert {
    var displayName: string;
}

declare const announcement: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    bgColor: {
        background: string;
        muted: string;
    };
}, undefined, "flex items-center w-fit rounded-full", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    bgColor: {
        background: string;
        muted: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    bgColor: {
        background: string;
        muted: string;
    };
}, undefined, "flex items-center w-fit rounded-full", unknown, unknown, undefined>>;
declare const announcementHighlight: tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-announcement-highlighted-text ms-2.5 font-medium", {
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-announcement-highlighted-text ms-2.5 font-medium", unknown, unknown, undefined>>;
type AnnouncementVariant = VariantProps<typeof announcement>;
type HighlightedTextVariant = VariantProps<typeof announcementHighlight>;
interface AnnouncementProps {
    size?: AnnouncementVariant["size"];
    color?: HighlightedTextVariant["color"];
    bgColor?: AnnouncementVariant["bgColor"];
    badgeText?: string;
    highlightedText?: string;
    className?: string;
    startIcon?: React__default.ReactNode;
    endIcon?: React__default.ReactNode;
    badgeClassName?: string;
    highlightedTextClassName?: string;
}
declare const Announcement: {
    ({ size, color, bgColor, badgeText, highlightedText, children, startIcon, endIcon, className, badgeClassName, highlightedTextClassName, }: React__default.PropsWithChildren<AnnouncementProps>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

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

declare const badge: tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        flat: string;
        outline: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    renderAsDot: {
        true: string;
    };
    enableOutlineRing: {
        true: string;
    };
}, undefined, "inline-flex items-center justify-center font-semibold leading-none rounded-full border-[length:var(--border-width)]", {
    variant: {
        solid: string;
        flat: string;
        outline: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    renderAsDot: {
        true: string;
    };
    enableOutlineRing: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        flat: string;
        outline: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    renderAsDot: {
        true: string;
    };
    enableOutlineRing: {
        true: string;
    };
}, undefined, "inline-flex items-center justify-center font-semibold leading-none rounded-full border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type BadgeProps = Omit<VariantProps<typeof badge>, 'renderAsDot' | 'enableOutlineRing'> & React__default.HTMLAttributes<HTMLSpanElement> & {
    renderAsDot?: boolean;
    enableOutlineRing?: boolean;
};
declare function Badge({ renderAsDot, size, color, variant, enableOutlineRing, children, className, ...props }: React__default.PropsWithChildren<BadgeProps>): react_jsx_runtime.JSX.Element;

declare const button: tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", {
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
type ButtonProps<T extends ElementType = "button"> = VariantProps<typeof button> & {
    as?: T;
    isLoading?: boolean;
    loader?: React__default.ReactNode;
    children?: React__default.ReactNode;
} & Omit<React__default.ComponentPropsWithRef<T>, "as" | "className" | "ref"> & {
    className?: string;
};
declare const Button: React__default.ForwardRefExoticComponent<VariantProps<tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", {
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    isLoading: {
        true: string;
    };
}, undefined, "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]", unknown, unknown, undefined>>> & {
    as?: "button" | undefined;
    isLoading?: boolean;
    loader?: React__default.ReactNode;
    children?: React__default.ReactNode;
} & Omit<React__default.DetailedHTMLProps<React__default.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "className" | "as" | "ref"> & {
    className?: string;
} & React__default.RefAttributes<HTMLButtonElement>>;

declare const labelStyles: {
    readonly weight: {
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
    readonly size: {
        readonly sm: "text-xs mb-1";
        readonly md: "text-sm mb-1.5";
        readonly lg: "text-sm mb-1.5";
    };
};

declare const checkbox: tailwind_variants.TVReturnType<{
    variant: {
        outline: string;
        flat: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "peer outline-none focus:outline-none checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
    variant: {
        outline: string;
        flat: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        outline: string;
        flat: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "peer outline-none focus:outline-none checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type CheckboxVariant = VariantProps<typeof checkbox>;
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: CheckboxVariant["variant"];
    size?: CheckboxVariant["size"];
    labelWeight?: keyof typeof labelStyles.weight;
    labelPlacement?: "left" | "right";
    disabled?: boolean;
    label?: ReactNode;
    error?: string;
    helperText?: ReactNode;
    iconClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    className?: string;
    indeterminate?: boolean;
    ref?: Ref<HTMLInputElement>;
}
declare function Checkbox({ variant, size, labelPlacement, labelWeight, label, disabled, error, helperText, iconClassName, labelClassName, inputClassName, errorClassName, helperClassName, indeterminate, className, ref, value, checked, onChange, ...checkboxProps }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
    values: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    children: ReactNode;
}
declare function CheckboxGroup({ values, setValues, children, ...props }: CheckboxGroupProps): react_jsx_runtime.JSX.Element;

interface CollapseHeader {
    open?: boolean;
    toggle: () => void;
}
interface CollapseProps {
    as?: "div" | "ul";
    header: ({ open, toggle }: CollapseHeader) => ReactNode;
    duration?: number;
    defaultOpen?: boolean;
    panelClassName?: string;
    className?: string;
    children?: ReactNode;
}
declare function Collapse({ as, header, duration, defaultOpen, panelClassName, className, children, }: CollapseProps): react_jsx_runtime.JSX.Element;
declare namespace Collapse {
    var displayName: string;
}

declare const drawer: tailwind_variants.TVReturnType<{
    placement: {
        top: {
            panel: string;
            resizer: string;
        };
        right: {
            panel: string;
            resizer: string;
        };
        bottom: {
            panel: string;
            resizer: string;
        };
        left: {
            panel: string;
            resizer: string;
        };
    };
    size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
    };
}, {
    root: string;
    overlay: string;
    panel: string;
    resizer: string;
}, undefined, {
    placement: {
        top: {
            panel: string;
            resizer: string;
        };
        right: {
            panel: string;
            resizer: string;
        };
        bottom: {
            panel: string;
            resizer: string;
        };
        left: {
            panel: string;
            resizer: string;
        };
    };
    size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
    };
}, {
    root: string;
    overlay: string;
    panel: string;
    resizer: string;
}, tailwind_variants.TVReturnType<{
    placement: {
        top: {
            panel: string;
            resizer: string;
        };
        right: {
            panel: string;
            resizer: string;
        };
        bottom: {
            panel: string;
            resizer: string;
        };
        left: {
            panel: string;
            resizer: string;
        };
    };
    size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
    };
}, {
    root: string;
    overlay: string;
    panel: string;
    resizer: string;
}, undefined, unknown, unknown, undefined>>;
type DrawerVariant = VariantProps<typeof drawer>;
type DrawerSize = DrawerVariant["size"];
type DrawerProps = {
    isOpen: boolean;
    onClose(): void;
    placement?: DrawerVariant["placement"];
    size?: DrawerSize;
    customSize?: number;
    enableResizer?: boolean;
    overlayClassName?: string;
    containerClassName?: string;
    resizerClassName?: string;
    className?: string;
    children?: ReactNode;
};
declare function Drawer({ isOpen, onClose, size, placement, customSize, enableResizer, overlayClassName, containerClassName, resizerClassName, className, children, }: DrawerProps): react_jsx_runtime.JSX.Element;
declare namespace Drawer {
    var displayName: string;
}

type DropdownItemProps = {
    as?: "button" | "li";
    className?: string;
    disabledClassName?: string;
    activeClassName?: string;
    disabled?: boolean;
    ref?: Ref<any>;
} & ButtonHTMLAttributes<HTMLButtonElement> & HTMLAttributes<HTMLLIElement>;
declare function DropdownItem({ as, className, children, disabled, activeClassName, disabledClassName, ref, ...props }: DropdownItemProps): react_jsx_runtime.JSX.Element;

type DropdownMenuProps = {
    className?: string;
    anchorWidth?: boolean;
    children?: ReactNode;
} & MenuItemsProps;
declare function DropdownMenu({ className, children, anchorWidth, ...props }: DropdownMenuProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownMenu {
    var displayName: string;
}

type DropdownTriggerProps = MenuButtonProps;
declare function DropdownTrigger({ as, className, children, ...props }: DropdownTriggerProps): react_jsx_runtime.JSX.Element;

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;

type Align$1 = 'start' | 'end';
type Side$1 = 'top' | 'right' | 'bottom' | 'left';
type TheirPlacementType$1 = `${Side$1}` | `${Side$1}-${Align$1}`;

type DropdownProps = ExtractProps<typeof Menu> & {
    gap?: number;
    modal?: boolean;
    inPortal?: boolean;
    placement?: TheirPlacementType$1;
    children: ReactNode;
    className?: string;
};
declare function Dropdown({ inPortal, modal, placement, gap, children, className, }: DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace Dropdown {
    var Trigger: typeof DropdownTrigger;
    var Menu: typeof DropdownMenu;
    var Item: typeof DropdownItem;
    var displayName: string;
}

declare const empty: tailwind_variants.TVReturnType<{
    alignment: {
        start: string;
        center: string;
        end: string;
    };
}, undefined, "flex flex-col", {
    alignment: {
        start: string;
        center: string;
        end: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    alignment: {
        start: string;
        center: string;
        end: string;
    };
}, undefined, "flex flex-col", unknown, unknown, undefined>>;
type EmptyTextTagProps = "h2" | "h3" | "h4" | "h5" | "h6" | "p";
type EmptyVariant = VariantProps<typeof empty>;
interface EmptyProps {
    image?: React__default.ReactNode;
    imageClassName?: string;
    defaultImageClassName?: string;
    text?: string;
    textAs?: EmptyTextTagProps;
    textClassName?: string;
    alignment?: EmptyVariant["alignment"];
    className?: string;
}
declare function Empty({ image, className, text, textAs, imageClassName, textClassName, alignment, defaultImageClassName, children, }: React__default.PropsWithChildren<EmptyProps>): react_jsx_runtime.JSX.Element;
declare namespace Empty {
    var displayName: string;
}

interface EmptySVGIconProps {
    className?: string;
}
declare function EmptyBoxIcon({ className }: EmptySVGIconProps): react_jsx_runtime.JSX.Element;
declare function EmptyProductBoxIcon({ className, }: EmptySVGIconProps): react_jsx_runtime.JSX.Element;
declare function SearchNotFoundIcon({ className, }: EmptySVGIconProps): react_jsx_runtime.JSX.Element;

declare const fileInput: tailwind_variants.TVReturnType<{
    variant: {
        outline: {
            container: string;
        };
        text: {
            container: string;
        };
    };
    size: {
        sm: {
            container: string;
            button: string;
        };
        md: {
            container: string;
            button: string;
        };
        lg: {
            container: string;
            button: string;
        };
    };
    disabled: {
        true: {
            container: string;
            input: string;
            button: string;
        };
    };
    error: {
        true: {
            container: string;
        };
    };
    clearable: {
        true: {
            input: string;
        };
    };
}, {
    container: string;
    input: string;
    button: string;
}, undefined, {
    variant: {
        outline: {
            container: string;
        };
        text: {
            container: string;
        };
    };
    size: {
        sm: {
            container: string;
            button: string;
        };
        md: {
            container: string;
            button: string;
        };
        lg: {
            container: string;
            button: string;
        };
    };
    disabled: {
        true: {
            container: string;
            input: string;
            button: string;
        };
    };
    error: {
        true: {
            container: string;
        };
    };
    clearable: {
        true: {
            input: string;
        };
    };
}, {
    container: string;
    input: string;
    button: string;
}, tailwind_variants.TVReturnType<{
    variant: {
        outline: {
            container: string;
        };
        text: {
            container: string;
        };
    };
    size: {
        sm: {
            container: string;
            button: string;
        };
        md: {
            container: string;
            button: string;
        };
        lg: {
            container: string;
            button: string;
        };
    };
    disabled: {
        true: {
            container: string;
            input: string;
            button: string;
        };
    };
    error: {
        true: {
            container: string;
        };
    };
    clearable: {
        true: {
            input: string;
        };
    };
}, {
    container: string;
    input: string;
    button: string;
}, undefined, unknown, unknown, undefined>>;
interface FileInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    variant?: VariantProps<typeof fileInput>["variant"];
    size?: VariantProps<typeof fileInput>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React__default.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React__default.MouseEvent) => void;
    helperText?: React__default.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    ref?: React__default.Ref<HTMLInputElement>;
}
declare function FileInput({ className, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, ref, ...inputProps }: FileInputProps): react_jsx_runtime.JSX.Element;

declare const uploadZone: tailwind_variants.TVReturnType<{
    variant: {
        outline: {
            uploadZoneArea: string;
        };
        flat: {
            uploadZoneArea: string;
        };
    };
    size: {
        sm: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        md: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        lg: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
    };
    isDragging: {
        true: {
            uploadZoneArea: string;
        };
    };
    disabled: {
        true: {
            uploadZoneArea: string;
            input: string;
        };
    };
    error: {
        true: {
            uploadZoneArea: string;
        };
    };
}, {
    root: string;
    uploadZoneArea: string;
    input: string;
    content: string;
    icon: string;
    text: string;
    previewContainer: string;
    previewGrid: string;
    previewItem: string;
    previewImage: string;
    previewRemoveButton: string;
}, undefined, {
    variant: {
        outline: {
            uploadZoneArea: string;
        };
        flat: {
            uploadZoneArea: string;
        };
    };
    size: {
        sm: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        md: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        lg: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
    };
    isDragging: {
        true: {
            uploadZoneArea: string;
        };
    };
    disabled: {
        true: {
            uploadZoneArea: string;
            input: string;
        };
    };
    error: {
        true: {
            uploadZoneArea: string;
        };
    };
}, {
    root: string;
    uploadZoneArea: string;
    input: string;
    content: string;
    icon: string;
    text: string;
    previewContainer: string;
    previewGrid: string;
    previewItem: string;
    previewImage: string;
    previewRemoveButton: string;
}, tailwind_variants.TVReturnType<{
    variant: {
        outline: {
            uploadZoneArea: string;
        };
        flat: {
            uploadZoneArea: string;
        };
    };
    size: {
        sm: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        md: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
        lg: {
            uploadZoneArea: string;
            text: string;
            icon: string;
        };
    };
    isDragging: {
        true: {
            uploadZoneArea: string;
        };
    };
    disabled: {
        true: {
            uploadZoneArea: string;
            input: string;
        };
    };
    error: {
        true: {
            uploadZoneArea: string;
        };
    };
}, {
    root: string;
    uploadZoneArea: string;
    input: string;
    content: string;
    icon: string;
    text: string;
    previewContainer: string;
    previewGrid: string;
    previewItem: string;
    previewImage: string;
    previewRemoveButton: string;
}, undefined, unknown, unknown, undefined>>;
interface UploadZoneProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange" | "value" | "placeholder" | "onDrop"> {
    variant?: VariantProps<typeof uploadZone>["variant"];
    size?: VariantProps<typeof uploadZone>["size"];
    disabled?: boolean;
    label?: React__default.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    helperText?: React__default.ReactNode;
    error?: string;
    labelClassName?: string;
    uploadZoneClassName?: string;
    contentClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    previewClassName?: string;
    className?: string;
    multiple?: boolean;
    accept?: string;
    placeholder?: React__default.ReactNode;
    icon?: React__default.ReactNode;
    value?: FileList | File[] | null;
    onChange?: (files: FileList | null) => void;
    onDrop?: (files: FileList) => void;
    ref?: React__default.Ref<HTMLInputElement>;
    name?: string;
}
declare function UploadZone({ className, variant, size, disabled, label, labelWeight, error, helperText, labelClassName, uploadZoneClassName, contentClassName, helperClassName, errorClassName, previewClassName, multiple, accept, placeholder, icon, value, onChange, onDrop, name, ref, ...inputProps }: UploadZoneProps): react_jsx_runtime.JSX.Element;

declare const inputContainer$1: tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]", {
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
interface InputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix" | "suffix"> {
    type?: "text" | "email" | "number" | "tel" | "search" | "url" | "time" | "date" | "week" | "month" | "datetime-local";
    variant?: VariantProps<typeof inputContainer$1>["variant"];
    size?: VariantProps<typeof inputContainer$1>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React__default.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React__default.MouseEvent) => void;
    prefix?: React__default.ReactNode;
    suffix?: React__default.ReactNode;
    helperText?: React__default.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    prefixClassName?: string;
    suffixClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    ref?: React__default.Ref<HTMLInputElement>;
}
declare function Input({ className, type, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, prefix, suffix, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, prefixClassName, suffixClassName, ref, ...inputProps }: InputProps): react_jsx_runtime.JSX.Element;

declare function BarsSpinner({ fill, ...props }: React__default.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace BarsSpinner {
    var displayName: string;
}

declare function PulseLoader({ fill, ...props }: React__default.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace PulseLoader {
    var displayName: string;
}

declare function Spinner({ ...props }: React__default.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace Spinner {
    var displayName: string;
}

declare function ThreeDotScale({ fill, ...props }: React__default.SVGProps<SVGSVGElement>): react_jsx_runtime.JSX.Element;
declare namespace ThreeDotScale {
    var displayName: string;
}

declare const loader: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-loader h-auto", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-loader h-auto", unknown, unknown, undefined>>;
declare const Components: {
    bars: typeof BarsSpinner;
    pulse: typeof PulseLoader;
    spinner: typeof Spinner;
    threeDot: typeof ThreeDotScale;
};
type LoaderVariant = VariantProps<typeof loader>;
interface LoaderTypes extends React__default.SVGProps<SVGSVGElement> {
    size?: LoaderVariant["size"];
    variant?: keyof typeof Components;
    color?: LoaderVariant["color"];
    className?: string;
}
declare function Loader({ size, color, variant, className, ...props }: LoaderTypes): react_jsx_runtime.JSX.Element;
declare namespace Loader {
    var displayName: string;
}

declare const modal: tailwind_variants.TVReturnType<{
    size: {
        sm: {
            panel: string;
        };
        md: {
            panel: string;
        };
        lg: {
            panel: string;
        };
        full: {
            panel: string;
        };
    };
}, {
    root: string;
    area: string;
    overlay: string;
    panel: string;
}, undefined, {
    size: {
        sm: {
            panel: string;
        };
        md: {
            panel: string;
        };
        lg: {
            panel: string;
        };
        full: {
            panel: string;
        };
    };
}, {
    root: string;
    area: string;
    overlay: string;
    panel: string;
}, tailwind_variants.TVReturnType<{
    size: {
        sm: {
            panel: string;
        };
        md: {
            panel: string;
        };
        lg: {
            panel: string;
        };
        full: {
            panel: string;
        };
    };
}, {
    root: string;
    area: string;
    overlay: string;
    panel: string;
}, undefined, unknown, unknown, undefined>>;
type ModalVariant = VariantProps<typeof modal>;
type ModalSize = ModalVariant["size"];
type ModalProps = {
    isOpen: boolean;
    onClose(): void;
    size?: ModalSize;
    noGutter?: boolean;
    customSize?: number;
    overlayClassName?: string;
    containerClassName?: string;
    className?: string;
    children?: ReactNode;
};
declare function Modal({ isOpen, onClose, children, noGutter, className, size, customSize, overlayClassName, containerClassName, }: ModalProps): react_jsx_runtime.JSX.Element;
declare namespace Modal {
    var displayName: string;
}

declare const inputContainer: tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]", {
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
interface PasswordProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "prefix"> {
    variant?: VariantProps<typeof inputContainer>["variant"];
    size?: VariantProps<typeof inputContainer>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React__default.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React__default.MouseEvent) => void;
    prefix?: React__default.ReactNode;
    visibilityToggleIcon?(visible: boolean): React__default.ReactNode;
    helperText?: React__default.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    prefixClassName?: string;
    isPasswordVisible?: boolean;
    visibilityToggleIconClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    hideVisibilityToggleIcon?: boolean;
    ref?: React__default.Ref<HTMLInputElement>;
}
declare function Password({ className, variant, size, disabled, placeholder, label, labelWeight, error, clearable, onClear, prefix, readOnly, helperText, labelClassName, inputClassName, errorClassName, helperClassName, prefixClassName, isPasswordVisible, visibilityToggleIcon, hideVisibilityToggleIcon, visibilityToggleIconClassName, ref, ...inputProps }: PasswordProps): react_jsx_runtime.JSX.Element;

declare const pinCode: tailwind_variants.TVReturnType<{
    variant: {
        flat: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
    variant: {
        flat: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        flat: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
}, undefined, "block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type PinCodeVariant = VariantProps<typeof pinCode>;
interface PinCodeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value"> {
    setValue?: Dispatch<SetStateAction<string | number | undefined>>;
    type?: "text" | "number";
    mask?: boolean;
    length?: number;
    center?: boolean;
    placeholder?: string;
    size?: PinCodeVariant["size"];
    variant?: PinCodeVariant["variant"];
    error?: string;
    inputClassName?: string;
    errorClassName?: string;
    label?: string;
}
declare function PinCode({ type, defaultValue, mask, length, setValue, center, size, variant, placeholder, error, className, inputClassName, errorClassName, disabled, onChange, label, ...props }: PinCodeProps): react_jsx_runtime.JSX.Element;
declare namespace PinCode {
    var displayName: string;
}

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

declare const tooltipAnimation$1: {
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
    animation?: keyof typeof tooltipAnimation$1;
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

declare const progressTrack: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "relative w-full bg-muted rounded-full overflow-hidden", {
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
}, undefined, "relative w-full bg-muted rounded-full overflow-hidden", unknown, unknown, undefined>>;
declare const progressBar: tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full", {
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full", unknown, unknown, undefined>>;
type ProgressTrackVariant = VariantProps<typeof progressTrack>;
type ProgressBarVariant = VariantProps<typeof progressBar>;
interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
    value?: number;
    label?: string;
    size?: ProgressTrackVariant["size"];
    color?: ProgressBarVariant["color"];
    labelPosition?: "insideBar" | "inlineLeft" | "inlineRight";
    className?: string;
    trackClassName?: string;
    barClassName?: string;
    labelClassName?: string;
}
declare function Progressbar({ value, label, size, color, labelPosition, className, barClassName, trackClassName, labelClassName, ...props }: ProgressbarProps): react_jsx_runtime.JSX.Element;
declare namespace Progressbar {
    var displayName: string;
}

declare const radialProgress: tailwind_variants.TVReturnType<{
    startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
    };
}, undefined, "transform transition-all duration-200", {
    startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
    };
}, undefined, "transform transition-all duration-200", unknown, unknown, undefined>>;
type RadialProgressVariant = VariantProps<typeof radialProgress>;
type RadialProgressBarProps = {
    value?: number;
    size?: number;
    trackColor?: string;
    progressbarWidth?: number;
    progressColor?: string;
    gradientColor?: string;
    gradientId?: string;
    trackClassName?: string;
    progressBarClassName?: string;
    useParentResponsive?: boolean;
    startAngle?: RadialProgressVariant['startAngle'];
};
declare function RadialProgressBar({ value, size, trackColor, progressColor, gradientColor, gradientId, startAngle, trackClassName, progressbarWidth, useParentResponsive, progressBarClassName, }: RadialProgressBarProps): react_jsx_runtime.JSX.Element;

declare const radio: tailwind_variants.TVReturnType<{
    variant: {
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted focus:ring-border focus:ring-offset-background text-primary dark:text-primary-foreground border-[length:var(--border-width)]", {
    variant: {
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted focus:ring-border focus:ring-offset-background text-primary dark:text-primary-foreground border-[length:var(--border-width)]", unknown, unknown, undefined>>;
type RadioVariant = VariantProps<typeof radio>;
interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: RadioVariant["variant"];
    size?: RadioVariant["size"];
    labelPlacement?: "left" | "right";
    labelWeight?: keyof typeof labelStyles.weight;
    disabled?: boolean;
    label?: ReactNode;
    error?: string;
    helperText?: ReactNode;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    ref?: Ref<HTMLInputElement>;
}
declare function Radio({ variant, size, labelPlacement, labelWeight, label, disabled, error, helperText, className, labelClassName, inputClassName, errorClassName, helperClassName, ref, value, checked, onChange, ...radioProps }: RadioProps): react_jsx_runtime.JSX.Element;

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    children: ReactNode;
}
declare function RadioGroup({ value, setValue, children, ...props }: RadioGroupProps): react_jsx_runtime.JSX.Element;

declare const lineClasses: {
    base: string;
    top: {
        noDot: {
            sm: string;
            md: string;
            lg: string;
        };
        dot: {
            sm: string;
            md: string;
            lg: string;
        };
    };
    titleLine: string;
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
};
declare const circleClasses: {
    base: string;
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    waiting: string;
    variant: {
        solid: {
            base: string;
            color: {
                primary: string;
                secondary: string;
                danger: string;
                info: string;
                success: string;
                warning: string;
            };
        };
        outline: {
            base: string;
            color: {
                primary: string;
                secondary: string;
                danger: string;
                info: string;
                success: string;
                warning: string;
            };
        };
    };
};
interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    index?: number;
    status?: "waiting" | "in-progress" | "completed" | "error";
    size?: keyof typeof circleClasses.size;
    variant?: keyof typeof circleClasses.variant;
    color?: keyof typeof lineClasses.color;
    dot?: boolean;
    className?: string;
    circleClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}
declare function Step({ title, description, icon, index: propsIndex, status: propsStatus, size, variant, color, dot: propsDot, className: propsClassName, circleClassName: propsCircleClassName, contentClassName: propsContentClassName, titleClassName: propsTitleClassName, descriptionClassName: propsDescriptionClassName, }: StepProps): react_jsx_runtime.JSX.Element;
declare namespace Step {
    var displayName: string;
}

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    currentIndex?: number;
    direction?: "horizontal" | "vertical";
    dot?: boolean;
    children: ReactNode;
    dotClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}
declare function Stepper({ currentIndex, children, direction, dot, className, titleClassName, dotClassName, contentClassName, descriptionClassName, }: StepperProps): react_jsx_runtime.JSX.Element;
declare namespace Stepper {
    var Step: typeof Step;
    var displayName: string;
}

declare const switchTV: tailwind_variants.TVReturnType<{
    variant: {
        flat: {
            container: string;
            knob: string;
        };
        outline: {
            container: string;
            knob: string;
        };
    };
    size: {
        sm: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        md: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        lg: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
    };
    labelPlacement: {
        left: {
            label: string;
        };
        right: {
            label: string;
        };
    };
    labelWeight: {
        normal: {
            label: string;
        };
        medium: {
            label: string;
        };
        semibold: {
            label: string;
        };
        bold: {
            label: string;
        };
    };
    disabled: {
        true: {
            container: string;
            knob: string;
            label: string;
        };
    };
}, {
    container: string;
    knob: string;
    input: string;
    icon: string;
    label: string;
}, undefined, {
    variant: {
        flat: {
            container: string;
            knob: string;
        };
        outline: {
            container: string;
            knob: string;
        };
    };
    size: {
        sm: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        md: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        lg: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
    };
    labelPlacement: {
        left: {
            label: string;
        };
        right: {
            label: string;
        };
    };
    labelWeight: {
        normal: {
            label: string;
        };
        medium: {
            label: string;
        };
        semibold: {
            label: string;
        };
        bold: {
            label: string;
        };
    };
    disabled: {
        true: {
            container: string;
            knob: string;
            label: string;
        };
    };
}, {
    container: string;
    knob: string;
    input: string;
    icon: string;
    label: string;
}, tailwind_variants.TVReturnType<{
    variant: {
        flat: {
            container: string;
            knob: string;
        };
        outline: {
            container: string;
            knob: string;
        };
    };
    size: {
        sm: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        md: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
        lg: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
        };
    };
    labelPlacement: {
        left: {
            label: string;
        };
        right: {
            label: string;
        };
    };
    labelWeight: {
        normal: {
            label: string;
        };
        medium: {
            label: string;
        };
        semibold: {
            label: string;
        };
        bold: {
            label: string;
        };
    };
    disabled: {
        true: {
            container: string;
            knob: string;
            label: string;
        };
    };
}, {
    container: string;
    knob: string;
    input: string;
    icon: string;
    label: string;
}, undefined, unknown, unknown, undefined>>;
interface SwitchProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: React__default.ReactNode;
    labelPlacement?: VariantProps<typeof switchTV>["labelPlacement"];
    labelWeight?: VariantProps<typeof switchTV>["labelWeight"];
    size?: VariantProps<typeof switchTV>["size"];
    disabled?: boolean;
    variant?: VariantProps<typeof switchTV>["variant"];
    onIcon?: React__default.ReactNode;
    offIcon?: React__default.ReactNode;
    helperText?: React__default.ReactNode;
    error?: string;
    labelClassName?: string;
    switchClassName?: string;
    switchKnobClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    className?: string;
    ref?: React__default.Ref<HTMLInputElement>;
}
declare function Switch({ label, labelPlacement, labelWeight, size, variant, disabled, onIcon, offIcon, error, helperText, className, labelClassName, switchClassName, switchKnobClassName, errorClassName, helperClassName, ref, checked, defaultChecked, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

type TabListProps = Omit<ExtractProps<TabListProps$1>, "children"> & {
    children: ReactNode;
};
declare function TabList({ children, className, ...props }: TabListProps): react_jsx_runtime.JSX.Element;

type TabListItemProps = ExtractProps<TabProps$1> & {
    activeClassName?: string;
};
declare function TabListItem({ children, className, activeClassName, onMouseOver, ...props }: TabListItemProps): react_jsx_runtime.JSX.Element;
declare namespace TabListItem {
    var displayName: string;
}

type TabPanelsProps = ExtractProps<TabPanelsProps$1>;
declare function TabPanels({ children, className, ...props }: TabPanelsProps): react_jsx_runtime.JSX.Element;

type TabPanelProps = ExtractProps<TabPanelProps$1>;
declare function TabPanel({ children, className, ...props }: TabPanelProps): react_jsx_runtime.JSX.Element;
declare namespace TabPanel {
    var displayName: string;
}

type TabProps = ExtractProps<TabGroupProps> & {
    hideHoverAnimation?: boolean;
    highlightClassName?: string;
};
declare function Tab({ vertical, className, selectedIndex, onChange, hideHoverAnimation, children, highlightClassName, ...props }: TabProps): react_jsx_runtime.JSX.Element;
declare namespace Tab {
    var List: typeof TabList;
    var ListItem: typeof TabListItem;
    var Panels: typeof TabPanels;
    var Panel: typeof TabPanel;
}

declare const textarea: tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    clearable: {
        true: string;
    };
}, undefined, "block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]", {
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    clearable: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    clearable: {
        true: string;
    };
}, undefined, "block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]", unknown, unknown, undefined>>;
interface TextareaProps extends React__default.DetailedHTMLProps<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    rows?: number;
    cols?: number;
    maxLength?: number;
    disabled?: boolean;
    children?: React__default.ReactNode;
    size?: VariantProps<typeof textarea>["size"];
    variant?: VariantProps<typeof textarea>["variant"];
    label?: React__default.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React__default.MouseEvent) => void;
    renderCharacterCount?({ characterCount, maxLength, }: {
        characterCount?: number;
        maxLength?: number;
    }): React__default.ReactNode;
    helperText?: React__default.ReactNode;
    error?: string;
    labelClassName?: string;
    textareaClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    ref?: React__default.Ref<HTMLTextAreaElement>;
}
declare function Textarea({ variant, size, labelWeight, cols, rows, label, error, clearable, onClear, readOnly, disabled, className, labelClassName, textareaClassName, helperClassName, errorClassName, helperText, maxLength, placeholder, renderCharacterCount, ref, ...textareaProps }: TextareaProps): react_jsx_runtime.JSX.Element;

declare const tooltip: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        invert: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "text-center z-[9999] min-w-max rounded-[var(--border-radius)] border-[length:var(--border-width)] drop-shadow-[0px_8px_24px_rgba(149,157,165,0.2)]", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        invert: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        primary: string;
        invert: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "text-center z-[9999] min-w-max rounded-[var(--border-radius)] border-[length:var(--border-width)] drop-shadow-[0px_8px_24px_rgba(149,157,165,0.2)]", unknown, unknown, undefined>>;
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
type TooltipVariant = VariantProps<typeof tooltip>;
type TooltipProps = {
    children: ReactElement;
    content: ReactNode;
    color?: TooltipVariant["color"];
    size?: TooltipVariant["size"];
    placement?: Placement;
    gap?: number;
    animation?: keyof typeof tooltipAnimation;
    className?: string;
    arrowClassName?: string;
    showArrow?: boolean;
};
/**
 * Tooltip displays informative text when users hover, focus, or click an element.
 * Here is the API documentation of the Tooltip component.
 * You can use the following props to create a demo of tooltip.
 */
declare function Tooltip({ children, content, gap, animation, placement, size, color, className, arrowClassName, showArrow, }: TooltipProps): react_jsx_runtime.JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}

declare const title: tailwind_variants.TVReturnType<{
    as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    fontWeight: {
        readonly extraBold: "font-extrabold";
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-title text-text-primary", {
    as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    fontWeight: {
        readonly extraBold: "font-extrabold";
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, tailwind_variants.TVReturnType<{
    as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
    };
    fontWeight: {
        readonly extraBold: "font-extrabold";
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-title text-text-primary", unknown, unknown, undefined>>;
type TitleProps = VariantProps<typeof title> & {
    className?: string;
} & React__default.HTMLAttributes<HTMLHeadingElement>;
declare function Title({ as, fontWeight, children, className, ...props }: React__default.PropsWithChildren<TitleProps>): react_jsx_runtime.JSX.Element;
declare namespace Title {
    var displayName: string;
}

declare const text: tailwind_variants.TVReturnType<{
    as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
    };
    fontWeight: {
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-text text-text-secondary", {
    as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
    };
    fontWeight: {
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, tailwind_variants.TVReturnType<{
    as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
    };
    fontWeight: {
        readonly normal: "font-normal";
        readonly medium: "font-medium";
        readonly semibold: "font-semibold";
        readonly bold: "font-bold";
    };
}, undefined, "somaui-text text-text-secondary", unknown, unknown, undefined>>;
type TextProps = VariantProps<typeof text> & {
    title?: string;
    className?: string;
} & React__default.HTMLAttributes<any>;
declare function Text({ as, fontWeight, title, children, className, ...props }: React__default.PropsWithChildren<TextProps>): react_jsx_runtime.JSX.Element;
declare namespace Text {
    var displayName: string;
}

type BoldProps = {
    className?: string;
} & React__default.HTMLAttributes<any>;
declare function Bold({ children, className, ...props }: React__default.PropsWithChildren<BoldProps>): react_jsx_runtime.JSX.Element;
declare namespace Bold {
    var displayName: string;
}

type ItalicProps = {
    className?: string;
} & React__default.HTMLAttributes<any>;
declare function Italic({ children, className, ...props }: React__default.PropsWithChildren<ItalicProps>): react_jsx_runtime.JSX.Element;
declare namespace Italic {
    var displayName: string;
}

type CodeProps = {
    className?: string;
} & React__default.HTMLAttributes<HTMLPreElement>;
declare function Code({ children, className, ...props }: React__default.PropsWithChildren<CodeProps>): react_jsx_runtime.JSX.Element;
declare namespace Code {
    var displayName: string;
}

type BlockquoteProps = {
    className?: string;
} & React__default.HTMLAttributes<HTMLQuoteElement>;
declare function Blockquote({ children, className, ...props }: React__default.PropsWithChildren<BlockquoteProps>): react_jsx_runtime.JSX.Element;
declare namespace Blockquote {
    var displayName: string;
}

type AccordionHeaderProps = {
    className?: string;
    children: ReactNode | (({ open }: {
        open: boolean;
    }) => ReactNode);
    ref?: Ref<HTMLButtonElement>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
declare function AccordionHeader({ children, className, ref, ...props }: AccordionHeaderProps): react_jsx_runtime.JSX.Element;

type AccordionBodyProps = {
    as?: "div" | "ul";
    className?: string;
    children?: ReactNode;
    ref?: Ref<any>;
} & HTMLAttributes<HTMLDivElement> & HTMLAttributes<HTMLUListElement>;
declare function AccordionBody({ as, className, children, ref, ...props }: AccordionBodyProps): react_jsx_runtime.JSX.Element;

type AccordionProps = {
    as?: "div" | "li";
    defaultOpen?: boolean;
    duration?: number;
    className?: string;
    children?: ReactNode;
};
declare function Accordion({ as, defaultOpen, duration, className, children, }: AccordionProps): react_jsx_runtime.JSX.Element;
declare namespace Accordion {
    var Header: typeof AccordionHeader;
    var Body: typeof AccordionBody;
}

type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
type OurPlacementType = `${Side}` | `${Side} ${Align}`;
declare const ourPlacementObject: {
    [key in TheirPlacementType]: OurPlacementType;
};

declare const select: tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    hasPrefix: {
        true: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]", {
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    hasPrefix: {
        true: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    hasPrefix: {
        true: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
type SelectOption = {
    value: string | number;
    label: string;
    disabled?: boolean;
    [key: string]: any;
};
type SelectProps<SelectOption> = ExtractProps<typeof Listbox> & {
    /** Options for select */
    options: SelectOption[];
    /** The default value of the select (uncontrolled) */
    defaultValue?: ExtractProps<typeof Listbox>["value"];
    /** Whether the select is disabled */
    disabled?: boolean;
    label?: ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    placeholder?: string;
    size?: VariantProps<typeof select>["size"];
    variant?: VariantProps<typeof select>["variant"];
    /** add clearable option */
    clearable?: boolean;
    /** Whether the select is focused by default or not */
    autoFocus?: boolean;
    /** clear event */
    onClear?: (event?: MouseEvent) => void;
    /** Event of the searchable input when change */
    onSearchChange?: (value: string) => void;
    /** The prefix is design for adding any icon or text on the select field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
    prefix?: ReactNode;
    /** The suffix is design for adding any icon or text on the select field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
    suffix?: ReactNode;
    /** Whether the select is searchable or not */
    searchable?: boolean;
    /** The type of the search input */
    searchType?: "text" | "search";
    /** The props for the search input */
    searchProps?: InputHTMLAttributes<HTMLInputElement>;
    /** The prefix for the search input */
    searchPrefix?: ReactNode;
    /** The suffix for the search input */
    searchSuffix?: ReactNode;
    /** Whether the search input is disabled */
    searchDisabled?: boolean;
    /** Whether the search input is readonly */
    searchReadOnly?: boolean;
    /** Add custom classes for search input */
    searchClassName?: string;
    /** Set search input placeholder text */
    searchPlaceHolder?: string;
    /** Add search prefix custom style */
    searchPrefixClassName?: string;
    /** Add search suffix custom style */
    searchSuffixClassName?: string;
    /** Add search container custom style */
    searchContainerClassName?: string;
    /** Whether it is rendered on the portal or not */
    inPortal?: boolean;
    /** Show error message using this prop */
    error?: string;
    /** Add helper text. It could be string or a React component */
    helperText?: ReactNode;
    /** Add custom classes for container */
    className?: string;
    /** Define the position of dropdown */
    placement?: TheirPlacementType;
    /** Define the gap between the selected and dropdown */
    gap?: number;
    /** Whether it is rendered on the modal or not */
    modal?: boolean;
    /** Use labelClassName prop to do some addition style for the field label */
    labelClassName?: string;
    /** Add custom classes for select */
    selectClassName?: string;
    /** Add custom classes to select option */
    optionClassName?: string;
    /** Override default CSS style of prefix */
    prefixClassName?: string;
    /** Override default CSS style of suffix */
    suffixClassName?: string;
    /** This prop allows you to customize the error message style */
    errorClassName?: string;
    /** This prop allows you to customize the helper text message style */
    helperClassName?: string;
    /** This prop allows you to customize the Options Wrapper style */
    dropdownClassName?: string;
    /** The key to search in the options */
    searchByKey?: string;
    /** Disable default filter */
    disableDefaultFilter?: boolean;
    /** Whether the search input is sticky or not */
    stickySearch?: boolean;
    /** The key to get the value of the option (string approach, alternative to getOptionValue) */
    getOptionValueKey?: string;
    /**
     * A function to determine the display value of the selected item.
     * @param value - The value of the selected item.
     * @returns React node to display for the selected item.
     */
    displayValue?(value: ExtractProps<typeof Listbox>["value"]): ReactNode;
    /**
     * Use this function when you want to display something other than the default displayValue.
     * @param option - The SelectOption for which to get the display value.
     * @returns React node to display for the specified option.
     */
    getOptionDisplayValue?(option: SelectOption): ReactNode;
    /**
     * Select whether the label or value should be returned in the onChange method (function approach, alternative to getOptionValueKey).
     * @param option - The SelectOption for which to get the value.
     * @returns The selected value from the specified option.
     */
    getOptionValue?: (option: SelectOption) => SelectOption[keyof SelectOption] | SelectOption;
};
declare function Select<OptionType extends SelectOption>({ label, labelWeight, error, options, disabled, autoFocus, helperText, prefix, placeholder, inPortal, modal, displayValue, getOptionDisplayValue, getOptionValue, getOptionValueKey, value, defaultValue, onChange, onClear, clearable, placement, gap, size, variant, suffix, searchable, searchType, searchProps, stickySearch, searchPrefix, searchSuffix, searchDisabled, searchReadOnly, onSearchChange, searchPlaceHolder, className, searchByKey, labelClassName, selectClassName, optionClassName, suffixClassName, prefixClassName, errorClassName, helperClassName, searchClassName, dropdownClassName, disableDefaultFilter, searchPrefixClassName, searchSuffixClassName, searchContainerClassName, ...props }: SelectProps<OptionType>): react_jsx_runtime.JSX.Element;
declare namespace Select {
    var displayName: string;
}

declare const multiSelect: tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    hasPrefix: {
        true: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]", {
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    hasPrefix: {
        true: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        text: string;
        outline: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
    };
    error: {
        true: string;
    };
    hasPrefix: {
        true: string;
    };
    hasSuffix: {
        true: string;
    };
}, undefined, "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
type MultiSelectOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
    [key: string]: any;
};
type MultiSelectProps<MultiSelectOption> = ExtractProps<typeof Listbox> & {
    /** The value of the select */
    value?: (string | number)[];
    /** The class name of the select */
    className?: string;
    /** Whether the select is focused by default or not */
    autoFocus?: boolean;
    /** The default value of the select */
    defaultValue?: (string | number)[];
    /** The function to call when the value changes */
    onChange?: (value: (string | number)[]) => void;
    /** The function to call when the clear button is clicked */
    onClear?: (event?: MouseEvent) => void;
    /** Event of the searchable input when change */
    onSearchChange?: (value: string) => void;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** The placeholder of the select */
    placeholder?: string;
    /** The size of the select */
    size?: VariantProps<typeof multiSelect>["size"];
    /** The label of the select */
    label?: ReactNode;
    /** The weight of the label */
    labelWeight?: keyof typeof labelStyles.weight;
    /** The class name of the label */
    labelClassName?: string;
    /** The class name of the select */
    selectClassName?: string;
    /** The class name of the helper text */
    helperClassName?: string;
    /** The class name of the error */
    errorClassName?: string;
    /** The error of the select */
    error?: string;
    /** Whether the select is in the portal */
    inPortal?: boolean;
    variant?: VariantProps<typeof multiSelect>["variant"];
    /** The prefix of the select */
    prefix?: ReactNode;
    /** The suffix of the select */
    suffix?: ReactNode;
    /** The class name of the prefix */
    prefixClassName?: string;
    /** The class name of the selected item */
    selectedItemClassName?: string;
    /** The class name of the suffix */
    suffixClassName?: string;
    /** Whether the select is clearable */
    clearable?: boolean;
    /** The placement of the select */
    placement?: keyof typeof ourPlacementObject;
    /** The gap of the select */
    gap?: number;
    /** The modal of the select */
    modal?: boolean;
    /** The helper text of the select */
    helperText?: ReactNode;
    /** The class name of the dropdown */
    dropdownClassName?: string;
    /** The class name of the search */
    searchClassName?: string;
    /** The class name of the search container */
    searchContainerClassName?: string;
    /** The class name of the search prefix */
    searchPrefixClassName?: string;
    /** The class name of the search suffix */
    searchSuffixClassName?: string;
    /** The place holder of the search */
    searchPlaceHolder?: string;
    /** The search suffix */
    searchSuffix?: ReactNode;
    /** The search prefix */
    searchPrefix?: ReactNode;
    /** Whether the search is disabled */
    searchDisabled?: boolean;
    /** Whether the search is read only */
    searchReadOnly?: boolean;
    /** The type of the search */
    searchType?: "text" | "search";
    /** The props of the search */
    searchProps?: InputHTMLAttributes<HTMLInputElement>;
    /** Whether the select is searchable or not */
    searchable?: boolean;
    /** Options for select */
    options: MultiSelectOption[];
    /** The class name of the option */
    optionClassName?: string;
    /** The option checkbox defines the option with checkbox or not */
    optionCheckBox?: boolean;
    /** The class name of the selected option */
    selectedOptionClassName?: string;
    /** The key to get the value of the option (string approach, alternative to getOptionValue) */
    getOptionValueKey?: string;
    /** Whether to hide the picked options */
    hideSelectedOptions?: boolean;
    /** The class name of the selected value container */
    selectContainerClassName?: string;
    /** The key to search in the options */
    searchByKey?: string;
    /** Disable default filter */
    disableDefaultFilter?: boolean;
    /** Whether the search input is sticky or not */
    stickySearch?: boolean;
    /**
     * A function to determine the display value of the selected item.
     * @param selectedItems - An array of selected items.
     * @param handleClearItem - The function to remove the targeted item from selected.
     * @returns React node to display for the selected item.
     */
    displayValue?: (selectedItems: (string | number)[], options: MultiSelectOption[], handleClearItem?: (item: string | number) => void) => ReactNode;
    /**
     * Use this function when you want to display something other than the default option displayValue.
     * @param option - The MultiSelectOption for which to get the display value.
     * @param selected - The Selected for which to know the item is selected or not.
     * @returns React node to display for the specified option.
     */
    getOptionDisplayValue?(option: MultiSelectOption, selected: boolean): ReactNode;
    /**
     * Select whether the label or value should be returned in the onChange method (function approach, alternative to getOptionValueKey).
     * @param option - The MultiSelectOption for which to get the value.
     * @returns The selected value from the specified option.
     */
    getOptionValue?: (option: MultiSelectOption) => MultiSelectOption[keyof MultiSelectOption] | MultiSelectOption;
};
declare function MultiSelect<OptionType extends MultiSelectOption>({ gap, modal, value, error, label, options, onClear, onChange, disabled, clearable, className, autoFocus, helperText, size, searchProps, stickySearch, displayValue, prefix, labelClassName, onSearchChange, errorClassName, inPortal, selectClassName, helperClassName, prefixClassName, suffixClassName, searchClassName, optionClassName, defaultValue, dropdownClassName, searchable, variant, searchSuffix, searchType, selectedItemClassName, getOptionDisplayValue, getOptionValue, searchByKey, optionCheckBox, searchPrefixClassName, searchSuffixClassName, labelWeight, searchDisabled, searchReadOnly, selectedOptionClassName, searchContainerClassName, selectContainerClassName, placeholder, hideSelectedOptions, placement, getOptionValueKey, disableDefaultFilter, searchPlaceHolder, suffix, searchPrefix, ...props }: MultiSelectProps<OptionType>): react_jsx_runtime.JSX.Element;

declare const table: tailwind_variants.TVReturnType<{
    variant: {
        modern: string;
        minimal: string;
        elegant: string;
        retro: string;
        classic: string;
    };
}, undefined, "min-w-full border-collapse", {
    variant: {
        modern: string;
        minimal: string;
        elegant: string;
        retro: string;
        classic: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        modern: string;
        minimal: string;
        elegant: string;
        retro: string;
        classic: string;
    };
}, undefined, "min-w-full border-collapse", unknown, unknown, undefined>>;

type TableVariantProps = VariantProps<typeof table>["variant"];
interface TableProps extends ComponentPropsWithRef<"table"> {
    variant?: TableVariantProps;
}
declare function TableRoot({ className, variant, ref, ...props }: TableProps): react_jsx_runtime.JSX.Element;
declare function TableHeader({ className, ref, ...props }: ComponentPropsWithRef<"thead">): react_jsx_runtime.JSX.Element;
declare function TableBody({ className, ref, ...props }: ComponentPropsWithRef<"tbody">): react_jsx_runtime.JSX.Element;
declare function TableFooter({ className, ref, ...props }: ComponentPropsWithRef<"tfoot">): react_jsx_runtime.JSX.Element;
declare function TableRow({ className, ref, ...props }: ComponentPropsWithRef<"tr">): react_jsx_runtime.JSX.Element;
declare function TableHead({ className, ref, ...props }: ComponentPropsWithRef<"th">): react_jsx_runtime.JSX.Element;
declare function TableCell({ className, ref, ...props }: ComponentPropsWithRef<"td">): react_jsx_runtime.JSX.Element;
declare const Table: typeof TableRoot & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Head: typeof TableHead;
    Cell: typeof TableCell;
};

type BoxProps<T extends ElementType = "div"> = {
    as?: T;
    ref?: React__default.Ref<any>;
    children?: React__default.ReactNode;
} & Omit<React__default.ComponentPropsWithRef<T>, "as" | "ref" | "className"> & {
    className?: string;
};
declare function Box<T extends ElementType = "div">({ as, ref, children, className, ...rest }: BoxProps<T>): react_jsx_runtime.JSX.Element;

declare const flex: tailwind_variants.TVReturnType<{
    direction: {
        row: string;
        col: string;
        'row-reverse': string;
        'col-reverse': string;
    };
    justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
    };
    align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
}, undefined, "flex w-full", {
    direction: {
        row: string;
        col: string;
        'row-reverse': string;
        'col-reverse': string;
    };
    justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
    };
    align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    direction: {
        row: string;
        col: string;
        'row-reverse': string;
        'col-reverse': string;
    };
    justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
    };
    align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
}, undefined, "flex w-full", unknown, unknown, undefined>>;
type FlexProps<T extends ElementType = 'div'> = VariantProps<typeof flex> & {
    as?: T;
    ref?: React__default.Ref<any>;
    children?: React__default.ReactNode;
} & Omit<React__default.ComponentPropsWithRef<T>, 'as' | 'ref' | 'className'> & {
    className?: string;
};
declare function Flex<T extends ElementType = 'div'>({ as, ref, children, direction, justify, align, gap, className, ...rest }: FlexProps<T>): react_jsx_runtime.JSX.Element;

declare const gridCol: tailwind_variants.TVReturnType<{
    colStart: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    colEnd: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    colSpan: {
        auto: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        full: string;
    };
    rowSpan: {
        auto: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        full: string;
    };
    rowStart: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    rowEnd: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    order: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        first: string;
        last: string;
        none: string;
    };
    placeSelf: {
        auto: string;
        start: string;
        end: string;
        center: string;
        stretch: string;
    };
}, undefined, undefined, {
    colStart: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    colEnd: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    colSpan: {
        auto: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        full: string;
    };
    rowSpan: {
        auto: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        full: string;
    };
    rowStart: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    rowEnd: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    order: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        first: string;
        last: string;
        none: string;
    };
    placeSelf: {
        auto: string;
        start: string;
        end: string;
        center: string;
        stretch: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    colStart: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    colEnd: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    colSpan: {
        auto: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        full: string;
    };
    rowSpan: {
        auto: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        full: string;
    };
    rowStart: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    rowEnd: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        auto: string;
    };
    order: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        first: string;
        last: string;
        none: string;
    };
    placeSelf: {
        auto: string;
        start: string;
        end: string;
        center: string;
        stretch: string;
    };
}, undefined, undefined, unknown, unknown, undefined>>;
type GridColumnProps<T extends ElementType = 'div'> = {
    as?: T;
    ref?: Ref<any>;
    colStart?: VariantProps<typeof gridCol>['colStart'];
    colEnd?: VariantProps<typeof gridCol>['colEnd'];
    colSpan?: VariantProps<typeof gridCol>['colSpan'];
    order?: VariantProps<typeof gridCol>['order'];
    rowSpan?: VariantProps<typeof gridCol>['rowSpan'];
    rowStart?: VariantProps<typeof gridCol>['rowStart'];
    rowEnd?: VariantProps<typeof gridCol>['rowEnd'];
    placeSelf?: VariantProps<typeof gridCol>['placeSelf'];
    children?: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithRef<T>, 'as' | 'ref' | 'className' | 'colStart' | 'colEnd' | 'colSpan' | 'order' | 'rowSpan' | 'rowStart' | 'rowEnd' | 'placeSelf'>;
declare function GridCol<T extends ElementType = 'div'>({ as, ref, order, rowEnd, colEnd, rowSpan, colSpan, colStart, rowStart, children, className, placeSelf, ...rest }: GridColumnProps<T>): react_jsx_runtime.JSX.Element;

declare const gridVariants: tailwind_variants.TVReturnType<{
    columns: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        none: string;
        subgrid: string;
    };
    rows: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        none: string;
        subgrid: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
    align: {
        end: string;
        start: string;
        center: string;
        stretch: string;
        baseline: string;
    };
    justify: {
        end: string;
        start: string;
        around: string;
        normal: string;
        center: string;
        evenly: string;
        between: string;
        stretch: string;
    };
    placeContent: {
        center: string;
        start: string;
        end: string;
        between: string;
        around: string;
        evenly: string;
        baseline: string;
        stretch: string;
    };
    placeItems: {
        center: string;
        start: string;
        end: string;
        baseline: string;
        stretch: string;
    };
}, undefined, "grid", {
    columns: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        none: string;
        subgrid: string;
    };
    rows: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        none: string;
        subgrid: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
    align: {
        end: string;
        start: string;
        center: string;
        stretch: string;
        baseline: string;
    };
    justify: {
        end: string;
        start: string;
        around: string;
        normal: string;
        center: string;
        evenly: string;
        between: string;
        stretch: string;
    };
    placeContent: {
        center: string;
        start: string;
        end: string;
        between: string;
        around: string;
        evenly: string;
        baseline: string;
        stretch: string;
    };
    placeItems: {
        center: string;
        start: string;
        end: string;
        baseline: string;
        stretch: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    columns: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        none: string;
        subgrid: string;
    };
    rows: {
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        none: string;
        subgrid: string;
    };
    gap: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
    };
    align: {
        end: string;
        start: string;
        center: string;
        stretch: string;
        baseline: string;
    };
    justify: {
        end: string;
        start: string;
        around: string;
        normal: string;
        center: string;
        evenly: string;
        between: string;
        stretch: string;
    };
    placeContent: {
        center: string;
        start: string;
        end: string;
        between: string;
        around: string;
        evenly: string;
        baseline: string;
        stretch: string;
    };
    placeItems: {
        center: string;
        start: string;
        end: string;
        baseline: string;
        stretch: string;
    };
}, undefined, "grid", unknown, unknown, undefined>>;
type ColumnsType = VariantProps<typeof gridVariants>['columns'];
type GridProps<T extends ElementType = 'div'> = {
    as?: T;
    ref?: Ref<any>;
    children?: ReactNode;
    gap?: VariantProps<typeof gridVariants>['gap'];
    rows?: VariantProps<typeof gridVariants>['rows'];
    align?: VariantProps<typeof gridVariants>['align'];
    justify?: VariantProps<typeof gridVariants>['justify'];
    columns?: ColumnsType;
    cols?: ColumnsType;
    colsSm?: ColumnsType;
    colsMd?: ColumnsType;
    colsLg?: ColumnsType;
    colsXl?: ColumnsType;
    cols2xl?: ColumnsType;
    placeItems?: VariantProps<typeof gridVariants>['placeItems'];
    placeContent?: VariantProps<typeof gridVariants>['placeContent'];
    className?: string;
} & Omit<ComponentPropsWithRef<T>, 'as' | 'ref' | 'className' | 'gap' | 'rows' | 'align' | 'justify' | 'columns' | 'cols' | 'colsSm' | 'colsMd' | 'colsLg' | 'colsXl' | 'cols2xl' | 'placeItems' | 'placeContent'>;
declare function GridBase<T extends ElementType = 'div'>({ as, ref, gap, rows, align, justify, columns, cols, colsSm, colsMd, colsLg, colsXl, cols2xl, children, className, placeItems, placeContent, ...rest }: GridProps<T>): react_jsx_runtime.JSX.Element;
declare const Grid: typeof GridBase & {
    Col: typeof GridCol;
};

export { Accordion, type AccordionProps, ActionIcon, type ActionIconProps, AdvancedCheckbox, type AdvancedCheckboxProps, AdvancedRadio, type AdvancedRadioProps, Alert, type AlertProps, Announcement, type AnnouncementProps, Avatar, type AvatarProps, Badge, type BadgeProps, Blockquote, type BlockquoteProps, Bold, type BoldProps, Box, type BoxProps, Button, type ButtonProps, Checkbox, CheckboxGroup, type CheckboxGroupProps, type CheckboxProps, Code, type CodeProps, Collapse, type CollapseHeader, type CollapseProps, Drawer, type DrawerProps, type DrawerSize, Dropdown, type DropdownProps, Empty, EmptyBoxIcon, EmptyProductBoxIcon, type EmptyProps, FileInput, type FileInputProps, Flex, type FlexProps, Grid, type GridProps, Input, type InputProps, Italic, type ItalicProps, Loader, type LoaderTypes, Modal, type ModalProps, type ModalSize, MultiSelect, type MultiSelectOption, type MultiSelectProps, Password, type PasswordProps, PinCode, type PinCodeProps, Popover, type PopoverProps, Progressbar, type ProgressbarProps, RadialProgressBar, type RadialProgressBarProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, SearchNotFoundIcon, Select, type SelectOption, type SelectProps, Stepper, type StepperProps, Switch, type SwitchProps, Tab, type TabProps, Table, type TableProps, type TableVariantProps, Text, type TextProps, Textarea, type TextareaProps, Title, type TitleProps, Tooltip, type TooltipProps, UploadZone, type UploadZoneProps };

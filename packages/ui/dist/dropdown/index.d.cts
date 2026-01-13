import * as react_jsx_runtime from 'react/jsx-runtime';
import { Ref, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { MenuItemsProps, MenuButtonProps, Menu } from '@headlessui/react';

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

type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type TheirPlacementType = `${Side}` | `${Side}-${Align}`;

type DropdownProps = ExtractProps<typeof Menu> & {
    gap?: number;
    modal?: boolean;
    inPortal?: boolean;
    placement?: TheirPlacementType;
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

export { Dropdown, type DropdownProps };

import type { ReactNode } from "react";
import { Menu } from "@headlessui/react";
import { DropdownItem } from "./dropdown-item";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownTrigger } from "./dropdown-trigger";
import type { ExtractProps } from "@/lib/extract-props";
import type { TheirPlacementType } from "./dropdown.lib";
export type DropdownProps = ExtractProps<typeof Menu> & {
    gap?: number;
    modal?: boolean;
    inPortal?: boolean;
    placement?: TheirPlacementType;
    children: ReactNode;
    className?: string;
};
export declare function Dropdown({ inPortal, modal, placement, gap, children, className, }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Dropdown {
    var Trigger: typeof DropdownTrigger;
    var Menu: typeof DropdownMenu;
    var Item: typeof DropdownItem;
    var displayName: string;
}

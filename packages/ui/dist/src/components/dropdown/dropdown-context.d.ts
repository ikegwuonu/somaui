import { type ReactNode } from 'react';
import type { TheirPlacementType } from './dropdown.lib';
type DropdownContextProps = {
    inPortal?: boolean;
    placement: TheirPlacementType;
    gap?: number;
    modal?: boolean;
};
export declare function DropdownProvider({ value, children, }: {
    value: DropdownContextProps;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useDropdown(): DropdownContextProps;
export {};

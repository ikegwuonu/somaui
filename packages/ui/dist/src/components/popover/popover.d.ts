import type { ReactNode } from 'react';
import { PopoverTrigger } from './popover-trigger';
import { PopoverContent } from './popover-content';
import { type PopoverProviderProps } from './popover-context';
export type PopoverProps = PopoverProviderProps & {
    children: ReactNode;
};
export declare function Popover({ isOpen, setIsOpen, gap, animation, placement, enableOverlay, showArrow, size, arrowClassName, overlayClassName, children, }: PopoverProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Popover {
    var Trigger: typeof PopoverTrigger;
    var Content: typeof PopoverContent;
    var displayName: string;
}

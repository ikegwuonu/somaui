import { type TabProps } from "@headlessui/react";
import type { ExtractProps } from "@/lib/extract-props";
export type TabListItemProps = ExtractProps<TabProps> & {
    activeClassName?: string;
};
export declare function TabListItem({ children, className, activeClassName, onMouseOver, ...props }: TabListItemProps): import("react/jsx-runtime").JSX.Element;
export declare namespace TabListItem {
    var displayName: string;
}

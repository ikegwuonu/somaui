import { type TabGroupProps } from "@headlessui/react";
import type { ExtractProps } from "@/lib/extract-props";
import { TabList } from "./tab-list";
import { TabListItem } from "./tab-list-item";
import { TabPanels } from "./tab-panels";
import { TabPanel } from "./tab-panel";
export type TabProps = ExtractProps<TabGroupProps> & {
    hideHoverAnimation?: boolean;
    highlightClassName?: string;
};
export declare function Tab({ vertical, className, selectedIndex, onChange, hideHoverAnimation, children, highlightClassName, ...props }: TabProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Tab {
    var List: typeof TabList;
    var ListItem: typeof TabListItem;
    var Panels: typeof TabPanels;
    var Panel: typeof TabPanel;
}

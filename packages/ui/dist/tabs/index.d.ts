import * as react_jsx_runtime from 'react/jsx-runtime';
import { TabListProps as TabListProps$1, TabProps as TabProps$1, TabPanelsProps as TabPanelsProps$1, TabPanelProps as TabPanelProps$1, TabGroupProps } from '@headlessui/react';
import { E as ExtractProps } from '../extract-props-Dt89k7WT.js';
import { ReactNode } from 'react';

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

export { Tab, type TabProps };

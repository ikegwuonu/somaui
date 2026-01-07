import { type TabPanelProps as HeadlessTabPanelProps } from "@headlessui/react";
import type { ExtractProps } from "@/lib/extract-props";
export type TabPanelProps = ExtractProps<HeadlessTabPanelProps>;
export declare function TabPanel({ children, className, ...props }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
export declare namespace TabPanel {
    var displayName: string;
}

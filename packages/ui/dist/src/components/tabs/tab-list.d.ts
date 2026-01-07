import type { ReactNode } from "react";
import { type TabListProps as HeadlessTabListProps } from "@headlessui/react";
import type { ExtractProps } from "@/lib/extract-props";
export type TabListProps = Omit<ExtractProps<HeadlessTabListProps>, "children"> & {
    children: ReactNode;
};
export declare function TabList({ children, className, ...props }: TabListProps): import("react/jsx-runtime").JSX.Element;

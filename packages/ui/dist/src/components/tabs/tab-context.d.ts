import { type MutableRefObject, type MouseEvent, type FocusEvent, type Dispatch, type SetStateAction, type ReactNode } from 'react';
type Rect = {
    top: number;
    left: number;
    right: number;
    width: number;
    height: number;
    elementTop: number;
};
type TabContextProps = {
    ref: MutableRefObject<HTMLDivElement | null>;
    rect: Rect;
    setRect: (eventOrRef: MouseEvent<HTMLElement> | FocusEvent<HTMLElement> | MutableRefObject<HTMLElement | null>, getContainer?: () => HTMLElement | null) => void;
    vertical?: boolean;
    hideHoverAnimation?: boolean;
    displayHighlight?: boolean;
    setDisplayHighlight?: Dispatch<SetStateAction<boolean>>;
    activeTab?: number;
    highlightClassName?: string;
};
export declare function TabProvider({ value, children, }: {
    value: TabContextProps;
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTab(): TabContextProps;
export {};

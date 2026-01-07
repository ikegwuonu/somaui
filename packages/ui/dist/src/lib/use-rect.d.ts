import { MouseEvent, FocusEvent, RefObject } from 'react';
export declare const getElementOffset: (el?: HTMLElement | null | undefined) => {
    top: number;
    left: number;
};
export interface ReactiveDomReact {
    top: number;
    left: number;
    right: number;
    width: number;
    height: number;
    elementTop: number;
}
export declare const isUnplacedRect: (rect?: ReactiveDomReact) => boolean;
export declare const getRefRect: (ref?: RefObject<HTMLElement | null>, getContainer?: () => HTMLElement | null) => ReactiveDomReact;
export declare const getEventRect: (event?: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>, getContainer?: () => HTMLElement | null) => ReactiveDomReact;
export declare const useRect: (initialState?: ReactiveDomReact | (() => ReactiveDomReact)) => {
    rect: ReactiveDomReact;
    setRect: (eventOrRef: MouseEvent<HTMLElement> | FocusEvent<HTMLElement> | RefObject<HTMLElement | null>, getContainer?: () => HTMLElement | null) => void;
};

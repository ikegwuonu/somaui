import React from 'react';
import { ReactiveDomReact } from '../lib/use-rect';
type Props = {
    rect: ReactiveDomReact;
    visible?: boolean;
    hoverHeightRatio?: number;
    hoverWidthRatio?: number;
    activeOpacity?: number;
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type HighlightProps = Props & NativeAttrs;
export declare function Highlight({ rect, visible, hoverHeightRatio, hoverWidthRatio, activeOpacity, className, ...props }: HighlightProps): import("react/jsx-runtime").JSX.Element;
export {};

import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import React from 'react';

declare const announcement: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    bgColor: {
        background: string;
        muted: string;
    };
}, undefined, "flex items-center w-fit rounded-full", {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    bgColor: {
        background: string;
        muted: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    bgColor: {
        background: string;
        muted: string;
    };
}, undefined, "flex items-center w-fit rounded-full", unknown, unknown, undefined>>;
declare const announcementHighlight: tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-announcement-highlighted-text ms-2.5 font-medium", {
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
    };
}, undefined, "somaui-announcement-highlighted-text ms-2.5 font-medium", unknown, unknown, undefined>>;
type AnnouncementVariant = VariantProps<typeof announcement>;
type HighlightedTextVariant = VariantProps<typeof announcementHighlight>;
interface AnnouncementProps {
    size?: AnnouncementVariant["size"];
    color?: HighlightedTextVariant["color"];
    bgColor?: AnnouncementVariant["bgColor"];
    badgeText?: string;
    highlightedText?: string;
    className?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    badgeClassName?: string;
    highlightedTextClassName?: string;
}
declare const Announcement: {
    ({ size, color, bgColor, badgeText, highlightedText, children, startIcon, endIcon, className, badgeClassName, highlightedTextClassName, }: React.PropsWithChildren<AnnouncementProps>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { Announcement, type AnnouncementProps };

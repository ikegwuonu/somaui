import React from "react";
import { type VariantProps } from "tailwind-variants";
declare const announcement: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
declare const announcementHighlight: import("tailwind-variants").TVReturnType<{
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
export interface AnnouncementProps {
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
export declare const Announcement: {
    ({ size, color, bgColor, badgeText, highlightedText, children, startIcon, endIcon, className, badgeClassName, highlightedTextClassName, }: React.PropsWithChildren<AnnouncementProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

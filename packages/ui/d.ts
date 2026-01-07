declare module "lib/cn" {
  import { cn as cnBase } from "tailwind-variants";
  /**
   * Utility function for conditionally joining class names together with proper
   * Tailwind CSS class merging using tailwind-variants v3
   *
   * Uses cnBase from tailwind-variants which provides:
   * - Class name concatenation
   * - Automatic Tailwind CSS conflict resolution via tailwind-merge
   * - Support for strings, arrays, objects, and conditional classes
   *
   * @example
   * cn('px-2 py-1', 'px-4') // => 'py-1 px-4' (conflict resolved)
   * cn('text-sm', { 'font-bold': true }) // => 'text-sm font-bold'
   * cn(['flex', 'items-center']) // => 'flex items-center'
   */
  export function cn(...inputs: Parameters<typeof cnBase>): string;
}
declare module "lib/use-collapse" {
  export function useCollapse(
    duration?: number,
    defaultOpen?: boolean
  ): {
    open: boolean;
    targetEl: import("react").RefObject<any>;
    openTargetEl: boolean;
    slideUp: (target: any) => void;
    slideDown: (target: any) => void;
    toggle: () => void;
  };
}
declare module "components/field-clear-button" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const fieldClearButton: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      hasSuffix: {
        true: string;
      };
    },
    undefined,
    "somaui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      hasSuffix: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        hasSuffix: {
          true: string;
        };
      },
      undefined,
      "somaui-input-clear-btn input-clear-btn inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground",
      unknown,
      unknown,
      undefined
    >
  >;
  export interface FieldClearButtonProps {
    as?: React.ElementType;
    hasSuffix?: boolean;
    size?: VariantProps<typeof fieldClearButton>["size"];
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
  }
  export function FieldClearButton({
    as,
    size,
    onClick,
    hasSuffix,
    className,
  }: FieldClearButtonProps): import("react/jsx-runtime").JSX.Element;
  export namespace FieldClearButton {
    var displayName: string;
  }
}
declare module "components/field-error-text" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const fieldError: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    "text-red",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
      },
      undefined,
      "text-red",
      unknown,
      unknown,
      undefined
    >
  >;
  interface FieldErrorTextProps
    extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    as?: "div" | "span";
    error: string | null | undefined;
    size?: VariantProps<typeof fieldError>["size"];
    className?: string;
  }
  export function FieldErrorText({
    as,
    error,
    size,
    className,
  }: FieldErrorTextProps): import("react/jsx-runtime").JSX.Element;
  export namespace FieldErrorText {
    var displayName: string;
  }
}
declare module "components/field-helper-text" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const fieldHelperText: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    undefined,
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
      },
      undefined,
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  export interface FieldHelperTextProps
    extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    as?: "div" | "span";
    size?: VariantProps<typeof fieldHelperText>["size"];
    className?: string;
  }
  export function FieldHelperText({
    size,
    as,
    children,
    className,
  }: React.PropsWithChildren<FieldHelperTextProps>): import("react/jsx-runtime").JSX.Element;
  export namespace FieldHelperText {
    var displayName: string;
  }
}
declare module "components/action-icon/action-icon" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const actionIcon: import("tailwind-variants").TVReturnType<
    {
      variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      isLoading: {
        true: string;
      };
    },
    undefined,
    "inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]",
    {
      variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      isLoading: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          solid: string;
          outline: string;
          flat: string;
          text: string;
          danger: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        isLoading: {
          true: string;
        };
      },
      undefined,
      "inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export type ActionIconProps = Omit<
    VariantProps<typeof actionIcon>,
    "disabled" | "isLoading"
  > &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> &
    React.HTMLAttributes<HTMLSpanElement> & {
      as?: "button" | "span";
      type?: "button" | "submit" | "reset";
      children: React.ReactNode;
      isLoading?: boolean;
      disabled?: boolean;
      ref?: React.Ref<HTMLButtonElement>;
    };
  export function ActionIcon({
    as,
    type,
    children,
    className,
    isLoading,
    variant,
    size,
    disabled,
    ref,
    ...actionIconProps
  }: ActionIconProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/action-icon/index" {
  export {
    ActionIcon,
    type ActionIconProps,
  } from "components/action-icon/action-icon";
}
declare module "components/advanced-checkbox/advanced-checkbox" {
  import type { InputHTMLAttributes, ReactNode, Ref } from "react";
  import { type VariantProps } from "tailwind-variants";
  const advancedCheckbox: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      alignment: {
        left: string;
        center: string;
      };
    },
    undefined,
    "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed peer-disabled:text-muted-foreground rounded-[var(--border-radius)]",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      alignment: {
        left: string;
        center: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        alignment: {
          left: string;
          center: string;
        };
      },
      undefined,
      "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed peer-disabled:text-muted-foreground rounded-[var(--border-radius)]",
      unknown,
      unknown,
      undefined
    >
  >;
  type AdvancedCheckboxVariant = VariantProps<typeof advancedCheckbox>;
  export interface AdvancedCheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    children: ReactNode;
    size?: AdvancedCheckboxVariant["size"];
    alignment?: AdvancedCheckboxVariant["alignment"];
    inputClassName?: string;
    contentClassName?: string;
    className?: string;
    ref?: Ref<HTMLInputElement>;
  }
  export function AdvancedCheckbox({
    size,
    alignment,
    children,
    inputClassName,
    contentClassName,
    className,
    ref,
    ...props
  }: AdvancedCheckboxProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/advanced-checkbox/index" {
  export {
    AdvancedCheckbox,
    type AdvancedCheckboxProps,
  } from "components/advanced-checkbox/advanced-checkbox";
}
declare module "components/advanced-radio/advanced-radio" {
  import type { InputHTMLAttributes, ReactNode, Ref } from "react";
  import { type VariantProps } from "tailwind-variants";
  const advancedRadio: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      alignment: {
        left: string;
        center: string;
      };
    },
    undefined,
    "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:text-muted-foreground peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed rounded-[var(--border-radius)]",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      alignment: {
        left: string;
        center: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        alignment: {
          left: string;
          center: string;
        };
      },
      undefined,
      "border-[length:var(--border-width)] border-border hover:border-primary ring-[0.6px] ring-border cursor-pointer transition duration-200 ease-in-out block peer-checked:border-primary peer-checked:ring-primary peer-checked:ring-[0.8px] peer-disabled:bg-muted/70 peer-disabled:backdrop-blur peer-disabled:text-muted-foreground peer-disabled:border-muted peer-disabled:hover:border-muted peer-disabled:ring-muted peer-disabled:cursor-not-allowed rounded-[var(--border-radius)]",
      unknown,
      unknown,
      undefined
    >
  >;
  type AdvancedRadioVariant = VariantProps<typeof advancedRadio>;
  export interface AdvancedRadioProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    children: ReactNode;
    size?: AdvancedRadioVariant["size"];
    alignment?: AdvancedRadioVariant["alignment"];
    inputClassName?: string;
    contentClassName?: string;
    className?: string;
    ref?: Ref<HTMLInputElement>;
  }
  /**
   * A basic widget for getting the user input of radio with advanced design.
   * Here is the API documentation of the AdvancedRadio component.
   * And the rest of the props of AdvancedRadio are the same as the original html input field.
   * You can use props like `value`, `name`, `disabled` etc.
   */
  export function AdvancedRadio({
    size,
    alignment,
    children,
    inputClassName,
    contentClassName,
    className,
    ref,
    ...props
  }: AdvancedRadioProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/advanced-radio/index" {
  export {
    AdvancedRadio,
    type AdvancedRadioProps,
  } from "components/advanced-radio/advanced-radio";
}
declare module "icons/x-mark" {
  import React from "react";
  export function XIcon(
    props: React.SVGProps<SVGSVGElement>
  ): import("react/jsx-runtime").JSX.Element;
}
declare module "icons/checkmark" {
  import React from "react";
  export function CheckmarkIcon(
    props: React.SVGProps<SVGSVGElement>
  ): import("react/jsx-runtime").JSX.Element;
}
declare module "icons/question-mark-circle" {
  import React from "react";
  export function QuestionMarkCircleIcon(
    props: React.SVGProps<SVGSVGElement>
  ): import("react/jsx-runtime").JSX.Element;
}
declare module "components/alert/icons" {
  const classes: {
    size: {
      sm: string;
      md: string;
      lg: string;
    };
  };
  export type IconProps = {
    size: keyof typeof classes.size;
    color: "danger" | "info" | "success" | "warning";
  };
  export function AlertIcon({
    size,
    color,
  }: IconProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/alert/alert" {
  import type { ReactNode, MouseEvent } from "react";
  import { type VariantProps } from "tailwind-variants";
  const alert: import("tailwind-variants").TVReturnType<
    {
      color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
      };
      size: {
        sm: {
          root: string;
          iconWrapper: string;
          closeWrapper: string;
          content: string;
        };
        md: {
          root: string;
          iconWrapper: string;
          closeWrapper: string;
          content: string;
        };
        lg: {
          root: string;
          iconWrapper: string;
          closeWrapper: string;
          content: string;
        };
      };
      closable: {
        true: {};
      };
    },
    {
      root: string;
      bar: string;
      iconWrapper: string;
      content: string;
      closeWrapper: string;
    },
    undefined,
    {
      color: {
        danger: {};
        info: {};
        success: {};
        warning: {};
      };
      size: {
        sm: {
          root: string;
          iconWrapper: string;
          closeWrapper: string;
          content: string;
        };
        md: {
          root: string;
          iconWrapper: string;
          closeWrapper: string;
          content: string;
        };
        lg: {
          root: string;
          iconWrapper: string;
          closeWrapper: string;
          content: string;
        };
      };
      closable: {
        true: {};
      };
    },
    {
      root: string;
      bar: string;
      iconWrapper: string;
      content: string;
      closeWrapper: string;
    },
    import("tailwind-variants").TVReturnType<
      {
        color: {
          danger: {};
          info: {};
          success: {};
          warning: {};
        };
        size: {
          sm: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
          };
          md: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
          };
          lg: {
            root: string;
            iconWrapper: string;
            closeWrapper: string;
            content: string;
          };
        };
        closable: {
          true: {};
        };
      },
      {
        root: string;
        bar: string;
        iconWrapper: string;
        content: string;
        closeWrapper: string;
      },
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  export type AlertProps = {
    size?: VariantProps<typeof alert>["size"];
    color: "danger" | "info" | "success" | "warning";
    children: ReactNode;
    closable?: boolean;
    onClose?: (event: MouseEvent) => void;
    icon?: ReactNode;
    closeIcon?: ReactNode;
    className?: string;
    barClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
  };
  export function Alert({
    size,
    color,
    children,
    closable,
    onClose,
    icon,
    closeIcon,
    className,
    barClassName,
    iconContainerClassName,
    iconClassName,
  }: AlertProps): import("react/jsx-runtime").JSX.Element;
  export namespace Alert {
    var displayName: string;
  }
}
declare module "components/alert/index" {
  export { Alert, type AlertProps } from "components/alert/alert";
}
declare module "components/badge/badge" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const badge: import("tailwind-variants").TVReturnType<
    {
      variant: {
        solid: string;
        flat: string;
        outline: string;
      };
      color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      renderAsDot: {
        true: string;
      };
      enableOutlineRing: {
        true: string;
      };
    },
    undefined,
    "inline-flex items-center justify-center font-semibold leading-none rounded-full border-[length:var(--border-width)]",
    {
      variant: {
        solid: string;
        flat: string;
        outline: string;
      };
      color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      renderAsDot: {
        true: string;
      };
      enableOutlineRing: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          solid: string;
          flat: string;
          outline: string;
        };
        color: {
          primary: string;
          secondary: string;
          success: string;
          warning: string;
          danger: string;
          info: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        renderAsDot: {
          true: string;
        };
        enableOutlineRing: {
          true: string;
        };
      },
      undefined,
      "inline-flex items-center justify-center font-semibold leading-none rounded-full border-[length:var(--border-width)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export type BadgeProps = Omit<
    VariantProps<typeof badge>,
    "renderAsDot" | "enableOutlineRing"
  > &
    React.HTMLAttributes<HTMLSpanElement> & {
      renderAsDot?: boolean;
      enableOutlineRing?: boolean;
    };
  export function Badge({
    renderAsDot,
    size,
    color,
    variant,
    enableOutlineRing,
    children,
    className,
    ...props
  }: React.PropsWithChildren<BadgeProps>): import("react/jsx-runtime").JSX.Element;
}
declare module "components/badge/index" {
  export { Badge, type BadgeProps } from "components/badge/badge";
}
declare module "components/announcement/announcement" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const announcement: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      bgColor: {
        background: string;
        muted: string;
      };
    },
    undefined,
    "flex items-center w-fit rounded-full",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      bgColor: {
        background: string;
        muted: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        bgColor: {
          background: string;
          muted: string;
        };
      },
      undefined,
      "flex items-center w-fit rounded-full",
      unknown,
      unknown,
      undefined
    >
  >;
  const announcementHighlight: import("tailwind-variants").TVReturnType<
    {
      color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    "somaui-announcement-highlighted-text ms-2.5 font-medium",
    {
      color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        color: {
          primary: string;
          secondary: string;
          danger: string;
          info: string;
          success: string;
          warning: string;
        };
      },
      undefined,
      "somaui-announcement-highlighted-text ms-2.5 font-medium",
      unknown,
      unknown,
      undefined
    >
  >;
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
  export const Announcement: {
    ({
      size,
      color,
      bgColor,
      badgeText,
      highlightedText,
      children,
      startIcon,
      endIcon,
      className,
      badgeClassName,
      highlightedTextClassName,
    }: React.PropsWithChildren<AnnouncementProps>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
  };
}
declare module "components/announcement/index" {
  export {
    Announcement,
    type AnnouncementProps,
  } from "components/announcement/announcement";
}
declare module "components/avatar/avatar" {
  import { type VariantProps } from "tailwind-variants";
  const avatar: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
      };
      clickable: {
        true: string;
      };
    },
    undefined,
    "inline-flex items-center justify-center flex-shrink-0 rounded-full",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
        info: string;
      };
      clickable: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        color: {
          primary: string;
          secondary: string;
          success: string;
          warning: string;
          danger: string;
          info: string;
        };
        clickable: {
          true: string;
        };
      },
      undefined,
      "inline-flex items-center justify-center flex-shrink-0 rounded-full",
      unknown,
      unknown,
      undefined
    >
  >;
  type AvatarVariant = VariantProps<typeof avatar>;
  export type AvatarProps = {
    src?: string;
    name: string;
    initials?: string;
    size?: AvatarVariant["size"];
    customSize?: string | number;
    color?: AvatarVariant["color"];
    onClick?: () => void;
    className?: string;
  };
  export function Avatar({
    src,
    name,
    size,
    initials,
    customSize,
    color,
    onClick,
    className,
  }: AvatarProps): import("react/jsx-runtime").JSX.Element;
  export namespace Avatar {
    var displayName: string;
  }
}
declare module "components/avatar/index" {
  export { Avatar, type AvatarProps } from "components/avatar/avatar";
}
declare module "components/loader/bars-spinner" {
  import React from "react";
  export function BarsSpinner({
    fill,
    ...props
  }: React.SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
  export namespace BarsSpinner {
    var displayName: string;
  }
}
declare module "components/loader/pulse-loader" {
  import React from "react";
  export function PulseLoader({
    fill,
    ...props
  }: React.SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
  export namespace PulseLoader {
    var displayName: string;
  }
}
declare module "components/loader/spinner" {
  import React from "react";
  export function Spinner({
    ...props
  }: React.SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
  export namespace Spinner {
    var displayName: string;
  }
}
declare module "components/loader/three-dot-scale" {
  import React from "react";
  export function ThreeDotScale({
    fill,
    ...props
  }: React.SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
  export namespace ThreeDotScale {
    var displayName: string;
  }
}
declare module "components/loader/loader" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  import { BarsSpinner } from "components/loader/bars-spinner";
  import { PulseLoader } from "components/loader/pulse-loader";
  import { Spinner } from "components/loader/spinner";
  import { ThreeDotScale } from "components/loader/three-dot-scale";
  const loader: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    "somaui-loader h-auto",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      color: {
        current: string;
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        color: {
          current: string;
          primary: string;
          secondary: string;
          danger: string;
          info: string;
          success: string;
          warning: string;
        };
      },
      undefined,
      "somaui-loader h-auto",
      unknown,
      unknown,
      undefined
    >
  >;
  const Components: {
    bars: typeof BarsSpinner;
    pulse: typeof PulseLoader;
    spinner: typeof Spinner;
    threeDot: typeof ThreeDotScale;
  };
  type LoaderVariant = VariantProps<typeof loader>;
  export interface LoaderTypes extends React.SVGProps<SVGSVGElement> {
    size?: LoaderVariant["size"];
    variant?: keyof typeof Components;
    color?: LoaderVariant["color"];
    className?: string;
  }
  export function Loader({
    size,
    color,
    variant,
    className,
    ...props
  }: LoaderTypes): import("react/jsx-runtime").JSX.Element;
  export namespace Loader {
    var displayName: string;
  }
}
declare module "components/loader/index" {
  export { Loader, type LoaderTypes } from "components/loader/loader";
}
declare module "components/button/button" {
  import React, { type ElementType } from "react";
  import { type VariantProps } from "tailwind-variants";
  const button: import("tailwind-variants").TVReturnType<
    {
      variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      isLoading: {
        true: string;
      };
    },
    undefined,
    "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]",
    {
      variant: {
        solid: string;
        outline: string;
        flat: string;
        text: string;
        danger: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      isLoading: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          solid: string;
          outline: string;
          flat: string;
          text: string;
          danger: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        isLoading: {
          true: string;
        };
      },
      undefined,
      "font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export type ButtonProps<T extends ElementType = "button"> = VariantProps<
    typeof button
  > & {
    as?: T;
    isLoading?: boolean;
    loader?: React.ReactNode;
    children?: React.ReactNode;
  } & Omit<React.ComponentPropsWithRef<T>, "as" | "className" | "ref"> & {
      className?: string;
    };
  export const Button: import("react").ForwardRefExoticComponent<
    Omit<ButtonProps<"button">, "ref"> &
      import("react").RefAttributes<HTMLButtonElement>
  >;
}
declare module "components/button/index" {
  export { Button, type ButtonProps } from "components/button/button";
}
declare module "components/checkbox-group/checkbox-group" {
  import {
    type ReactNode,
    type HTMLAttributes,
    type Dispatch,
    type SetStateAction,
    type ChangeEvent,
  } from "react";
  type CheckboxGroupContextType = {
    values: string[];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isChecked: (value: string) => boolean;
  };
  export function useCheckboxGroup(): CheckboxGroupContextType;
  export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
    values: string[];
    setValues: Dispatch<SetStateAction<string[]>>;
    children: ReactNode;
  }
  export function CheckboxGroup({
    values,
    setValues,
    children,
    ...props
  }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/checkbox/checkbox" {
  import type { InputHTMLAttributes, ReactNode, Ref } from "react";
  import { type VariantProps } from "tailwind-variants";
  import { labelStyles } from "@/lib/label-size";
  const checkbox: import("tailwind-variants").TVReturnType<
    {
      variant: {
        outline: string;
        flat: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
    },
    undefined,
    "peer outline-none focus:outline-none checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out rounded-[var(--border-radius)] border-[length:var(--border-width)]",
    {
      variant: {
        outline: string;
        flat: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          outline: string;
          flat: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
      },
      undefined,
      "peer outline-none focus:outline-none checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out rounded-[var(--border-radius)] border-[length:var(--border-width)]",
      unknown,
      unknown,
      undefined
    >
  >;
  type CheckboxVariant = VariantProps<typeof checkbox>;
  export interface CheckboxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: CheckboxVariant["variant"];
    size?: CheckboxVariant["size"];
    labelWeight?: keyof typeof labelStyles.weight;
    labelPlacement?: "left" | "right";
    disabled?: boolean;
    label?: ReactNode;
    error?: string;
    helperText?: ReactNode;
    iconClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    className?: string;
    indeterminate?: boolean;
    ref?: Ref<HTMLInputElement>;
  }
  export function Checkbox({
    variant,
    size,
    labelPlacement,
    labelWeight,
    label,
    disabled,
    error,
    helperText,
    iconClassName,
    labelClassName,
    inputClassName,
    errorClassName,
    helperClassName,
    indeterminate,
    className,
    ref,
    value,
    checked,
    onChange,
    ...checkboxProps
  }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/checkbox/index" {
  export { Checkbox, type CheckboxProps } from "components/checkbox/checkbox";
}
declare module "components/checkbox-group/index" {
  export {
    CheckboxGroup,
    type CheckboxGroupProps,
  } from "components/checkbox-group/checkbox-group";
}
declare module "components/collapse/collapse" {
  import type { ReactNode } from "react";
  export interface CollapseHeader {
    open?: boolean;
    toggle: () => void;
  }
  export interface CollapseProps {
    as?: "div" | "ul";
    header: ({ open, toggle }: CollapseHeader) => ReactNode;
    duration?: number;
    defaultOpen?: boolean;
    panelClassName?: string;
    className?: string;
    children?: ReactNode;
  }
  export function Collapse({
    as,
    header,
    duration,
    defaultOpen,
    panelClassName,
    className,
    children,
  }: CollapseProps): import("react/jsx-runtime").JSX.Element;
  export namespace Collapse {
    var displayName: string;
  }
}
declare module "components/collapse/index" {
  export {
    Collapse,
    type CollapseProps,
    type CollapseHeader,
  } from "components/collapse/collapse";
}
declare module "components/drawer/drawer.lib" {
  import { MouseEvent } from "react";
  export type ResizeProps = {
    placement: "left" | "right" | "top" | "bottom";
    customSize?: number;
  };
  export function useResizeHandler({ placement }: ResizeProps): {
    handleMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
    width: number;
    containerRef: import("react").RefObject<HTMLDivElement>;
  };
}
declare module "components/drawer/drawer" {
  import type { ReactNode } from "react";
  import { type VariantProps } from "tailwind-variants";
  const drawer: import("tailwind-variants").TVReturnType<
    {
      placement: {
        top: {
          panel: string;
          resizer: string;
        };
        right: {
          panel: string;
          resizer: string;
        };
        bottom: {
          panel: string;
          resizer: string;
        };
        left: {
          panel: string;
          resizer: string;
        };
      };
      size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
      };
    },
    {
      root: string;
      overlay: string;
      panel: string;
      resizer: string;
    },
    undefined,
    {
      placement: {
        top: {
          panel: string;
          resizer: string;
        };
        right: {
          panel: string;
          resizer: string;
        };
        bottom: {
          panel: string;
          resizer: string;
        };
        left: {
          panel: string;
          resizer: string;
        };
      };
      size: {
        sm: {};
        md: {};
        lg: {};
        full: {};
      };
    },
    {
      root: string;
      overlay: string;
      panel: string;
      resizer: string;
    },
    import("tailwind-variants").TVReturnType<
      {
        placement: {
          top: {
            panel: string;
            resizer: string;
          };
          right: {
            panel: string;
            resizer: string;
          };
          bottom: {
            panel: string;
            resizer: string;
          };
          left: {
            panel: string;
            resizer: string;
          };
        };
        size: {
          sm: {};
          md: {};
          lg: {};
          full: {};
        };
      },
      {
        root: string;
        overlay: string;
        panel: string;
        resizer: string;
      },
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  type DrawerVariant = VariantProps<typeof drawer>;
  export function isPlacementOnYAxis(
    placement: DrawerVariant["placement"]
  ): boolean;
  export type DrawerSize = DrawerVariant["size"];
  export type DrawerProps = {
    isOpen: boolean;
    onClose(): void;
    placement?: DrawerVariant["placement"];
    size?: DrawerSize;
    customSize?: number;
    enableResizer?: boolean;
    overlayClassName?: string;
    containerClassName?: string;
    resizerClassName?: string;
    className?: string;
    children?: ReactNode;
  };
  export function Drawer({
    isOpen,
    onClose,
    size,
    placement,
    customSize,
    enableResizer,
    overlayClassName,
    containerClassName,
    resizerClassName,
    className,
    children,
  }: DrawerProps): import("react/jsx-runtime").JSX.Element;
  export namespace Drawer {
    var displayName: string;
  }
}
declare module "components/drawer/index" {
  export {
    Drawer,
    type DrawerProps,
    type DrawerSize,
  } from "components/drawer/drawer";
}
declare module "components/dropdown/dropdown-item" {
  import type { Ref, ButtonHTMLAttributes, HTMLAttributes } from "react";
  export type DropdownItemProps = {
    as?: "button" | "li";
    className?: string;
    disabledClassName?: string;
    activeClassName?: string;
    disabled?: boolean;
    ref?: Ref<any>;
  } & ButtonHTMLAttributes<HTMLButtonElement> &
    HTMLAttributes<HTMLLIElement>;
  export function DropdownItem({
    as,
    className,
    children,
    disabled,
    activeClassName,
    disabledClassName,
    ref,
    ...props
  }: DropdownItemProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/dropdown/dropdown.lib" {
  type Align = "start" | "end";
  type Side = "top" | "right" | "bottom" | "left";
  export type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
  type OurPlacementType = `${Side}` | `${Side} ${Align}`;
  export const ourPlacementObject: {
    [key in TheirPlacementType]: OurPlacementType;
  };
}
declare module "components/dropdown/dropdown-context" {
  import { type ReactNode } from "react";
  import type { TheirPlacementType } from "components/dropdown/dropdown.lib";
  type DropdownContextProps = {
    inPortal?: boolean;
    placement: TheirPlacementType;
    gap?: number;
    modal?: boolean;
  };
  export function DropdownProvider({
    value,
    children,
  }: {
    value: DropdownContextProps;
    children: ReactNode;
  }): import("react/jsx-runtime").JSX.Element;
  export function useDropdown(): DropdownContextProps;
}
declare module "components/dropdown/dropdown-menu" {
  import { type ReactNode } from "react";
  import { type MenuItemsProps } from "@headlessui/react";
  type DropdownMenuProps = {
    className?: string;
    anchorWidth?: boolean;
    children?: ReactNode;
  } & MenuItemsProps;
  export function DropdownMenu({
    className,
    children,
    anchorWidth,
    ...props
  }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
  export namespace DropdownMenu {
    var displayName: string;
  }
}
declare module "components/dropdown/dropdown-trigger" {
  import { type MenuButtonProps } from "@headlessui/react";
  export type DropdownTriggerProps = MenuButtonProps;
  export function DropdownTrigger({
    as,
    className,
    children,
    ...props
  }: DropdownTriggerProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/dropdown/dropdown" {
  import type { ReactNode } from "react";
  import { Menu } from "@headlessui/react";
  import { DropdownItem } from "components/dropdown/dropdown-item";
  import { DropdownMenu } from "components/dropdown/dropdown-menu";
  import { DropdownTrigger } from "components/dropdown/dropdown-trigger";
  import type { ExtractProps } from "@/lib/extract-props";
  import type { TheirPlacementType } from "components/dropdown/dropdown.lib";
  export type DropdownProps = ExtractProps<typeof Menu> & {
    gap?: number;
    modal?: boolean;
    inPortal?: boolean;
    placement?: TheirPlacementType;
    children: ReactNode;
    className?: string;
  };
  export function Dropdown({
    inPortal,
    modal,
    placement,
    gap,
    children,
    className,
  }: DropdownProps): import("react/jsx-runtime").JSX.Element;
  export namespace Dropdown {
    var Trigger: typeof DropdownTrigger;
    var Menu: typeof DropdownMenu;
    var Item: typeof DropdownItem;
    var displayName: string;
  }
}
declare module "components/dropdown/index" {
  export { Dropdown, type DropdownProps } from "components/dropdown/dropdown";
}
declare module "components/empty/empty-icons" {
  interface EmptySVGIconProps {
    className?: string;
  }
  export function DefaultIcon({
    className,
  }: EmptySVGIconProps): import("react/jsx-runtime").JSX.Element;
  export function EmptyBoxIcon({
    className,
  }: EmptySVGIconProps): import("react/jsx-runtime").JSX.Element;
  export function EmptyProductBoxIcon({
    className,
  }: EmptySVGIconProps): import("react/jsx-runtime").JSX.Element;
  export function SearchNotFoundIcon({
    className,
  }: EmptySVGIconProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/empty/empty" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const empty: import("tailwind-variants").TVReturnType<
    {
      alignment: {
        start: string;
        center: string;
        end: string;
      };
    },
    undefined,
    "flex flex-col",
    {
      alignment: {
        start: string;
        center: string;
        end: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        alignment: {
          start: string;
          center: string;
          end: string;
        };
      },
      undefined,
      "flex flex-col",
      unknown,
      unknown,
      undefined
    >
  >;
  type EmptyTextTagProps = "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  type EmptyVariant = VariantProps<typeof empty>;
  export interface EmptyProps {
    image?: React.ReactNode;
    imageClassName?: string;
    defaultImageClassName?: string;
    text?: string;
    textAs?: EmptyTextTagProps;
    textClassName?: string;
    alignment?: EmptyVariant["alignment"];
    className?: string;
  }
  export function Empty({
    image,
    className,
    text,
    textAs,
    imageClassName,
    textClassName,
    alignment,
    defaultImageClassName,
    children,
  }: React.PropsWithChildren<EmptyProps>): import("react/jsx-runtime").JSX.Element;
  export namespace Empty {
    var displayName: string;
  }
}
declare module "components/empty/index" {
  export { Empty, type EmptyProps } from "components/empty/empty";
  export {
    EmptyBoxIcon,
    EmptyProductBoxIcon,
    SearchNotFoundIcon,
  } from "components/empty/empty-icons";
}
declare module "components/upload/file-input" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  import { labelStyles } from "@/lib/label-size";
  const fileInput: import("tailwind-variants").TVReturnType<
    {
      variant: {
        outline: {
          container: string;
        };
        text: {
          container: string;
        };
      };
      size: {
        sm: {
          container: string;
          button: string;
        };
        md: {
          container: string;
          button: string;
        };
        lg: {
          container: string;
          button: string;
        };
      };
      disabled: {
        true: {
          container: string;
          input: string;
          button: string;
        };
      };
      error: {
        true: {
          container: string;
        };
      };
      clearable: {
        true: {
          input: string;
        };
      };
    },
    {
      container: string;
      input: string;
      button: string;
    },
    undefined,
    {
      variant: {
        outline: {
          container: string;
        };
        text: {
          container: string;
        };
      };
      size: {
        sm: {
          container: string;
          button: string;
        };
        md: {
          container: string;
          button: string;
        };
        lg: {
          container: string;
          button: string;
        };
      };
      disabled: {
        true: {
          container: string;
          input: string;
          button: string;
        };
      };
      error: {
        true: {
          container: string;
        };
      };
      clearable: {
        true: {
          input: string;
        };
      };
    },
    {
      container: string;
      input: string;
      button: string;
    },
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          outline: {
            container: string;
          };
          text: {
            container: string;
          };
        };
        size: {
          sm: {
            container: string;
            button: string;
          };
          md: {
            container: string;
            button: string;
          };
          lg: {
            container: string;
            button: string;
          };
        };
        disabled: {
          true: {
            container: string;
            input: string;
            button: string;
          };
        };
        error: {
          true: {
            container: string;
          };
        };
        clearable: {
          true: {
            input: string;
          };
        };
      },
      {
        container: string;
        input: string;
        button: string;
      },
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  export interface FileInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    variant?: VariantProps<typeof fileInput>["variant"];
    size?: VariantProps<typeof fileInput>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    ref?: React.Ref<HTMLInputElement>;
  }
  export function FileInput({
    className,
    variant,
    size,
    disabled,
    placeholder,
    label,
    labelWeight,
    error,
    clearable,
    onClear,
    readOnly,
    helperText,
    labelClassName,
    inputClassName,
    errorClassName,
    helperClassName,
    ref,
    ...inputProps
  }: FileInputProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/upload/upload-zone" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  import { labelStyles } from "@/lib/label-size";
  const uploadZone: import("tailwind-variants").TVReturnType<
    {
      variant: {
        outline: {
          uploadZoneArea: string;
        };
        flat: {
          uploadZoneArea: string;
        };
      };
      size: {
        sm: {
          uploadZoneArea: string;
          text: string;
          icon: string;
        };
        md: {
          uploadZoneArea: string;
          text: string;
          icon: string;
        };
        lg: {
          uploadZoneArea: string;
          text: string;
          icon: string;
        };
      };
      isDragging: {
        true: {
          uploadZoneArea: string;
        };
      };
      disabled: {
        true: {
          uploadZoneArea: string;
          input: string;
        };
      };
      error: {
        true: {
          uploadZoneArea: string;
        };
      };
    },
    {
      root: string;
      uploadZoneArea: string;
      input: string;
      content: string;
      icon: string;
      text: string;
      previewContainer: string;
      previewGrid: string;
      previewItem: string;
      previewImage: string;
      previewRemoveButton: string;
    },
    undefined,
    {
      variant: {
        outline: {
          uploadZoneArea: string;
        };
        flat: {
          uploadZoneArea: string;
        };
      };
      size: {
        sm: {
          uploadZoneArea: string;
          text: string;
          icon: string;
        };
        md: {
          uploadZoneArea: string;
          text: string;
          icon: string;
        };
        lg: {
          uploadZoneArea: string;
          text: string;
          icon: string;
        };
      };
      isDragging: {
        true: {
          uploadZoneArea: string;
        };
      };
      disabled: {
        true: {
          uploadZoneArea: string;
          input: string;
        };
      };
      error: {
        true: {
          uploadZoneArea: string;
        };
      };
    },
    {
      root: string;
      uploadZoneArea: string;
      input: string;
      content: string;
      icon: string;
      text: string;
      previewContainer: string;
      previewGrid: string;
      previewItem: string;
      previewImage: string;
      previewRemoveButton: string;
    },
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          outline: {
            uploadZoneArea: string;
          };
          flat: {
            uploadZoneArea: string;
          };
        };
        size: {
          sm: {
            uploadZoneArea: string;
            text: string;
            icon: string;
          };
          md: {
            uploadZoneArea: string;
            text: string;
            icon: string;
          };
          lg: {
            uploadZoneArea: string;
            text: string;
            icon: string;
          };
        };
        isDragging: {
          true: {
            uploadZoneArea: string;
          };
        };
        disabled: {
          true: {
            uploadZoneArea: string;
            input: string;
          };
        };
        error: {
          true: {
            uploadZoneArea: string;
          };
        };
      },
      {
        root: string;
        uploadZoneArea: string;
        input: string;
        content: string;
        icon: string;
        text: string;
        previewContainer: string;
        previewGrid: string;
        previewItem: string;
        previewImage: string;
        previewRemoveButton: string;
      },
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  export interface UploadZoneProps
    extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "onChange" | "value" | "placeholder" | "onDrop"
    > {
    variant?: VariantProps<typeof uploadZone>["variant"];
    size?: VariantProps<typeof uploadZone>["size"];
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    uploadZoneClassName?: string;
    contentClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    previewClassName?: string;
    className?: string;
    multiple?: boolean;
    accept?: string;
    placeholder?: React.ReactNode;
    icon?: React.ReactNode;
    value?: FileList | File[] | null;
    onChange?: (files: FileList | null) => void;
    onDrop?: (files: FileList) => void;
    ref?: React.Ref<HTMLInputElement>;
    name?: string;
  }
  export function UploadZone({
    className,
    variant,
    size,
    disabled,
    label,
    labelWeight,
    error,
    helperText,
    labelClassName,
    uploadZoneClassName,
    contentClassName,
    helperClassName,
    errorClassName,
    previewClassName,
    multiple,
    accept,
    placeholder,
    icon,
    value,
    onChange,
    onDrop,
    name,
    ref,
    ...inputProps
  }: UploadZoneProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/input/input" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  import { labelStyles } from "@/lib/label-size";
  const inputContainer: import("tailwind-variants").TVReturnType<
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
    },
    undefined,
    "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]",
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          text: string;
          outline: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        error: {
          true: string;
        };
      },
      undefined,
      "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export interface InputProps
    extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "prefix" | "suffix"
    > {
    type?:
      | "text"
      | "email"
      | "number"
      | "tel"
      | "search"
      | "url"
      | "time"
      | "date"
      | "week"
      | "month"
      | "datetime-local";
    variant?: VariantProps<typeof inputContainer>["variant"];
    size?: VariantProps<typeof inputContainer>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    prefixClassName?: string;
    suffixClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    ref?: React.Ref<HTMLInputElement>;
  }
  export function Input({
    className,
    type,
    variant,
    size,
    disabled,
    placeholder,
    label,
    labelWeight,
    error,
    clearable,
    onClear,
    prefix,
    suffix,
    readOnly,
    helperText,
    labelClassName,
    inputClassName,
    errorClassName,
    helperClassName,
    prefixClassName,
    suffixClassName,
    ref,
    ...inputProps
  }: InputProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/input/index" {
  export { Input, type InputProps } from "components/input/input";
}
declare module "components/modal/modal" {
  import type { ReactNode } from "react";
  import { type VariantProps } from "tailwind-variants";
  const modal: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: {
          panel: string;
        };
        md: {
          panel: string;
        };
        lg: {
          panel: string;
        };
        full: {
          panel: string;
        };
      };
    },
    {
      root: string;
      area: string;
      overlay: string;
      panel: string;
    },
    undefined,
    {
      size: {
        sm: {
          panel: string;
        };
        md: {
          panel: string;
        };
        lg: {
          panel: string;
        };
        full: {
          panel: string;
        };
      };
    },
    {
      root: string;
      area: string;
      overlay: string;
      panel: string;
    },
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: {
            panel: string;
          };
          md: {
            panel: string;
          };
          lg: {
            panel: string;
          };
          full: {
            panel: string;
          };
        };
      },
      {
        root: string;
        area: string;
        overlay: string;
        panel: string;
      },
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  type ModalVariant = VariantProps<typeof modal>;
  export type ModalSize = ModalVariant["size"];
  export type ModalProps = {
    isOpen: boolean;
    onClose(): void;
    size?: ModalSize;
    noGutter?: boolean;
    customSize?: number;
    overlayClassName?: string;
    containerClassName?: string;
    className?: string;
    children?: ReactNode;
  };
  export function Modal({
    isOpen,
    onClose,
    children,
    noGutter,
    className,
    size,
    customSize,
    overlayClassName,
    containerClassName,
  }: ModalProps): import("react/jsx-runtime").JSX.Element;
  export namespace Modal {
    var displayName: string;
  }
}
declare module "components/modal/index" {
  export {
    Modal,
    type ModalProps,
    type ModalSize,
  } from "components/modal/modal";
}
declare module "components/password/password-toggle-icon" {
  const passwordToggleIconClasses: {
    size: {
      sm: string;
      md: string;
      DEFAULT: string;
      lg: string;
      xl: string;
    };
  };
  interface PasswordToggleIconProps {
    isVisible?: boolean;
    iconSize?: keyof typeof passwordToggleIconClasses.size;
  }
  export function PasswordToggleIcon({
    iconSize,
    isVisible,
  }: PasswordToggleIconProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/password/password" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  import { labelStyles } from "@/lib/label-size";
  const inputContainer: import("tailwind-variants").TVReturnType<
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
    },
    undefined,
    "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]",
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          text: string;
          outline: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        error: {
          true: string;
        };
      },
      undefined,
      "flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export interface PasswordProps
    extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "prefix"
    > {
    variant?: VariantProps<typeof inputContainer>["variant"];
    size?: VariantProps<typeof inputContainer>["size"];
    placeholder?: string;
    disabled?: boolean;
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    prefix?: React.ReactNode;
    visibilityToggleIcon?(visible: boolean): React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    inputClassName?: string;
    prefixClassName?: string;
    isPasswordVisible?: boolean;
    visibilityToggleIconClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    hideVisibilityToggleIcon?: boolean;
    ref?: React.Ref<HTMLInputElement>;
  }
  export function Password({
    className,
    variant,
    size,
    disabled,
    placeholder,
    label,
    labelWeight,
    error,
    clearable,
    onClear,
    prefix,
    readOnly,
    helperText,
    labelClassName,
    inputClassName,
    errorClassName,
    helperClassName,
    prefixClassName,
    isPasswordVisible,
    visibilityToggleIcon,
    hideVisibilityToggleIcon,
    visibilityToggleIconClassName,
    ref,
    ...inputProps
  }: PasswordProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/password/index" {
  export { Password, type PasswordProps } from "components/password/password";
}
declare module "components/pin-code/pin-code" {
  import {
    type Dispatch,
    type SetStateAction,
    type InputHTMLAttributes,
  } from "react";
  import { type VariantProps } from "tailwind-variants";
  const pinCode: import("tailwind-variants").TVReturnType<
    {
      variant: {
        flat: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
    },
    undefined,
    "block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]",
    {
      variant: {
        flat: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          flat: string;
          outline: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        error: {
          true: string;
        };
      },
      undefined,
      "block peer text-center bg-transparent mr-2 focus:placeholder:opacity-0 focus:outline-none transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]",
      unknown,
      unknown,
      undefined
    >
  >;
  type PinCodeVariant = VariantProps<typeof pinCode>;
  export interface PinCodeProps
    extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "type" | "value"
    > {
    setValue?: Dispatch<SetStateAction<string | number | undefined>>;
    type?: "text" | "number";
    mask?: boolean;
    length?: number;
    center?: boolean;
    placeholder?: string;
    size?: PinCodeVariant["size"];
    variant?: PinCodeVariant["variant"];
    error?: string;
    inputClassName?: string;
    errorClassName?: string;
    label?: string;
  }
  export function PinCode({
    type,
    defaultValue,
    mask,
    length,
    setValue,
    center,
    size,
    variant,
    placeholder,
    error,
    className,
    inputClassName,
    errorClassName,
    disabled,
    onChange,
    label,
    ...props
  }: PinCodeProps): import("react/jsx-runtime").JSX.Element;
  export namespace PinCode {
    var displayName: string;
  }
}
declare module "components/pin-code/index" {
  export { PinCode, type PinCodeProps } from "components/pin-code/pin-code";
}
declare module "components/popover/popover-content" {
  import type { ReactNode, Dispatch, SetStateAction } from "react";
  import { type VariantProps } from "tailwind-variants";
  const popover: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    "z-[9999] min-w-max bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border-[length:var(--border-width)] border-border rounded-[var(--border-radius)] shadow-[0px_8px_24px_rgba(149,157,165,0.2)]",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
      },
      undefined,
      "z-[9999] min-w-max bg-background dark:bg-muted/80 dark:backdrop-blur-3xl border-[length:var(--border-width)] border-border rounded-[var(--border-radius)] shadow-[0px_8px_24px_rgba(149,157,165,0.2)]",
      unknown,
      unknown,
      undefined
    >
  >;
  type PopoverVariant = VariantProps<typeof popover>;
  export type Size = PopoverVariant["size"];
  type PopoverContentProps = {
    children:
      | ReactNode
      | (({
          open,
          setOpen,
        }: {
          open: boolean;
          setOpen: Dispatch<SetStateAction<boolean>>;
        }) => ReactNode);
    className?: string;
  };
  export function PopoverContent({
    children,
    className,
  }: PopoverContentProps): import("react/jsx-runtime").JSX.Element;
  export namespace PopoverContent {
    var displayName: string;
  }
}
declare module "components/popover/popover-context" {
  import {
    type CSSProperties,
    type Dispatch,
    type SetStateAction,
    type RefObject,
    type ReactNode,
  } from "react";
  import { type Placement, type Strategy } from "@floating-ui/react";
  import type { Size } from "components/popover/popover-content";
  const tooltipAnimation: {
    readonly fadeIn: {
      readonly initial: {
        readonly opacity: 0;
      };
      readonly close: {
        readonly opacity: 0;
      };
    };
    readonly zoomIn: {
      readonly initial: {
        readonly opacity: 0;
        readonly transform: "scale(0.96)";
      };
      readonly close: {
        readonly opacity: 0;
        readonly transform: "scale(0.96)";
      };
    };
    readonly slideIn: {
      readonly initial: {
        readonly opacity: 0;
        readonly transform: "translateY(4px)";
      };
      readonly close: {
        readonly opacity: 0;
        readonly transform: "translateY(4px)";
      };
    };
  };
  type CommonTypes = {
    showArrow?: boolean;
    enableOverlay?: boolean;
    size?: Size;
    arrowClassName?: string;
    overlayClassName?: string;
  };
  type PopoverContextProps = {
    open: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isMounted: boolean;
    styles: CSSProperties;
    getReferenceProps: (userProps?: any) => Record<string, unknown>;
    getFloatingProps: (userProps?: any) => Record<string, unknown>;
    refs: any;
    x: number | null;
    y: number | null;
    strategy: Strategy;
    arrowRef: RefObject<SVGSVGElement | null>;
    context: any;
  } & CommonTypes;
  export type PopoverProviderProps = {
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    placement?: Placement;
    animation?: keyof typeof tooltipAnimation;
    gap?: number;
  } & CommonTypes;
  export function PopoverProvider({
    value,
    children,
  }: {
    value: PopoverProviderProps;
    children: ReactNode;
  }): import("react/jsx-runtime").JSX.Element;
  export function usePopover(): PopoverContextProps;
}
declare module "components/popover/popover-trigger" {
  import type { ReactElement } from "react";
  export function PopoverTrigger({
    children,
  }: {
    children: ReactElement;
  }): import("react/jsx-runtime").JSX.Element;
}
declare module "components/popover/popover" {
  import type { ReactNode } from "react";
  import { PopoverTrigger } from "components/popover/popover-trigger";
  import { PopoverContent } from "components/popover/popover-content";
  import { type PopoverProviderProps } from "components/popover/popover-context";
  export type PopoverProps = PopoverProviderProps & {
    children: ReactNode;
  };
  export function Popover({
    isOpen,
    setIsOpen,
    gap,
    animation,
    placement,
    enableOverlay,
    showArrow,
    size,
    arrowClassName,
    overlayClassName,
    children,
  }: PopoverProps): import("react/jsx-runtime").JSX.Element;
  export namespace Popover {
    var Trigger: typeof PopoverTrigger;
    var Content: typeof PopoverContent;
    var displayName: string;
  }
}
declare module "components/popover/index" {
  export { Popover, type PopoverProps } from "components/popover/popover";
}
declare module "components/typography/title/title" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const title: import("tailwind-variants").TVReturnType<
    {
      as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
      fontWeight: any;
    },
    undefined,
    "somaui-title text-text-primary",
    {
      as: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
      fontWeight: any;
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        as: {
          h1: string;
          h2: string;
          h3: string;
          h4: string;
          h5: string;
          h6: string;
        };
        fontWeight: any;
      },
      undefined,
      "somaui-title text-text-primary",
      unknown,
      unknown,
      undefined
    >
  >;
  export type TitleProps = VariantProps<typeof title> & {
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>;
  export function Title({
    as,
    fontWeight,
    children,
    className,
    ...props
  }: React.PropsWithChildren<TitleProps>): import("react/jsx-runtime").JSX.Element;
  export namespace Title {
    var displayName: string;
  }
}
declare module "components/typography/title/index" {
  export { Title, type TitleProps } from "components/typography/title/title";
}
declare module "components/typography/text/text" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const text: import("tailwind-variants").TVReturnType<
    {
      as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
      };
      fontWeight: any;
    },
    undefined,
    "somaui-text text-text-secondary",
    {
      as: {
        p: string;
        i: string;
        b: string;
        q: string;
        em: string;
        strong: string;
        small: string;
        span: string;
        del: string;
        mark: string;
        abbr: string;
        pre: string;
        code: string;
        kbd: string;
        blockquote: string;
        sub: string;
        sup: string;
      };
      fontWeight: any;
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        as: {
          p: string;
          i: string;
          b: string;
          q: string;
          em: string;
          strong: string;
          small: string;
          span: string;
          del: string;
          mark: string;
          abbr: string;
          pre: string;
          code: string;
          kbd: string;
          blockquote: string;
          sub: string;
          sup: string;
        };
        fontWeight: any;
      },
      undefined,
      "somaui-text text-text-secondary",
      unknown,
      unknown,
      undefined
    >
  >;
  export type TextProps = VariantProps<typeof text> & {
    title?: string;
    className?: string;
  } & React.HTMLAttributes<any>;
  export function Text({
    as,
    fontWeight,
    title,
    children,
    className,
    ...props
  }: React.PropsWithChildren<TextProps>): import("react/jsx-runtime").JSX.Element;
  export namespace Text {
    var displayName: string;
  }
}
declare module "components/typography/text/index" {
  export { Text, type TextProps } from "components/typography/text/text";
}
declare module "components/typography/bold/bold" {
  import React from "react";
  export type BoldProps = {
    className?: string;
  } & React.HTMLAttributes<any>;
  export function Bold({
    children,
    className,
    ...props
  }: React.PropsWithChildren<BoldProps>): import("react/jsx-runtime").JSX.Element;
  export namespace Bold {
    var displayName: string;
  }
}
declare module "components/typography/bold/index" {
  export { Bold, type BoldProps } from "components/typography/bold/bold";
}
declare module "components/typography/italic/italic" {
  import React from "react";
  export type ItalicProps = {
    className?: string;
  } & React.HTMLAttributes<any>;
  export function Italic({
    children,
    className,
    ...props
  }: React.PropsWithChildren<ItalicProps>): import("react/jsx-runtime").JSX.Element;
  export namespace Italic {
    var displayName: string;
  }
}
declare module "components/typography/italic/index" {
  export {
    Italic,
    type ItalicProps,
  } from "components/typography/italic/italic";
}
declare module "components/typography/code/code" {
  import React from "react";
  export type CodeProps = {
    className?: string;
  } & React.HTMLAttributes<HTMLPreElement>;
  export function Code({
    children,
    className,
    ...props
  }: React.PropsWithChildren<CodeProps>): import("react/jsx-runtime").JSX.Element;
  export namespace Code {
    var displayName: string;
  }
}
declare module "components/typography/code/index" {
  export { Code, type CodeProps } from "components/typography/code/code";
}
declare module "components/typography/blockquote/blockquote" {
  import React from "react";
  export type BlockquoteProps = {
    className?: string;
  } & React.HTMLAttributes<HTMLQuoteElement>;
  export function Blockquote({
    children,
    className,
    ...props
  }: React.PropsWithChildren<BlockquoteProps>): import("react/jsx-runtime").JSX.Element;
  export namespace Blockquote {
    var displayName: string;
  }
}
declare module "components/typography/blockquote/index" {
  export {
    Blockquote,
    type BlockquoteProps,
  } from "components/typography/blockquote/blockquote";
}
declare module "components/typography/index" {
  export * from "components/typography/title/index";
  export * from "components/typography/text/index";
  export * from "components/typography/bold/index";
  export * from "components/typography/italic/index";
  export * from "components/typography/code/index";
  export * from "components/typography/blockquote/index";
}
declare module "components/progressbar/progressbar" {
  import type { HTMLAttributes } from "react";
  import { type VariantProps } from "tailwind-variants";
  const progressTrack: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    "relative w-full bg-muted rounded-full overflow-hidden",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
      },
      undefined,
      "relative w-full bg-muted rounded-full overflow-hidden",
      unknown,
      unknown,
      undefined
    >
  >;
  const progressBar: import("tailwind-variants").TVReturnType<
    {
      color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    "absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full",
    {
      color: {
        primary: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        color: {
          primary: string;
          secondary: string;
          danger: string;
          info: string;
          success: string;
          warning: string;
        };
      },
      undefined,
      "absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full",
      unknown,
      unknown,
      undefined
    >
  >;
  type ProgressTrackVariant = VariantProps<typeof progressTrack>;
  type ProgressBarVariant = VariantProps<typeof progressBar>;
  export interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
    value?: number;
    label?: string;
    size?: ProgressTrackVariant["size"];
    color?: ProgressBarVariant["color"];
    labelPosition?: "insideBar" | "inlineLeft" | "inlineRight";
    className?: string;
    trackClassName?: string;
    barClassName?: string;
    labelClassName?: string;
  }
  export function Progressbar({
    value,
    label,
    size,
    color,
    labelPosition,
    className,
    barClassName,
    trackClassName,
    labelClassName,
    ...props
  }: ProgressbarProps): import("react/jsx-runtime").JSX.Element;
  export namespace Progressbar {
    var displayName: string;
  }
}
declare module "components/progressbar/index" {
  export {
    Progressbar,
    type ProgressbarProps,
  } from "components/progressbar/progressbar";
}
declare module "components/radial-progressbar/radial-progressbar" {
  import { type VariantProps } from "tailwind-variants";
  const radialProgress: import("tailwind-variants").TVReturnType<
    {
      startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
      };
    },
    undefined,
    "transform transition-all duration-200",
    {
      startAngle: {
        0: string;
        45: string;
        90: string;
        180: string;
        270: string;
        360: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        startAngle: {
          0: string;
          45: string;
          90: string;
          180: string;
          270: string;
          360: string;
        };
      },
      undefined,
      "transform transition-all duration-200",
      unknown,
      unknown,
      undefined
    >
  >;
  type RadialProgressVariant = VariantProps<typeof radialProgress>;
  export type RadialProgressBarProps = {
    value?: number;
    size?: number;
    trackColor?: string;
    progressbarWidth?: number;
    progressColor?: string;
    gradientColor?: string;
    gradientId?: string;
    trackClassName?: string;
    progressBarClassName?: string;
    useParentResponsive?: boolean;
    startAngle?: RadialProgressVariant["startAngle"];
  };
  export function RadialProgressBar({
    value,
    size,
    trackColor,
    progressColor,
    gradientColor,
    gradientId,
    startAngle,
    trackClassName,
    progressbarWidth,
    useParentResponsive,
    progressBarClassName,
  }: RadialProgressBarProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/radial-progressbar/index" {
  export {
    RadialProgressBar,
    type RadialProgressBarProps,
  } from "components/radial-progressbar/radial-progressbar";
}
declare module "components/radio-group/radio-group" {
  import {
    type ReactNode,
    type HTMLAttributes,
    type Dispatch,
    type SetStateAction,
    type ChangeEvent,
  } from "react";
  type RadioGroupContextType = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isChecked: (value: string) => boolean;
  };
  export function useRadioGroup(): RadioGroupContextType;
  export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    children: ReactNode;
  }
  export function RadioGroup({
    value,
    setValue,
    children,
    ...props
  }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/radio/radio" {
  import type { InputHTMLAttributes, ReactNode, Ref } from "react";
  import { type VariantProps } from "tailwind-variants";
  import { labelStyles } from "@/lib/label-size";
  const radio: import("tailwind-variants").TVReturnType<
    {
      variant: {
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    "disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted focus:ring-border focus:ring-offset-background text-primary dark:text-primary-foreground border-[length:var(--border-width)]",
    {
      variant: {
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          outline: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
      },
      undefined,
      "disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted focus:ring-border focus:ring-offset-background text-primary dark:text-primary-foreground border-[length:var(--border-width)]",
      unknown,
      unknown,
      undefined
    >
  >;
  type RadioVariant = VariantProps<typeof radio>;
  export interface RadioProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    variant?: RadioVariant["variant"];
    size?: RadioVariant["size"];
    labelPlacement?: "left" | "right";
    labelWeight?: keyof typeof labelStyles.weight;
    disabled?: boolean;
    label?: ReactNode;
    error?: string;
    helperText?: ReactNode;
    className?: string;
    labelClassName?: string;
    inputClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    ref?: Ref<HTMLInputElement>;
  }
  export function Radio({
    variant,
    size,
    labelPlacement,
    labelWeight,
    label,
    disabled,
    error,
    helperText,
    className,
    labelClassName,
    inputClassName,
    errorClassName,
    helperClassName,
    ref,
    value,
    checked,
    onChange,
    ...radioProps
  }: RadioProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/radio/index" {
  export { Radio, type RadioProps } from "components/radio/radio";
}
declare module "components/radio-group/index" {
  export {
    RadioGroup,
    type RadioGroupProps,
  } from "components/radio-group/radio-group";
}
declare module "components/stepper/step" {
  import { type HTMLAttributes, type ReactNode } from "react";
  const lineClasses: {
    base: string;
    top: {
      noDot: {
        sm: string;
        md: string;
        lg: string;
      };
      dot: {
        sm: string;
        md: string;
        lg: string;
      };
    };
    titleLine: string;
    color: {
      primary: string;
      secondary: string;
      danger: string;
      info: string;
      success: string;
      warning: string;
    };
  };
  const circleClasses: {
    base: string;
    size: {
      sm: string;
      md: string;
      lg: string;
    };
    waiting: string;
    variant: {
      solid: {
        base: string;
        color: {
          primary: string;
          secondary: string;
          danger: string;
          info: string;
          success: string;
          warning: string;
        };
      };
      outline: {
        base: string;
        color: {
          primary: string;
          secondary: string;
          danger: string;
          info: string;
          success: string;
          warning: string;
        };
      };
    };
  };
  export interface StepProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    title: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    index?: number;
    status?: "waiting" | "in-progress" | "completed" | "error";
    size?: keyof typeof circleClasses.size;
    variant?: keyof typeof circleClasses.variant;
    color?: keyof typeof lineClasses.color;
    dot?: boolean;
    className?: string;
    circleClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  }
  export function Step({
    title,
    description,
    icon,
    index: propsIndex,
    status: propsStatus,
    size,
    variant,
    color,
    dot: propsDot,
    className: propsClassName,
    circleClassName: propsCircleClassName,
    contentClassName: propsContentClassName,
    titleClassName: propsTitleClassName,
    descriptionClassName: propsDescriptionClassName,
  }: StepProps): import("react/jsx-runtime").JSX.Element;
  export namespace Step {
    var displayName: string;
  }
}
declare module "components/stepper/stepper" {
  import { type ReactNode, type HTMLAttributes } from "react";
  const containerClasses: {
    base: string;
    line: string;
    verticalLine: {
      base: string;
      left: {
        noDot: {
          sm: string;
          md: string;
          lg: string;
        };
        dot: {
          sm: string;
          md: string;
          lg: string;
        };
      };
    };
  };
  type StepperContextType = {
    currentIndex: number;
    direction: "horizontal" | "vertical";
    dot: boolean;
    dotClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    registerStep: (id: string) => number;
    getStepClassName: (
      size: keyof typeof containerClasses.verticalLine.left.noDot
    ) => string;
    getCircleClassName: () => string;
    getContentClassName: () => string;
  };
  export function useStepper(): StepperContextType;
  export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
    currentIndex?: number;
    direction?: "horizontal" | "vertical";
    dot?: boolean;
    children: ReactNode;
    dotClassName?: string;
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  }
  export function Stepper({
    currentIndex,
    children,
    direction,
    dot,
    className,
    titleClassName,
    dotClassName,
    contentClassName,
    descriptionClassName,
  }: StepperProps): import("react/jsx-runtime").JSX.Element;
  export namespace Stepper {
    var Step: typeof import("components/stepper/step").Step;
    var displayName: string;
  }
}
declare module "components/stepper/index" {
  export { Stepper, type StepperProps } from "components/stepper/stepper";
}
declare module "components/switch/switch" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  const switchTV: import("tailwind-variants").TVReturnType<
    {
      variant: {
        flat: {
          container: string;
          knob: string;
        };
        outline: {
          container: string;
          knob: string;
        };
      };
      size: {
        sm: {
          container: string;
          knob: string;
          icon: string;
          label: string;
          input: string;
        };
        md: {
          container: string;
          knob: string;
          icon: string;
          label: string;
          input: string;
        };
        lg: {
          container: string;
          knob: string;
          icon: string;
          label: string;
          input: string;
        };
      };
      labelPlacement: {
        left: {
          label: string;
        };
        right: {
          label: string;
        };
      };
      labelWeight: {
        normal: {
          label: string;
        };
        medium: {
          label: string;
        };
        semibold: {
          label: string;
        };
        bold: {
          label: string;
        };
      };
      disabled: {
        true: {
          container: string;
          knob: string;
          label: string;
        };
      };
    },
    {
      container: string;
      knob: string;
      input: string;
      icon: string;
      label: string;
    },
    undefined,
    {
      variant: {
        flat: {
          container: string;
          knob: string;
        };
        outline: {
          container: string;
          knob: string;
        };
      };
      size: {
        sm: {
          container: string;
          knob: string;
          icon: string;
          label: string;
          input: string;
        };
        md: {
          container: string;
          knob: string;
          icon: string;
          label: string;
          input: string;
        };
        lg: {
          container: string;
          knob: string;
          icon: string;
          label: string;
          input: string;
        };
      };
      labelPlacement: {
        left: {
          label: string;
        };
        right: {
          label: string;
        };
      };
      labelWeight: {
        normal: {
          label: string;
        };
        medium: {
          label: string;
        };
        semibold: {
          label: string;
        };
        bold: {
          label: string;
        };
      };
      disabled: {
        true: {
          container: string;
          knob: string;
          label: string;
        };
      };
    },
    {
      container: string;
      knob: string;
      input: string;
      icon: string;
      label: string;
    },
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          flat: {
            container: string;
            knob: string;
          };
          outline: {
            container: string;
            knob: string;
          };
        };
        size: {
          sm: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
          };
          md: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
          };
          lg: {
            container: string;
            knob: string;
            icon: string;
            label: string;
            input: string;
          };
        };
        labelPlacement: {
          left: {
            label: string;
          };
          right: {
            label: string;
          };
        };
        labelWeight: {
          normal: {
            label: string;
          };
          medium: {
            label: string;
          };
          semibold: {
            label: string;
          };
          bold: {
            label: string;
          };
        };
        disabled: {
          true: {
            container: string;
            knob: string;
            label: string;
          };
        };
      },
      {
        container: string;
        knob: string;
        input: string;
        icon: string;
        label: string;
      },
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  export interface SwitchProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: React.ReactNode;
    labelPlacement?: VariantProps<typeof switchTV>["labelPlacement"];
    labelWeight?: VariantProps<typeof switchTV>["labelWeight"];
    size?: VariantProps<typeof switchTV>["size"];
    disabled?: boolean;
    variant?: VariantProps<typeof switchTV>["variant"];
    onIcon?: React.ReactNode;
    offIcon?: React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    switchClassName?: string;
    switchKnobClassName?: string;
    errorClassName?: string;
    helperClassName?: string;
    className?: string;
    ref?: React.Ref<HTMLInputElement>;
  }
  export function Switch({
    label,
    labelPlacement,
    labelWeight,
    size,
    variant,
    disabled,
    onIcon,
    offIcon,
    error,
    helperText,
    className,
    labelClassName,
    switchClassName,
    switchKnobClassName,
    errorClassName,
    helperClassName,
    ref,
    checked,
    defaultChecked,
    ...props
  }: SwitchProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/switch/index" {
  export { Switch, type SwitchProps } from "components/switch/switch";
}
declare module "lib/use-rect" {
  import { MouseEvent, FocusEvent, RefObject } from "react";
  export const getElementOffset: (el?: HTMLElement | null | undefined) => {
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
  export const isUnplacedRect: (rect?: ReactiveDomReact) => boolean;
  export const getRefRect: (
    ref?: RefObject<HTMLElement | null>,
    getContainer?: () => HTMLElement | null
  ) => ReactiveDomReact;
  export const getEventRect: (
    event?: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>,
    getContainer?: () => HTMLElement | null
  ) => ReactiveDomReact;
  export const useRect: (
    initialState?: ReactiveDomReact | (() => ReactiveDomReact)
  ) => {
    rect: ReactiveDomReact;
    setRect: (
      eventOrRef:
        | MouseEvent<HTMLElement>
        | FocusEvent<HTMLElement>
        | RefObject<HTMLElement | null>,
      getContainer?: () => HTMLElement | null
    ) => void;
  };
}
declare module "lib/use-previous" {
  const usePrevious: <T>(state: T) => T | undefined | null;
  export default usePrevious;
}
declare module "components/highlight" {
  import React from "react";
  import { ReactiveDomReact } from "lib/use-rect";
  type Props = {
    rect: ReactiveDomReact;
    visible?: boolean;
    hoverHeightRatio?: number;
    hoverWidthRatio?: number;
    activeOpacity?: number;
  };
  type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
  export type HighlightProps = Props & NativeAttrs;
  export function Highlight({
    rect,
    visible,
    hoverHeightRatio,
    hoverWidthRatio,
    activeOpacity,
    className,
    ...props
  }: HighlightProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/tabs/tab-context" {
  import {
    type MutableRefObject,
    type MouseEvent,
    type FocusEvent,
    type Dispatch,
    type SetStateAction,
    type ReactNode,
  } from "react";
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
    setRect: (
      eventOrRef:
        | MouseEvent<HTMLElement>
        | FocusEvent<HTMLElement>
        | MutableRefObject<HTMLElement | null>,
      getContainer?: () => HTMLElement | null
    ) => void;
    vertical?: boolean;
    hideHoverAnimation?: boolean;
    displayHighlight?: boolean;
    setDisplayHighlight?: Dispatch<SetStateAction<boolean>>;
    activeTab?: number;
    highlightClassName?: string;
  };
  export function TabProvider({
    value,
    children,
  }: {
    value: TabContextProps;
    children: ReactNode;
  }): import("react/jsx-runtime").JSX.Element;
  export function useTab(): TabContextProps;
}
declare module "components/tabs/tab-lib" {
  export function useRePositioningActiveTab({ ref, activeTab }: any): void;
}
declare module "components/tabs/tab-list" {
  import type { ReactNode } from "react";
  import { type TabListProps as HeadlessTabListProps } from "@headlessui/react";
  import type { ExtractProps } from "@/lib/extract-props";
  export type TabListProps = Omit<
    ExtractProps<HeadlessTabListProps>,
    "children"
  > & {
    children: ReactNode;
  };
  export function TabList({
    children,
    className,
    ...props
  }: TabListProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/tabs/tab-list-item" {
  import { type TabProps } from "@headlessui/react";
  import type { ExtractProps } from "@/lib/extract-props";
  export type TabListItemProps = ExtractProps<TabProps> & {
    activeClassName?: string;
  };
  export function TabListItem({
    children,
    className,
    activeClassName,
    onMouseOver,
    ...props
  }: TabListItemProps): import("react/jsx-runtime").JSX.Element;
  export namespace TabListItem {
    var displayName: string;
  }
}
declare module "components/tabs/tab-panels" {
  import { type TabPanelsProps as HeadlessTabPanelsProps } from "@headlessui/react";
  import type { ExtractProps } from "@/lib/extract-props";
  export type TabPanelsProps = ExtractProps<HeadlessTabPanelsProps>;
  export function TabPanels({
    children,
    className,
    ...props
  }: TabPanelsProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/tabs/tab-panel" {
  import { type TabPanelProps as HeadlessTabPanelProps } from "@headlessui/react";
  import type { ExtractProps } from "@/lib/extract-props";
  export type TabPanelProps = ExtractProps<HeadlessTabPanelProps>;
  export function TabPanel({
    children,
    className,
    ...props
  }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
  export namespace TabPanel {
    var displayName: string;
  }
}
declare module "components/tabs/tab" {
  import { type TabGroupProps } from "@headlessui/react";
  import type { ExtractProps } from "@/lib/extract-props";
  import { TabList } from "components/tabs/tab-list";
  import { TabListItem } from "components/tabs/tab-list-item";
  import { TabPanels } from "components/tabs/tab-panels";
  import { TabPanel } from "components/tabs/tab-panel";
  export type TabProps = ExtractProps<TabGroupProps> & {
    hideHoverAnimation?: boolean;
    highlightClassName?: string;
  };
  export function Tab({
    vertical,
    className,
    selectedIndex,
    onChange,
    hideHoverAnimation,
    children,
    highlightClassName,
    ...props
  }: TabProps): import("react/jsx-runtime").JSX.Element;
  export namespace Tab {
    var List: typeof TabList;
    var ListItem: typeof TabListItem;
    var Panels: typeof TabPanels;
    var Panel: typeof TabPanel;
  }
}
declare module "components/tabs/index" {
  export { Tab, type TabProps } from "components/tabs/tab";
}
declare module "components/textarea/textarea" {
  import React from "react";
  import { type VariantProps } from "tailwind-variants";
  import { labelStyles } from "@/lib/label-size";
  const textarea: import("tailwind-variants").TVReturnType<
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
      clearable: {
        true: string;
      };
    },
    undefined,
    "block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]",
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
      clearable: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          text: string;
          outline: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        error: {
          true: string;
        };
        clearable: {
          true: string;
        };
      },
      undefined,
      "block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export interface TextareaProps
    extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    > {
    rows?: number;
    cols?: number;
    maxLength?: number;
    disabled?: boolean;
    children?: React.ReactNode;
    size?: VariantProps<typeof textarea>["size"];
    variant?: VariantProps<typeof textarea>["variant"];
    label?: React.ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    clearable?: boolean;
    onClear?: (event: React.MouseEvent) => void;
    renderCharacterCount?({
      characterCount,
      maxLength,
    }: {
      characterCount?: number;
      maxLength?: number;
    }): React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    labelClassName?: string;
    textareaClassName?: string;
    helperClassName?: string;
    errorClassName?: string;
    className?: string;
    ref?: React.Ref<HTMLTextAreaElement>;
  }
  export function Textarea({
    variant,
    size,
    labelWeight,
    cols,
    rows,
    label,
    error,
    clearable,
    onClear,
    readOnly,
    disabled,
    className,
    labelClassName,
    textareaClassName,
    helperClassName,
    errorClassName,
    helperText,
    maxLength,
    placeholder,
    renderCharacterCount,
    ref,
    ...textareaProps
  }: TextareaProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/textarea/index" {
  export { Textarea, type TextareaProps } from "components/textarea/textarea";
}
declare module "components/tooltip/tooltip" {
  import { type ReactElement, type ReactNode } from "react";
  import { type Placement } from "@floating-ui/react";
  import { type VariantProps } from "tailwind-variants";
  const tooltip: import("tailwind-variants").TVReturnType<
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      color: {
        primary: string;
        invert: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    "text-center z-[9999] min-w-max rounded-[var(--border-radius)] border-[length:var(--border-width)] drop-shadow-[0px_8px_24px_rgba(149,157,165,0.2)]",
    {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      color: {
        primary: string;
        invert: string;
        secondary: string;
        danger: string;
        info: string;
        success: string;
        warning: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        color: {
          primary: string;
          invert: string;
          secondary: string;
          danger: string;
          info: string;
          success: string;
          warning: string;
        };
      },
      undefined,
      "text-center z-[9999] min-w-max rounded-[var(--border-radius)] border-[length:var(--border-width)] drop-shadow-[0px_8px_24px_rgba(149,157,165,0.2)]",
      unknown,
      unknown,
      undefined
    >
  >;
  const tooltipAnimation: {
    readonly fadeIn: {
      readonly initial: {
        readonly opacity: 0;
      };
      readonly close: {
        readonly opacity: 0;
      };
    };
    readonly zoomIn: {
      readonly initial: {
        readonly opacity: 0;
        readonly transform: "scale(0.96)";
      };
      readonly close: {
        readonly opacity: 0;
        readonly transform: "scale(0.96)";
      };
    };
    readonly slideIn: {
      readonly initial: {
        readonly opacity: 0;
        readonly transform: "translateY(4px)";
      };
      readonly close: {
        readonly opacity: 0;
        readonly transform: "translateY(4px)";
      };
    };
  };
  type TooltipVariant = VariantProps<typeof tooltip>;
  export type TooltipProps = {
    children: ReactElement;
    content: ReactNode;
    color?: TooltipVariant["color"];
    size?: TooltipVariant["size"];
    placement?: Placement;
    gap?: number;
    animation?: keyof typeof tooltipAnimation;
    className?: string;
    arrowClassName?: string;
    showArrow?: boolean;
  };
  /**
   * Tooltip displays informative text when users hover, focus, or click an element.
   * Here is the API documentation of the Tooltip component.
   * You can use the following props to create a demo of tooltip.
   */
  export function Tooltip({
    children,
    content,
    gap,
    animation,
    placement,
    size,
    color,
    className,
    arrowClassName,
    showArrow,
  }: TooltipProps): import("react/jsx-runtime").JSX.Element;
  /**
   * Tooltip displays informative text when users hover, focus, or click an element.
   * Here is the API documentation of the Tooltip component.
   * You can use the following props to create a demo of tooltip.
   */
  export namespace Tooltip {
    var displayName: string;
  }
}
declare module "components/tooltip/index" {
  export { Tooltip, type TooltipProps } from "components/tooltip/tooltip";
}
declare module "components/accordion/accordion-context" {
  import {
    type MutableRefObject,
    type Dispatch,
    type SetStateAction,
    type ReactNode,
  } from "react";
  type AccordionContextProps = {
    isOpen: boolean;
    toggle: () => void;
    targetEl: MutableRefObject<any>;
    openTargetEl: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  };
  type AccordionProviderProps = {
    defaultOpen?: boolean;
    duration?: number;
    children: ReactNode;
  };
  export function AccordionProvider({
    defaultOpen,
    duration,
    children,
  }: AccordionProviderProps): import("react/jsx-runtime").JSX.Element;
  export function useAccordion(): AccordionContextProps;
}
declare module "components/accordion/accordion-header" {
  import type { ReactNode, Ref, ButtonHTMLAttributes } from "react";
  type AccordionHeaderProps = {
    className?: string;
    children: ReactNode | (({ open }: { open: boolean }) => ReactNode);
    ref?: Ref<HTMLButtonElement>;
  } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
  export function AccordionHeader({
    children,
    className,
    ref,
    ...props
  }: AccordionHeaderProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/accordion/accordion-body" {
  import { type ReactNode, type Ref, type HTMLAttributes } from "react";
  type AccordionBodyProps = {
    as?: "div" | "ul";
    className?: string;
    children?: ReactNode;
    ref?: Ref<any>;
  } & HTMLAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLUListElement>;
  export function AccordionBody({
    as,
    className,
    children,
    ref,
    ...props
  }: AccordionBodyProps): import("react/jsx-runtime").JSX.Element;
}
declare module "components/accordion/accordion" {
  import type { ReactNode } from "react";
  import { AccordionHeader } from "components/accordion/accordion-header";
  import { AccordionBody } from "components/accordion/accordion-body";
  export type AccordionProps = {
    as?: "div" | "li";
    defaultOpen?: boolean;
    duration?: number;
    className?: string;
    children?: ReactNode;
  };
  export function Accordion({
    as,
    defaultOpen,
    duration,
    className,
    children,
  }: AccordionProps): import("react/jsx-runtime").JSX.Element;
  export namespace Accordion {
    var Header: typeof AccordionHeader;
    var Body: typeof AccordionBody;
  }
}
declare module "components/accordion/index" {
  export {
    Accordion,
    type AccordionProps,
  } from "components/accordion/accordion";
}
declare module "icons/chevron-down" {
  import React from "react";
  export function ChevronDownIcon(
    props: React.SVGProps<SVGSVGElement>
  ): import("react/jsx-runtime").JSX.Element;
}
declare module "icons/search" {
  import React from "react";
  export function SearchIcon(
    props: React.SVGProps<SVGSVGElement>
  ): import("react/jsx-runtime").JSX.Element;
}
declare module "components/select/select-shared.lib" {
  export function isString(value: any): value is string;
  export function isNumber(value: any): value is number;
  export function isEmpty(value: any): boolean;
  export const useInternalState: <T>(
    defaultValueProp: T,
    valueProp: T | undefined
  ) => readonly [T, (nextValue: T) => void];
  type Align = "start" | "end";
  type Side = "top" | "right" | "bottom" | "left";
  export type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
  type OurPlacementType = `${Side}` | `${Side} ${Align}`;
  export const ourPlacementObject: {
    [key in TheirPlacementType]: OurPlacementType;
  };
  export function preventHeadlessUIKeyboardInterActions(
    e: React.KeyboardEvent
  ): void;
  export function useFilteredOptions<T extends Record<string, any>>(
    options: T[],
    searchQuery: string,
    searchByKey: string,
    disableDefaultFilter?: boolean
  ): T[];
}
declare module "components/select/select.lib" {
  import { type SelectOption } from "components/select/select";
  export {
    isString,
    isNumber,
    isEmpty,
    ourPlacementObject,
    preventHeadlessUIKeyboardInterActions,
    type TheirPlacementType,
  } from "components/select/select-shared.lib";
  export function getOptionValueFn(option: any): any;
  export function getOptionDisplayValueFn({
    value,
    label,
  }: SelectOption): string | number;
  export function displayValueFn(value: any): any;
}
declare module "components/select/select-shared.styles" {
  export const optionListStyles: {
    base: string;
    shadow: any;
    item: {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    };
    inPortal: string;
    notInPortal: string;
  };
  export const searchStyles: {
    base: string;
    inputBase: string;
    prefix: string;
    suffix: string;
    stickySearch: string;
  };
}
declare module "components/select/select" {
  import {
    type ReactNode,
    type MouseEvent,
    type InputHTMLAttributes,
  } from "react";
  import { Listbox } from "@headlessui/react";
  import { type VariantProps } from "tailwind-variants";
  import type { ExtractProps } from "@/lib/extract-props";
  import { labelStyles } from "@/lib/label-size";
  import { type TheirPlacementType } from "components/select/select.lib";
  const select: import("tailwind-variants").TVReturnType<
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
      hasPrefix: {
        true: string;
      };
      hasSuffix: {
        true: string;
      };
    },
    undefined,
    "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]",
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
      hasPrefix: {
        true: string;
      };
      hasSuffix: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          text: string;
          outline: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        error: {
          true: string;
        };
        hasPrefix: {
          true: string;
        };
        hasSuffix: {
          true: string;
        };
      },
      undefined,
      "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export type SelectOption = {
    value: string | number;
    label: string;
    disabled?: boolean;
    [key: string]: any;
  };
  export type SelectProps<SelectOption> = ExtractProps<typeof Listbox> & {
    /** Options for select */
    options: SelectOption[];
    /** The default value of the select (uncontrolled) */
    defaultValue?: ExtractProps<typeof Listbox>["value"];
    /** Whether the select is disabled */
    disabled?: boolean;
    label?: ReactNode;
    labelWeight?: keyof typeof labelStyles.weight;
    placeholder?: string;
    size?: VariantProps<typeof select>["size"];
    variant?: VariantProps<typeof select>["variant"];
    /** add clearable option */
    clearable?: boolean;
    /** Whether the select is focused by default or not */
    autoFocus?: boolean;
    /** clear event */
    onClear?: (event?: MouseEvent) => void;
    /** Event of the searchable input when change */
    onSearchChange?: (value: string) => void;
    /** The prefix is design for adding any icon or text on the select field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
    prefix?: ReactNode;
    /** The suffix is design for adding any icon or text on the select field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
    suffix?: ReactNode;
    /** Whether the select is searchable or not */
    searchable?: boolean;
    /** The type of the search input */
    searchType?: "text" | "search";
    /** The props for the search input */
    searchProps?: InputHTMLAttributes<HTMLInputElement>;
    /** The prefix for the search input */
    searchPrefix?: ReactNode;
    /** The suffix for the search input */
    searchSuffix?: ReactNode;
    /** Whether the search input is disabled */
    searchDisabled?: boolean;
    /** Whether the search input is readonly */
    searchReadOnly?: boolean;
    /** Add custom classes for search input */
    searchClassName?: string;
    /** Set search input placeholder text */
    searchPlaceHolder?: string;
    /** Add search prefix custom style */
    searchPrefixClassName?: string;
    /** Add search suffix custom style */
    searchSuffixClassName?: string;
    /** Add search container custom style */
    searchContainerClassName?: string;
    /** Whether it is rendered on the portal or not */
    inPortal?: boolean;
    /** Show error message using this prop */
    error?: string;
    /** Add helper text. It could be string or a React component */
    helperText?: ReactNode;
    /** Add custom classes for container */
    className?: string;
    /** Define the position of dropdown */
    placement?: TheirPlacementType;
    /** Define the gap between the selected and dropdown */
    gap?: number;
    /** Whether it is rendered on the modal or not */
    modal?: boolean;
    /** Use labelClassName prop to do some addition style for the field label */
    labelClassName?: string;
    /** Add custom classes for select */
    selectClassName?: string;
    /** Add custom classes to select option */
    optionClassName?: string;
    /** Override default CSS style of prefix */
    prefixClassName?: string;
    /** Override default CSS style of suffix */
    suffixClassName?: string;
    /** This prop allows you to customize the error message style */
    errorClassName?: string;
    /** This prop allows you to customize the helper text message style */
    helperClassName?: string;
    /** This prop allows you to customize the Options Wrapper style */
    dropdownClassName?: string;
    /** The key to search in the options */
    searchByKey?: string;
    /** Disable default filter */
    disableDefaultFilter?: boolean;
    /** Whether the search input is sticky or not */
    stickySearch?: boolean;
    /** The key to get the value of the option (string approach, alternative to getOptionValue) */
    getOptionValueKey?: string;
    /**
     * A function to determine the display value of the selected item.
     * @param value - The value of the selected item.
     * @returns React node to display for the selected item.
     */
    displayValue?(value: ExtractProps<typeof Listbox>["value"]): ReactNode;
    /**
     * Use this function when you want to display something other than the default displayValue.
     * @param option - The SelectOption for which to get the display value.
     * @returns React node to display for the specified option.
     */
    getOptionDisplayValue?(option: SelectOption): ReactNode;
    /**
     * Select whether the label or value should be returned in the onChange method (function approach, alternative to getOptionValueKey).
     * @param option - The SelectOption for which to get the value.
     * @returns The selected value from the specified option.
     */
    getOptionValue?: (
      option: SelectOption
    ) => SelectOption[keyof SelectOption] | SelectOption;
  };
  export function Select<OptionType extends SelectOption>({
    label,
    labelWeight,
    error,
    options,
    disabled,
    autoFocus,
    helperText,
    prefix,
    placeholder,
    inPortal,
    modal,
    displayValue,
    getOptionDisplayValue,
    getOptionValue,
    getOptionValueKey,
    value,
    defaultValue,
    onChange,
    onClear,
    clearable,
    placement,
    gap,
    size,
    variant,
    suffix,
    searchable,
    searchType,
    searchProps,
    stickySearch,
    searchPrefix,
    searchSuffix,
    searchDisabled,
    searchReadOnly,
    onSearchChange,
    searchPlaceHolder,
    className,
    searchByKey,
    labelClassName,
    selectClassName,
    optionClassName,
    suffixClassName,
    prefixClassName,
    errorClassName,
    helperClassName,
    searchClassName,
    dropdownClassName,
    disableDefaultFilter,
    searchPrefixClassName,
    searchSuffixClassName,
    searchContainerClassName,
    ...props
  }: SelectProps<OptionType>): import("react/jsx-runtime").JSX.Element;
  export namespace Select {
    var displayName: string;
  }
}
declare module "components/select/index" {
  export {
    Select,
    type SelectProps,
    type SelectOption,
  } from "components/select/select";
}
declare module "components/multi-select/multi-select" {
  import {
    type ReactNode,
    type MouseEvent,
    type InputHTMLAttributes,
  } from "react";
  import { Listbox } from "@headlessui/react";
  import { type VariantProps } from "tailwind-variants";
  import { ourPlacementObject } from "components/select/select-shared.lib";
  import { labelStyles } from "@/lib/label-size";
  import type { ExtractProps } from "@/lib/extract-props";
  const multiSelect: import("tailwind-variants").TVReturnType<
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
      hasPrefix: {
        true: string;
      };
      hasSuffix: {
        true: string;
      };
    },
    undefined,
    "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]",
    {
      variant: {
        text: string;
        outline: string;
      };
      size: {
        sm: string;
        md: string;
        lg: string;
      };
      disabled: {
        true: string;
      };
      error: {
        true: string;
      };
      hasPrefix: {
        true: string;
      };
      hasSuffix: {
        true: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        variant: {
          text: string;
          outline: string;
        };
        size: {
          sm: string;
          md: string;
          lg: string;
        };
        disabled: {
          true: string;
        };
        error: {
          true: string;
        };
        hasPrefix: {
          true: string;
        };
        hasSuffix: {
          true: string;
        };
      },
      undefined,
      "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]",
      unknown,
      unknown,
      undefined
    >
  >;
  export type MultiSelectOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
    [key: string]: any;
  };
  export type MultiSelectProps<MultiSelectOption> = ExtractProps<
    typeof Listbox
  > & {
    /** The value of the select */
    value?: (string | number)[];
    /** The class name of the select */
    className?: string;
    /** Whether the select is focused by default or not */
    autoFocus?: boolean;
    /** The default value of the select */
    defaultValue?: (string | number)[];
    /** The function to call when the value changes */
    onChange?: (value: (string | number)[]) => void;
    /** The function to call when the clear button is clicked */
    onClear?: (event?: MouseEvent) => void;
    /** Event of the searchable input when change */
    onSearchChange?: (value: string) => void;
    /** Whether the select is disabled */
    disabled?: boolean;
    /** The placeholder of the select */
    placeholder?: string;
    /** The size of the select */
    size?: VariantProps<typeof multiSelect>["size"];
    /** The label of the select */
    label?: ReactNode;
    /** The weight of the label */
    labelWeight?: keyof typeof labelStyles.weight;
    /** The class name of the label */
    labelClassName?: string;
    /** The class name of the select */
    selectClassName?: string;
    /** The class name of the helper text */
    helperClassName?: string;
    /** The class name of the error */
    errorClassName?: string;
    /** The error of the select */
    error?: string;
    /** Whether the select is in the portal */
    inPortal?: boolean;
    variant?: VariantProps<typeof multiSelect>["variant"];
    /** The prefix of the select */
    prefix?: ReactNode;
    /** The suffix of the select */
    suffix?: ReactNode;
    /** The class name of the prefix */
    prefixClassName?: string;
    /** The class name of the selected item */
    selectedItemClassName?: string;
    /** The class name of the suffix */
    suffixClassName?: string;
    /** Whether the select is clearable */
    clearable?: boolean;
    /** The placement of the select */
    placement?: keyof typeof ourPlacementObject;
    /** The gap of the select */
    gap?: number;
    /** The modal of the select */
    modal?: boolean;
    /** The helper text of the select */
    helperText?: ReactNode;
    /** The class name of the dropdown */
    dropdownClassName?: string;
    /** The class name of the search */
    searchClassName?: string;
    /** The class name of the search container */
    searchContainerClassName?: string;
    /** The class name of the search prefix */
    searchPrefixClassName?: string;
    /** The class name of the search suffix */
    searchSuffixClassName?: string;
    /** The place holder of the search */
    searchPlaceHolder?: string;
    /** The search suffix */
    searchSuffix?: ReactNode;
    /** The search prefix */
    searchPrefix?: ReactNode;
    /** Whether the search is disabled */
    searchDisabled?: boolean;
    /** Whether the search is read only */
    searchReadOnly?: boolean;
    /** The type of the search */
    searchType?: "text" | "search";
    /** The props of the search */
    searchProps?: InputHTMLAttributes<HTMLInputElement>;
    /** Whether the select is searchable or not */
    searchable?: boolean;
    /** Options for select */
    options: MultiSelectOption[];
    /** The class name of the option */
    optionClassName?: string;
    /** The option checkbox defines the option with checkbox or not */
    optionCheckBox?: boolean;
    /** The class name of the selected option */
    selectedOptionClassName?: string;
    /** The key to get the value of the option (string approach, alternative to getOptionValue) */
    getOptionValueKey?: string;
    /** Whether to hide the picked options */
    hideSelectedOptions?: boolean;
    /** The class name of the selected value container */
    selectContainerClassName?: string;
    /** The key to search in the options */
    searchByKey?: string;
    /** Disable default filter */
    disableDefaultFilter?: boolean;
    /** Whether the search input is sticky or not */
    stickySearch?: boolean;
    /**
     * A function to determine the display value of the selected item.
     * @param selectedItems - An array of selected items.
     * @param handleClearItem - The function to remove the targeted item from selected.
     * @returns React node to display for the selected item.
     */
    displayValue?: (
      selectedItems: (string | number)[],
      options: MultiSelectOption[],
      handleClearItem?: (item: string | number) => void
    ) => ReactNode;
    /**
     * Use this function when you want to display something other than the default option displayValue.
     * @param option - The MultiSelectOption for which to get the display value.
     * @param selected - The Selected for which to know the item is selected or not.
     * @returns React node to display for the specified option.
     */
    getOptionDisplayValue?(
      option: MultiSelectOption,
      selected: boolean
    ): ReactNode;
    /**
     * Select whether the label or value should be returned in the onChange method (function approach, alternative to getOptionValueKey).
     * @param option - The MultiSelectOption for which to get the value.
     * @returns The selected value from the specified option.
     */
    getOptionValue?: (
      option: MultiSelectOption
    ) => MultiSelectOption[keyof MultiSelectOption] | MultiSelectOption;
  };
  export function MultiSelect<OptionType extends MultiSelectOption>({
    gap,
    modal,
    value,
    error,
    label,
    options,
    onClear,
    onChange,
    disabled,
    clearable,
    className,
    autoFocus,
    helperText,
    size,
    searchProps,
    stickySearch,
    displayValue,
    prefix,
    labelClassName,
    onSearchChange,
    errorClassName,
    inPortal,
    selectClassName,
    helperClassName,
    prefixClassName,
    suffixClassName,
    searchClassName,
    optionClassName,
    defaultValue,
    dropdownClassName,
    searchable,
    variant,
    searchSuffix,
    searchType,
    selectedItemClassName,
    getOptionDisplayValue,
    getOptionValue,
    searchByKey,
    optionCheckBox,
    searchPrefixClassName,
    searchSuffixClassName,
    labelWeight,
    searchDisabled,
    searchReadOnly,
    selectedOptionClassName,
    searchContainerClassName,
    selectContainerClassName,
    placeholder,
    hideSelectedOptions,
    placement,
    getOptionValueKey,
    disableDefaultFilter,
    searchPlaceHolder,
    suffix,
    searchPrefix,
    ...props
  }: MultiSelectProps<OptionType>): import("react/jsx-runtime").JSX.Element;
}
declare module "components/multi-select/index" {
  export {
    MultiSelect,
    type MultiSelectProps,
    type MultiSelectOption,
  } from "components/multi-select/multi-select";
}
declare module "components/table/table" {
  import type { ComponentPropsWithRef } from "react";
  import type { VariantProps } from "tailwind-variants";
  import { table } from "@/lib/table-style";
  export type TableVariantProps = VariantProps<typeof table>["variant"];
  export interface TableProps extends ComponentPropsWithRef<"table"> {
    variant?: TableVariantProps;
  }
  function TableRoot({
    className,
    variant,
    ref,
    ...props
  }: TableProps): import("react/jsx-runtime").JSX.Element;
  function TableHeader({
    className,
    ref,
    ...props
  }: ComponentPropsWithRef<"thead">): import("react/jsx-runtime").JSX.Element;
  function TableBody({
    className,
    ref,
    ...props
  }: ComponentPropsWithRef<"tbody">): import("react/jsx-runtime").JSX.Element;
  function TableFooter({
    className,
    ref,
    ...props
  }: ComponentPropsWithRef<"tfoot">): import("react/jsx-runtime").JSX.Element;
  function TableRow({
    className,
    ref,
    ...props
  }: ComponentPropsWithRef<"tr">): import("react/jsx-runtime").JSX.Element;
  function TableHead({
    className,
    ref,
    ...props
  }: ComponentPropsWithRef<"th">): import("react/jsx-runtime").JSX.Element;
  function TableCell({
    className,
    ref,
    ...props
  }: ComponentPropsWithRef<"td">): import("react/jsx-runtime").JSX.Element;
  export const Table: typeof TableRoot & {
    Header: typeof TableHeader;
    Body: typeof TableBody;
    Footer: typeof TableFooter;
    Row: typeof TableRow;
    Head: typeof TableHead;
    Cell: typeof TableCell;
  };
}
declare module "components/table/index" {
  export {
    Table,
    type TableProps,
    type TableVariantProps,
  } from "components/table/table";
}
declare module "components/layouts/box/box" {
  import React, { type ElementType } from "react";
  export type BoxProps<T extends ElementType = "div"> = {
    as?: T;
    ref?: React.Ref<any>;
    children?: React.ReactNode;
  } & Omit<React.ComponentPropsWithRef<T>, "as" | "ref" | "className"> & {
      className?: string;
    };
  export function Box<T extends ElementType = "div">({
    as,
    ref,
    children,
    className,
    ...rest
  }: BoxProps<T>): import("react/jsx-runtime").JSX.Element;
}
declare module "components/layouts/box/index" {
  export { Box, type BoxProps } from "components/layouts/box/box";
}
declare module "components/layouts/flex/flex" {
  import React, { type ElementType } from "react";
  import { type VariantProps } from "tailwind-variants";
  const flex: import("tailwind-variants").TVReturnType<
    {
      direction: {
        row: string;
        col: string;
        "row-reverse": string;
        "col-reverse": string;
      };
      justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
      };
      align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
      };
      gap: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
      };
    },
    undefined,
    "flex w-full",
    {
      direction: {
        row: string;
        col: string;
        "row-reverse": string;
        "col-reverse": string;
      };
      justify: {
        start: string;
        end: string;
        center: string;
        between: string;
        around: string;
        evenly: string;
        normal: string;
      };
      align: {
        start: string;
        end: string;
        center: string;
        baseline: string;
        stretch: string;
      };
      gap: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        direction: {
          row: string;
          col: string;
          "row-reverse": string;
          "col-reverse": string;
        };
        justify: {
          start: string;
          end: string;
          center: string;
          between: string;
          around: string;
          evenly: string;
          normal: string;
        };
        align: {
          start: string;
          end: string;
          center: string;
          baseline: string;
          stretch: string;
        };
        gap: {
          "0": string;
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
        };
      },
      undefined,
      "flex w-full",
      unknown,
      unknown,
      undefined
    >
  >;
  export type FlexProps<T extends ElementType = "div"> = VariantProps<
    typeof flex
  > & {
    as?: T;
    ref?: React.Ref<any>;
    children?: React.ReactNode;
  } & Omit<React.ComponentPropsWithRef<T>, "as" | "ref" | "className"> & {
      className?: string;
    };
  export function Flex<T extends ElementType = "div">({
    as,
    ref,
    children,
    direction,
    justify,
    align,
    gap,
    className,
    ...rest
  }: FlexProps<T>): import("react/jsx-runtime").JSX.Element;
}
declare module "components/layouts/flex/index" {
  export { Flex, type FlexProps } from "components/layouts/flex/flex";
}
declare module "components/layouts/grid/grid-col" {
  import type {
    ElementType,
    Ref,
    ReactNode,
    ComponentPropsWithRef,
  } from "react";
  import { type VariantProps } from "tailwind-variants";
  const gridCol: import("tailwind-variants").TVReturnType<
    {
      colStart: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      colEnd: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      colSpan: {
        auto: string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        full: string;
      };
      rowSpan: {
        auto: string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        full: string;
      };
      rowStart: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      rowEnd: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      order: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        first: string;
        last: string;
        none: string;
      };
      placeSelf: {
        auto: string;
        start: string;
        end: string;
        center: string;
        stretch: string;
      };
    },
    undefined,
    undefined,
    {
      colStart: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      colEnd: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      colSpan: {
        auto: string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        full: string;
      };
      rowSpan: {
        auto: string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        full: string;
      };
      rowStart: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      rowEnd: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        auto: string;
      };
      order: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        first: string;
        last: string;
        none: string;
      };
      placeSelf: {
        auto: string;
        start: string;
        end: string;
        center: string;
        stretch: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        colStart: {
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          "13": string;
          auto: string;
        };
        colEnd: {
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          "13": string;
          auto: string;
        };
        colSpan: {
          auto: string;
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          full: string;
        };
        rowSpan: {
          auto: string;
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          full: string;
        };
        rowStart: {
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          "13": string;
          auto: string;
        };
        rowEnd: {
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          "13": string;
          auto: string;
        };
        order: {
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          first: string;
          last: string;
          none: string;
        };
        placeSelf: {
          auto: string;
          start: string;
          end: string;
          center: string;
          stretch: string;
        };
      },
      undefined,
      undefined,
      unknown,
      unknown,
      undefined
    >
  >;
  export type GridColumnProps<T extends ElementType = "div"> = {
    as?: T;
    ref?: Ref<any>;
    colStart?: VariantProps<typeof gridCol>["colStart"];
    colEnd?: VariantProps<typeof gridCol>["colEnd"];
    colSpan?: VariantProps<typeof gridCol>["colSpan"];
    order?: VariantProps<typeof gridCol>["order"];
    rowSpan?: VariantProps<typeof gridCol>["rowSpan"];
    rowStart?: VariantProps<typeof gridCol>["rowStart"];
    rowEnd?: VariantProps<typeof gridCol>["rowEnd"];
    placeSelf?: VariantProps<typeof gridCol>["placeSelf"];
    children?: ReactNode;
    className?: string;
  } & Omit<
    ComponentPropsWithRef<T>,
    | "as"
    | "ref"
    | "className"
    | "colStart"
    | "colEnd"
    | "colSpan"
    | "order"
    | "rowSpan"
    | "rowStart"
    | "rowEnd"
    | "placeSelf"
  >;
  export function GridCol<T extends ElementType = "div">({
    as,
    ref,
    order,
    rowEnd,
    colEnd,
    rowSpan,
    colSpan,
    colStart,
    rowStart,
    children,
    className,
    placeSelf,
    ...rest
  }: GridColumnProps<T>): import("react/jsx-runtime").JSX.Element;
}
declare module "components/layouts/grid/grid" {
  import type {
    ElementType,
    Ref,
    ReactNode,
    ComponentPropsWithRef,
  } from "react";
  import { type VariantProps } from "tailwind-variants";
  import { GridCol } from "components/layouts/grid/grid-col";
  const gridVariants: import("tailwind-variants").TVReturnType<
    {
      columns: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        none: string;
        subgrid: string;
      };
      rows: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        none: string;
        subgrid: string;
      };
      gap: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
      };
      align: {
        end: string;
        start: string;
        center: string;
        stretch: string;
        baseline: string;
      };
      justify: {
        end: string;
        start: string;
        around: string;
        normal: string;
        center: string;
        evenly: string;
        between: string;
        stretch: string;
      };
      placeContent: {
        center: string;
        start: string;
        end: string;
        between: string;
        around: string;
        evenly: string;
        baseline: string;
        stretch: string;
      };
      placeItems: {
        center: string;
        start: string;
        end: string;
        baseline: string;
        stretch: string;
      };
    },
    undefined,
    "grid",
    {
      columns: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        none: string;
        subgrid: string;
      };
      rows: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        none: string;
        subgrid: string;
      };
      gap: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
      };
      align: {
        end: string;
        start: string;
        center: string;
        stretch: string;
        baseline: string;
      };
      justify: {
        end: string;
        start: string;
        around: string;
        normal: string;
        center: string;
        evenly: string;
        between: string;
        stretch: string;
      };
      placeContent: {
        center: string;
        start: string;
        end: string;
        between: string;
        around: string;
        evenly: string;
        baseline: string;
        stretch: string;
      };
      placeItems: {
        center: string;
        start: string;
        end: string;
        baseline: string;
        stretch: string;
      };
    },
    undefined,
    import("tailwind-variants").TVReturnType<
      {
        columns: {
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          none: string;
          subgrid: string;
        };
        rows: {
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
          none: string;
          subgrid: string;
        };
        gap: {
          "0": string;
          "1": string;
          "2": string;
          "3": string;
          "4": string;
          "5": string;
          "6": string;
          "7": string;
          "8": string;
          "9": string;
          "10": string;
          "11": string;
          "12": string;
        };
        align: {
          end: string;
          start: string;
          center: string;
          stretch: string;
          baseline: string;
        };
        justify: {
          end: string;
          start: string;
          around: string;
          normal: string;
          center: string;
          evenly: string;
          between: string;
          stretch: string;
        };
        placeContent: {
          center: string;
          start: string;
          end: string;
          between: string;
          around: string;
          evenly: string;
          baseline: string;
          stretch: string;
        };
        placeItems: {
          center: string;
          start: string;
          end: string;
          baseline: string;
          stretch: string;
        };
      },
      undefined,
      "grid",
      unknown,
      unknown,
      undefined
    >
  >;
  type ColumnsType = VariantProps<typeof gridVariants>["columns"];
  export type GridProps<T extends ElementType = "div"> = {
    as?: T;
    ref?: Ref<any>;
    children?: ReactNode;
    gap?: VariantProps<typeof gridVariants>["gap"];
    rows?: VariantProps<typeof gridVariants>["rows"];
    align?: VariantProps<typeof gridVariants>["align"];
    justify?: VariantProps<typeof gridVariants>["justify"];
    columns?: ColumnsType;
    cols?: ColumnsType;
    colsSm?: ColumnsType;
    colsMd?: ColumnsType;
    colsLg?: ColumnsType;
    colsXl?: ColumnsType;
    cols2xl?: ColumnsType;
    placeItems?: VariantProps<typeof gridVariants>["placeItems"];
    placeContent?: VariantProps<typeof gridVariants>["placeContent"];
    className?: string;
  } & Omit<
    ComponentPropsWithRef<T>,
    | "as"
    | "ref"
    | "className"
    | "gap"
    | "rows"
    | "align"
    | "justify"
    | "columns"
    | "cols"
    | "colsSm"
    | "colsMd"
    | "colsLg"
    | "colsXl"
    | "cols2xl"
    | "placeItems"
    | "placeContent"
  >;
  function GridBase<T extends ElementType = "div">({
    as,
    ref,
    gap,
    rows,
    align,
    justify,
    columns,
    cols,
    colsSm,
    colsMd,
    colsLg,
    colsXl,
    cols2xl,
    children,
    className,
    placeItems,
    placeContent,
    ...rest
  }: GridProps<T>): import("react/jsx-runtime").JSX.Element;
  export const Grid: typeof GridBase & {
    Col: typeof GridCol;
  };
}
declare module "components/layouts/grid/index" {
  export { Grid, type GridProps } from "components/layouts/grid/grid";
}
declare module "index" {
  export * from "lib/cn";
  export * from "lib/use-collapse";
  export * from "components/field-clear-button";
  export * from "components/field-error-text";
  export * from "components/field-helper-text";
  export * from "components/action-icon/index";
  export * from "components/advanced-checkbox/index";
  export * from "components/advanced-radio/index";
  export * from "components/alert/index";
  export * from "components/announcement/index";
  export * from "components/avatar/index";
  export * from "components/badge/index";
  export * from "components/button/index";
  export * from "components/checkbox/index";
  export * from "components/checkbox-group/index";
  export * from "components/collapse/index";
  export * from "components/drawer/index";
  export * from "components/dropdown/index";
  export * from "components/empty/index";
  export * from "components/upload/file-input";
  export * from "components/upload/upload-zone";
  export * from "components/input/index";
  export * from "components/loader/index";
  export * from "components/modal/index";
  export * from "components/password/index";
  export * from "components/pin-code/index";
  export * from "components/popover/index";
  export * from "components/progressbar/index";
  export * from "components/radial-progressbar/index";
  export * from "components/radio/index";
  export * from "components/radio-group/index";
  export * from "components/stepper/index";
  export * from "components/switch/index";
  export * from "components/tabs/index";
  export * from "components/textarea/index";
  export * from "components/tooltip/index";
  export * from "components/typography/index";
  export * from "components/accordion/index";
  export * from "components/select/index";
  export * from "components/multi-select/index";
  export * from "components/table/index";
  export * from "components/layouts/box/index";
  export * from "components/layouts/flex/index";
  export * from "components/layouts/grid/index";
}

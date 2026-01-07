import { type ReactNode, type MouseEvent, type InputHTMLAttributes } from "react";
import { Listbox } from "@headlessui/react";
import { type VariantProps } from "tailwind-variants";
import type { ExtractProps } from "@/lib/extract-props";
import { labelStyles } from "@/lib/label-size";
import { type TheirPlacementType } from "./select.lib";
declare const select: import("tailwind-variants").TVReturnType<{
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
}, undefined, "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]", {
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
}, undefined, import("tailwind-variants").TVReturnType<{
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
}, undefined, "flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]", unknown, unknown, undefined>>;
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
    getOptionValue?: (option: SelectOption) => SelectOption[keyof SelectOption] | SelectOption;
};
export declare function Select<OptionType extends SelectOption>({ label, labelWeight, error, options, disabled, autoFocus, helperText, prefix, placeholder, inPortal, modal, displayValue, getOptionDisplayValue, getOptionValue, getOptionValueKey, value, defaultValue, onChange, onClear, clearable, placement, gap, size, variant, suffix, searchable, searchType, searchProps, stickySearch, searchPrefix, searchSuffix, searchDisabled, searchReadOnly, onSearchChange, searchPlaceHolder, className, searchByKey, labelClassName, selectClassName, optionClassName, suffixClassName, prefixClassName, errorClassName, helperClassName, searchClassName, dropdownClassName, disableDefaultFilter, searchPrefixClassName, searchSuffixClassName, searchContainerClassName, ...props }: SelectProps<OptionType>): import("react/jsx-runtime").JSX.Element;
export declare namespace Select {
    var displayName: string;
}
export {};

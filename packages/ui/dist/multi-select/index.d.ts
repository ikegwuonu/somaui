import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { MouseEvent, ReactNode, InputHTMLAttributes } from 'react';
import { Listbox } from '@headlessui/react';
import { l as labelStyles } from '../label-size-BuYQMot6.js';

type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
type OurPlacementType = `${Side}` | `${Side} ${Align}`;
declare const ourPlacementObject: {
    [key in TheirPlacementType]: OurPlacementType;
};

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;

declare const multiSelect: tailwind_variants.TVReturnType<{
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
}, undefined, tailwind_variants.TVReturnType<{
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
type MultiSelectOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
    [key: string]: any;
};
type MultiSelectProps<MultiSelectOption> = ExtractProps<typeof Listbox> & {
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
    displayValue?: (selectedItems: (string | number)[], options: MultiSelectOption[], handleClearItem?: (item: string | number) => void) => ReactNode;
    /**
     * Use this function when you want to display something other than the default option displayValue.
     * @param option - The MultiSelectOption for which to get the display value.
     * @param selected - The Selected for which to know the item is selected or not.
     * @returns React node to display for the specified option.
     */
    getOptionDisplayValue?(option: MultiSelectOption, selected: boolean): ReactNode;
    /**
     * Select whether the label or value should be returned in the onChange method (function approach, alternative to getOptionValueKey).
     * @param option - The MultiSelectOption for which to get the value.
     * @returns The selected value from the specified option.
     */
    getOptionValue?: (option: MultiSelectOption) => MultiSelectOption[keyof MultiSelectOption] | MultiSelectOption;
};
declare function MultiSelect<OptionType extends MultiSelectOption>({ gap, modal, value, error, label, options, onClear, onChange, disabled, clearable, className, autoFocus, helperText, size, searchProps, stickySearch, displayValue, prefix, labelClassName, onSearchChange, errorClassName, inPortal, selectClassName, helperClassName, prefixClassName, suffixClassName, searchClassName, optionClassName, defaultValue, dropdownClassName, searchable, variant, searchSuffix, searchType, selectedItemClassName, getOptionDisplayValue, getOptionValue, searchByKey, optionCheckBox, searchPrefixClassName, searchSuffixClassName, labelWeight, searchDisabled, searchReadOnly, selectedOptionClassName, searchContainerClassName, selectContainerClassName, placeholder, hideSelectedOptions, placement, getOptionValueKey, disableDefaultFilter, searchPlaceHolder, suffix, searchPrefix, ...props }: MultiSelectProps<OptionType>): react_jsx_runtime.JSX.Element;

export { MultiSelect, type MultiSelectOption, type MultiSelectProps };

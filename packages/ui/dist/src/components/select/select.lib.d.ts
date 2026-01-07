import { type SelectOption } from './select';
export { isString, isNumber, isEmpty, ourPlacementObject, preventHeadlessUIKeyboardInterActions, type TheirPlacementType } from './select-shared.lib';
export declare function getOptionValueFn(option: any): any;
export declare function getOptionDisplayValueFn({ value, label }: SelectOption): string | number;
export declare function displayValueFn(value: any): any;

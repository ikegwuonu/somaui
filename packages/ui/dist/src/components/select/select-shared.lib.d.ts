export declare function isString(value: any): value is string;
export declare function isNumber(value: any): value is number;
export declare function isEmpty(value: any): boolean;
export declare const useInternalState: <T>(defaultValueProp: T, valueProp: T | undefined) => readonly [T, (nextValue: T) => void];
type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
export type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
type OurPlacementType = `${Side}` | `${Side} ${Align}`;
export declare const ourPlacementObject: {
    [key in TheirPlacementType]: OurPlacementType;
};
export declare function preventHeadlessUIKeyboardInterActions(e: React.KeyboardEvent): void;
export declare function useFilteredOptions<T extends Record<string, any>>(options: T[], searchQuery: string, searchByKey: string, disableDefaultFilter?: boolean): T[];
export {};

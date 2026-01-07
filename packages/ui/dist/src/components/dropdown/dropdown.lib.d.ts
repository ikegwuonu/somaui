type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
export type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
type OurPlacementType = `${Side}` | `${Side} ${Align}`;
export declare const ourPlacementObject: {
    [key in TheirPlacementType]: OurPlacementType;
};
export {};

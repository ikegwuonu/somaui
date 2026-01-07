import React from 'react';
type InputFocusEvent = React.FocusEvent<any>;
type InputMouseEvent = React.MouseEvent<any, MouseEvent>;
type InteractiveEventTypes = {
    readOnly?: boolean;
    onFocus?: (e: InputFocusEvent) => void;
    onBlur?: (e: InputFocusEvent) => void;
    onMouseEnter?: (e: InputMouseEvent) => void;
    onMouseLeave?: (e: InputMouseEvent) => void;
};
export declare function useInteractiveEvent({ readOnly, onFocus, onBlur, onMouseEnter, onMouseLeave, }: InteractiveEventTypes): {
    isFocus: boolean;
    isHover: boolean;
    handleOnFocus: (e: InputFocusEvent) => false | undefined;
    handleOnBlur: (e: InputFocusEvent) => false | undefined;
    handleOnMouseEnter: (e: InputMouseEvent) => false | undefined;
    handleOnMouseLeave: (e: InputMouseEvent) => false | undefined;
};
export {};

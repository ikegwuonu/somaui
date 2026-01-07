import { type MutableRefObject, type Dispatch, type SetStateAction, type ReactNode } from 'react';
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
export declare function AccordionProvider({ defaultOpen, duration, children, }: AccordionProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useAccordion(): AccordionContextProps;
export {};

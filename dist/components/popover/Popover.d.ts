import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Popover({ content, isVisible, anchor, noPortal, children }: Delegate<{
    content: React.ReactNode;
    isVisible: boolean;
    anchor?: "bottom left" | "top right";
    noPortal?: boolean;
    children: React.ReactElement<{
        ref: React.RefObject<HTMLElement | null>;
        className?: string;
    }> | boolean;
}, typeof View<"div">>): import("react/jsx-runtime").JSX.Element;
export default Popover;

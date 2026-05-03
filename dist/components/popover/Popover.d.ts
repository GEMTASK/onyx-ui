import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Popover({ content, isVisible, anchor, noPortal, children }: Delegate<{
    content: React.ReactNode;
    isVisible: boolean;
    anchor?: "bottom left" | "bottom right" | "top right";
    noPortal?: boolean;
    children: React.ReactElement<{
        ref: React.RefObject<HTMLElement | null>;
        opacityOnPress?: boolean;
    }> | boolean;
}, typeof View<"div">>): import("react/jsx-runtime").JSX.Element;
export default Popover;

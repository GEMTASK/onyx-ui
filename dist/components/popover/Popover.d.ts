import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Popover({ ref, content, isVisible, anchor, offsetTop, noPortal, children }: Delegate<{
    content: React.ReactNode;
    isVisible: boolean;
    anchor?: "bottom left" | "bottom right" | "top right";
    offsetTop?: number;
    noPortal?: boolean;
    children: React.ReactElement<{
        ref: React.RefObject<HTMLDivElement | null>;
        opacityOnPress?: boolean;
    }> | boolean;
}, typeof View<"div">>): React.JSX.Element;
export default Popover;

import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { Button, Popover } from '..';
declare function MenuGroup({ label }: {
    label: string;
}): import("react/jsx-runtime").JSX.Element;
declare function MenuDivider(): import("react/jsx-runtime").JSX.Element;
declare function MenuItem({ title, value, style, children, onClick, onSelect, ...props }: Delegate<{
    title?: React.ComponentProps<typeof Button>["children"];
    value?: string;
    onSelect?: (value: string | undefined) => void;
}, typeof Button>): import("react/jsx-runtime").JSX.Element;
declare function Menu({ items, header, footer, children, onItemSelect, onVisibilityChange, ...props }: Delegate<{
    items: (React.ReactElement<{
        onSelect?: (value: string | undefined) => void;
    }>)[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactElement<{
        ref: React.RefObject<HTMLDivElement | null> | React.RefObject<HTMLDivElement>;
        cursor?: string;
        solid?: boolean;
        onClick: React.PointerEventHandler;
    }>;
    onItemSelect?: (value: string | undefined) => void;
    onVisibilityChange?: (visible: boolean) => void;
}, typeof Popover, "isVisible" | "content">): import("react/jsx-runtime").JSX.Element;
declare namespace Menu {
    var Item: typeof MenuItem;
    var Divider: typeof MenuDivider;
    var Group: typeof MenuGroup;
}
export default Menu;

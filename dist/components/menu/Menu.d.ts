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
declare function Menu({ items, header, headerDivider, footer, footerDivider, children, onSelect, ...props }: Delegate<{
    items: (React.ReactElement<{
        onSelect?: (value: string | undefined) => void;
    }>)[];
    header?: React.ReactNode;
    headerDivider?: boolean;
    footer?: React.ReactNode;
    footerDivider?: boolean;
    children: React.ReactElement<{
        ref: React.RefObject<HTMLElement | null>;
        cursor?: string;
        solid?: boolean;
        onClick: React.PointerEventHandler;
    }>;
    onSelect?: (value: string | undefined) => void;
}, typeof Popover, "isVisible" | "content">): import("react/jsx-runtime").JSX.Element;
declare namespace Menu {
    var Item: typeof MenuItem;
    var Divider: typeof MenuDivider;
    var Group: typeof MenuGroup;
}
export default Menu;

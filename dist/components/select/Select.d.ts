import { Delegate } from '../../types/Delegate';
import { Menu } from '..';
type OptionValueBase = {
    icon?: React.ComponentProps<typeof Menu.Item>["icon"];
    iconColor?: React.ComponentProps<typeof Menu.Item>["iconColor"];
    iconFill?: React.ComponentProps<typeof Menu.Item>["iconFill"];
    label: React.ComponentProps<typeof Menu.Item>["title"];
    value: string | number | null | undefined;
    tooltip?: React.ComponentProps<typeof Menu.Item>["tooltip"];
    tooltipAnchor?: React.ComponentProps<typeof Menu.Item>["tooltipAnchor"];
};
type OptionValue = OptionValueBase | {
    label?: React.ComponentProps<typeof Menu.Item>["title"];
    options: OptionValueBase[];
};
declare function Select({ label, value, options, onValueChange, ...props }: Delegate<{
    label?: string;
    value?: string | number | null | undefined;
    options: OptionValue[];
    onValueChange?: (value: string | number | null | undefined) => void;
}, typeof Menu, "items" | "children">): import("react").JSX.Element;
export default Select;

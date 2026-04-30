import { Delegate } from '../../types/Delegate';
import { Menu } from '..';
type OptionValueBase = {
    icon?: React.ComponentProps<typeof Menu.Item>["icon"];
    iconColor?: React.ComponentProps<typeof Menu.Item>["iconColor"];
    iconFill?: React.ComponentProps<typeof Menu.Item>["iconFill"];
    label: React.ComponentProps<typeof Menu.Item>["title"];
    value: string | null | undefined;
};
type OptionValue = OptionValueBase | {
    label?: React.ComponentProps<typeof Menu.Item>["title"];
    options: OptionValueBase[];
};
declare function Select({ label, value, options, onValueChange, ...props }: Delegate<{
    label?: string;
    value?: string | null;
    options: OptionValue[];
    onValueChange?: (value: string | null | undefined) => void;
}, typeof Menu, "items" | "children">): import("react/jsx-runtime").JSX.Element;
export default Select;

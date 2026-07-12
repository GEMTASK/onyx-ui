import { Delegate } from '../../types/Delegate';
import { Menu } from '..';
import { FieldValue } from '../../main';
type OptionValueBase = {
    icon?: React.ComponentProps<typeof Menu.Item>["icon"];
    iconColor?: React.ComponentProps<typeof Menu.Item>["iconColor"];
    iconFill?: React.ComponentProps<typeof Menu.Item>["iconFill"];
    label: React.ComponentProps<typeof Menu.Item>["title"];
    value: string | number | null | undefined;
    tooltip?: React.ComponentProps<typeof Menu.Item>["tooltip"];
};
type OptionValue = OptionValueBase | {
    label?: React.ComponentProps<typeof Menu.Item>["title"];
    options: readonly OptionValueBase[];
};
declare function Select({ label, value, options, multiple, onValueChange, ...props }: Delegate<{
    label?: string;
    value?: FieldValue;
    options: readonly OptionValue[];
    multiple?: boolean;
    onValueChange?: (value: FieldValue) => void;
}, typeof Menu, "items" | "children">): import("react").JSX.Element;
export default Select;

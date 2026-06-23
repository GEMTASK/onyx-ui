import { Icon, View } from '..';
import { Delegate } from '../../main';
declare function Checkbox({ ref, label, value, icon, fillColor, onValueChange, onClick, ...props }: Delegate<{
    label?: string;
    value?: boolean;
    icon?: React.ComponentProps<typeof Icon>["icon"];
    fillColor?: React.ComponentProps<typeof View>["fillColor"];
    onValueChange?: (value: boolean) => void;
    onClick?: React.ComponentProps<typeof View<"div" & "label">>["onClick"];
}, typeof View<"input">, "onClick">): import("react").JSX.Element;
export default Checkbox;

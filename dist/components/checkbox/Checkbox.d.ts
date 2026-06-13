import { Icon, View } from '..';
import { Delegate } from '../../main';
declare function Checkbox({ label, value, icon, fillColor, onValueChange, ...props }: Delegate<{
    label?: string;
    value?: boolean;
    icon?: React.ComponentProps<typeof Icon>["icon"];
    fillColor?: React.ComponentProps<typeof View>["fillColor"];
    onValueChange?: (value: boolean) => void;
}, typeof View<"input">>): import("react").JSX.Element;
export default Checkbox;

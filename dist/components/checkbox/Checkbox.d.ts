import { Icon, View } from '..';
import { Delegate } from '../../main';
declare function Checkbox({ label, value, icon, onValueChange, ...props }: Delegate<{
    label?: string;
    value?: boolean;
    icon?: React.ComponentProps<typeof Icon>["icon"];
    onValueChange?: (value: boolean) => void;
}, typeof View<"input">>): import("react").JSX.Element;
export default Checkbox;

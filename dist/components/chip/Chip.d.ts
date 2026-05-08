import { Delegate } from '../../types/Delegate';
import { Color } from '../../types/Color';
import { Text, Icon } from '..';
declare function Chip({ light, icon, iconSize, iconColor, fillColor, outlineColor, children, style, ...props }: Delegate<{
    icon?: React.ComponentProps<typeof Icon>["icon"];
    iconSize?: React.ComponentProps<typeof Icon>["size"];
    iconColor?: React.ComponentProps<typeof Icon>["color"];
    outlineColor?: Color;
}, typeof Text<"div">>): import("react/jsx-runtime").JSX.Element;
export default Chip;

import { Delegate } from '../../types/Delegate';
import { Text, Icon } from '..';
declare function Chip({ light, icon, iconSize, iconColor, fillColor, children, style, ...props }: Delegate<{
    icon?: React.ComponentProps<typeof Icon>["icon"];
    iconSize?: React.ComponentProps<typeof Icon>["size"];
    iconColor?: React.ComponentProps<typeof Icon>["color"];
}, typeof Text>): import("react/jsx-runtime").JSX.Element;
export default Chip;

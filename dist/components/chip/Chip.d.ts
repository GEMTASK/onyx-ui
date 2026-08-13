import { Delegate } from '../../types/Delegate';
import { Color } from '../../types/Color';
import { Text, Icon } from '..';
declare function Chip<TDelegate extends React.ElementType = "div">({ ref, as, to, icon, fontSize, iconSize, iconColor, iconLight, fillColor, outlineColor, tooltip, opacityOnPress, children, style, onPointerDown, onClick, ...props }: Delegate<{
    icon?: React.ComponentProps<typeof Icon>["icon"];
    iconSize?: React.ComponentProps<typeof Icon>["size"];
    iconColor?: React.ComponentProps<typeof Icon>["color"];
    iconLight?: React.ComponentProps<typeof Icon>["light"];
    outlineColor?: Color;
}, typeof Text<TDelegate>>): import("react").JSX.Element;
export default Chip;

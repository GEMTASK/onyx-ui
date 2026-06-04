import { Delegate } from '../../types/Delegate';
import { View, Text, Icon } from '..';
type ButtonStyle = {
    solid?: boolean;
    primary?: boolean;
    hover?: boolean;
    selected?: boolean;
};
declare function Button({ ref, type, solid, primary, hover, active, icon, iconColor, iconFill, rightIcon, round, bold, fontWeight, selected, opacityOnPress, className, children, ...props }: Delegate<{
    icon?: React.ComponentProps<typeof Icon>["icon"];
    iconColor?: React.ComponentProps<typeof Icon>["color"];
    iconFill?: boolean;
    rightIcon?: React.ComponentProps<typeof Icon>["icon"];
    active?: boolean;
    round?: boolean;
    bold?: boolean;
    fontWeight?: React.ComponentProps<typeof Text<"div">>["fontWeight"];
    selected?: boolean;
} & ButtonStyle, typeof View<"button">>): import("react").JSX.Element;
declare namespace Button {
    var Menu: ({ solid, cornerRadius, children, ...props }: Delegate<{
        solid?: React.ComponentProps<typeof Button>["solid"];
        children: React.ComponentProps<typeof Button>["children"];
    }, typeof import("..").Menu>) => import("react").JSX.Element;
}
export default Button;

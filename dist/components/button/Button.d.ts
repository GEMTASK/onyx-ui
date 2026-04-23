import { Delegate } from '../../types/Delegate';
import { View, Text, Icon } from '..';
type ButtonStyle = {
    solid?: boolean;
    primary?: boolean;
    hover?: boolean;
    selected?: boolean;
};
declare function Button({ ref, solid, primary, hover, icon, rightIcon, round, bold, fontWeight, selected, opacityOnPress, className, children, ...props }: Delegate<{
    icon?: React.ComponentProps<typeof Icon>["icon"];
    rightIcon?: React.ComponentProps<typeof Icon>["icon"];
    round?: boolean;
    bold?: boolean;
    fontWeight?: React.ComponentProps<typeof Text<"div">>["fontWeight"];
    selected?: boolean;
} & ButtonStyle, typeof View<"button">>): import("react/jsx-runtime").JSX.Element;
declare namespace Button {
    var Menu: ({ solid, cornerRadius, children, ...props }: Delegate<{
        solid?: React.ComponentProps<typeof Button>["solid"];
        children: React.ComponentProps<typeof Button>["children"];
    }, typeof import("..").Menu>) => import("react/jsx-runtime").JSX.Element;
}
export default Button;

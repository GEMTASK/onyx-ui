import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View, Text, Icon } from '..';
type ButtonStyle = {
    solid?: boolean;
    primary?: boolean;
    hover?: boolean;
    selected?: boolean;
};
declare function Button({ ref, type, solid, primary, hover, active, icon, iconColor, iconFill, iconSize, rightIcon, round, bold, titleColor, fontWeight, selected, opacityOnPress, className, children, ...props }: Delegate<{
    icon?: React.ComponentProps<typeof Icon>["icon"];
    iconColor?: React.ComponentProps<typeof Icon>["color"];
    iconFill?: boolean;
    iconSize?: React.ComponentProps<typeof Icon>["size"];
    rightIcon?: React.ComponentProps<typeof Icon>["icon"];
    active?: boolean;
    round?: boolean;
    bold?: boolean;
    titleColor?: React.ComponentProps<typeof Text>["textColor"];
    fontWeight?: React.ComponentProps<typeof Text<"div">>["fontWeight"];
    selected?: boolean;
} & ButtonStyle, typeof View<"button">>): React.JSX.Element;
declare namespace Button {
    var Menu: ({ solid, cornerRadius, children, ...props }: Delegate<{
        solid?: React.ComponentProps<typeof Button>["solid"];
        children: React.ComponentProps<typeof Button>["children"];
    }, typeof import("..").Menu>) => React.JSX.Element;
    var Group: ({ children, ...props }: Delegate<{
        children: ChildProps;
    }, typeof View<"div">>) => React.JSX.Element;
}
type ChildProps = React.ReactElement<{
    style: React.CSSProperties;
}> | ChildProps[];
export default Button;

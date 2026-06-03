import { Icon, Text } from '..';
declare function Toggle({ value, icon, iconColor, children, onValueChange }: {
    value?: boolean;
    icon: React.ComponentProps<typeof Icon>["icon"];
    iconColor: React.ComponentProps<typeof Icon>["color"];
    children: React.ComponentProps<typeof Text<"div">>["children"];
    onValueChange?: (value: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
export default Toggle;

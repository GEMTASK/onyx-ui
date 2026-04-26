import { LucideIcon } from 'lucide-react';
declare function Icon({ ref, light, icon: Component, color, size, className, ...props }: {
    light?: boolean;
    icon: LucideIcon;
    color?: React.ComponentProps<LucideIcon>["color"];
    size?: React.ComponentProps<LucideIcon>["size"];
} & React.ComponentProps<LucideIcon>): import("react/jsx-runtime").JSX.Element;
export default Icon;

import { LucideIcon } from 'lucide-react';
declare function Icon({ ref, light, icon: Component, color, size, bleed, className, ...props }: {
    light?: boolean;
    icon: LucideIcon;
    color?: React.ComponentProps<LucideIcon>["color"];
    size?: React.ComponentProps<LucideIcon>["size"];
    bleed?: boolean;
} & React.ComponentProps<LucideIcon>): import("react").JSX.Element;
export default Icon;

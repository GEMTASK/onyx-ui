import { LucideIcon } from 'lucide-react';
import { Color } from '../../types/Color';
declare function Icon({ ref, light, icon: Component, color, size, bleed, className, ...props }: {
    light?: boolean;
    icon: LucideIcon;
    color?: Color;
    size?: React.ComponentProps<LucideIcon>["size"];
    bleed?: boolean;
} & React.ComponentProps<LucideIcon>): import("react").JSX.Element;
export default Icon;

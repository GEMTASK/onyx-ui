import { Camera as CameraIcon } from 'lucide-react';
declare function Icon({ light, icon: Component, color, size, className, ...props }: {
    light?: boolean;
    icon: typeof CameraIcon;
    color?: React.ComponentProps<typeof CameraIcon>["color"];
    size?: React.ComponentProps<typeof CameraIcon>["size"];
} & React.ComponentProps<typeof CameraIcon>): import("react/jsx-runtime").JSX.Element;
export default Icon;

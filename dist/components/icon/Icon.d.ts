import { Camera as CameraIcon } from 'lucide-react';
declare function Icon({ icon: Component, color, size, style, ...props }: {
    icon: typeof CameraIcon;
    color?: React.ComponentProps<typeof CameraIcon>["color"];
    size?: React.ComponentProps<typeof CameraIcon>["size"];
} & React.ComponentProps<typeof CameraIcon>): import("react/jsx-runtime").JSX.Element;
export default Icon;

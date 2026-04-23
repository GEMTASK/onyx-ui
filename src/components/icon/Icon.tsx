import { Camera as CameraIcon } from "lucide-react";

import styles from "./Icon.module.scss";
import textColorStyles from "../../styles/textColor.module.scss";

function Icon({
  light,
  icon: Component,
  color = "gray-7",
  size,
  className,
  ...props
}: {
  light?: boolean,
  icon: typeof CameraIcon,
  color?: React.ComponentProps<typeof CameraIcon>["color"],
  size?: React.ComponentProps<typeof CameraIcon>["size"],
} & React.ComponentProps<typeof CameraIcon>) {
  const iconClassName = [
    styles.Icon,
    color && textColorStyles[color],
    light && styles.light,
    className
  ].filter(className => className).join(" ");

  return (
    <Component size={size} className={iconClassName} {...props} />
  );
}

export default Icon;

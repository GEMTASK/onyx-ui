import { type LucideIcon } from "lucide-react";

import styles from "./Icon.module.scss";
import textColorStyles from "../../styles/textColor.module.scss";

function Icon({
  ref,
  light,
  icon: Component,
  color = "gray-7",
  size,
  className,
  ...props
}: {
  light?: boolean,
  icon: LucideIcon,
  color?: React.ComponentProps<LucideIcon>["color"],
  size?: React.ComponentProps<LucideIcon>["size"],
} & React.ComponentProps<LucideIcon>) {
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

import { type LucideIcon } from "lucide-react";

import type { Color } from "../../types/Color";

import styles from "./Icon.module.scss";
import textColorStyles from "../../styles/textColor.module.scss";

function Icon({
  ref,
  light,
  icon: Component,
  color = "gray-7",
  size,
  bleed,
  className,
  ...props
}: {
  light?: boolean,
  icon: LucideIcon,
  color?: Color,
  size?: React.ComponentProps<LucideIcon>["size"],
  bleed?: boolean,
} & React.ComponentProps<LucideIcon>) {
  const iconClassName = [
    styles.Icon,
    color && textColorStyles[color],
    light && styles.light,
    bleed && styles.bleed,
    className
  ].filter(className => className).join(" ");

  return (
    <Component size={size} className={iconClassName} {...props} />
  );
}

export default Icon;

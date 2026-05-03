import type { Delegate } from "../../types/Delegate";
import { View, Text, Icon } from "..";

import styles from "./Chip.module.scss";

function Chip({
  light,
  icon,
  iconSize,
  iconColor,
  fillColor,
  children,
  style,
  ...props
}: Delegate<{
  icon?: React.ComponentProps<typeof Icon>["icon"],
  iconSize?: React.ComponentProps<typeof Icon>["size"],
  iconColor?: React.ComponentProps<typeof Icon>["color"],
}, typeof Text<"div">>) {
  return (
    <View horizontal spacing="4px" align="middle left">
      {icon && (
        <Icon icon={icon} size={iconSize ?? 14} color={iconColor} style={{ margin: "-2px 0", opacity: light ? 0.6 : undefined }} />
      )}
      <Text
        light={light}
        fillColor={fillColor}
        cornerRadius="2px"
        padding={fillColor ? "2px 4px" : undefined}
        className={styles.text}
        style={{ margin: fillColor ? "-2px 0" : undefined, ...style }}
        {...props}
      >
        {children}
      </Text>
    </View>
  );
}

export default Chip;

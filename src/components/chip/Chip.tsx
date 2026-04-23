import type { Delegate } from "../../types/Delegate";
import { View, Text, Icon } from "..";

import styles from "./Chip.module.scss";

function Chip({
  light,
  icon,
  fillColor,
  children,
  style,
  ...props
}: Delegate<{
  icon?: React.ComponentProps<typeof Icon>["icon"],
}, typeof Text>) {
  return (
    <View horizontal spacing="4px" align="middle left">
      {icon && (
        <Icon icon={icon} size={14} style={{ margin: "-2px 0", opacity: light ? 0.6 : undefined }} />
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

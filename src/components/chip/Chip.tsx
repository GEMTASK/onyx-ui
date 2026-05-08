import { useEffect, useRef } from "react";

import type { Delegate } from "../../types/Delegate";
import type { Color } from "../../types/Color";
import { View, Text, Icon } from "..";

import styles from "./Chip.module.scss";

function Chip({
  light,
  icon,
  iconSize,
  iconColor,
  fillColor,
  outlineColor,
  children,
  style,
  ...props
}: Delegate<{
  icon?: React.ComponentProps<typeof Icon>["icon"],
  iconSize?: React.ComponentProps<typeof Icon>["size"],
  iconColor?: React.ComponentProps<typeof Icon>["color"],
  outlineColor?: Color,
}, typeof Text<"div">>) {
  const textElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textElementRef.current) {
      textElementRef.current.style.setProperty("--outline-color", `var(--${outlineColor}-color)`);
    }
  }, [outlineColor]);

  return (
    <View horizontal spacing="4px" align="middle left">
      {icon && (
        <Icon icon={icon} size={iconSize ?? 14} color={iconColor} style={{ margin: "-2px 0", opacity: light ? 0.6 : undefined }} />
      )}
      <Text
        ref={textElementRef}
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

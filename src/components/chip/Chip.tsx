import { useEffect, useRef } from "react";

import type { Delegate } from "../../types/Delegate";
import type { Color } from "../../types/Color";
import { View, Text, Icon } from "..";

import styles from "./Chip.module.scss";

function Chip({
  ref,
  icon,
  fontSize,
  iconSize,
  iconColor,
  iconLight,
  fillColor,
  outlineColor = "content",
  tooltip,
  opacityOnPress,
  children,
  style,
  onPointerDown,
  onClick,
  ...props
}: Delegate<{
  icon?: React.ComponentProps<typeof Icon>["icon"],
  iconSize?: React.ComponentProps<typeof Icon>["size"],
  iconColor?: React.ComponentProps<typeof Icon>["color"],
  iconLight?: React.ComponentProps<typeof Icon>["light"],
  outlineColor?: Color,
}, typeof Text<"div">>) {
  const textElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textElementRef.current && fillColor) {
      textElementRef.current.style.setProperty("--outline-color", `var(--${outlineColor}-color)`);
    }
  }, [fillColor, outlineColor]);

  return (
    <View
      horizontal
      ref={ref}
      spacing="4px"
      align="middle left"
      tooltip={tooltip}
      opacityOnPress={opacityOnPress}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      {icon && (
        <Icon bleed icon={icon} size={iconSize ?? 14} color={iconColor} style={{ opacity: iconLight ? 0.6 : undefined }} />
      )}
      <Text
        ref={textElementRef}
        fontSize={fontSize}
        fillColor={fillColor}
        cornerRadius="2px"
        padding={fillColor ? fontSize === "12px" ? "2px 4px" : "4px" : undefined}
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

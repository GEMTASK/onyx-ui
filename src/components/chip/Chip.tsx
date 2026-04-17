import type { Delegate } from "../../types/Delegate";
import { View, Text, Icon } from "..";

function Chip({
  light,
  icon,
  fillColor,
  children,
  ...props
}: Delegate<{
  icon?: React.ComponentProps<typeof Icon>["icon"],
}, typeof Text>) {
  return (
    <View horizontal spacing="4px" align="middle left">
      {icon && (
        <Icon icon={icon} size={14} style={{ margin: "-2px 0", opacity: light ? 0.6 : undefined }} />
      )}
      <Text light={light} fillColor={fillColor} cornerRadius="2px" {...props} padding={fillColor ? "2px 4px" : undefined} style={{ margin: fillColor ? "-2px 0" : undefined, boxShadow: "0 0 0 1px var(--content-color)" }}>
        {children}
      </Text>
    </View>
  );
}

export default Chip;

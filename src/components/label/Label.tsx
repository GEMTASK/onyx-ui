import { ChevronDownIcon } from "lucide-react";

import type { Delegate } from "../../types/Delegate";

import { Icon, Text, View } from "..";

function Label({
  flex,
  label,
  chevron,
  flipped,
  children,
  onPointerDown,
  onClick,
  ...props
}: Delegate<{
  label?: string,
  chevron?: boolean,
  flipped?: boolean,
}, typeof View<"div">>) {
  return (
    <View
      flex={flex}
      spacing="8px"
      cursor={props.cursor}
      opacityOnPress={props.opacityOnPress}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      {label && (
        <View horizontal spacing="4px" align="middle left" style={flipped ? { flexDirection: "row-reverse" } : undefined}>
          <Text light caps noWrap innerStyle={{ fontSize: 11, lineHeight: "17px" }}>
            {label}
          </Text>
          {chevron && (
            <Icon icon={ChevronDownIcon} size={16} style={{ opacity: 0.6, margin: -4, strokeWidth: 1 }} />
          )}
        </View>
      )}
      <View flex {...props}>
        {children}
      </View>
    </View>
  );
}

export default Label;

import { ChevronDownIcon } from "lucide-react";

import type { Delegate } from "../../types/Delegate";

import { Icon, Text, View } from "..";

function Label({
  label,
  chevron,
  children,
  onClick,
  ...props
}: Delegate<{
  label?: string,
  chevron?: boolean
}, typeof View<"label">>) {
  return (
    <View as="label" spacing="8px" style={{ cursor: "pointer" }} onClick={onClick}>
      {label && (
        <View horizontal spacing="4px" align="middle left">
          <Text light caps innerStyle={{ fontSize: 11, lineHeight: "17px" }}>
            {label}
          </Text>
          {chevron && (
            <Icon icon={ChevronDownIcon} size={16} style={{ opacity: 0.6, margin: -4, strokeWidth: 1 }} />
          )}
        </View>
      )}
      <View {...props}>
        {children}
      </View>
    </View>
  );
}

export default Label;

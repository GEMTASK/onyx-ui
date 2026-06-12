import { CheckIcon } from "lucide-react";

import { Icon, Label, Text, View } from "..";
import type { Delegate } from "../../main";

function Checkbox({
  label,
  value,
  icon,
  onValueChange,
  ...props
}: Delegate<{
  label?: string,
  value?: boolean,
  icon?: React.ComponentProps<typeof Icon>["icon"],
  onValueChange?: (value: boolean) => void,
}, typeof View<"input">>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(event.currentTarget.checked);
  };

  console.log(icon);
  return (
    <Label as="label">
      <View horizontal opacityOnPress spacing="8px" align="middle left">
        <View border={!value} fillColor={value ? "primary" : undefined} cornerRadius="2px" align="middle center" style={{ width: 24, height: 24 }}>
          <View absolute as="input" type="checkbox" checked={value} onChange={handleChange} {...props} />
          {value && (
            <Icon icon={icon ?? CheckIcon} size={20} color="white" />
          )}
        </View>
        <Text>
          {label}
        </Text>
      </View>
    </Label>
  );
}

export default Checkbox;

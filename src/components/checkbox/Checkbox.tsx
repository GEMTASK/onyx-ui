import { CheckIcon } from "lucide-react";

import { Icon, Label, Text, View } from "..";
import type { Delegate } from "../../main";

import styles from "./Checkbox.module.scss";

function Checkbox({
  label,
  value,
  icon,
  fillColor = "primary",
  onValueChange,
  ...props
}: Delegate<{
  label?: string,
  value?: boolean,
  icon?: React.ComponentProps<typeof Icon>["icon"],
  fillColor?: React.ComponentProps<typeof View>["fillColor"],
  onValueChange?: (value: boolean) => void,
}, typeof View<"input">>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(event.currentTarget.checked);
  };

  const checkboxFillColor = value ? fillColor : undefined;

  return (
    <Label as="label">
      <View horizontal opacityOnPress spacing="8px" align="middle left">
        <View border={!value} borderColor="gray-4" fillColor={checkboxFillColor} cornerRadius="2px" align="middle center" className={styles.Checkbox}>
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

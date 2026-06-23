import { CheckIcon } from "lucide-react";

import { Icon, Label, Text, View } from "..";
import type { Delegate } from "../../main";

import styles from "./Checkbox.module.scss";

function Checkbox({
  ref,
  label,
  value,
  icon,
  fillColor = "primary",
  onValueChange,
  onClick,
  ...props
}: Delegate<{
  label?: string,
  value?: boolean,
  icon?: React.ComponentProps<typeof Icon>["icon"],
  fillColor?: React.ComponentProps<typeof View>["fillColor"],
  onValueChange?: (value: boolean) => void,
  onClick?: React.ComponentProps<typeof View<"div" & "label">>["onClick"],
}, typeof View<"input">, "onClick">) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(event.currentTarget.checked);
  };

  const checkboxFillColor = value ? fillColor : undefined;

  const checkboxElement = (
    <View ref={ref} horizontal opacityOnPress spacing="8px" align="middle left" onClick={onClick}>
      <View border={!value} borderColor="gray-4" fillColor={checkboxFillColor} cornerRadius="2px" align="middle center" className={styles.Checkbox}>
        <View absolute as="input" type="checkbox" checked={value} onChange={handleChange} {...props} />
        {value && (
          <Icon icon={icon ?? CheckIcon} size={20} color="white" />
        )}
      </View>
      {label && (
        <Text>
          {label}
        </Text>
      )}
    </View>
  );

  if (!label) {
    return checkboxElement;
  }

  return (
    <View as="label">
      {checkboxElement}
    </View>
  );
}

export default Checkbox;

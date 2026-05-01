import type { Delegate } from "../../types/Delegate";

import { Icon, Label, Menu, Text, View } from "..";

type OptionValueBase = {
  icon?: React.ComponentProps<typeof Menu.Item>["icon"],
  iconColor?: React.ComponentProps<typeof Menu.Item>["iconColor"],
  iconFill?: React.ComponentProps<typeof Menu.Item>["iconFill"],
  label: React.ComponentProps<typeof Menu.Item>["title"],
  value: string | null | undefined,
  tooltip?: string,
};

type OptionValue = OptionValueBase | {
  label?: React.ComponentProps<typeof Menu.Item>["title"],
  options: OptionValueBase[],
};

function SelectOption({
  label,
  value,
  onClick,
  onSelect,
  ...props
}: Delegate<{
  label: React.ComponentProps<typeof Menu.Item>["title"],
  value: string | null | undefined,
  onSelect: (value: string | null | undefined) => void,
}, typeof Menu.Item, "title">) {
  const handleItemClick = () => {
    onSelect?.(value);
  };

  return (
    <Menu.Item title={label} onClick={handleItemClick} {...props} />
  );
}

//
// Select
//

function Select({
  label,
  value,
  options,
  onValueChange,
  ...props
}: Delegate<{
  label?: string,
  value?: string | null,
  options: OptionValue[],
  onValueChange?: (value: string | null | undefined) => void,
}, typeof Menu, "items" | "children">) {
  const handleOptionSelect = (value: string | null | undefined) => {
    onValueChange?.(value);
  };

  const menuItems = options.flatMap((option, index) => {
    switch (true) {
      case "options" in option:
        return [
          index !== 0 && (
            <Menu.Divider />
          ),
          ...(option.label ? [<Menu.Group label={option.label as string} />] : []),
          ...option.options.map((innerOption) => (
            <SelectOption
              selected={innerOption.value === value}
              icon={innerOption.icon}
              iconColor={innerOption.iconColor}
              iconFill={innerOption.iconFill}
              label={innerOption.label}
              value={innerOption.value}
              tooltip={innerOption.tooltip}
              onSelect={handleOptionSelect}
            />
          )),
          index !== options.length - 1 && !("options" in options[index]) && (
            <Menu.Divider />
          )
        ].filter(item => item !== false);
      default: {
        return (
          <SelectOption
            selected={option.value === value}
            icon={option.icon}
            iconColor={option.iconColor}
            iconFill={option.iconFill}
            label={option.label}
            value={option.value}
            tooltip={option.tooltip}
            onSelect={handleOptionSelect}
          />
        );
      }
    }
  });

  const option = options.reduce((acc, option) => (
    "options" in option
      ? option.options.find(option => option.value === value) ?? acc
      : option.value === value ? option : acc
  ), {} as OptionValueBase);

  return (
    <View style={{ marginBottom: -9 }}>
      <Menu items={menuItems} {...props}>
        <Label chevron label={label}>
          <View horizontal spacing="4px" align="middle left" style={{ padding: "0 0 8px 0" }}>
            {"icon" in option && option.icon && (
              <Icon icon={option.icon} color={option.iconColor} fill={option.iconFill ? "currentColor" : "none"} size={14} style={{ margin: "-2px 0" }} />
            )}
            <Text>
              {option.label}
            </Text>
          </View>
        </Label>
      </Menu>
    </View>
  );
}

export default Select;

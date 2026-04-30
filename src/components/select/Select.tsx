import type { Delegate } from "../../types/Delegate";

import { Label, Menu, Text, View } from "..";

type OptionValueBase = {
  icon?: React.ComponentProps<typeof Menu.Item>["icon"],
  iconColor?: React.ComponentProps<typeof Menu.Item>["iconColor"],
  label: React.ComponentProps<typeof Menu.Item>["title"],
  value: string | null | undefined,
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
              label={innerOption.label}
              value={innerOption.value}
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
            label={option.label}
            value={option.value}
            onSelect={handleOptionSelect}
          />
        );
      }
    }
  });

  return (
    <View style={{ marginBottom: -9 }}>
      <Menu items={menuItems} {...props}>
        <Label chevron label={label}>
          <Text style={{ padding: "0 0 8px 0" }}>
            {options.reduce((acc, option) => (
              "options" in option
                ? option.options.find(option => option.value === value) ?? acc
                : option.value === value ? option : acc
            ), {} as OptionValueBase).label}
          </Text>
        </Label>
      </Menu>
    </View>
  );
}

export default Select;

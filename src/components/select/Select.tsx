import type { Delegate } from "../../types/Delegate";

import { Icon, Label, Menu, Text, View } from "..";
import type { FieldValue } from "../../main";

type OptionValueBase = {
  icon?: React.ComponentProps<typeof Menu.Item>["icon"],
  iconColor?: React.ComponentProps<typeof Menu.Item>["iconColor"],
  iconFill?: React.ComponentProps<typeof Menu.Item>["iconFill"],
  label: React.ComponentProps<typeof Menu.Item>["title"],
  value: string | number | null | undefined,
  tooltip?: React.ComponentProps<typeof Menu.Item>["tooltip"],
  tooltipAnchor?: React.ComponentProps<typeof Menu.Item>["tooltipAnchor"],
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
  value: string | number | null | undefined,
  onSelect: (value: string | number | null | undefined) => void,
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
  multiple,
  onValueChange,
  ...props
}: Delegate<{
  label?: string,
  value?: FieldValue,
  options: OptionValue[],
  multiple?: boolean,
  onValueChange?: (value: FieldValue) => void,
}, typeof Menu, "items" | "children">) {
  const handleOptionSelect = (newValue: FieldValue) => {
    if (multiple) {
      if (newValue === undefined) {
        onValueChange?.(newValue);
      } else {
        onValueChange?.([...(Array.isArray(value) ? value : value === undefined ? [] : [value]), newValue]);
      }

      return;
    }

    if (newValue !== value) {
      onValueChange?.(newValue);
    }
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
              tooltipAnchor={"right"}
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
            tooltipAnchor={option.tooltipAnchor}
            onSelect={handleOptionSelect}
          />
        );
      }
    }
  });

  // const selectedOptions = multiple
  //   ? options.flatMap(option => (
  //     "options" in option ? option.options : [option]
  //   )).filter(option => Array.isArray(value) ? value.includes(value) : option.value === value)
  //   : options.flatMap(option => (
  //     "options" in option ? option.options : [option]
  //   )).filter(option => option.value === value);

  const selectedOptions = options.flatMap(option => (
    "options" in option ? option.options : [option]
  )).filter(option => Array.isArray(value) ? value.includes(option.value) : option.value === value);

  return (
    <View>
      <Menu items={menuItems} offsetTop={8} {...props}>
        <Label chevron label={label}>
          {selectedOptions.length > 0 ? (
            <View horizontal spacing="12px">
              {selectedOptions.map(selectedOption => (
                console.log(">>>", selectedOption.value),
                <View horizontal key={selectedOption.value} spacing="4px" align="middle left">
                  {selectedOption.icon && (
                    <Icon
                      icon={selectedOption.icon}
                      color={selectedOption.iconColor}
                      fill={selectedOption.iconFill ? "currentColor" : "none"}
                      size={14}
                      style={{ margin: "-2px 0" }}
                    />
                  )}
                  <Text noWrap>
                    {selectedOption.label}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <View horizontal>
              <Text noWrap>
                {value} — Value
              </Text>
            </View>
          )}
        </Label>
      </Menu>
    </View>
  );
}

export default Select;

import { Icon, Text, View } from "..";

function Toggle({
  value,
  icon,
  iconColor,
  children,
  onValueChange
}: {
  value?: boolean,
  icon: React.ComponentProps<typeof Icon>["icon"],
  iconColor: React.ComponentProps<typeof Icon>["color"],
  children: React.ComponentProps<typeof Text<"div">>["children"],
  onValueChange?: (value: boolean) => void,
}) {
  const handleClick = () => {
    onValueChange?.(!value);
  };

  return (
    <View
      horizontal
      opacityOnPress
      spacing="4px"
      align="middle left"
      cursor="pointer"
      onClick={handleClick}
    >
      <Icon bleed light={!value} icon={icon} size={14} color={value ? iconColor : undefined} />
      <Text light={!value} ellipsis>
        {children}
      </Text>
    </View>
  );
}

export default Toggle;

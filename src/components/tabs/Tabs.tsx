import { Chip, Text, View } from "..";
import type { Delegate } from "../../types/Delegate";

function Tab({
  index,
  badge,
  selected,
  children,
  onTabSelect,
  ...props
}: Delegate<{
  index: number,
  badge?: React.ReactNode,
  selected: boolean,
  onTabSelect: (index: number) => void,
}, typeof Text<"div">>) {
  const handleClick = () => {
    onTabSelect(index);
  };

  return (
    <View
      horizontal
      opacityOnPress
      spacing="4px"
      align="middle left"
      negativeBorder
      border="bottom"
      borderColor={selected ? "primary" : "transparent"}
      style={{ paddingBottom: 8, borderWidth: 1.5 }}
      cursor="pointer"
      onClick={handleClick}
    >
      <Text
        light={!selected}
        fontSize="18px"
        {...props}
      >
        {children}
      </Text>
      {badge && (
        <Chip bold fontSize="14px" fillColor="highlight">
          {badge}
        </Chip>
      )}
    </View>
  );
}

function Tabs({
  selectedTabIndex,
  children,
  onTabSelect,
  ...props
}: Delegate<{
  selectedTabIndex: number,
  children: {
    title: string,
    badge?: React.ReactNode,
  }[],
  onTabSelect: (index: number) => void,
}, typeof View<"div">>) {

  return (
    <View horizontal spacing="16px" {...props}>
      {children.map(({ title, badge }, index) => (
        <Tab key={index} index={index} badge={badge} selected={index === selectedTabIndex} onTabSelect={onTabSelect}>
          {title}
        </Tab>
      ))
      }
    </View>
  );
}

Tabs.Panel = function ({
  active = true,
  children,
  ...props
}: Delegate<{
  active?: boolean,
}, typeof View<"div">>) {
  return (
    <View style={{ flexShrink: 0, flexBasis: "100%", overflowY: "auto", scrollSnapAlign: "start" }} {...props}>
      {active && (
        children
      )}
    </View>
  );
};

export default Tabs;

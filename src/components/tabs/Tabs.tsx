import { Text, View } from "..";
import type { Delegate } from "../../types/Delegate";

function Tab({
  index,
  selected,
  children,
  onTabSelect,
  ...props
}: Delegate<{
  index: number,
  selected: boolean,
  onTabSelect: (index: number) => void,
}, typeof Text<"div">>) {
  const handleClick = () => {
    onTabSelect(index);
  };

  return (
    <Text
      light={!selected}
      fontSize="18px"
      cursor="pointer"
      negativeBorder
      border="bottom"
      borderColor={selected ? "primary" : undefined}
      style={{ paddingBottom: 8 }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Text>

  );
}

function Tabs({
  // tabs,
  selectedTabIndex,
  children,
  onTabSelect,
  ...props
}: Delegate<{
  // tabs: {
  //   title: string,
  // }[],
  selectedTabIndex: number,
  children: {
    title: string,
  }[],
  onTabSelect: (index: number) => void,
}, typeof View<"div">>) {

  return (
    <View horizontal spacing="16px" {...props}>
      {children.map(({ title }, index) => (
        <Tab key={index} index={index} selected={index === selectedTabIndex} onTabSelect={onTabSelect}>
          {title}
        </Tab>
      ))
      }
    </View>
  );
}

export default Tabs;

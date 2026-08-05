import type { Delegate } from "../../types/Delegate";

import { View } from "..";

function Divider({
  size,
  style,
  ...props
}: Delegate<{
  size?: React.ComponentProps<typeof View<"div">>["padding"],
}, typeof View<"div">>) {
  if (size) {
    return (
      <>
        <View padding={size} />
        <View fillColor="divider" style={{ ...style, minWidth: 1, minHeight: 1, alignSelf: "stretch" }} {...props} />
        <View padding={size} />
      </>
    );
  }

  return (
    <View fillColor="divider" style={{ ...style, minWidth: 1, minHeight: 1, alignSelf: "stretch" }} {...props} />
  );
}

export default Divider;

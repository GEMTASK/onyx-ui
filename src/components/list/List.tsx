import React from "react";

import type { Delegate } from "../../types/Delegate";
import { View, Divider } from "..";

function List({
  children
}: Delegate<object, typeof View<"div">>) {
  return (
    <View border cornerRadius="4px" style={{ overflow: "hidden" }}>
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <Divider />
          )}
          {child}
        </React.Fragment>
      ))}
    </View>
  );
}

export default List;

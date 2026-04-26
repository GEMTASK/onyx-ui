import React from "react";

import type { Delegate } from "../../types/Delegate";
import { View, Divider } from "..";

import styles from "./List.module.scss";

function List({
  children,
  ...props
}: Delegate<object, typeof View<"div">>) {
  return (
    <View border cornerRadius="4px" className={styles.List} {...props}>
      {React.Children.map(children, (child, index) => React.isValidElement(child) && (
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

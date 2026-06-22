import React from "react";

import type { Delegate } from "../../types/Delegate";
import { View, Divider } from "..";

import styles from "./List.module.scss";

function List({
  children,
  ...props
}: Delegate<object, typeof View<"div">>) {
  return (
    <View border spacing="1px" fillColor="divider" cornerRadius="4px" className={styles.List} {...props}>
      {React.Children.map(children, (child, index) => React.isValidElement(child) && (
        child
      ))}
    </View>
  );
}

export default List;

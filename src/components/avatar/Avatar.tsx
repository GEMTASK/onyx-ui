import React from "react";

import { type Delegate } from "../../types/Delegate";
import { Text, View } from "..";

import styles from "./Avatar.module.scss";

function Avatar({
  name,
  label,
  imageOnly,
  ...props
}: Delegate<{
  name?: string,
  label?: string,
  imageOnly?: boolean,
}, typeof View<"div">>) {
  return (
    <View horizontal spacing="8px" {...props}>
      <View cornerRadius="max" fillColor="icon" align="middle center" className={styles.Image}>
        <Text fontWeight="500">
          SC
        </Text>
      </View>
      {!imageOnly && (
        <View spacing="8px">
          <Text>{name}</Text>
          <Text light fontSize="12px">{label}</Text>
        </View>
      )}
    </View>
  );
}

Avatar.Stack = function ({
  children,
  ...props
}: Delegate<{
  children: React.ReactElement<{
    className: string,
  }>[],
}, typeof View<"div">>) {
  return (
    <View horizontal {...props}>
      {React.Children.map(children, child => (
        React.isValidElement(child) && React.cloneElement(child, {
          className: styles.StackItem
        })
      ))}
    </View>
  );
};

export default Avatar;

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
  const initials = name?.split(" ").map(name => name[0].toUpperCase()).join("");

  return (
    <View horizontal spacing="8px" {...props}>
      <View cornerRadius="max" fillColor="icon" align="middle center" className={styles.Image}>
        <Text fontSize="12px" fontWeight="600">
          {initials}
        </Text>
      </View>
      {!imageOnly && (
        <View spacing="8px" align="middle left" style={{ gap: 6 }}>
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
  const avatarCount = React.Children.count(children);

  return (
    <View horizontal className={styles.Stack} {...props}>
      {React.Children.map(children, child => (
        React.isValidElement(child) && React.cloneElement(child, {
          className: styles.StackItem
        })
      ))}
      {avatarCount === 0 && (
        <View cornerRadius="max" className={styles.Image} style={{ border: "1px dashed var(--divider-color)" }} />
      )}
    </View>
  );
};

export default Avatar;

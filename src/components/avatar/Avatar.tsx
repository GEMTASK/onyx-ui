import React from "react";

import { type Delegate } from "../../types/Delegate";
import { Icon, Text, View } from "..";

import styles from "./Avatar.module.scss";

function Avatar({
  name,
  label,
  badge,
  imageOnly,
  imageBorder,
  imageFillColor = "icon",
  ...props
}: Delegate<{
  name?: string,
  label?: string,
  badge?: React.ComponentProps<typeof Icon>["icon"],
  imageOnly?: boolean,
  imageBorder?: boolean,
  imageFillColor?: React.ComponentProps<typeof View<"div">>["fillColor"],
}, typeof View<"div">>) {
  const initials = name?.split(" ").map(name => name[0].toUpperCase()).join("");

  const imageClassName = [
    styles.Image,
    imageBorder && styles.border
  ].filter(className => className).join(" ");

  return (
    <View horizontal spacing="8px" {...props}>
      <View
        border={imageBorder}
        borderColor="primary"
        cornerRadius="max"
        fillColor={imageFillColor}
        align="middle center"
        className={imageClassName}
      >
        <Text fontSize="12px" fontWeight="600">
          {initials}
        </Text>
        {badge && (
          <Icon icon={badge} size={14} color="primary" fill="white" style={{ position: "absolute", top: -1, left: -1 }} />
        )}
      </View>
      {!imageOnly && (
        <View spacing="8px" align="middle left" style={{ gap: 6 }}>
          <Text>{name}</Text>
          {label && (
            <Text light fontSize="12px">{label}</Text>
          )}
        </View>
      )}
    </View>
  );
}

type Children = boolean | React.ReactElement<{
  className: string,
}> | Children[];

Avatar.Stack = function ({
  children,
  ...props
}: Delegate<{
  children: Children,
}, typeof View<"div">>) {
  const childrenArray = React.Children.toArray(children);

  return (
    <View horizontal className={styles.Stack} {...props}>
      {React.Children.map(children, child => (
        React.isValidElement(child) && React.cloneElement(child, {
          className: styles.StackItem
        })
      ))}
      {childrenArray.length === 0 && (
        <View cornerRadius="max" className={styles.Image} style={{ border: "1px dashed var(--divider-color)" }} />
      )}
    </View>
  );
};

export default Avatar;

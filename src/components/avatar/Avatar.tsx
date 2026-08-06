import React from "react";
import { ChevronDownIcon } from "lucide-react";

import { type Delegate } from "../../types/Delegate";
import { Icon, Text, View } from "..";

import styles from "./Avatar.module.scss";

function Avatar({
  name,
  label,
  badge,
  chevron,
  flipped,
  imageOnly,
  imageBorder,
  imageFillColor = "icon",
  imageTextColor,
  ...props
}: Delegate<{
  name?: string,
  label?: string,
  badge?: React.ComponentProps<typeof Icon>["icon"],
  chevron?: boolean,
  flipped?: boolean,
  imageOnly?: boolean,
  imageBorder?: boolean,
  imageFillColor?: React.ComponentProps<typeof View<"div">>["fillColor"],
  imageTextColor?: React.ComponentProps<typeof Text<"div">>["textColor"],
}, typeof View<"div">>) {
  const initials = name?.split(" ").map(name => name[0].toUpperCase()).join("");

  const imageClassName = [
    styles.Image,
    imageBorder && styles.border
  ].filter(className => className).join(" ");

  return (
    <View horizontal spacing="8px" align={"middle left"} {...props} style={flipped ? { flexDirection: "row-reverse" } : undefined}>
      <View
        border={imageBorder}
        borderColor="primary"
        cornerRadius="max"
        fillColor={imageFillColor}
        align="middle center"
        className={imageClassName}
      >
        <Text fontSize="12px" fontWeight="600" textColor={imageTextColor}>
          {initials}
        </Text>
        {badge && (
          <Icon icon={badge} size={14} color="primary" fill="white" style={{ position: "absolute", top: -1, left: -1 }} />
        )}
      </View>
      {!imageOnly && (
        <View spacing="8px" align={flipped ? "middle right" : "middle left"}>
          <View horizontal spacing="4px" align="middle left" style={flipped ? { flexDirection: "row-reverse" } : undefined}>
            <Text noWrap>
              {name}
            </Text>
            {chevron && (
              <Icon icon={ChevronDownIcon} size={16} style={{ margin: -4, strokeWidth: 1 }} />
            )}
          </View>
          {label && (
            <Text light noWrap fontSize="12px">
              {label}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

Avatar.Empty = function ({
  ...props
}: React.ComponentProps<typeof View<"div">>) {
  return (
    <View cornerRadius="max" className={[styles.Image, styles.StackItem].join(" ")} style={{ border: "1.5px dashed var(--divider-color)" }} {...props} />
  );
};

type Children = boolean | null | React.ReactElement<{
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
        <Avatar.Empty />
      )}
    </View>
  );
};

export default Avatar;

import { useContext, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { ChevronDownIcon } from "lucide-react";

import type { Delegate } from "../../types/Delegate";
import { ViewContext } from "../view/View";

import { View, Text, Icon, Menu } from "..";

import styles from "./Button.module.scss";

type ButtonStyle = {
  solid?: boolean,
  primary?: boolean,
  hover?: boolean,
  selected?: boolean,
};

const getFillColor = ({ parentFillColor, solid, primary, hover, selected }: ButtonStyle & ViewContext) => {
  switch (true) {
    case selected:
      return "selected";
    case !hover && solid && primary:
      return "primary";
    // case solid && parentFillColor === "divider":
    //   return "gutter";
    case solid:
      return parentFillColor === "panel" ? "icon" : "gutter";
    case hover:
      return undefined;
  }

  return undefined;
};

const getTextColor = ({ primary, solid }: ButtonStyle) => {
  switch (true) {
    case solid && primary:
      return "content";
    case primary:
      return "primary";
  }

  return undefined;
};

function Button({
  ref,
  solid,
  primary,
  hover,
  //
  icon,
  iconColor,
  iconFill,
  rightIcon,
  round,
  bold = true,
  fontWeight,
  selected,
  //
  opacityOnPress,
  className,
  children,
  ...props
}: Delegate<{
  icon?: React.ComponentProps<typeof Icon>["icon"],
  iconColor?: React.ComponentProps<typeof Icon>["color"],
  iconFill?: boolean,
  rightIcon?: React.ComponentProps<typeof Icon>["icon"],
  round?: boolean,
  bold?: boolean,
  fontWeight?: React.ComponentProps<typeof Text<"div">>["fontWeight"],
  selected?: boolean,
} & ButtonStyle, typeof View<"button">>) {
  const buttonElementRef = useRef<HTMLButtonElement>(null);

  const buttonClassName = [
    styles.Button,
    solid && styles.solid,
    primary && styles.primary,
    hover && styles.hover,
    selected && styles.selected,
    className
  ].filter(className => className).join(" ");

  const { parentFillColor } = useContext(ViewContext);

  const fillColor = getFillColor({ parentFillColor, solid, primary, hover, selected });
  const textColor = getTextColor({ solid, primary, hover, selected });

  useImperativeHandle(ref, () => buttonElementRef.current!);

  useLayoutEffect(() => {
    if (buttonElementRef.current) {
      buttonElementRef.current.style.setProperty(
        "--hover-color",
        `var(--${parentFillColor === "panel" ? "icon" : "gutter"}-color)`
      );
    }
  }, [fillColor, parentFillColor]);

  return (
    <View
      ref={buttonElementRef}
      horizontal
      as="button"
      type="button"
      cursor="pointer"
      padding={children ? "8px 12px" : "8px"}
      spacing="8px"
      align="middle center"
      cornerRadius={round ? "max" : "2px"}
      fillColor={fillColor}
      className={buttonClassName}
      {...props}
    >
      {icon && (
        <Icon
          icon={icon}
          size={16}
          color={iconColor ?? textColor}
          fill={iconFill ? "currentColor" : "none"}
          style={{ strokeWidth: 2.5, marginTop: -2, marginBottom: -2, marginLeft: children ? 0 : -2, marginRight: 0 }}
        />
      )}
      {typeof children !== "string" ? children : (
        <Text bold={bold} fontWeight={fontWeight} textColor={textColor} style={{ textAlign: "left" }}>
          {children}
        </Text>
      )}
      {rightIcon && (
        <View flex align="middle right">
          <Icon
            icon={rightIcon}
            size={16}
            color={textColor}
            style={{ strokeWidth: 2.5, marginTop: -2, marginBottom: -2, marginRight: children ? -3 : 0, justifySelf: "flex-end" }}
          />
        </View>
      )}
    </View>
  );
}

Button.Menu = function ActionMenu({
  solid,
  cornerRadius,
  children,
  ...props
}: Delegate<{
  solid?: React.ComponentProps<typeof Button>["solid"],
  children: React.ComponentProps<typeof Button>["children"],
}, typeof Menu>) {
  return (
    <Menu anchor="bottom left" {...props}>
      <Button solid={solid} rightIcon={ChevronDownIcon} cornerRadius={cornerRadius}>
        {children}
      </Button>
    </Menu>
  );
};

export default Button;

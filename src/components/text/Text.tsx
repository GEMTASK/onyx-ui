import { View } from "..";

import type { Color } from "../../types/Color";

import styles from "./Text.module.css";
import fontSizeStyles from "../../styles/fontSize.module.scss";
import fontWeightStyles from "../../styles/fontWeight.module.scss";
import textColorStyles from "../../styles/textColor.module.scss";
import React, { useContext } from "react";

type TextContext = {
  textParent: boolean
};

const TextContext = React.createContext<TextContext>({
  textParent: false
});

function Text<TDelegate extends React.ElementType = "div">({
  as,
  select,
  light,
  caps,
  bold,
  fontSize,
  fontWeight,
  textColor,
  innerStyle,
  children,
  ...props
}: {
  as?: TDelegate,
  light?: boolean,
  caps?: boolean,
  bold?: boolean,
  select?: boolean,
  fontSize?: "12px" | "14px" | "18px" | "24px" | "32px",
  fontWeight?: false | "300" | "400" | "500" | "600" | "700",
  textColor?: false | Color,
  innerStyle?: React.ComponentProps<"span">["style"]
} & React.ComponentProps<typeof View<TDelegate>>) {
  const { textParent } = useContext(TextContext);

  //   const innerClassName = clsx(
  //   fontSize && fontSizeStyles[`_${fontSize}`] || fontSizeStyles["_14px"],
  // );

  const spanClassName = [
    // thin && fontWeightStyles.thin,
    bold && fontWeightStyles.bold,
    light && styles.light,
    caps && styles.caps,
    // highlight && textStyles.highlight,
    fontSize && fontSizeStyles[`_${fontSize}`],
    fontWeight && fontWeightStyles[`_${fontWeight}`],
    textColor && textColorStyles[textColor]
  ].filter(className => className).join(" ");

  if (textParent) {
    const Component = as ?? "span";

    return (
      <Component className={spanClassName}>
        {children}
      </Component>
    );
  }

  const textClassName = [
    styles.Text,
    select && styles.select,
    light && styles.light,
    caps && styles.caps,
    bold && fontWeightStyles._600,
    fontSize && fontSizeStyles[`_${fontSize}`] || fontSizeStyles._14px,
    fontWeight && fontWeightStyles[`_${fontWeight}`],
    textColor && textColorStyles[textColor] || textColorStyles["text"]
  ].filter(className => className).join(" ");

  return (
    <View as={as as React.ElementType} {...props}>
      <span className={textClassName + " " + spanClassName} style={innerStyle}>
        <TextContext value={{ textParent: true }}>
          {children}
        </TextContext>
      </span>
    </View>
  );
}

export default Text;

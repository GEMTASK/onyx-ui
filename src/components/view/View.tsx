import React from "react";

import type { Align } from "../../types/Align";
import type { Padding } from "../../types/Padding";
import type { Delegate } from "../../types/Delegate";
import type { Color } from "../../types/Color";

import styles from "./View.module.css";
import fillColorStyles from "../../styles/fillColor.module.scss";
import paddingStyles from "../../styles/padding.module.scss";
import spacingStyles from "../../styles/spacing.module.scss";
import borderStyles from "../../styles/border.module.scss";
import cornerRadiusStyles from "../../styles/conerRadius.module.scss";
import alignHorizontalStyles from "../../styles/alignHorizontal.module.scss";
import alignVerticalStyles from "../../styles/alignVertical.module.scss";
import borderColorStyles from "../../styles/borderColor.module.scss";

type ViewContext = {
  parentFillColor?: false | Color,
};

const ViewContext = React.createContext<ViewContext>({
  parentFillColor: undefined
});

function View<TDelegate extends React.ElementType = "div">({
  as,
  flex,
  wrap,
  horizontal,
  absolute,
  sticky,
  zIndex,
  shadow,
  cursor,
  padding,
  spacing,
  border,
  negativeBorder,
  align,
  fillColor,
  borderColor,
  cornerRadius,
  style,
  className,
  children,
  ...props
}: Delegate<{
  as?: TDelegate,
  flex?: boolean,
  wrap?: boolean,
  horizontal?: boolean,
  absolute?: boolean,
  sticky?: boolean,
  zIndex?: 1 | 2 | 3,
  shadow?: boolean,
  cursor?: "pointer",
  padding?: Padding,
  spacing?: Padding,
  border?: true | "top" | "bottom" | "left" | "right" | "top bottom" | "none",
  negativeBorder?: boolean,
  align?: Align,
  fillColor?: false | Color,
  borderColor?: Color,
  cornerRadius?: "0px" | "2px" | "4px" | "max",
}, TDelegate>) {
  const Component = as ?? "div";

  const viewClassName = [
    styles.View,
    flex && styles.flex,
    wrap && styles.wrap,
    absolute && styles.absolute,
    sticky && styles.sticky,
    zIndex && styles[`zindex_${zIndex}`],
    horizontal && styles.horizontal,
    shadow && styles.shadow,
    cursor && styles[cursor],
    padding && paddingStyles[`_${padding.replace(/ /, "_")}`],
    spacing && spacingStyles[`_${spacing.replace(/ /, "_")}`],
    border && borderStyles[border === true ? "top_right_bottom_left" : border.replace(/ /, "_")],
    negativeBorder && borderStyles.negative,
    align && (
      horizontal
        ? alignHorizontalStyles[align.replace(/ /, "_")]
        : alignVerticalStyles[align.replace(/ /, "_")]
    ),
    fillColor && fillColorStyles[fillColor],
    cornerRadius && cornerRadiusStyles[`_${cornerRadius}`],
    borderColor && borderColorStyles[borderColor],
    className
  ].filter(className => className).join(" ");

  const viewStyle = {
    ...style
  };

  const viewContextValue = {
    parentFillColor: fillColor
  };

  return (
    <ViewContext value={viewContextValue}>
      <Component className={viewClassName} style={viewStyle} {...props}>
        {children}
      </Component>
    </ViewContext>
  );
}

export {
  ViewContext
};

export default View;

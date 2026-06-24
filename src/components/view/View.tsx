import React, { useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Align } from "../../types/Align";
import type { Padding } from "../../types/Padding";
import type { Delegate } from "../../types/Delegate";
import type { Color } from "../../types/Color";

import styles from "./View.module.scss";
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
  ref,
  as,
  flex,
  wrap,
  horizontal,
  absolute,
  sticky,
  active,
  opacityOnPress,
  zIndex,
  shadow,
  cursor,
  padding,
  spacing,
  border,
  borderOnFocus,
  negativeBorder,
  align,
  fillColor,
  borderColor,
  cornerRadius,
  tooltip,
  tooltipAnchor = "top",
  tooltipOffset = 0,
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
  active?: boolean,
  opacityOnPress?: boolean,
  zIndex?: 1 | 2 | 3,
  shadow?: boolean | "light" | "heavy",
  cursor?: "pointer",
  padding?: Padding,
  spacing?: Padding,
  border?: boolean | "top" | "bottom" | "left" | "right" | "top bottom" | "none",
  borderOnFocus?: boolean,
  negativeBorder?: boolean,
  align?: Align,
  fillColor?: false | Color,
  borderColor?: Color,
  cornerRadius?: "0px" | "2px" | "4px" | "max",
  tooltip?: string,
  tooltipAnchor?: "top" | "right" | "left" | "bottom" | "top right",
  tooltipOffset?: number,
}, TDelegate>) {
  const [isTooltipVisible, setIstooltipVisible] = useState(false);
  const viewElementRef = useRef<HTMLDivElement>(null);
  const tooltipElementRef = useRef<HTMLDivElement>(null);

  const handlePointerEnter = () => {
    if (tooltip) setIstooltipVisible(true);
  };

  const handlePointerLeave = () => {
    if (tooltip) setIstooltipVisible(false);
  };

  useImperativeHandle(ref, () => viewElementRef.current!);

  useLayoutEffect(() => {
    if (isTooltipVisible && viewElementRef.current && tooltipElementRef.current) {
      const viewClientRect = viewElementRef.current.getBoundingClientRect();
      const tooltipClientRect = tooltipElementRef.current.getBoundingClientRect();

      if (tooltipAnchor === "top") {
        tooltipElementRef.current.style.left = `${viewClientRect.left - (tooltipClientRect.width - viewClientRect.width) / 2}px`;
        tooltipElementRef.current.style.top = `${viewClientRect.top - tooltipClientRect.height - 8}px`;
      } else if (tooltipAnchor === "right") {
        tooltipElementRef.current.style.left = `${viewClientRect.right + 8}px`;
        tooltipElementRef.current.style.top = `${viewClientRect.top - (tooltipClientRect.height - viewClientRect.height) / 2}px`;
      }
    }
  }, [isTooltipVisible, tooltipAnchor]);

  const Component = as ?? "div";

  const viewClassName = [
    styles.View,
    flex && styles.flex,
    wrap && styles.wrap,
    absolute && styles.absolute,
    sticky && styles.sticky,
    opacityOnPress && styles.opacityOnPress,
    zIndex && styles[`zindex_${zIndex}`],
    horizontal && styles.horizontal,
    shadow === "heavy" ? styles.heavyShadow : shadow && styles.shadow,
    cursor && styles[cursor],
    padding && paddingStyles[`_${padding.replace(/ /, "_")}`],
    spacing && spacingStyles[`_${spacing.replace(/ /, "_")}`],
    border && borderStyles[border === true ? "top_right_bottom_left" : border.replace(/ /, "_")],
    borderOnFocus && styles.borderOnFocus,
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

  const viewContextValue = {
    parentFillColor: fillColor
  };

  const overlayElement = document.querySelector("#overlay");

  const tooltipContent = (
    <div ref={tooltipElementRef} className={styles.tooltip}>
      {tooltip}
    </div>
  );

  return (
    <>
      <ViewContext value={viewContextValue}>
        <Component
          ref={viewElementRef}
          className={viewClassName}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          {...props}
        >
          {children}
        </Component>
      </ViewContext>
      {isTooltipVisible && overlayElement && (
        createPortal(tooltipContent, overlayElement)
      )}
    </>
  );
}

export {
  ViewContext
};

export default View;

import React, { cloneElement, isValidElement, useCallback, useEffect, useRef, useState } from "react";

import type { Delegate } from "../../types/Delegate";
import { Button, Divider, Popover, Text, View } from "..";

function MenuGroup({
  label
}: {
  label: string,
}) {
  return (
    <Text light caps style={{ margin: "8px 12px" }} innerStyle={{ fontSize: 11, lineHeight: "17px", whiteSpace: "nowrap" }}>
      {label}
    </Text>
  );
}

function MenuDivider() {
  return (
    <Divider style={{ margin: "8px 12px" }} />
  );
}

//
// MenuItem
//

function MenuItem({
  title,
  value,
  style,
  children,
  onClick,
  onSelect,
  ...props
}: Delegate<{
  title?: React.ComponentProps<typeof Button>["children"],
  value?: string | number,
  onSelect?: (value: string | number | undefined) => void,
}, typeof Button>) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    onSelect?.(value);
  };

  return (
    <Button
      hover
      align="middle left"
      fontWeight="400"
      cornerRadius="0px"
      tooltipAnchor="right"
      style={{ whiteSpace: "nowrap", ...style }}
      onClick={handleClick}
      {...props}
    >
      {title ?? children}
    </Button>
  );
}

//
// Menu
//

function Menu({
  items,
  header,
  footer,
  style,
  children,
  onItemSelect,
  onVisibilityChange,
  ...props
}: Delegate<{
  items: (React.ReactElement<{
    onSelect?: (value: string | undefined) => void,
  }>)[],
  header?: React.ReactNode,
  footer?: React.ReactNode,
  children: React.ReactElement<{
    ref: React.RefObject<HTMLDivElement | null> | React.RefObject<HTMLDivElement>,
    style?: React.CSSProperties,
    cursor?: string,
    active?: boolean,
    onClick: React.PointerEventHandler,
  }>,
  onItemSelect?: (value: string | undefined) => void,
  onVisibilityChange?: (visible: boolean) => void,
}, typeof Popover, "isVisible" | "content">) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const menuElementRef = useRef<HTMLDivElement>(null);

  //

  const handleItemSelect = (value: string | undefined) => {
    setIsPopoverVisible(false);
    onVisibilityChange?.(false);

    onItemSelect?.(value);
  };

  const handleDocumentPointerDown = useCallback((event: PointerEvent) => {
    if (!menuElementRef.current?.contains(event.target as HTMLElement)) {
      setIsPopoverVisible(false);
      onVisibilityChange?.(false);
    }
  }, [onVisibilityChange]);

  //

  useEffect(() => {
    document.addEventListener("pointerdown", handleDocumentPointerDown);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
    };
  }, [handleDocumentPointerDown]);

  //

  const popoverContent = (
    <View ref={menuElementRef}>
      {header && (
        <>
          {header}
          <Divider />
        </>
      )}
      <View padding="8px 0px">
        {items.map((item, index) => isValidElement(item) && cloneElement(item, {
          key: index,
          onSelect: (...args) => { handleItemSelect(...args); item.props.onSelect?.(...args); }
        }))}
      </View>
      {footer && (
        <>
          {<Divider />}
          {footer}
        </>
      )}
    </View>
  );

  const onlyChild = React.Children.only(children);

  return (
    <Popover isVisible={isPopoverVisible} content={popoverContent} {...props}>
      {React.isValidElement(onlyChild) && React.cloneElement(onlyChild, {
        style: { ...onlyChild.props.style, ...style },
        cursor: "pointer",
        active: isPopoverVisible || onlyChild.props.active,
        onClick: () => {
          setIsPopoverVisible(isPopoverVisible => !isPopoverVisible);
        }
      })}
    </Popover>
  );
}

Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
Menu.Group = MenuGroup;

export default Menu;

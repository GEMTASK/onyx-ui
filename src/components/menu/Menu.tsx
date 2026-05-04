import React, { cloneElement, isValidElement, useEffect, useRef, useState } from "react";

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
    <Divider style={{ margin: "8px" }} />
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
  value?: string,
  onSelect?: (value: string | undefined) => void,
}, typeof Button>) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    onSelect?.(value);
  };

  return (
    <Button hover align="middle left" cornerRadius="0px" style={{ whiteSpace: "nowrap", ...style }} onClick={handleClick} {...props}>
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
  headerDivider,
  footer,
  footerDivider,
  children,
  onSelect,
  ...props
}: Delegate<{
  items: (React.ReactElement<{
    onSelect?: (value: string | undefined) => void,
  }>)[],
  header?: React.ReactNode,
  headerDivider?: boolean,
  footer?: React.ReactNode,
  footerDivider?: boolean,
  children: React.ReactElement<{
    ref: React.RefObject<HTMLElement | null>,
    cursor?: string,
    solid?: boolean,
    onClick: React.PointerEventHandler,
  }>,
  onSelect?: (value: string | undefined) => void,
}, typeof Popover, "isVisible" | "content">) {
  const menuElementRef = useRef<HTMLDivElement>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleDocumentPointerDown = (event: PointerEvent) => {
    if (!menuElementRef.current?.contains(event.target as HTMLElement)) {
      setIsPopoverVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("pointerdown", handleDocumentPointerDown);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
    };
  }, []);

  const handleItemSelect = (value: string | undefined) => {
    setIsPopoverVisible(false);

    onSelect?.(value);
  };

  const popoverContent = (
    <View ref={menuElementRef}>
      {header && (
        <>
          {header}
          {headerDivider && <Divider style={{ margin: "0px 8px" }} />}
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
          {footerDivider && <Divider style={{ margin: "0px 8px" }} />}
          {footer}
        </>
      )}
    </View>
  );

  const onlyChild = React.Children.only(children);

  return (
    <Popover isVisible={isPopoverVisible} content={popoverContent} {...props}>
      {React.isValidElement(onlyChild) && React.cloneElement(onlyChild, {
        cursor: "pointer",
        solid: isPopoverVisible || onlyChild.props.solid,
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

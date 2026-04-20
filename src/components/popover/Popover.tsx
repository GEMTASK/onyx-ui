/* eslint-disable react-hooks/refs */

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import type { Delegate } from "../../types/Delegate";
import { View } from "..";

import styles from "./Popover.module.scss";

function Popover({
  content,
  isVisible,
  anchor,
  noPortal,
  children
}: Delegate<{
  content: React.ReactNode,
  isVisible: boolean,
  anchor?: "bottom left" | "top right",
  noPortal?: boolean,
  children: React.ReactElement<{
    ref: React.RefObject<HTMLElement | null>,
    className?: string,
  }> | boolean,
}, typeof View<"div">>) {
  const childElementRef = useRef<HTMLDivElement>(null);
  const popoverElementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const overlayElement = childElementRef.current?.closest("#window")?.querySelector("#overlay") as HTMLElement;

    if (noPortal && isVisible && childElementRef.current && popoverElementRef.current) {
      const childClientRect = childElementRef.current.getBoundingClientRect();
      const popoverClientRect = popoverElementRef.current.getBoundingClientRect();
      const overlayClientRect = overlayElement.getBoundingClientRect();

      if (anchor === "top right") {
        popoverElementRef.current.style.left = `${childClientRect.width}px`;
        popoverElementRef.current.style.top = `${childClientRect.top - popoverClientRect.top}px`;
      } else {
        popoverElementRef.current.style.left = `${childClientRect.left + 1 - overlayClientRect.left}px`;
        popoverElementRef.current.style.top = `${childClientRect.bottom + 0 - overlayClientRect.top}px`;
      }
    } else if (isVisible && childElementRef.current && popoverElementRef.current) {
      const childClientRect = childElementRef.current.getBoundingClientRect();
      // const popoverClientRect = popoverElementRef.current.getBoundingClientRect();
      const overlayClientRect = overlayElement.getBoundingClientRect();

      if (anchor === "top right") {
        popoverElementRef.current.style.left = `${childClientRect.right - overlayClientRect.left}px`;
        popoverElementRef.current.style.top = `${childClientRect.top - 8 - overlayClientRect.top}px`;
      } else {
        popoverElementRef.current.style.left = `${childClientRect.left + 1 - overlayClientRect.left}px`;
        popoverElementRef.current.style.top = `${childClientRect.bottom + 0 - overlayClientRect.top}px`;
      }
    }
  }, [anchor, isVisible, noPortal]);

  const overlayElement = childElementRef.current?.closest("#window")?.querySelector("#overlay");
  const onlyChild = React.Children.only(children);

  const popoverContent = (
    <View
      ref={popoverElementRef}
      absolute
      shadow
      fillColor="content"
      cornerRadius="4px"
      style={{ pointerEvents: "auto" }}
    >
      {content}
    </View>
  );

  return (
    <>
      {React.isValidElement(onlyChild) && React.cloneElement(onlyChild, {
        ref: childElementRef,
        className: [styles.children, onlyChild.props.className].filter(className => className).join(" ")
      })}
      {noPortal && isVisible && overlayElement && (
        popoverContent
      )}
      {!noPortal && isVisible && overlayElement && createPortal((
        popoverContent
      ), overlayElement)}
    </>
  );
}

export default Popover;

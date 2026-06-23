/* eslint-disable react-hooks/refs */

import React, { useEffect, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import type { Delegate } from "../../types/Delegate";
import { View } from "..";

function Popover({
  ref,
  content,
  isVisible,
  anchor = "bottom left",
  offsetTop = 0,
  noPortal,
  children
}: Delegate<{
  content: React.ReactNode,
  isVisible: boolean,
  anchor?: "bottom left" | "bottom right" | "top right",
  offsetTop?: number,
  noPortal?: boolean,
  children: React.ReactElement<{
    ref: React.RefObject<HTMLDivElement | null>,
    opacityOnPress?: boolean,
  }> | boolean,
}, typeof View<"div">>) {
  const childElementRef = useRef<HTMLDivElement>(null);
  const popoverElementRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => childElementRef.current!);

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
        popoverElementRef.current.style.left = `${childClientRect.left + 0 - overlayClientRect.left}px`;
        popoverElementRef.current.style.top = `${childClientRect.bottom + 0 - overlayClientRect.top}px`;
      }
    } else if (isVisible && childElementRef.current && popoverElementRef.current) {
      const childClientRect = childElementRef.current.getBoundingClientRect();
      const popoverClientRect = popoverElementRef.current.getBoundingClientRect();
      const overlayClientRect = overlayElement.getBoundingClientRect();

      if (anchor === "top right") {
        popoverElementRef.current.style.left = `${childClientRect.right - overlayClientRect.left}px`;
        popoverElementRef.current.style.top = `${childClientRect.top - 8 - overlayClientRect.top + offsetTop}px`;
      } else if (anchor === "bottom right") {
        popoverElementRef.current.style.left = `${childClientRect.right - popoverClientRect.width}px`;
        popoverElementRef.current.style.top = `${childClientRect.top + childClientRect.height + offsetTop}px`;
      } else if (anchor === "bottom left") {
        popoverElementRef.current.style.left = `${childClientRect.left + 0 - overlayClientRect.left}px`;
        popoverElementRef.current.style.top = `${childClientRect.bottom + 0 - overlayClientRect.top + offsetTop}px`;
      }
    }
  }, [anchor, isVisible, noPortal, offsetTop]);

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
        // ref: (node: HTMLDivElement | null) => {
        //   const ref = onlyChild.props.ref as React.RefCallback<HTMLDivElement> | React.RefObject<HTMLDivElement>;

        //   if (typeof ref === "function") {
        //     ref(node);
        //   } else if (ref && node !== null) {
        //     ref.current = node;
        //   }

        //   childElementRef.current = node;
        // },
        opacityOnPress: true
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

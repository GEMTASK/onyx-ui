import { useImperativeHandle, useLayoutEffect, useRef, useState } from "react";

import { type Delegate } from "../../types/Delegate";
import { Icon, Label, View } from "..";

import styles from "./Input.module.scss";

const Input = ({
  label,
  value: _value,
  lines,
  border = true,
  flush,
  multiline,
  icon,
  inputRef,
  placeholder,
  autoFocus,
  changeOnEnter,
  innerStyle,
  onKeyDown,
  onValueChange,
  ...props
}: Delegate<{
  label?: React.ComponentProps<typeof Label>["label"],
  value?: string,
  lines?: number,
  flush?: boolean,
  multiline?: boolean,
  icon?: React.ComponentProps<typeof Icon>["icon"],
  inputRef?: React.ComponentProps<"input">["ref"],
  placeholder?: React.ComponentProps<"input">["placeholder"],
  autoFocus?: React.ComponentProps<"input">["autoFocus"],
  innerStyle?: React.ComponentProps<"textarea">["style"],
  changeOnEnter?: boolean,
  onValueChange?: (value: string) => void,
}, typeof View<"div">>) => {
  const [value, setValue] = useState(_value);
  const [previousValue, setPreviousValue] = useState(_value);

  const textAreaElementRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  useImperativeHandle(inputRef, () => textAreaElementRef.current!);

  //

  if (_value !== previousValue) {
    setPreviousValue(value);
    setValue(_value);
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;

    onKeyDown?.(event);

    if (event.key === "Enter" && value !== undefined) {
      onValueChange?.(value);
    }
  };

  const handleTextAreaKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const currentTarget = event.currentTarget;

    if (changeOnEnter === true && event.key === "Enter" && value !== undefined) {
      event.preventDefault();

      onValueChange?.(value);

      currentTarget.value = "";
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleBlur = () => {
    if (value !== undefined) {
      onValueChange?.(value);
    }
  };

  useLayoutEffect(() => {
    if (multiline === true && textAreaElementRef.current) {
      textAreaElementRef.current.style.height = "";
      textAreaElementRef.current.style.height = `${textAreaElementRef.current.scrollHeight}px`;
    }
  });

  const inputClassName = [
    styles.Input,
    flush === true && styles.flush
  ].filter(className => className !== false).join(" ");

  const inputElement = multiline === true ? (
    <textarea
      ref={textAreaElementRef}
      autoFocus={autoFocus}
      value={value}
      placeholder={placeholder}
      style={{ background: "transparent", ...innerStyle }}
      onKeyDown={handleTextAreaKeyDown}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  ) : (
    <input
      ref={textAreaElementRef}
      autoFocus={autoFocus}
      value={value}
      placeholder={placeholder}
      style={{ background: "transparent", ...innerStyle }}
      onKeyDown={handleInputKeyDown}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );

  return (
    <Label flex label={label}>
      <View horizontal border={border} align="middle left" padding="4px 8px" spacing="4px" className={inputClassName} {...props}>
        {icon && (
          <Icon icon={icon} size={20} />
        )}
        {inputElement}
      </View>
    </Label>
  );
};

export default Input;

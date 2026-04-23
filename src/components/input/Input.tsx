import { useLayoutEffect, useRef, useState } from "react";

import { type Delegate } from "../../types/Delegate";
import { Icon, Label, View } from "..";

import styles from "./Input.module.scss";

const Input = ({
  label,
  value: _value,
  lines,
  border = true,
  flush,
  icon,
  placeholder,
  changeOnEnter,
  innerStyle,
  onValueChange,
  ...props
}: Delegate<{
  label?: React.ComponentProps<typeof Label>["label"],
  value?: string,
  lines?: number,
  flush?: boolean,
  icon?: React.ComponentProps<typeof Icon>["icon"],
  placeholder?: React.ComponentProps<"input">["placeholder"],
  innerStyle?: React.ComponentProps<"textarea">["style"],
  changeOnEnter?: boolean,
  onValueChange?: (value: string) => void,
}, typeof View<"div">>) => {
  const [value, setValue] = useState(_value);
  const textAreaElementRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const currentTarget = event.currentTarget;

    if (changeOnEnter && event.key === "Enter" && value) {
      event.preventDefault();

      onValueChange?.(value);

      currentTarget.value = "";
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  useLayoutEffect(() => {
    if (textAreaElementRef.current) {
      textAreaElementRef.current.style.height = "";
      textAreaElementRef.current.style.height = `${textAreaElementRef.current.scrollHeight}px`;
    }
  });

  const inputClassName = [
    styles.Input,
    flush && styles.flush
  ].filter(className => className).join(" ");

  return (
    <Label flex label={label}>
      <View horizontal border={border} align="middle left" padding="4px 8px" spacing="4px" className={inputClassName} {...props}>
        {icon && (
          <Icon icon={icon} size={20} />
        )}
        <textarea
          key={_value}
          ref={textAreaElementRef}
          value={value}
          name="textarea"
          placeholder={placeholder}
          style={{ background: "transparent", ...innerStyle }}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </View>
    </Label>
  );
};

export default Input;

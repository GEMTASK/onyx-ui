import { Delegate } from '../../types/Delegate';
import { Icon, Label, View } from '..';
declare const Input: ({ label, value: _value, lines, border, flush, icon, placeholder, changeOnEnter, innerStyle, onValueChange, ...props }: Delegate<{
    label?: React.ComponentProps<typeof Label>["label"];
    value?: string;
    lines?: number;
    flush?: boolean;
    icon?: React.ComponentProps<typeof Icon>["icon"];
    placeholder?: React.ComponentProps<"input">["placeholder"];
    innerStyle?: React.ComponentProps<"textarea">["style"];
    changeOnEnter?: boolean;
    onValueChange?: (value: string) => void;
}, typeof View<"div">>) => import("react/jsx-runtime").JSX.Element;
export default Input;

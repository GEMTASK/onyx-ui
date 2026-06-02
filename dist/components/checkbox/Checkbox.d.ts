declare function Checkbox({ label, value, onValueChange }: {
    label?: string;
    value?: boolean;
    onValueChange?: (value: boolean) => void;
}): import("react").JSX.Element;
export default Checkbox;

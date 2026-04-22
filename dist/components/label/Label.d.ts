import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Label({ label, chevron, children, ...props }: Delegate<{
    label?: string;
    chevron?: boolean;
}, typeof View<"label">>): import("react/jsx-runtime").JSX.Element;
export default Label;

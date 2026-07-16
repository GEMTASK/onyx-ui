import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Label({ flex, label, chevron, children, onPointerDown, onClick, ...props }: Delegate<{
    label?: string;
    chevron?: boolean;
}, typeof View<"div">>): import("react").JSX.Element;
export default Label;

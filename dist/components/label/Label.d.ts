import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Label({ flex, label, chevron, flipped, children, onPointerDown, onClick, ...props }: Delegate<{
    label?: string;
    chevron?: boolean;
    flipped?: boolean;
}, typeof View<"div">>): import("react").JSX.Element;
export default Label;

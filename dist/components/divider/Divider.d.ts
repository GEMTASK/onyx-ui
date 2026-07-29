import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Divider({ size, style, ...props }: Delegate<{
    size?: React.ComponentProps<typeof View<"div">>["padding"];
}, typeof View<"div">>): import("react").JSX.Element;
export default Divider;

import { Delegate } from '../../types/Delegate';
import { Text, Icon } from '..';
declare function Chip({ light, icon, fillColor, children, style, ...props }: Delegate<{
    icon?: React.ComponentProps<typeof Icon>["icon"];
}, typeof Text>): import("react/jsx-runtime").JSX.Element;
export default Chip;

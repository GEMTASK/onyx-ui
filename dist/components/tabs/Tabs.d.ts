import { View } from '..';
import { Delegate } from '../../types/Delegate';
declare function Tabs({ selectedTabIndex, children, onTabSelect, ...props }: Delegate<{
    selectedTabIndex: number;
    children: {
        title: string;
    }[];
    onTabSelect: (index: number) => void;
}, typeof View<"div">>): import("react/jsx-runtime").JSX.Element;
export default Tabs;

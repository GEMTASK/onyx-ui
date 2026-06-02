import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { Icon, View } from '..';
declare function Avatar({ name, label, badge, chevron, imageOnly, imageBorder, imageFillColor, ...props }: Delegate<{
    name?: string;
    label?: string;
    badge?: React.ComponentProps<typeof Icon>["icon"];
    chevron?: boolean;
    imageOnly?: boolean;
    imageBorder?: boolean;
    imageFillColor?: React.ComponentProps<typeof View<"div">>["fillColor"];
}, typeof View<"div">>): React.JSX.Element;
declare namespace Avatar {
    var Stack: ({ children, ...props }: Delegate<{
        children: Children;
    }, typeof View<"div">>) => React.JSX.Element;
}
type Children = boolean | React.ReactElement<{
    className: string;
}> | Children[];
export default Avatar;

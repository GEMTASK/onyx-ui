import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { Icon, View } from '..';
declare function Avatar({ name, label, badge, imageOnly, imageBorder, imageFillColor, ...props }: Delegate<{
    name?: string;
    label?: string;
    badge?: React.ComponentProps<typeof Icon>["icon"];
    imageOnly?: boolean;
    imageBorder?: boolean;
    imageFillColor?: React.ComponentProps<typeof View<"div">>["fillColor"];
}, typeof View<"div">>): import("react/jsx-runtime").JSX.Element;
declare namespace Avatar {
    var Stack: ({ children, ...props }: Delegate<{
        children: Children;
    }, typeof View<"div">>) => import("react/jsx-runtime").JSX.Element;
}
type Children = boolean | React.ReactElement<{
    className: string;
}> | Children[];
export default Avatar;

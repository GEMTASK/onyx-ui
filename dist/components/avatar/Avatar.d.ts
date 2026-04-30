import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Avatar({ name, label, imageOnly, imageBorder, ...props }: Delegate<{
    name?: string;
    label?: string;
    imageOnly?: boolean;
    imageBorder?: true;
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

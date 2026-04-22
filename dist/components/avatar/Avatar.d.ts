import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Avatar({ name, label, imageOnly, ...props }: Delegate<{
    name?: string;
    label?: string;
    imageOnly?: boolean;
}, typeof View<"div">>): import("react/jsx-runtime").JSX.Element;
declare namespace Avatar {
    var Stack: ({ children, ...props }: Delegate<{
        children: React.ReactElement<{
            className: string;
        }>[];
    }, typeof View<"div">>) => import("react/jsx-runtime").JSX.Element;
}
export default Avatar;

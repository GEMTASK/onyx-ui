import { View } from '..';
import { Color } from '../../types/Color';
import { default as React } from 'react';
declare function Text<TDelegate extends React.ElementType = "div">({ as, light, caps, bold, select, ellipsis, noWrap, fontSize, fontWeight, textColor, highlight, innerStyle, children, ...props }: {
    as?: TDelegate;
    light?: boolean;
    caps?: boolean;
    bold?: boolean;
    select?: boolean;
    ellipsis?: boolean;
    noWrap?: boolean;
    fontSize?: "12px" | "14px" | "18px" | "24px" | "32px";
    fontWeight?: false | "300" | "400" | "500" | "600" | "700";
    textColor?: false | Color;
    highlight?: boolean;
    innerStyle?: React.ComponentProps<"span">["style"];
} & React.ComponentProps<typeof View<TDelegate>>): React.JSX.Element;
export default Text;

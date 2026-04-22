import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { FieldValue } from '../../types/FieldValue';
import { View } from '..';
declare function FormField({ name, children }: {
    name: string;
    children: React.ReactElement<{
        value: FieldValue;
        onValueChange: (value: FieldValue) => void;
    }>;
}): false | React.ReactElement<{
    value: FieldValue;
    onValueChange: (value: FieldValue) => void;
}, string | React.JSXElementConstructor<any>>;
declare namespace FormField {
    var withComponent: <TProps extends object>(Component: React.ComponentType<TProps>) => ({ name, ...props }: {
        name: string;
    } & TProps) => import("react/jsx-runtime").JSX.Element;
}
declare function Form({ fields, children, onFieldChange, ...props }: Delegate<{
    fields: Record<string, FieldValue>;
    onFieldChange?: (name: string, value: FieldValue) => void;
}, typeof View<"form">>): import("react/jsx-runtime").JSX.Element;
declare namespace Form {
    var Field: typeof FormField;
}
export default Form;

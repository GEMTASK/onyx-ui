type Theme = "primary" | "content" | "panel" | "gutter" | "icon" | "divider" | "text" | "selected" | "highlight";
type Hue = "red" | "pink" | "grape" | "violet" | "indigo" | "blue" | "cyan" | "teal" | "green" | "lime" | "yellow" | "orange";
type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Color = Theme | "black" | "white" | `gray-${Level}` | `${Hue}-${Level}`;
export type { Color };

import { colorTable } from "./color";

type FontProps = {
    size: number;
    weight: number;
    color: string;
}

export type FontSize = "sm" | "md" | "lg" | "xl";

type Font = { 
    [key in FontSize]: FontProps; 
};

export const font:Font = {
    sm: {
        size: 14,
        weight: 300,
        color: colorTable[400]
    },
    md: {
        size: 16,
        weight: 400,
        color: colorTable[500]
    },
    lg: {
        size: 20,
        weight: 600,
        color: colorTable[700]
    },
    xl: {
        size: 24,
        weight: 800,
        color: colorTable[900]
    }
}

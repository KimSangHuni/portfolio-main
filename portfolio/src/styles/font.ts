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
        color: ""
    },
    md: {
        size: 16,
        weight: 400,
        color: ""
    },
    lg: {
        size: 18,
        weight: 600,
        color: ""
    },
    xl: {
        size: 20,
        weight: 800,
        color: ""
    }
}
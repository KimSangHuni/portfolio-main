export type Color = "primary" | "secondary" | "background" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorType = {
    [key in Color]: string;
}

export const colorTable: ColorType = {
    primary: "#3182F6",
    secondary: "#B0B8C1",
    background: "#F2F4F6",
    100: "#c2c9d0",
    200: "#9399a5",
    300: "#9097ab",
    400: "#657284",
    500: "#3d4650",
    600: "#384049",
    700: "#222429",
    800: "#101213",
    900: "#0e0e0e",
}
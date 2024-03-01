import { Level } from "@/types/global";
import Box from "./Box";
import Typography from "./typography/Typography";
import { css } from "@emotion/react";

type TechListRow = {
    tech: string;
    level: Level;
    color?: string;
}

export default function TechListRow({ tech, level }: TechListRow) {
    const emoji:{ [key in Level]: string } = {
        High: "😊",
        Middle: "🙂",
        Low: "😂"
    }
    return (
        <Box style={styles}>
            <Typography size="sm">{tech}</Typography>
            <Typography size="lg">{emoji[level]}</Typography>
        </Box>
    )
}

const styles = css`
    flex-flow: row nowrap;
    align-items: center;
    gap: 8px;
`
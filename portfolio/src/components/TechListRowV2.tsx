import { Level } from "@/types/global";
import Box from "./Box";
import Typography from "./typography/Typography";
import { css } from "@emotion/react";
import Progress from "./Progress";

type TechListRow = {
    tech: string;
    level: Level;
    color?: string;
}

export default function TechListRowV2({ tech, level }: TechListRow) {
    const emoji:{ [key in Level]: string } = {
        High: "😊",
        Middle: "🙂",
        Low: "😂"
    }
    return (
        <Box style={styles}>
            <div>
            <Typography size="sm">{tech}</Typography>
            {/* <Typography size="lg">{emoji[level]}</Typography> */}
            </div>
            <div>
                <Progress current={80}/>
            </div>
        </Box>
    )
}

const styles = css`
`
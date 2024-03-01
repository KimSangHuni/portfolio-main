import Box from "./Box";
import Typography from "./typography/Typography";
import { css } from '@emotion/react';

export type ProjectListRowProps = {
    tech: string;
    title: string;
    start: string;
    end: string;
}

export default function ProjectListRow({tech, title, start, end}:ProjectListRowProps) {
    return (
        <Box>
            <Typography size="sm">{tech}</Typography>
            <Typography size="lg">{title}</Typography>
            <Typography size="sm">{start} {end && `~ ${end}`}</Typography>
        </Box>
    )
}

import Box from "@/components/Box";
import InnerWrapper from "@/components/InnerWrapper";
import TechListRowV2 from "@/components/TechListRowV2";
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/typography/Typography";
import { Level, ResponseType } from "@/types/global";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticProps, InferGetStaticPropsType } from "next";


interface Props {
    techs: ResponseType<QueryDatabaseResponse>,
}

export default function Techs({
    techs
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Wrapper>
            <InnerWrapper>
                <Box><Typography size="lg">Technologies</Typography></Box>
                {
                    techs.response.results.map((item: any) => {
                        const tech = item.properties?.tech?.rich_text[0]?.plain_text;
                        const level = item.properties?.level?.multi_select[0]?.name as Level;

                        return (<TechListRowV2 key={item.id} tech={tech} level={level} />);
                    })
                }
            </InnerWrapper>
        </Wrapper>
    )
}


export const getStaticProps = (async () => {
    const techResponse = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/techs");
    const techs = await techResponse.json();

    const projectResponse = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/projects");
    const projects = await projectResponse.json();

    return { props: { techs } }
}) satisfies GetStaticProps<Props>;
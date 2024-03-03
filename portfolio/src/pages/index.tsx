import Box from "@/components/Box";
import FlexBox from "@/components/FlexBox";
import InnerWrapper from "@/components/InnerWrapper";
import ProjectListRow, { ProjectListRowProps } from "@/components/ProjectListRow";
import TechListRow from "@/components/TechListRow";
import Wrapper from "@/components/Wrapper";
import Typography from "@/components/typography/Typography";
import { Level, ResponseType } from "@/types/global";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface Props {
  techs: ResponseType<QueryDatabaseResponse>,
  projects: ResponseType<QueryDatabaseResponse>,
}

export default function Home({
  techs, projects
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (  
    <Wrapper>
      <InnerWrapper>
        <Box>
          <Typography size="lg">Tech Stack</Typography>
        </Box>
        <FlexBox>
          {techs.response.results.map((item: any) => {
            const tech = item.properties?.tech?.rich_text[0]?.plain_text;
            const level = item.properties?.level?.multi_select[0]?.name as Level;

            return (<TechListRow key={item.id} tech={tech} level={level} />);
          })}
        </FlexBox>
      </InnerWrapper>
      <InnerWrapper>
        <Box>
          <Typography size="lg">Project</Typography>
        </Box>
        {projects.response.results.map((item: any) => {
          const tech = item.properties?.tech?.rich_text[0]?.plain_text;
          const title = item.properties?.title?.rich_text[0]?.plain_text;
          const start = item.properties?.date?.date?.start;
          const end = item.properties?.date?.date?.end;

          const props: ProjectListRowProps = { tech, title, start, end };
          return (<ProjectListRow key={item.id} {...props} />);
        })}
      </InnerWrapper>
      <InnerWrapper>
        <Box>
          <Typography size="lg">Career</Typography>
        </Box>
        <Box>

        </Box>
      </InnerWrapper>
    </Wrapper>
  );
}


export const getStaticProps = (async () => {
  const techResponse = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/techs");
  const techs = await techResponse.json();

  const projectResponse = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/projects");
  const projects = await projectResponse.json();

  return { props: { techs, projects } }
}) satisfies GetStaticProps<Props>;
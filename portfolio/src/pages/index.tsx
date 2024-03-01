import Box from "@/components/Box";
import FlexBox from "@/components/FlexBox";
import InnerWrapper from "@/components/InnerWrapper";
import ProjectListRow, { ProjectListRowProps } from "@/components/ProjectListRow";
import TechListRow from "@/components/TechListRow";
import Wrapper from "@/components/Wrapper";
import BoxLoader from "@/components/loader/BoxLoader";
import Typography from "@/components/typography/Typography";
import { Level, ResponseType } from "@/types/global";
import { PartialDatabaseObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface Props {
  techs: ResponseType<QueryDatabaseResponse>,
  projects: ResponseType<QueryDatabaseResponse>,
}

export default function Home({ 
  techs, projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  const techList = techs.response.results.map((item:PartialDatabaseObjectResponse) => {
    
    const tech = item.properties?.tech?.rich_text[0]?.plain_text;
    const level = item.properties?.level?.multi_select[0]?.name as Level;

    return (<TechListRow key={item.id} tech={tech} level={level} />);
  })

  const projectList = projects.response.results.map((item:PartialDatabaseObjectResponse) => {
    console.log(item);

    const tech = item.properties?.tech?.rich_text[0]?.plain_text;
    const title = item.properties?.title?.rich_text[0]?.plain_text;
    const start = item.properties?.date?.date?.start;
    const end = item.properties?.date?.date?.end;

    const props:ProjectListRowProps = { tech, title, start, end };
    return (<ProjectListRow key={item.id} {...props} />)
  })

  return (
    <Wrapper>
      <InnerWrapper>
        <Box>
          <Typography size="lg">Tech Stack</Typography>
        </Box>
        <FlexBox>{techList}</FlexBox>
      </InnerWrapper>
      <InnerWrapper>
        <Box>
          <Typography size="lg">Project</Typography>
        </Box>
        {projectList}
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
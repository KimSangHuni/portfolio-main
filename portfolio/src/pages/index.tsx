import Box from "@/components/Box";
import FlexBox from "@/components/FlexBox";
import InnerWrapper from "@/components/InnerWrapper";
import ProjectList from "@/components/ProjectList";
import Wrapper from "@/components/Wrapper";
import BoxLoader from "@/components/loader/BoxLoader";
import Typography from "@/components/typography/Typography";
import { ResponseType } from "@/types/global";
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
    return (
      <Box key={item.id}>
        <Typography size="sm">{item.properties?.tech?.rich_text[0]?.plain_text}</Typography>
      </Box>
    );
  })

  const projectList = projects.response.results.map((item:PartialDatabaseObjectResponse) => {

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
        <ProjectList />
        <ProjectList />
        <ProjectList />
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
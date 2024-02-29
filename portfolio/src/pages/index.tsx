import Box from "@/components/Box";
import FlexBox from "@/components/FlexBox";
import InnerWrapper from "@/components/InnerWrapper";
import Wrapper from "@/components/Wrapper";
import BoxLoader from "@/components/loader/BoxLoader";
import Typography from "@/components/typography/Typography";
import { ResponseType } from "@/types/global";
import { PartialDatabaseObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface Props {
  tech: ResponseType<QueryDatabaseResponse>,
}

export default function Home({ 
  tech 
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const techs = tech.response.results.map((item:PartialDatabaseObjectResponse) => {
    return <Box key={item.id}><Typography size="sm">{item.properties?.tech?.rich_text[0]?.plain_text}</Typography></Box>;
  })
  return (
    <Wrapper>
      <InnerWrapper>
        <Box>
          <Typography size="lg">Tech Stack</Typography>
        </Box>
        <FlexBox>{techs}</FlexBox>
      </InnerWrapper>
      <InnerWrapper>
        <Box>
          <Typography size="lg">Project</Typography>
        </Box>
        <Box>

        </Box>
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
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/tech");
  const tech = await res.json();
  return { props: { tech } }
}) satisfies GetStaticProps<Props>;
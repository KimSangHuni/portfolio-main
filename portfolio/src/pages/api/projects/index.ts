import { notion } from "@/db/db";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    response: QueryDatabaseResponse;
};

const databaseId = 'f5af8089de6b4305a3b05bf751723685';

async function getProjects() {
    const response = await notion.databases.query({
        database_id: databaseId,
    }) 

    return response;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const response = await getProjects();
    res.status(200).json({ response });
}
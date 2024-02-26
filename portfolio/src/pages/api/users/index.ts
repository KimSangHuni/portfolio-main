import { notion } from "@/db/db";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    response: QueryDatabaseResponse;
};

const databaseId = 'b36098ac911c423aa7a9bb1f56fc663d';

async function getUsers() {
    const response = await notion.databases.query({
        database_id: databaseId,
    }) 

    return response;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const response = await getUsers();
    res.status(200).json({ response });
}
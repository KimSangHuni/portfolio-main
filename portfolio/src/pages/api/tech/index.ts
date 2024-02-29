import { notion } from "@/db/db";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    response: QueryDatabaseResponse;
};

const databaseId = '8c7c07e39a294a3390c36f2ad7a6933d';

async function getTechStack() {
    const response = await notion.databases.query({
        database_id: databaseId,
    }) 

    return response;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const response = await getTechStack();
    res.status(200).json({ response });
}
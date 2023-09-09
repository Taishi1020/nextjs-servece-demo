import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAppPosts = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATA_ID,
    page_size: 100,
  });
  return posts.results;
};
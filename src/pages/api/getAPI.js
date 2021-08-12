import { Client } from "@notionhq/client";

const notion = new Client({auth: process.env.NOTION_KEY})

export async function getEdu() {
    const databaseID = process.env.EDU_KEY
  
    try {
      const response = await notion.databases.query({database_id: databaseID})
      const result = response.results.map((page) => {
          return {
              id: page.id,
              name: page.properties.Name.title[0],
              startYear: page.properties.SYear.rich_text[0],
              endYear: page.properties.EYear.rich_text[0],
              desc: page.properties.Desc.rich_text[0],
          }
      })
      return result
    } catch (err) {
        console.error("Get Edu:", err)
    }
}
  
export async function getJob() {
    const databaseID = process.env.JOB_KEY
  
    try {
      const response = await notion.databases.query({database_id: databaseID})
      const result = response.results.map((page) => {
          return {
              id: page.id,
              title: page.properties.Title.title[0],
              location: page.properties.Location.rich_text[0],
              startYear: page.properties.SYear.rich_text[0],
              endYear: page.properties.EYear.rich_text[0],
              desc: page.properties.Desc.rich_text[0],
          }
      })
      return result
    } catch (err) {
        console.error("Get Jobs:", err)
    } 
}
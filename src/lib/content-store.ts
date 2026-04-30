import { promises as fs } from "fs";
import path from "path";
import { SiteContent } from "@/types/site-content";

const contentPath = path.join(process.cwd(), "src", "data", "site-content.json");

export async function getSiteContent(): Promise<SiteContent> {
  const raw = await fs.readFile(contentPath, "utf-8");
  return JSON.parse(raw) as SiteContent;
}

export async function saveSiteContent(content: SiteContent): Promise<void> {
  await fs.writeFile(contentPath, JSON.stringify(content, null, 2) + "\n", "utf-8");
}

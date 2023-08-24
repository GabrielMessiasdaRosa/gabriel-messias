import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.gabrielmessiasdarosa.dev/",
      lastModified: new Date(),
    },
    {
      url: "https://www.gabrielmessiasdarosa.dev/#timeline",
      lastModified: new Date(),
    },
  ];
}

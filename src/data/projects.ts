export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  images: string[];
};

export const projects: Project[] = [
  {
    name: "Priory",
    description:
      "Share files and create short links with ease. Simple, secure, and private. ",
    tags: ["NextJS", "Drizzle", "TailwindCSS", "R2"],
    href: "https://github.com/bestire/priory",
    images: [
      "https://cdn.nest.rip/uploads/2841d39c-0f4e-4e26-acce-49ebf2d90424.png",
    ],
  },
  {
    name: "hostman",
    description:
      "Fast, customizable file upload tool with support for any image host you can throw at it.",
    tags: ["C", "Cmake", "SQLite", "cURL", "JSON"],
    href: "https://github.com/bestire/hostman",
    images: [
      "https://cdn.nest.rip/uploads/3cddbee1-bfc8-47c7-97c8-e6e8ae36717e.png",
      "https://cdn.nest.rip/uploads/dcfb82e9-f803-4290-b4cc-7f1d71a826b0.png",
    ],
  },
  {
    name: "kcst",
    description: "Temporary file hosting",
    tags: ["Go", "TOML", "Cloudflare"],
    href: "https://cdn.keircn.com",
    images: [
      "https://cdn.nest.rip/uploads/3d243441-e34d-4b59-94f9-54863bcbefb6.png",
    ],
  },
];

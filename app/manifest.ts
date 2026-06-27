import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rakshak SecureTech",

    short_name: "Rakshak",

    description:
      "AI-powered surveillance, command & control, enterprise security and intelligent defense technologies.",

    start_url: "/",

    display: "standalone",

    background_color: "#071226",

    theme_color: "#071226",

    orientation: "portrait",

    lang: "en",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
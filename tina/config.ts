import { defineConfig } from "tinacms";

import { about_sectionFields } from "./templates";
import { contact_sectionFields } from "./templates";
import { bio_cardsFields } from "./templates";
import { blockquoteFields } from "./templates";
import { call_to_actionFields } from "./templates";
import { cards_with_iconFields } from "./templates";
import { featured_work_panelFields } from "./templates";
import { site_footFields } from "./templates";
import { home_pageFields } from "./templates";
import { image_text_panelFields } from "./templates";
import { image_with_captionFields } from "./templates";
import { pageFields } from "./templates";
import { portfolio_content_panelFields } from "./templates";
import { portfolio_featured_panel_smallFields } from "./templates";
import { portfolio_featured_panelFields } from "./templates";
import { portfolio_image_panelFields } from "./templates";
import { portfolio_itemFields } from "./templates";
import { postFields } from "./templates";
import { service_panelFields } from "./templates";
import { skills_sectionFields } from "./templates";
import { stepsFields } from "./templates";
import { technologies_panelFields } from "./templates";
import { text_areaFields } from "./templates";
import { design_tokensFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "0c5203da-6230-46aa-850a-b26e8abef560",
  // Get this from tina.io
  token: "d7d2ce7a1b36d9675b3d1348e5f2f64e589ad470",

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "dist",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "dist",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [],
  },
});

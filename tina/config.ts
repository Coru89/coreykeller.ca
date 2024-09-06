import { defineConfig } from "tinacms";

import { about_sectionFields } from "./templates";
import { contact_sectionFields } from "./templates";
// import { bio_cardsFields } from "./templates";
// import { blockquoteFields } from "./templates";
import { call_to_actionFields } from "./templates";
import { cards_with_iconFields } from "./templates";
import { featured_work_panelFields } from "./templates";
// import { site_footFields } from "./templates";
// import { home_pageFields } from "./templates";
import { image_text_panelFields } from "./templates";
import { image_with_captionFields } from "./templates";
import { pageFields } from "./templates";
// import { portfolio_content_panelFields } from "./templates";
import { portfolio_featured_panel_smallFields } from "./templates";
// import { portfolio_featured_panelFields } from "./templates";
// import { portfolio_image_panelFields } from "./templates";
import { portfolio_itemFields } from "./templates";
import { postFields } from "./templates";
import { service_panelFields } from "./templates";
import { skills_sectionFields } from "./templates";
// import { stepsFields } from "./templates";
// import { technologies_panelFields } from "./templates";
import { text_areaFields } from "./templates";
// import { design_tokensFields } from "./templates";

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
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "src/content/pages",
        match: {
          include: "**/*",
          exclude: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...portfolio_itemFields(),
            ],
            label: "portfolio",
            name: "portfolio",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...pageFields(),
            ],
            label: "page",
            name: "page",
          },
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "src/content/posts",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: "md",
        label: "Home Page",
        name: "home_page",
        path: "src",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "object",
            list: true,
            templateKey: "template",
            label: "Page Sections",
            name: "page_sections",
            templates: [
              {
                fields: image_text_panelFields(),
                label: "Image Text Panel",
                name: "image_text_panel",
              },
              {
                fields: cards_with_iconFields(),
                label: "Cards with icon",
                name: "cards_with_icon",
              },
              {
                fields: text_areaFields(),
                label: "Text Area",
                name: "text_area",
              },
              {
                fields: image_with_captionFields(),
                label: "Image with caption",
                name: "image_with_caption",
              },
              {
                fields: call_to_actionFields(),
                label: "Call to action",
                name: "call_to_action"
              },
              {
                fields: service_panelFields(),
                label: "Service Panel",
                name: "service_panel"
              },
              {
                fields: portfolio_featured_panel_smallFields(),
                label: "Portfolio Featured Panel Small",
                name: "portfolio_featured_panel_small"
              },
              {
                fields: skills_sectionFields(),
                label: "Skills Section",
                name: "skills",
              },
              {
                fields: featured_work_panelFields(),
                label: "Featured Work Panel",
                name: "featured_work"
              },
              {
                fields: about_sectionFields(),
                label: "About Section",
                name: "about"
              },
              {
                fields: contact_sectionFields(),
                label: "Contact Section",
                name: "Contact",
              },
            ],
          },
          {
            type: "object",
            name: "heroServices",
            label: "Hero Services",
            list: true,
            fields: [
              {
                type: "string",
                name: "heroServiceLinkText",
                label: "Hero Service Link Text",
              },
              {
                type: "string",
                name: "heroServiceLinkUrl",
                label: "Hero Service Link Url",
              },
            ],
          },
          {
            type: "string",
            name: "metaDesc",
            label: "SEO Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "socialImage",
            label: "SEO Image",
          },
          {
            type: "string",
            name: "layout",
            label: "layout",
          },
        ],
      },
      {
        format: "json",
        label: "Navigation",
        name: "navigation",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "navigation",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Footer",
        name: "footer",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "footer-navigation",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Theme settings",
        name: "theme_settings",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "tokens",
        },
        fields: [
          {
            type: "object",
            name: "size_scale",
            label: "size_scale",
            fields: [
              {
                type: "string",
                name: "base",
                label: "base",
              },
              {
                type: "string",
                name: "size_300",
                label: "300",
              },
              {
                type: "string",
                name: "size_500",
                label: "500",
              },
              {
                type: "string",
                name: "size_600",
                label: "600",
              },
              {
                type: "string",
                name: "size_700",
                label: "700",
              },
              {
                type: "string",
                name: "size_800",
                label: "800",
              },
              {
                type: "string",
                name: "size_900",
                label: "900",
              },
              {
                type: "string",
                name: "max",
                label: "max",
              },
            ],
          },
          {
            type: "object",
            name: "colors",
            label: "colors",
            fields: [
              {
                type: "string",
                name: "primary",
                label: "primary",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "primary_shade",
                label: "primary_shade",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "primary_glare",
                label: "primary_glare",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "highlight",
                label: "highlight",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "light",
                label: "light",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "mid",
                label: "mid",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "dark",
                label: "dark",
                ui: {
                  component: "color",
                },
              },
              {
                type: "string",
                name: "slate",
                label: "slate",
                ui: {
                  component: "color",
                },
              },
            ],
          },
          {
            type: "object",
            name: "fonts",
            label: "fonts",
            fields: [
              {
                type: "string",
                name: "base",
                label: "base",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "serif",
                label: "serif",
              },
            ],
          },
        ],
      },
    ],
  },
});

// tina/config.ts
import { defineConfig } from "tinacms";

// tina/templates.ts
function about_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "titleSecondary",
      label: "Secondary Title"
    },
    {
      type: "string",
      name: "titleSummary",
      label: "Title Summary"
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "imageURL",
      label: "Image URL"
    },
    {
      type: "string",
      name: "imagePosition",
      label: "Image Position",
      options: ["left", "right"]
    },
    {
      type: "string",
      name: "imageAlt",
      label: "Image Alt Text"
    },
    {
      type: "string",
      name: "buttonText",
      label: "Button Text"
    },
    {
      type: "string",
      name: "buttonPath",
      label: "Button Path"
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background Color",
      options: ["white", "green", "grey", "light green"]
    }
  ];
}
function contact_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "titleSecondary",
      label: "Secondary Title"
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea"
      }
    }
  ];
}
function blockquoteFields() {
  return [
    {
      type: "string",
      name: "text",
      label: "Text"
    }
  ];
}
function call_to_actionFields() {
  return [
    {
      type: "string",
      name: "text",
      label: "text",
      required: true
    },
    {
      type: "string",
      name: "buttonText",
      label: "buttonText",
      required: true
    },
    {
      type: "string",
      name: "buttonPath",
      label: "buttonPath",
      required: true
    }
  ];
}
function cards_with_iconFields() {
  return [
    {
      type: "string",
      name: "heading",
      label: "Panel Heading"
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Panel Background Color",
      options: ["white", "grey", "light green"]
    },
    {
      type: "string",
      name: "buttonText",
      label: "Button Text"
    },
    {
      type: "string",
      name: "buttonPath",
      label: "Button Path"
    },
    {
      type: "object",
      name: "cards",
      label: "Cards",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title"
        },
        {
          type: "string",
          name: "summary",
          label: "summary"
        },
        {
          type: "string",
          name: "linkPath",
          label: "Link Path"
        },
        {
          type: "string",
          name: "icon",
          label: "Icon"
        }
      ]
    }
  ];
}
function featured_work_panelFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "titleSecondary",
      label: "Secondary Title"
    },
    {
      type: "object",
      name: "items",
      label: "Items",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true
        },
        {
          type: "string",
          name: "summary",
          label: "Summary",
          ui: {
            component: "textarea"
          },
          required: true
        },
        {
          type: "string",
          name: "buttonText",
          label: "Button Text"
        },
        {
          type: "string",
          name: "buttonPath",
          label: "Button Path"
        },
        {
          type: "image",
          name: "imageURL",
          label: "Image URL"
        },
        {
          type: "string",
          name: "imageAlt",
          label: "Image Alt"
        },
        {
          type: "string",
          name: "imagePosition",
          label: "Image Position",
          options: ["right", "left"]
        },
        {
          type: "string",
          name: "backgroundColor",
          label: "Background Color (Hex)"
        },
        {
          type: "boolean",
          name: "isBottom",
          label: "Is Bottom"
        }
      ]
    }
  ];
}
function portfolioFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true
    },
    {
      type: "string",
      name: "layout",
      label: "Layout"
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink"
    },
    {
      type: "string",
      name: "rollupCardBackgroundColor",
      label: "Rollup Card Background Color"
    },
    {
      type: "string",
      name: "client",
      label: "Client"
    },
    {
      type: "image",
      name: "rollupImage",
      label: "Rollup Image"
    },
    {
      type: "string",
      name: "category",
      label: "Category"
    },
    {
      type: "string",
      name: "year",
      label: "Year"
    },
    {
      type: "string",
      name: "rollupCardOverlayBackgroundColor",
      label: "Rollup Card Overlay Background Color"
    },
    {
      type: "string",
      name: "rollupCardDescription",
      label: "Rollup Card Description",
      ui: {
        component: "textarea"
      }
    }
  ];
}
function image_text_panelFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "imageURL",
      label: "imageURL"
    },
    {
      type: "string",
      name: "imagePosition",
      label: "Image Position",
      options: ["right", "left"]
    },
    {
      type: "string",
      name: "imageAlt",
      label: "imageAlt"
    },
    {
      type: "string",
      name: "buttonText",
      label: "buttonText"
    },
    {
      type: "string",
      name: "buttonPath",
      label: "buttonPath"
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Panel Background Color",
      options: ["white", "green", "grey", "light green"]
    }
  ];
}
function image_with_captionFields() {
  return [
    {
      type: "image",
      name: "image",
      label: "Image"
    },
    {
      type: "string",
      name: "imageAlt",
      label: "Image Alt"
    },
    {
      type: "boolean",
      name: "fullBleed",
      label: "Full bleed"
    },
    {
      type: "string",
      name: "imageCaption",
      label: "Caption"
    }
  ];
}
function pageFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout"
    },
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "headerSummary",
      label: "Header Summary",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "headerButtonText",
      label: "Header Button Text"
    },
    {
      type: "string",
      name: "headerButtonURL",
      label: "Header Button Path"
    },
    {
      type: "image",
      name: "headerImageURL",
      label: "Header Image"
    },
    {
      type: "string",
      name: "headerImageAlt",
      label: "Header Image Alt"
    },
    {
      type: "string",
      name: "metaDesc",
      label: "SEO Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "socialImage",
      label: "SEO Image"
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Page Sections",
      name: "page_sections",
      templates: [
        {
          fields: text_areaFields(),
          label: "Text Area",
          name: "text_area"
        },
        {
          fields: image_text_panelFields(),
          label: "Image Text Panel",
          name: "image_text_panel"
        },
        {
          fields: image_with_captionFields(),
          label: "Image with caption",
          name: "image_with_caption"
        },
        {
          fields: call_to_actionFields(),
          label: "Call to action",
          name: "call_to_action"
        },
        {
          fields: cards_with_iconFields(),
          label: "Cards with icon",
          name: "cards_with_icon"
        },
        {
          fields: service_panelFields(),
          label: "Service Panel",
          name: "service_panel"
        },
        {
          fields: blockquoteFields(),
          label: "Blockquote",
          name: "blockquote"
        },
        {
          fields: portfolio_featured_panel_smallFields(),
          label: "Portfolio Featured Panel Small",
          name: "portfolio_featured_panel_small"
        },
        {
          fields: stepsFields(),
          label: "Steps",
          name: "steps_panel"
        },
        {
          fields: technologies_panelFields(),
          label: "Technologies Panel",
          name: "technologies_panel"
        }
      ]
    }
  ];
}
function portfolio_featured_panel_smallFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title"
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "buttonText",
      label: "Button Text"
    },
    {
      type: "string",
      name: "buttonPath",
      label: "Button Path"
    },
    {
      type: "image",
      name: "image",
      label: "Image"
    },
    {
      type: "string",
      name: "imageAlt",
      label: "Image Alt"
    },
    {
      type: "string",
      name: "imagePosition",
      label: "Image Position",
      options: ["left", "right"]
    }
  ];
}
function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title"
    },
    {
      type: "datetime",
      name: "date",
      label: "date"
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true
    },
    {
      type: "image",
      name: "image",
      label: "image"
    }
  ];
}
function service_panelFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Panel Heading"
    },
    {
      type: "object",
      name: "serviceCards",
      label: "Service Cards",
      list: true,
      fields: [
        {
          type: "string",
          name: "cardTitle",
          label: "Card Title"
        },
        {
          type: "image",
          name: "image",
          label: "Image"
        },
        {
          type: "string",
          name: "imagePosition",
          label: "Image Position",
          options: ["Left", "Right"]
        },
        {
          type: "string",
          name: "imageAlt",
          label: "Image Alt Text"
        },
        {
          type: "string",
          name: "cardLinkText",
          label: "Card Link Text"
        },
        {
          type: "string",
          name: "cardLinkPath",
          label: "Card Link Path"
        },
        {
          type: "object",
          name: "serviceItems",
          label: "Service Items",
          list: true,
          fields: [
            {
              type: "string",
              name: "serviceItem",
              label: "Service Item"
            }
          ]
        }
      ]
    }
  ];
}
function skills_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "titleSecondary",
      label: "Secondary Title"
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "buttonText",
      label: "Button Text"
    },
    {
      type: "string",
      name: "buttonPath",
      label: "Button Path"
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background Color",
      options: ["white", "green", "grey", "light green"]
    },
    {
      type: "object",
      name: "items",
      label: "Items",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image"
        },
        {
          type: "string",
          name: "imageSVG",
          label: "Image SVG",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "string",
          name: "label",
          label: "Label"
        }
      ]
    }
  ];
}
function stepsFields() {
  return [
    {
      type: "string",
      name: "heading",
      label: "Heading"
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background Color",
      options: ["white", "grey", "light green"]
    },
    {
      type: "object",
      name: "steps",
      label: "Steps",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title"
        },
        {
          type: "string",
          name: "summary",
          label: "Summary",
          ui: {
            component: "textarea"
          }
        }
      ]
    }
  ];
}
function technologies_panelFields() {
  return [
    {
      type: "string",
      name: "panelHeading",
      label: "Panel Heading"
    },
    {
      type: "object",
      name: "technologies",
      label: "Technologies",
      list: true,
      fields: [
        {
          type: "image",
          name: "imagePath",
          label: "Image Path"
        },
        {
          type: "string",
          name: "imageAlt",
          label: "Image Alt"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea"
          }
        }
      ]
    }
  ];
}
function text_areaFields() {
  return [
    {
      type: "string",
      name: "text",
      label: "text",
      ui: {
        component: "textarea"
      },
      required: true
    }
  ];
}

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: "0c5203da-6230-46aa-850a-b26e8abef560",
  // Get this from tina.io
  token: "d7d2ce7a1b36d9675b3d1348e5f2f64e589ad470",
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "dist"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "src"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "src/content/pages",
        // match: {
        //   include: "*/*",  // Adjust this pattern as needed
        // },
        fields: [
          ...pageFields()
        ]
      },
      {
        format: "md",
        label: "Portfolio",
        name: "portfolio",
        path: "src/content/work",
        // match: {
        //   include: "*",
        // },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...portfolioFields()
        ]
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "src/content/posts",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
          },
          ...postFields()
        ]
      },
      {
        format: "md",
        label: "Home Page",
        name: "home_page",
        path: "src",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "index"
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true
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
                name: "image_text_panel"
              },
              {
                fields: cards_with_iconFields(),
                label: "Cards with icon",
                name: "cards_with_icon"
              },
              {
                fields: text_areaFields(),
                label: "Text Area",
                name: "text_area"
              },
              {
                fields: image_with_captionFields(),
                label: "Image with caption",
                name: "image_with_caption"
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
                name: "skills"
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
                name: "contact"
              }
            ]
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
                label: "Hero Service Link Text"
              },
              {
                type: "string",
                name: "heroServiceLinkUrl",
                label: "Hero Service Link Url"
              }
            ]
          },
          {
            type: "string",
            name: "metaDesc",
            label: "SEO Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "socialImage",
            label: "SEO Image"
          },
          {
            type: "string",
            name: "layout",
            label: "layout"
          }
        ]
      },
      {
        label: "Navigation",
        name: "navigation",
        format: "json",
        path: "src/_data",
        // This should match the directory containing your JSON file
        match: {
          include: "navigation"
          // This should match the file name
        },
        fields: [
          {
            name: "items",
            label: "Navigation Items",
            type: "object",
            list: true,
            fields: [
              {
                name: "text",
                label: "Text",
                type: "string"
              },
              {
                name: "url",
                label: "URL",
                type: "string"
              },
              {
                name: "external",
                label: "External Link",
                type: "boolean"
              },
              {
                name: "items",
                label: "Subitems",
                type: "object",
                list: true,
                fields: [
                  {
                    name: "text",
                    label: "Text",
                    type: "string"
                  },
                  {
                    name: "url",
                    label: "URL",
                    type: "string"
                  },
                  {
                    name: "external",
                    label: "External Link",
                    type: "boolean"
                  },
                  {
                    name: "items",
                    label: "Sub-subitems",
                    type: "object",
                    list: true,
                    fields: [
                      {
                        name: "text",
                        label: "Text",
                        type: "string"
                      },
                      {
                        name: "url",
                        label: "URL",
                        type: "string"
                      },
                      {
                        name: "external",
                        label: "External Link",
                        type: "boolean"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        format: "json",
        label: "Footer",
        name: "footer",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "footer-navigation"
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description: "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info"
          }
        ]
      },
      {
        format: "json",
        label: "Theme settings",
        name: "theme_settings",
        path: "src/_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        match: {
          include: "tokens"
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
                label: "base"
              },
              {
                type: "string",
                name: "size_300",
                label: "300"
              },
              {
                type: "string",
                name: "size_500",
                label: "500"
              },
              {
                type: "string",
                name: "size_600",
                label: "600"
              },
              {
                type: "string",
                name: "size_700",
                label: "700"
              },
              {
                type: "string",
                name: "size_800",
                label: "800"
              },
              {
                type: "string",
                name: "size_900",
                label: "900"
              },
              {
                type: "string",
                name: "max",
                label: "max"
              }
            ]
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
                  component: "color"
                }
              },
              {
                type: "string",
                name: "primary_shade",
                label: "primary_shade",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "primary_glare",
                label: "primary_glare",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "highlight",
                label: "highlight",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "light",
                label: "light",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "mid",
                label: "mid",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "dark",
                label: "dark",
                ui: {
                  component: "color"
                }
              },
              {
                type: "string",
                name: "slate",
                label: "slate",
                ui: {
                  component: "color"
                }
              }
            ]
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
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "serif",
                label: "serif"
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

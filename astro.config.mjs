import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://twistedtreedev.com",
  integrations: [
    starlight({
      favicon: "/favicon.png",
      title: "Twisted Tree",
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "App documentation",

          items: [
            //Each item here is one entry in the navigation menu.
            {
              label: "Shopify Apps",
              link: "/documentation/shopifyapps",
            }
          ],
        },        
        {
          label: "Scan Picker Documentation",

          items: [
            //Each item here is one entry in the navigation menu.
            {
              label: "Getting started",
              link: "/scanpickerdocs/gettingstarted",
            },
            {
              label: "Add barcodes to packing slips",
              link: "/scanpickerdocs/packingslips",
            },
            {
              label: "Packing slips template",
              link: "/scanpickerdocs/packingslipstemplate",
            },
            { label: "Changelog", link: "/scanpickerdocs/changelogs" },
          ],
        },
        {
          label: "Twist: Stock Take Documentation",

          items: [
            //Each item here is one entry in the navigation menu.

            { label: "Getting started", link: "/stocktakedocs/gettingstarted" },
            { label: "Supported devices", link: "/stocktakedocs/devices" },

            { label: "Stock take filters", link: "/stocktakedocs/filters" },
            { label: "Stock take automations", link: "/stocktakedocs/automations" },
            

            { label: "Changelog", link: "/stocktakedocs/changelogs" },


          ],
        },
        {
          label: "Simple Calendar Documentation",

          items: [
            //Each item here is one entry in the navigation menu.

            {
              label: "Getting started",
              link: "/simplecalendardocs/gettingstarted",
            },
            { label: "Changelog", link: "/simplecalendardocs/changelogs" },
          ],
        },
        {
          label: "Twisted Tree",
          autogenerate: { directory: "twistedTree" },
        },
      ],
    }),
  ],
});

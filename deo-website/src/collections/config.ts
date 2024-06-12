import { CollectionConfig } from "payload/types";
const Config: CollectionConfig = {
  slug: "config",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heaer_text",
      type: "text",
      required: true,
    },
    {
      name: "subheader_text",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "textarea",
    },
    {
      name: "bg_imade",
      type: "upload",
      relationTo: "media",
    },
  ],
};
export default Config;

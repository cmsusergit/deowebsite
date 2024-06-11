import { CollectionConfig } from "payload/types";
const Schools: CollectionConfig = {
  slug: "schools",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "School Name",
      type: "text",
      required: true,
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "website_url",
      type: "text",
    },
    { name: "address", type: "textarea", required: true },
    { name: "location", type: "point" },
  ],
};
export default Schools;

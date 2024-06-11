import { CollectionConfig } from "payload/types";
const Circulars: CollectionConfig = {
  slug: "circulars",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "file",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "from_date",
      type: "date",
      required: true,
    },

    {
      name: "to_date",
      type: "date",
      required: true,
    },
  ],
};
export default Circulars;

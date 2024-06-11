import { CollectionConfig } from 'payload/types'
const Features: CollectionConfig = {
  slug: 'features',
  access: {
    read: () => true,
  },
  fields: [
    {
        name:'name',
        type:'text',
        required:true
    },
    {
        name:'image',
        type:'upload',
        
        relationTo:'media',
        required:true

    },
    {
        name:'description',
        type:'textarea'
    } ,
    {
      name:'url',
      type:'text'
    }   
  ],
}
export default Features




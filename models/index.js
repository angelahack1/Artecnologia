// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comments } = initSchema(schema);

export {
  Comments
};
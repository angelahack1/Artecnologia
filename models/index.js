// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from '../models/schema.js';

const { Comments } = initSchema(schema);

export {
  Comments
};
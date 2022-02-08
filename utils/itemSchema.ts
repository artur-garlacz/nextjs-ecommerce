import * as y from 'yup';
import { PaginationCursorResponse } from './types';

export function setPaginationSchema<T>(
  itemsSchema: y.SchemaOf<T>,
): y.SchemaOf<PaginationCursorResponse<T>> {
  return y.object().shape({
    items: y.array(itemsSchema),
    nextId: y.string().required(),
  });
}

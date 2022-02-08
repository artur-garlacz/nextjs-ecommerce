export type Nil<T> = T | null | undefined;

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type GenericItemsType = {
  id: string;
};

export type PaginationCursorResponse<T> = {
  nextId: string;
  items: Array<T>;
};

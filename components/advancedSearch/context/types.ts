import type Prisma from '@prisma/client';

export type Action =
  | { type: 'updateSearch'; payload: string }
  | { type: 'selectDisplayMethod'; payload: DisplayMethod }
  | { type: 'selectSortMethod'; payload: SortMethodType };

export enum SortOrders {
  ASC = 'asc',
  DSC = 'dsc',
}

export type DisplayMethod = 'grid' | 'list';

export type SortMethodType = 'asc' | 'dsc';

export type State = {
  readonly search: string; // basic search by input field
  readonly displayMethod: DisplayMethod; // display method of items in result list
  readonly sortMethod: SortMethodType;
  readonly filters: any[];
};

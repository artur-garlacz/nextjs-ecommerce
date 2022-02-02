import type Prisma from '@prisma/client';

export type Action =
  | { type: 'updateSearchQuery'; payload: string }
  | { type: 'selectDisplayMethod'; payload: DisplayMethod }
  | { type: 'selectSortMethod'; payload: SortMethodType };

export enum SortMethods {
  ASC = 'asc',
  DSC = 'dsc',
}

export type DisplayMethod = 'grid' | 'list';

export type SortMethodType = 'asc' | 'dsc';

export type State = {
  readonly searchQuery: string; // basic search by input field
  readonly displayMethod: DisplayMethod; // display method of items in result list
  readonly sortMethod: SortMethodType;
  readonly filters: any[];
};

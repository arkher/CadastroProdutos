const operationMap = {
  equals: ':',
  different: '!:',
  greaterThan: '>',
  lowerThan: '<',
  in: '::',
  notIn: '!::',
  contains: ':*',
  startsWith: '>*',
  endsWith: '*<',
};

export type Operation =
  | 'equals'
  | 'different'
  | 'greaterThan'
  | 'lowerThan'
  | 'in'
  | 'notIn'
  | 'contains'
  | 'startsWith'
  | 'endsWith';

type FilterFactory = {
  filter: string;
  setFilter: (
    field: string | undefined,
  ) => (operation: string) => (value: string | undefined) => FilterFactory;
  and: (
    field: string | undefined,
  ) => (operation: string) => (value: string | undefined) => FilterFactory;
  or: (
    field: string | undefined,
  ) => (operation: string) => (value: string | undefined) => FilterFactory;
  cleanFilter: () => void;
};

const filter = '';
export const filterFactory = (): FilterFactory => ({
  filter,
  setFilter(field: string | undefined) {
    return (operation: string) => (
      value: string | undefined,
    ): FilterFactory => {
      const op = operationMap[`${operation}`];
      this.filter = field && op && value && field + op + value;
      return this;
    };
  },
  and(field: string | undefined) {
    return (operation: string) => (
      value: string | undefined,
    ): FilterFactory => {
      const op = operationMap[`${operation}`];
      if (field && op && value) {
        this.filter = this.filter.concat('|and,').concat(field + op + value);
      }
      return this;
    };
  },
  or(field: string | undefined) {
    return (operation: string) => (
      value: string | undefined,
    ): FilterFactory => {
      const op = operationMap[`${operation}`];
      if (field && op && value) {
        this.filter = this.filter.concat('|or,').concat(field + op + value);
      }
      return this;
    };
  },
  cleanFilter() {
    this.filter = '';
  },
});

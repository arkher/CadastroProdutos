//* **************************************** */
// NAO EXPORTAR OS TYPES!
// NAO EXPORTAR OS TYPES!
// NAO EXPORTAR OS TYPES!
// NAO EXPORTAR OS TYPES!
//* **************************************** */
type Foo = {
  bar?: string;
};

type FooResult = {
  lol: string;
};

type Pageable<T> = {
  total: number;
  list: T;
  pageNum: number;
  pageSize: number;
  size: number;
  startRow: number;
  endRow: number;
  pages: number;
  prePage: number;
  nextPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  navigatePages: number;
  navigatepageNums: number[];
  navigateFirstPage: number;
  navigateLastPage: number;
};

type UsuarioDTO = {
  id?: number;
  nome?: string;
  email?: string;
  perfil?: Perfil;
  roles?: string[];
  realm?: string;
  preferredUsername?: string;
  hashAssinatura?: string;
  cpf?: string;
  idExterno?: number;
};

type ForcedLogoutErrors = 'NAO_AUTORIZADO' | 'FALHA_AO_VALIDAR';

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type Justify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignItems =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type Spacings =
  | 'none'
  | '3xs'
  | '2xs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl';

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'caption'
  | 'breadcrumbs'
  | 'body-text'
  | 'body-text-special';

export type TypographyAlign =
  | 'inherit'
  | 'left'
  | 'center'
  | 'right'
  | 'justify';

export type FontWeight =
  | 'normal'
  | 'bold'
  | 'heavy'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800';

export type ColumnSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export type Severity = 'success' | 'warning' | 'error' | 'info';

export type FlexGrow = '1' | '0';

export type Budget = {
  name: string;
  userId: string;
  id: string;
  start: string;
  image: string;
  openingBalanceMoney: number;
  openingBalanceTime: number;
  yearlyRefill: number;
  comment: string;
  hardwareBudget: number;
  currentMoneyBalance: number;
  currentTimeBalance: number;
  currentHardwareBalance: number;
};

export type BudgetRequestBody = Pick<
  Budget,
  | 'userId'
  | 'id'
  | 'start'
  | 'hardwareBudget'
  | 'openingBalanceMoney'
  | 'openingBalanceTime'
  | 'yearlyRefill'
  | 'comment'
>;

export type CreateUpdateDeleteType = 'create' | 'update' | 'delete';

export type GoogleJWTProfile = {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
};

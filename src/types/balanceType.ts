export interface BalanceDataType {
  leftSideTitle: string;
  rightSideTitle: string;
  leftSideDetail: string;
  rightSideDetail: string;
}

export interface BalanceDataReturnType {
  isLoading: boolean;
  isError: boolean;
  balanceData: BalanceDataType;
}

export interface BalanceSelectItemType {
  title: string;
  detail: string;
}

export interface BalancePageType {
  params: {
    id: string;
  };
}

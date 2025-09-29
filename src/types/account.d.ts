export type AccountProps = {
  id: string;
  customerId: string;
  accountNumber: string;
  accountName: string;
  type: string;
  currency: string;
  currencySymbol: string;
  balance: string;
  interestRate: string;
  status: string;
  dailyWithdrawalLimit: string;
  dailyTransactionLimit: number;
  cardStatus: string;
  isClosed: boolean;
  transactions:Array
};
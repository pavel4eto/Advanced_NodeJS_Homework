export enum Currency {
    EUR = 'EUR',
    USD = 'USD',
    MKD = 'MKD',
  }
  
  export interface Budget {
    id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
  }
  
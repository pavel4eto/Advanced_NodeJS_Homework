import { Injectable } from '@nestjs/common';
import { Budget, Currency, Expense, Income } from './budget.interface';

@Injectable()
export class BudgetService {
  private budgets: Budget[] = [
    {
      id: '1',
      title: 'April Budget',
      balance: 5000,
      currency: Currency.USD,
      expenses: [],
      incomes: [],
    },
  ];

  readBudgets(): Budget[] {
    return this.budgets;
  }
}

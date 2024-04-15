import { Controller, Get } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Budget } from './budget.interface';

@Controller('budgets')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Get()
  listBudgets(): Budget[] {
    return this.budgetService.readBudgets();
  }
}

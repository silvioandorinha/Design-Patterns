import { ImpostoStrategy } from './impostoStrategy';
import { Receita } from './receita';

export class contextCalculator{
    private strategy: ImpostoStrategy;
    constructor(strategy: ImpostoStrategy){
        this.strategy = strategy;
    }
    public setStrategy(strategy: ImpostoStrategy){
        this.strategy = strategy;
    }
    public calculate(receita: Receita): number{
        return this.strategy.calculate(receita);
    }
}
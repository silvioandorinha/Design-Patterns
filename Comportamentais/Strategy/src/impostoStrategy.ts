import { Receita } from './receita';

export interface ImpostoStrategy {
    calculate(receita: Receita): number;
}
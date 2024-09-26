
import { ImpostoStrategy } from "./impostoStrategy";
import { Receita } from "./receita";

export class CalculateIOF implements ImpostoStrategy {
    calculate(receita: Receita): number {
        return receita.value * 0.03;
    }
}
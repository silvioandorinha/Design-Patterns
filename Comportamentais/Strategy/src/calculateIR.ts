
import { ImpostoStrategy } from "./impostoStrategy";
import { Receita } from "./receita";

export class CalculateIR implements ImpostoStrategy {
    calculate(receita: Receita): number {
        return receita.value * 0.15;
    }
}
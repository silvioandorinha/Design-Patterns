import { Receita } from "./receita";
import { CalculateIOF } from "./calculateIOF";
import { CalculateIR } from "./calculateIR";
import { contextCalculator } from "./contextCalculator";

const receita = new Receita(100, "Rendimentos");

const context = new contextCalculator(new CalculateIR());
console.log(`Imposto de Renda sobre R$ ${receita.value}: R$ ${context.calculate(receita).toFixed(2)}`);

context.setStrategy(new CalculateIOF());
console.log(`IOF sobre R$ ${receita.value}: R$ ${context.calculate(receita).toFixed(2)}`);
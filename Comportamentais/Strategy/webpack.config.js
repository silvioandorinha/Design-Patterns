import path from 'path';
import { fileURLToPath } from 'url';

// Obter o diretório atual usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/main.ts', // Ponto de entrada do seu app
  output: {
    filename: 'main.js', // Nome do bundle gerado
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
  },
  resolve: {
    // Diz ao Webpack quais extensões deve tentar resolver automaticamente
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'], // Aqui você define que todas as importações devem incluir .js
  },
  mode: 'development', // Modo de desenvolvimento (ou 'production' para produção)
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
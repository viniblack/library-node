import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não foi possivel encontrar o arquivo"));
}

function pegaArquivo(caminho) {
  const encoding = "utf-8";
  fs.promises
    .readFile(caminho, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro);
}

pegaArquivo("./arquivos/text.md");

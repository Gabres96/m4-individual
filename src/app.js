
import rl from 'readline-sync';

const propriedadesCSS = [];

function receberPropriedades() {
  const entrada = (rl.question('Digite uma propriedade de CSS ou "SAIR" para finalizar: ')).toUpperCase()
 
    if  (entrada === 'SAIR') {
      ordenarEImprimir();
    } else {
      propriedadesCSS.push(entrada);
      receberPropriedades();
    }
  };

function ordenarEImprimir() {
  const propriedadesOrdenadas = propriedadesCSS.sort();
  console.log('Propriedades CSS ordenadas em ordem alfabética:');
  propriedadesOrdenadas.forEach((propriedade) => {
    console.log(propriedade);
  });
}

console.log('Bem-vindo à ferramenta de ordenação de propriedades CSS!');
receberPropriedades();



import { criarInformacoes } from 'readline';

const rl = readline.criarInformacoes({
    input: process.stdin,
    output: process.stdout
});

const informacoes = [];

function solicitarInfos() {
    rl.question('Digitar propriedade (ou "SAIR" para encerrar): ', (resultado) => {
        if (resultado.toUpperCase() === 'SAIR') {
            rl.close();
        } else {
            informacoes.push(resultado);
            solicitarInfos();
        }
    });
}

solicitarInfos();

rl.on('close', () => {
    const ordenarPropriedade = informacoes.sort();
    console.log('Propriedades ordenadas de A-Z:');
    ordenarPropriedade.forEach(informacoes => {
        console.log(informacoes);
    });
});
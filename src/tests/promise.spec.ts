// Promise #all, #race, #reject, #resolve, #then, #catch, #finally

import { promiseSuccess, promiseFailure, sequence } from './pomises.mock';
import {retry, switchMap, debounceTime} from 'rxjs/operators';
import {pipe} from 'rxjs';

describe('Promises', () => {
  describe('São objetos usados em processamento assíncrono, ele representa um proxy para um valor que não é,' +
    ' necessariamente conhecido quando é criado. Quando a promisse é resolvida, com sucesso ou falha, o valor é retornado' +
    ' como métodos síncronos. Ele é mais comumente usado para requisições HTTP e não possui respostas com valores multiplos' +
    ' e não é cancelável.', () => {
    it(' Pending: Estado inicial, nada ocorreu ainda \n - Fulfilles: Sucesso \n - Rejected: Falha \n ' +
      '- Settled: Finalizada com sucesso ou falha', () => {
      expect(2).toBe(2);
    });
  });
});

describe('#Promise.all', () => {
  it('Retorna uma promise que é resolvida quando todas as promises do array forem resolvidas ou ' +
    'rejeitada assim que uma das promises for rejeitada. No then o array de respostas vem na mesma ordem das ' +
    'promises da lista', (done) => {
    Promise.all([promiseSuccess(500, 'msg um'), promiseSuccess(500, 'msg dois')])
      .then((result) => {
        expect(result.toString()).toBe(['msg um', 'msg dois'].toString());
        done();
      })
      .catch((e) => {console.error(e); done(); });
  });
});

describe('#Promise.race', () => {
  it('Retorna o valor da primeira promise finalizada sendo ela resolvida ou rejeitada', (done) => {
    Promise.race([promiseSuccess(5000, 'msg um'), promiseSuccess(1000, 'msg dois')])
      .then(response => {
        expect(response).toBe('msg dois');
        done();
      });
  });
});

describe('#Promise.reject', () => {
  it('Retorna um objeto Promise rejeitado que será capturado dentro do catch', (done) => {
    const error = Promise.reject('erro');
    error.catch((msg) => {
      expect(msg).toBe('erro');
      done();
    });
  });
});
describe('#Promise.prototype.catch', () => {
  it('Adiciona uma callback que trata a rejeição pra promise e retorna uma promise resolvendo o problema', (done) => {
    promiseFailure(500, 'error').catch((err) => {
      expect(err).toBe('error');
      done();
    });
  });
});
describe('#Promise.prototype.then', () => {

  it('Adiciona calback de tratamento de sucesso da promise', (done) => {
    promiseSuccess(1500, 'sucesso').then((sucesso) => {
      expect(sucesso).toBe('sucesso');
      done();
    });
  });
  it('Adiciona calback de tratamento de rejeição da promise', (done) => {
    promiseFailure(1000, 'erro').then(
      () => {},
      (falha) => {
        expect(falha).toBe('erro');
        done();
      });
  });
  it('Também pode ser usado como finally apos o tratamento do erro pelo catch', (done) => {
    promiseFailure(1500, 'finally')
      .catch((error) => error)
      .then((final) => {
        expect(final).toBe('finally');
        done();
      });
  });
  it('Diferença entre o .catch e o .then(_, quandoRejeitado): O .catch pega qualquer problema durante' +
    ' a execução do código dentro do then(do sucesso), o .then(quandoRejeitado) pega apenas quando é um erro ' +
    'específico da Promise que está, e não pega o erro ocorrido dentro do sucesso' +
    ' sendo tratada', (done) => {
    promiseSuccess(500, 'success').then(
      data => {
        console.info('entrou no sucesso');
        expect(data).toBe('success');
        throw data;
      },
      error => {
        console.info('entrou no error');
      }
    ).catch(
      (data => {
        expect(data).toBe('success');
        console.info('entrou no catch');
        done();
      }));
  });
});
describe('#Promise.prototype.then', () => {
  it('Adiciona calback de tratamento de sucesso da promise', (done) => {
    promiseSuccess(1500, 'sucesso').then((sucesso) => {
      expect(sucesso).toBe('sucesso');
      done();
    });
  });
});
describe('Async Await', () => {
  it('Em funções assíncronas pode-se utilizar o operador await dentro de um try, catch, finally para' +
    ' tratar a resposta das funções assíncronas', async (done) => {
    let result;
    try {
      result = await promiseSuccess(1500, 'sucesso');
      expect(result).toBe('sucesso');
      done();
    } catch (e) {
      throw e;
    } finally {
      console.info('finally');
    }
  });
});
describe('Subscribe', () => {
  it('Observables dão suporte à troca de informações entre os publishers'+
  ' e os subscribes da aplicação, ele traz consigo recursos a mais para programação'+
  ' assíncrona e tratamento de valores múltiplos', (done) => {
    expect(true).toBeTruthy;
     done();
  });
});
describe('Publishers', () => {
  it('Ao criar uma instância de Observable voce define uma função subscribe que possui como paramtero a definição dos observers e pode ser cancelada com unsubscribe', async (done) => {
    let result = 0
    sequence.subscribe({
      next(data) {result += 1; expect(data).toBe(result); done();},
    });
  });
});
describe('Observers - métodos', () => {
  it('- Next: Requerido, ele é responsável por manipular cada valor entregue, pode ser, ou não, chamado após o inicio da execução \n - Error: Opcional, responsável pela notificação do erro. \n - Complete: Opcional, trata notificação de execuções completas', async (done) => {
    expect(true).toBeTruthy;
    done();
  });
});
describe('Multiplos valores', () => {
  it('A cada next é pego um valor do multiplo retorno obtido pelo Observer', async (done) => {
    expect(true).toBeTruthy;
    done();
  });
});
describe('RXJS', () => {
  describe('Alguns operadores importantes', () => {
    it('pipe: Executor de composição de funções, recebe as funções do rxjs e as compõe e uma só', (done) => {
        expect(pipe).toBeDefined;
        done();
    })

    it('retry: Observa quando há um erro no Observable  e faz um resubscribe  com a contagem maxima de quantidades de vezes que passar por parametro', (done) => {
      expect(retry).toBeDefined;
      done();
    })

    it('switchMap: A cada valor modificado  ele emite o valor para sua callback', (done) => {
      expect(switchMap).toBeDefined;
      done();
    })

    it('debounceTime: Recebe um valor numérico em milissegundos e realiza a chamada da função apenas uma fez no intervalo de tempo passado pra ele', (done) => {
      expect(debounceTime).toBeDefined;
      done();
    })
  });

  describe('Fontes', () => {
    it('https://medium.com/olxbr-tech/por-que-programa%C3%A7%C3%A3o-reativa-8fba7e754a0f \n https://angular.io/guide/observables \n https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise', () => {
      expect(true).toBeTruthy;
    })
  })
});
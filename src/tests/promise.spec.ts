// Promise #all, #race, #reject, #resolve, #then, #catch, #finally

import { promiseSuccess, promiseFailure } from './pomises.mock';

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


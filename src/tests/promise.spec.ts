// Promise #all, #race, #reject, #resolve, #then, #catch, #finally
let chai = require('chai');
let expect = chai.expect;

let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

import { promiseSuccess, promiseFailure } from './pomises.mock';

describe('Promises', () => {
    describe('São objetos usados em processamento assíncrono, ele representa um proxy para um valor que não é, necessariamente conhecido quando é criado. Quando a promisse é resolvida, com sucesso ou falha, o valor é retornado como métodos síncronos. Ele é mais comumente usado para requisições HTTP e não possui respostas com valores multiplos e não é cancelável.', () => {
        describe('- Pending: Estado inicial, nada ocorreu ainda \n - Fulfilles: Sucesso \n - Rejected: Falha \n - Settled: Finalizada com sucesso ou falha', () => {
            it('', () => {
                expect(2).to.equal(2);
            });
        });
        describe('#Promise.all', () => {
            it('Retorna uma promise que é resolvida quando todas as promises do array forem resolvidas ou rejeitada assim que uma das promises for rejeitada. No then o array de respostas vem na mesma ordem das promises da lista', (done) => {
                expect(Promise.all([promiseSuccess(1000, 'msg um'), promiseSuccess(1000, 'msg dois')])).should.eventually.equal(['msg um', 'msg dois']).notify(done)
            });
        });
        describe('#Promise.race', () => {
            it('Retorna o valor da primeira promise finalizada sendo ela resolvida ou rejeitada', (done) => {
                expect(Promise.all([promiseSuccess(5000, 'msg um'), promiseSuccess(1000, 'msg dois')])).should.eventually.equal('msg dois').notify(done)
            });
        });
        describe('#Promise.reject', () => {
            it('Retorna um objeto Promise rejeitado que será capturado dentro do catch', (done) => {
                expect(Promise.reject('erro')).should.be.rejectedWith('erro').notify(done)
            });
        });
        describe('#Promise.reject', () => {
            it('Retorna um objeto Promise rejeitado que será capturado dentro do catch', (done) => {
                expect(Promise.reject('sucesso')).should.eventually.equal('sucesso').notify(done)
            });
        });
        describe('#Promise.prototype.catch', () => {
            it('Adiciona uma callback que trata a rejeição pra promise e retorna uma promise resolvendo o problema', (done) => {
                promiseFailure(500, 'error').catch((err) => {
                    expect(err).to.be.equal('error')
                })
            });
        });
        describe('#Promise.prototype.then', () => {
            it('Adiciona calback de tratamento de sucesso da promise', (done) => {
                promiseSuccess(1500, 'sucesso').then((sucesso) => {
                    expect(sucesso).to.be.equal('sucesso');
                });
            });
            it('Adiciona calback de tratamento de rejeição da promise', (done) => {
                promiseFailure(1000, 'erro').then(
                    () => {},
                    (falha) => { 
                        expect(falha).to.be.equal('erro');
                });
            });
            // it('Também pode ser usado como finally apos o trabamento do erro pelo catch', (done) => {
            //     promiseFailure(1500, 'finally')
            //     .catch((error) => error)
            //     .then((finally) => {
            //         expect(finally).to.be.equal('finally');                    
            //     });
            // });
            it('Diferença entre o .catch e o .then(_, quandoRejeitado): O .catch pega qualquer problema durante a execução do código, o .then(quandoRejeitado) pega apenas quando é um erro específico da Promise que esta sendo tratada', (done) => {
                expect(2).to.be.equal(2);           
            });
        });
        describe('#Promise.prototype.then', () => {
            it('Adiciona calback de tratamento de sucesso da promise', (done) => {
                promiseSuccess(1500, 'sucesso').then((sucesso) => {
                    expect(sucesso).to.be.equal('sucesso');
                });
            });
        });
        describe('Async Await', () => {
            it('Em funções assíncronas pode-se utilizar o operador await dentro de um try, catch, finally para tratar a resposta das funções assíncronas', async (done) => {
                let result;
                try {
                    result = await promiseSuccess(1500, 'sucesso');
                } catch (e) {
                    throw e
                } finally {
                    expect(result).to.be.equal('sucesso');
                }
            });
        });
    });
});

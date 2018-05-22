// Promise #all, #race, #reject, #resolve, #then, #catch, #finally
let chai = require('chai');
let expect = chai.expect;

let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

import { promiseSuccess } from './pomises.mock';

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
            })
        })
    });
});

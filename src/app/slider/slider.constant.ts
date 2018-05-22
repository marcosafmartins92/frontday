export const SLIDES = [
  {title: 'Promises', subtitle: 'Entendendo um pouco sobre promises', text: 'São objetos usados em processamento assíncrono, ele representa um proxy para um valor que não é, necessariamente conhecido quando é criado. Quando a promisse é resolvida, com sucesso ou falha, o valor é retornado como métodos síncronos. Ele é mais comumente usado para requisições HTTP e não possui respostas com valores multiplos e não é cancelável.'},
  {title: 'Promises', subtitle: 'Quais são os estados de uma promise?', text: '- Pending: Estado inicial, nada ocorreu ainda \n - Fulfilles: Sucesso \n - Rejected: Falha \n - Settled: Finalizada com sucesso ou falha'},
  {title: 'Promises', subtitle: 'Método Promise.all([promiseA, promiseB])', text: 'Retorna uma promise que é resolvida quando todas as promises do array forem resolvidas ou rejeitada assim que uma das promises for rejeitada. No then o array de respostas vem na mesma ordem das promises da lista'},
  {title: 'Promises', subtitle: 'Método Promise.race([promiseA, promiseB])', text: 'Retorna o valor da primeira promise finalizada sendo ela resolvida ou rejeitada'},
  {title: 'Promises', subtitle: 'Método Promise.reject(problema)', text: 'Retorna um objeto Promise rejeitado que será capturado dentro do catch'},
  {title: 'Promises', subtitle: 'Método Promise.resolve(valor)', text: 'Retorna um objeto Promise resolvida dentro do then'},
  {title: 'Promises', subtitle: 'Método Promise.prototype.catch(quandoRejeitado)', text: 'Adiciona uma callback que trata a rejeição pra promise e retorna uma promise resolvendo o problema'},
  {title: 'Promises', subtitle: 'Método Promise.prototype.then(quandoSucesso, quandoRejeitado)', text: 'Adiciona calback de tratamento de sucesso da promise e de rejeição da promise,tambémpode ser usado como finally apos o trabamento do erro pelo catch'},
  {title: 'Promises', subtitle: 'Método Promise.prototype.finally(finalmente)', text: 'ECMAScript Proposal, '},
  {title: 'Promises', subtitle: 'Diferença entre o .catch e o .then(_, quandoRejeitado)', text: 'O .catch pega qualquer problema durante a execução do código, o .then(quandoRejeitado) pega apenas quando é um erro específico da Promise que esta sendo tratada'},
  {title: 'Async Await', subtitle: 'Como funciona?', text: 'Em funções assíncronas pode-se utilizar o operador await dentro de um try, catch, finally para tratar a resposta das funções assíncronas'},
  {title: 'Subscribe', subtitle: 'Entendendo um pouco sobre observables', text: 'Observables dão suporte à troca de informações entre os publishers e os subscribes da aplicação, ele traz consigo recursos a mais para programação assíncrona e tratamento de valores multiplos '},
  {title: 'Subscribe', subtitle: 'Publishers', text: 'Ao criar uma instância de Observable voce define uma função subscribe que possui como paramtero a definição dos observers e pode ser cancelada com unsubscribe'},
  {title: 'Subscribe', subtitle: 'Observers - métodos', text: '- Next: Requerido, ele é responsável por manipular cada valor entregue, pode ser, ou não, chamado após o inicio da execução \n - Error: Opcional, responsável pela notificação do erro. \n - Complete: Opcional, trata notificação de execuções completas'},
  {title: 'Subscribe', subtitle: 'Multiplos valores', text: 'A cada next é pego um valor do multiplo retorno obtido pelo Observer'},
  {title: 'RXJS', subtitle: 'Alguns operadores importantes', text: '- Pipe: Executor de composição de funções \n - Retry: Observa quando há um erro no Observable  e faz um resubscribe  com a contagem maxima de quantidades de vezes que passar por parametro \n - switchMap: A cada valor modificado  ele emite o valor para sua callback \n - DebounceTime: Recebe um valor numérico em milissegundos e realiza a chama da função apenas uma fez no intervalo de tempo passado pra ele '},
];

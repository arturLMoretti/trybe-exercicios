# O que vamos aprender?

Agora que você já sabe testar o seu código utilizando o **Jest**, vamos aprender como testar de maneira correta linhas de código que trabalham de maneira assíncrona!

As principais maneiras de um código assíncrono surgir é por meio de `callbacks` e `Promises`. Enquanto lidamos com `callbacks` utilizando `done()`, para lidar com `Promises`, podemos usar as estruturas `.resolves` e `.rejects`.

Tanto para `callbacks` quanto para `Promises`, vamos utilizar estruturas que já vimos quando estudamos _Funções assíncronas_, que são o `Async` e o `Await`.

Vamos começar o conteúdo de hoje?

**Bons estudos e bons testes!**

## Você será capaz de:

- Testar corretamente `callbacks`;
- Testar corretamente `Promises`;
- Utilizar as estruturas `.resolves` e `.rejects` para lidar com `Promises`;
- Usar as estruturas `Async` e `Await`

# Porque isto é importante?

A execução de códigos de maneira assíncrona é bastante comum no mercado de trabalho!

Como vimos anteriormente, códigos assíncronos são encontrados quando se executa uma linha de código que exije mais **trabalho computacional** e também quando se deseja fazer **requisições** para servidores externos!

Nas duas situações apresentadas, devemos **aguardar** um tempo para se obter a resposta desejada. Dessa forma, para **testar** os códigos de maneira adequada, é essencial aprendermos estratégias para **aguardar** o resultado!

No dia de hoje, serão apresentadas as principais estratégias utilizadas para o teste de códigos assíncronos em javaScript utilizando o Jest!

# Conteúdos

## Preparando o terreno!

Vamos nos lembrar como preparar o ambiente de testes? Siga os passos a seguir:

- Instale o gerenciador de pacotes NodeJs

> `npm init -y`

- Instale o Jest

> `npm install --save-dev jest`

- No arquivo _package.json_ criado, encontre a propriedade `"scripts"`. Dentro dela, encontre a propriedade `"test"`. Esta propriedade vem com o valor `"echo \"Error: no test specified\" && exit 1"` como padrão. No lugar deste texto, coloque "jest". Esta linha deve ficar assim:

> <code>{<br> &nbsp;"scripts": {<br> &nbsp;&nbsp;"test": "jest" <br> &nbsp;}<br>
> }</code>

- (Opcional) Instale extensões que vão te ajudar na escrita dos testes! (Veja em "Recursos adicionais"!)

**Escreva o teste em um arquivo separado do arquivo a ser testado!**

## Testando `callbacks`

Callbacks são poderosas ferramentas para executar ações que acontecem de maneira assíncrona. Isso porque no JavaScript as funções são **cidadãos de primeira classe**, possibilitando que sejam utilizadas como argumentos quando invocamos outras funções.

Como exemplo, preste atenção no código a seguir:

'''javascript

const sum = (a,b) => a + b;

function addAsync(a, b, callback) {
setTimeout(() => {
callback(a,b);
}, 500)
}

module.exports = {sum, addAsync}

'''

Na função `addAsync` os números `a` e `b` serão passados para a função `callback`. Caso o `callback` for `sum`, será retornado a soma `a + b`.

Copie o código acima para um arquvo chamado _addAsync.js_ e verifique por você mesmo!

Note, entretanto, que a saída desta soma é atrasada pela função `setTimeout` em 500 milissegundos. Essa função foi utilizada propositalmente para simular um código com tempo de processamento mais elevado **e** que retorna resultados de maneira assíncrona.

Pode consultar a documentação da função [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) para veriricar o modo de funcionamento desta função!

Em um primeiro momento, pode-se pensar que o teste desta função seja semelhante ao já estudado. Então o seguinte teste para esta função é proposto:

'''
const {sum, addAsync} = require('./addAsync');

describe('Maneira errada de se testar callbacks', () => {
it('A soma de 3 e 4 deve ser 7', ()=>{
expect(addAsync(3,4, sum)).toBe(7)
})
})

'''

Copie este código para um arquivo chamado _teste1.addAssync.test.js_. Execute os testes com o comando `npm test` no terminal.

Que resultado foi obtido? Não deu muito certo né? Então...

Caso tudo aconteceu como planejado, o seu teste retornou em um erro e você deve verificar um texto _Received: undefined_. Isso foi o resultado obtido? Então vamos prosseguir!

O valor recebido pelo teste foi _undefined_ porque no momento do teste, a função não retorna nenhum valor, pois deve aguardar 500 ms! Devemos então avisar ao Jest que o resultado deve ser esperado!

### Utilizando `done()`

Para avisar ao Jest que se deve esperar o retorno de um callback, usamos o parâmetro `done`. Para funcionar o teste deve ser passado como `callback` da função. Analise o código a seguir:

'''
const {sum, addAsync} = require('./addAsync');

describe('Outra maneira errada de se testar callbacks', () => {
it('A soma de 3 e 4 deve ser 7', ()=>{
addAsync(3,4, () => {
expect(sum).toBe(8);
done();
})
})
})

'''

## Testando `Promises`

ES6 introduced the concept of Promises. They are a lightweight abstraction layer that provides a wrapper to represent the future value of an operation that is usually asynchronous. Promises fix a lot of problems from callback-based APIs. They allow us to overcome issues like the infamous callback-hell and the drawbacks of inversion of control.

Inversion of control, in this context, means that we give out the flow, or control, of our code - what we do in the callback - to the asynchronous operation. This operation can be out of our control. Instead of relying on external code to have our callback invoked with promises, we get a time-independent representation of the value. We can treat it just like any other value.

When testing Promise-based APIs, again, we will have false positives if we don't let Jest know that we are working with asynchronous code.

For example, the following test should also fail:

> <code>test('should not pass', () => {
> const p = Promise.resolve(false);
> p.then(value => {
> expect(value).toBe(true);
> })
> })</code>

### Usando `.resolves`/`.rejects`

## Usando `Async`/`Await`

## O que vem por aí?

Perceba que nos testes assíncronos, devemos esperar um resultado para daí testá-lo corretamente. Entretanto, o que fazer quando o resultado não está disponível? Pode acontecer do servidor estar em manutenção bem quando precisamos testar uma requisição!

E se eu te disser que é possível testar sem precisar esperar o resultado? Na próxima aula, vamos aprender como simular comportamentos ou "mockar" funções. Servidores desligados não vão nos impedir de testar requisições!

**Antes disso, não se esqueça de fazer os exercícios propostos!**

**Até a próxima aula!**

# Vamos Praticar!

Para a execução dos exercícios a seguir, separe os arquivos de código dos arquivos dos testes correspondentes!

1. Implemente os seguintes testes para para a função `divideAsync.js`
   - a. verifique se o retorno é do tipo `number`
   - b. verifique se a divisão de 12 por 2 é igual a 6

# Recursos Adicionais

- Entendendo cidadões de primeira classe - [Funções de Primeira Classe e Funções de Ordem Superior](https://hcode.com.br/blog/prog-funcional-funcao-primeira-classe)

- Documentação do Jest - [Testando Código Assíncrono](https://jestjs.io/pt-BR/docs/asynchronous)

- Extensão para VSCode para tornar os testes mais prazerosos! - [Jest - by Orta](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

- Instale o ESLint para o Jest e deixe seus testes da sua equipe padronizados! - [ESLint plugin for jest](https://github.com/jest-community/eslint-plugin-jest)

- Instale o Jest Snippets para ajudar na construção de testes! - [Jest Sippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)

- Receitas para _debugar_ testes com VSCode = [Debugging Jest Tests](https://github.com/microsoft/vscode-recipes/tree/master/debugging-jest-tests)

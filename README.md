
# Entrega: Escrevendo e lendo arquivos com FS
O intuito desta entrega é que criemos duas rotas GET e POST, uma devolvendo os alunos cadastrados anteriormente e a outra sendo possível cadastrar um aluno com a seguinte estrutura.
```json
{
  "name": "Kenzinho",
  "course": "M2",
  "age": 18,
  "email": "example@mail.com.br"
}
```
### Aviso!
Para começar, acesse e faça clone deste repositório , pois nele tem implementado os testes para essa entrega.

## Rotas

### POST /api/create
Os dados deverão ser salvos em um arquivo json.

#### Requisição:
```json
{
  "name": "Gustavo",
  "course": "M2",
  "age": 22,
  "email": "example@mail.com.br"
}
```
#### Resposta: Status 201
```json
{
  "name": "Gustavo",
  "course": "M2",
  "age": 22,
  "email": "example@mail.com.br"
}
```
<hr>

### GET /api/list?page=1&perPage=3
Deve retornar uma lista dos alunos.

#### Requisição:
Não possui corpo de requisição

#### Resposta: Status 200
A quantidade de alunos que deve estar na lista vai ser de acordo com as query params: page e perPage.

### Dica!
Nessa aula você encontra um passo a passo de como fazer paginação usando query: aula
```json
{
  "page": 1,
  "previousPage": 0,
  "nextPage": 2,
  "data":  [
        {
          "name": "Gustavo",
          "course": "M2",
          "age": 22,
          "email": "example@mail.com.br"
        },
        {
          "name": "Lucas",
          "course": "M2",
          "age": 35,
          "email": "example@mail.com.br"
        },
        {
          "name": "Luana",
          "course": "M2",
          "age": 25,
          "email": "example@mail.com.br"
        }
  ]
}
```
#### Regras:
Se não tiver nenhum dado escrito no arquivo json, a rota deve retornar uma lista vazia: [] .
### Aviso!
Nessa entrega você terá que realizar o deploy no heroku, segue um passo a passo de como fazer o deploy: aula

### Importante! Instruções de Envio
Faça o push do código para o seu repositório GitHub, altere a visibilidade do repositório para internal e faça o deploy no heroku. No Canvas, por favor, envie sua url do deploy do heroku: (ex:https://nomerandomico.herokuapp.com) e envie o link do seu repositório nos comentários. Atenção, seu repositório deverá ser compartilhado apenas com a organização. (Internal)

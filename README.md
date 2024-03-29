# M4 - Cars API

Neste projeto, estaremos desenvolvendo uma API para gerenciar uma lista de carros, para isso, desenvolveremos cada uma das rotas abaixo com base no que aprendemos até agora

## Rotas

### Criação de carros POST /cars

Padrão de corpo

```json
{
   "model": "Uno",
   "km": 80000,
   "year": 2017,
   "brand": "Fiat",
   "price": 40000
}
```

Price é um campo opcional

Padrão de resposta

```json
{
   "id": 1,
   "model": "Uno",
   "km": 80000,
   "year": 2017,
   "brand": "Fiat",
   "price": 40000,
   "createdAt": "2023-10-06T13:14:21.752Z",
   "updatedAt": "2023-10-06T13:14:21.752Z"
}
```

### Leitura de carros GET /cars

Padrão de resposta

```json
[
   {
      "id": 1,
      "model": "Uno",
      "km": 80000,
      "year": 2017,
      "brand": "Fiat",
      "price": 40000,
      "createdAt": "2023-10-06T13:14:21.752Z",
      "updatedAt": "2023-10-06T13:14:21.752Z"
   }
]
```

Possível parâmetros de busca (searchParams)

| Parâmetro | Descrição                 |
| --------- | ------------------------- |
| search    | Busca o carro pelo modelo |
| year      | Busca o carro pelo ano    |

### Leitura de carro individual GET /cars/:id

Padrão de resposta

```json
{
   "id": 1,
   "model": "Uno",
   "km": 80000,
   "year": 2017,
   "brand": "Fiat",
   "price": 40000,
   "createdAt": "2023-10-06T13:14:21.752Z",
   "updatedAt": "2023-10-06T13:14:21.752Z"
}
```

Possíveis erros

#### Carro não encontrado 404

```json
{
   "error": "Car not found"
}
```
### Exclusão de carro DELETE /cars/:id

Está rota não precisa de corpo e não tem um objeto de resposta

Possíveis erros

#### Carro não encontrado 404

```json
{
   "error": "Car not found"
}
```

### Atualização de carro PATCH /cars/:id

Padrão de corpo

```json
{
   "model": "Uno",
   "km": 120000,
   "year": 2017,
   "brand": "Fiat",
   "price": 32000
}
```

Todos os campos desta rota são opcionais

Padrão de resposta

```json
{
   "id": 1,
   "model": "Uno",
   "km": 120000,
   "year": 2017,
   "brand": "Fiat",
   "price": 32000,
   "createdAt": "2023-10-06T13:14:21.752Z",
   "updatedAt": "2023-10-07T13:14:21.752Z"
}
```

Possíveis erros

#### Carro não encontrado 404

```json
{
   "error": "Car not found"
}
```


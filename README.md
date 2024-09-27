# DOCKER Exercício API

> Este exercício consiste na criação de uma API utilizando Docker, que implementa métodos GET e POST para manipulação de dados.

## 📋 Objetivo

O objetivo deste exercício é realizar a configuração do Docker e implementar as queries necessárias para obter respostas efetivas da API, permitindo a interação com dados por meio de requisições HTTP.

## 🛠️ Tecnologias Utilizadas

- **Docker**: Utilizado para criar, implantar e executar a aplicação em contêineres.
- **Node.js**: Ambiente de execução para a API.
- **Express**: Framework para construir a API de forma rápida e eficiente.

## 📦 Estrutura do Projeto

```
DOCKER Exercício API/
│
├── docker-compose.yml   # Arquivo de configuração do Docker Compose
├── Dockerfile            # Dockerfile para construção da imagem
├── src/                 # Código fonte da API
│   ├── index.js         # Arquivo principal da aplicação
│   └── routes/          # Rotas da API
│       └── apiRoutes.js # Definição das rotas da API
└── package.json          # Dependências do projeto
```

## 📡 Endpoints

### GET /api/data

- **Descrição**: Obtém todos os dados disponíveis na API.
- **Resposta**:
  - Código 200: Retorna um array com os dados.
  
### POST /api/data

- **Descrição**: Adiciona um novo dado à API.
- **Requisição**: O corpo da requisição deve conter os dados no formato JSON.
- **Resposta**:
  - Código 201: Retorna o dado recém-criado.

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/DOCKER-Exercicio-API.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd DOCKER-Exercicio-API
   ```

3. Construa e inicie os contêineres:
   ```bash
   docker-compose up --build
   ```

4. Acesse a API em `http://localhost:3000/api/data`.

## 📄 Licença

Este exercício é para fins educacionais e está livre para uso pessoal.

## 🤝 Colaborador

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/VictorSantuccii">
        <img src="https://avatars.githubusercontent.com/u/160544887?v=4" width="100px;" alt="Foto do Victor Santucci no GitHub"/><br>
        <sub>
          <b>Victor Santucci</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

---

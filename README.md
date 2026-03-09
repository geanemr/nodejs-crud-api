# 🚀 Node.js CRUD API (Express & MongoDB)

Uma API RESTful simples desenvolvida para aprendizado de conceitos de back-end, utilizando Node.js, Express e MongoDB. O projeto segue o padrão de arquitetura **MVC (Model-View-Controller)** para melhor organização e escalabilidade.

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** MongoDB Atlas (Cloud)
- **ODM (Object Data Modeling):** Mongoose
- **Ferramentas de Desenvolvimento:** Nodemon, Dotenv, Postman

## 📂 Estrutura do Projeto

```text
├── controllers/    # Lógica de negócio e comunicação com o banco
├── models/         # Definição dos Schemas (Schemas/Módulos)
├── routes/         # Definição das rotas e endpoints
├── .env            # Variáveis de ambiente
├── index.js        # Arquivo de entrada e conexão com banco/servidor
└── package.json    # Gerenciador de dependências e scripts
```

## 🚀 Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/geanemr/nodejs-crud-api.git
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione sua string de conexão:

   ```env
   MONGODB_URI=sua_conexao_aqui
   PORT=3000
   ```

4. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

## 🔌 Endpoints da API

| Método     | Endpoint           | Descrição                                            |
| :--------- | :----------------- | :--------------------------------------------------- |
| **GET**    | `/api/products`    | Lista todos os produtos                              |
| **GET**    | `/api/product/:id` | Busca um produto pelo ID                             |
| **POST**   | `/api/products`    | Cria um novo produto (ou vários, se enviar um Array) |
| **PUT**    | `/api/product/:id` | Atualiza dados de um produto                         |
| **DELETE** | `/api/product/:id` | Remove um produto do banco                           |

---

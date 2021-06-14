# Base Project ReactJs

**Projeto base para criação de aplicações utilziando ReactJs**

---

## Versão

- 1.0.0

---

## Configurações prévias

- Typescript
- Eslint (AirBnb)
- Prettier
- Dockerfile
- Docker compose
- Editorconfig

## Arquitetura

- **build:**
- **docs:**
- **public:**
- **src:**

  - **api:**
  - **assets:**
  - **environments:**
  - **layout:**
  - **lib:**
  - **pages:**
  - **providers:**
  - **routes:**
  - **services:**
  - **typings:**
  - **utils:**

## Executando em desenvolvimento

### Docker

**Pre-requisito:**

    Tem que ter o docker instalado na máquina

Executar o comando no terminal para subir/criar o container

```bash
yarn docker:up
```

Quando não precisar mais utilizar, basta executar o comando pra parar o container

```bash
yarn docker:stop
```

Quando precisar utilizar o container uma outra vez, basta executar o comando pra iniciar o container

```bash
yarn docker:start
```

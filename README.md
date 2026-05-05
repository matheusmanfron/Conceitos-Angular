# 🚀 Projeto Angular

Este é um projeto desenvolvido com o framework Angular para fins de estudo e prática.

---

## 📌 Descrição

O projeto consiste em uma aplicação web que demonstra conceitos fundamentais do Angular, como:

* Componentes
* Data Binding
* Comunicação entre componentes (`@Input` e `@Output`)
* Uso de If/else
* Estrutura standalone

---

## 🛠️ Tecnologias utilizadas

* Angular
* TypeScript
* HTML
* CSS

---

## 📂 Estrutura do projeto

```bash
src/
 ├── app/
 │   ├── components/
 │   │   └── home/
 │   ├── app.ts
 │   ├── app.html
 │   └── app.css
 └── main.ts
```

---

## ▶️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Acesse a pasta

```bash
cd seu-repositorio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
ng serve
```

A aplicação estará disponível em:

```bash
http://localhost:4200/
```

---

## 📸 Funcionalidades

* Exibição de dados com interpolação `{{ }}`
* Comunicação entre componentes
* Evento de clique com emissão (`EventEmitter`)
* Renderização condicional com if
* Uso de Input e Output

---

---

# Explicando as funcionalidades

* A interpolação {{}} foi feita para exibir os dados de nome, Olá, {{nome}}
* O input foi adicionado para alterar o nome
* O if/else foi aplicado da seguinte forma, se a variável, deveMostrarTitulo for true:
    exibe a mensagem, Meu Titulo, se for false, mas o nome for igual a Matheus,
    exibe a mensagem, Meu titulo para Matheus, se não, a mensagem Não deve mostrar titulo aparece
* O Output foi utilizado para dar ação ao elemente button quando fosse clicado

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Estrutura de componentes no Angular
* Organização de código
* Boas práticas de desenvolvimento frontend

---

## 📌 Melhorias futuras

* Adicionar roteamento
* Integração com API
* Estilização
* Persistência de dados

---

## 👨‍💻 Autor

Desenvolvido por Matheus Manfron Espinoza
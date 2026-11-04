# Projeto 1 - Desenvolvimento Web

Website estático responsivo desenvolvido para a disciplina de **Desenvolvimento Web**. O projeto apresenta a estrutura de um portal institucional moderno, composto por páginas interconectadas com navegação padronizada, estilização centralizada e interatividade via JavaScript.

---

## 📁 Estrutura de Arquivos

```text
Projeto 1/
├── index.html                   # Página inicial do site
├── index.css                    # Folha de estilos global do projeto
├── README.md                    # Documentação do projeto
├── pages/
│   ├── sobre/
│   │   └── sobre.html           # Página institucional (Quem Somos, Missão, Visão, Valores)
│   ├── serviços/
│   │   └── serviços.html        # Página de catálogo de serviços prestados
│   └── contato/
│       ├── contato.html         # Página de contato com formulário
│       └── contato.js           # Validação e lógica do formulário em JavaScript
```

---

## 🌐 Páginas do Projeto

### 1. Início (`index.html`)
- Seção **Hero** de destaque com introdução e botões de chamada para ação (CTA).
- Grid de cards de navegação rápida para as seções de Sobre, Serviços e Contato.
- Menu de navegação e rodapé consistentes.

### 2. Sobre Nós (`pages/sobre/sobre.html`)
- Apresentação institucional na caixa de conteúdo principal (**Quem Somos**).
- Seção em grid contendo cards com a **Missão**, **Visão** e **Valores**.

### 3. Serviços (`pages/serviços/serviços.html`)
- Apresentação dos serviços prestados em formato de cards responsivos:
  - Desenvolvimento Frontend
  - Design & Prototipagem
  - Estruturação de Projetos

### 4. Contato (`pages/contato/contato.html`)
- Formulário interativo para envio de mensagens contendo os campos:
  - **Email de contato**
  - **Nome**
  - **Assunto**
  - **Mensagem**
- Ações:
  - **Botão Enviar:** Aciona a validação e envia a mensagem.
  - **Botão Limpar:** Reseta o formulário, limpa eventuais avisos de erro e esconde a mensagem de confirmação.
- Cards informativos adicionais com horário de atendimento, e-mail direto e tempo estimado de retorno.

---

## ⚙️ Funcionalidades em JavaScript (`contato.js`)

A página de contato utiliza JavaScript puro (Vanilla JS) para gerenciar a interação do usuário:

- **Validação de Obrigatoriedade:** Garante que nenhum dos campos obrigatórios seja enviado em branco ou apenas com espaços (`trim()`).
- **Validação de Formato de E-mail:** Valida a sintaxe do e-mail inserido via expressão regular (Regex).
- **Feedback Visual de Erros:**
  - Aplica destaque visual no campo inválido (classe `.input-error`).
  - Exibe mensagens contextuais de erro abaixo de cada campo.
  - Foca automaticamente no primeiro campo com pendência ao tentar enviar.
  - Remove os erros em tempo real assim que o usuário começa a digitar a correção.
- **Mensagem de Sucesso:**
  - Ao submeter o formulário devidamente preenchido, um texto de confirmação é exibido abaixo do formulário informando: *"Recebemos o contato e daremos uma resposta assim que possível."*
  - O formulário é limpo automaticamente após o envio com sucesso.
- **Limpeza Completa:** O botão "Limpar" restaura todos os campos, remove indicadores visuais de erro e oculta o aviso de sucesso.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Marcação semântica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`).
- **CSS3:**
  - Variáveis CSS (Custom Properties) para consistência de cores, tipografia, bordas e sombras.
  - Layouts flexíveis e responsivos com **Flexbox** e **CSS Grid**.
  - Efeitos de foco, transições e animações suaves (`@keyframes`).
- **JavaScript (ES6+):** Manipulação de DOM, escutas de eventos (`submit`, `click`, `input`), validações e lógica sem dependência de bibliotecas externas.

---

## 🚀 Como Executar o Projeto

1. Baixe ou clone este repositório no seu computador.
2. Não é necessário instalar dependências ou executar comandos de build (projeto estático nativo).
3. Para visualizar o projeto:
   - **Opção 1:** Dê dois cliques no arquivo `index.html` para abri-lo diretamente em qualquer navegador web.
   - **Opção 2 (Recomendado):** Abra a pasta do projeto no [Visual Studio Code](https://code.visualstudio.com/) e inicie com a extensão **Live Server** clicando com o botão direito em `index.html` e escolhendo *"Open with Live Server"*.


# 🪐 Rick and Morty - Personagens Dinâmicos com Fetch API

## 📌 Sobre o Projeto

Este projeto é uma aplicação web interativa que consome dados em tempo real da [The Rick and Morty API](https://rickandmortyapi.com/) para renderizar os cards dos personagens do desenho de forma 100% dinâmica. 

O desenvolvimento cumpre os requisitos do desafio acadêmico focado em **estruturação de interfaces nativas (sem frameworks)**, **comunicação assíncrona** e **manipulação da árvore do DOM (Document Object Model)**.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído exclusivamente utilizando tecnologias web nativas:
* **HTML5:** Estruturação semântica da página inicial (base que recebe os elementos).
* **CSS3:** Estilização baseada no universo do desenho (esquema de cores verde-portal e ficção científica), utilizando Grid e Flexbox para garantir responsividade.
* **JavaScript (ES6):** Motor assíncrono encarregado das requisições via rede e criação dinâmica dos nós de interface.

---

## 🏗️ Estrutura de Arquivos

A organização do código-fonte na pasta compactada segue o padrão modular básico:
```text
├── index.html       # Estrutura principal da página
├── style.css        # Folha de estilo e design responsivo
└── script.js        # Lógica de consumo da API e manipulação do DOM
```

---

## 🧬 Detalhes Técnicos Implementados

### 1. Consumo Assíncrono com Fetch API
As informações são requisitadas diretamente do servidor remoto usando o método nativo `fetch()`. A resposta em formato JSON é tratada através de Promises com blocos `.then()` para conversão e controle de fluxo dos dados.

### 2. Manipulação do DOM e Injeção Dinâmica
Os cards dos personagens não existem estaticamente no arquivo `index.html`. O arquivo HTML possui apenas um elemento container (ex: `<div id="characters-container"></div>`). O JavaScript intercepta o array de resultados e reconstrói a interface via software utilizando:
* `document.createElement()` para gerar as tags (`div`, `img`, `h3`, `p`).
* Atribuição de propriedades de dados (`src`, `innerText`, `classList`).
* `appendChild()` ou `append()` para injetar as tags estruturadas de volta no documento principal.

### 3. Anatomia Obrigatória dos Cards
Cada componente gerado em tela traz em tempo real:
* **Nome completo** do personagem.
* **Imagem** (URL direta fornecida pela API).
* **Status atual** (Alive, Dead ou Unknown) acoplado a especificações adicionais (como espécie ou última localização vista).

---

## 📝 Documentação da API Utilizada

* **Endpoint Base:** `https://rickandmortyapi.com`
* **Regras de Acesso:** API pública, gratuita e de acesso aberto (não necessita de chaves de autenticação ou tokens privados).
* **Estrutura de Resposta:** Retorna um objeto contendo uma chave `info` (metadados de paginação) e uma chave `results` contendo o array com os objetos estruturados de cada personagem.

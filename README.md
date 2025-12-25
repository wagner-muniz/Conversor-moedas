# 💱 Conversor de Moedas

Projeto de um **Conversor de Moedas** desenvolvido com **HTML, CSS e JavaScript**, que permite converter valores de **Real (BRL)** para **Dólar (USD)**, **Euro (EUR)** e **Bitcoin (BTC)** de forma simples, clara e funcional.

---

## 📸 Preview

Interface limpa e intuitiva, com troca dinâmica de bandeiras conforme a moeda selecionada.

---

## 🚀 Funcionalidades

* Conversão de **Real (BRL)** para:

  * 💵 Dólar (USD)
  * 💶 Euro (EUR)
  * 🪙 Bitcoin (BTC)
* Formatação correta dos valores:

  * Dólar e Euro usando `Intl.NumberFormat`
  * Bitcoin exibido com **8 casas decimais**
* Campo de resultado **somente para visualização** (`readonly`)
* Troca automática da bandeira ao selecionar a moeda
* Interface simples e responsiva
* Código organizado e fácil de entender

---

## 🧠 Conceitos aplicados

* Manipulação do DOM
* Eventos JavaScript (`click`, `change`)
* Condicionais (`if / else`)
* Boas práticas de formulários
* Separação clara entre:

  * **Entrada de dados** (`input type="number"`)
  * **Exibição de resultado** (`input type="text" + readonly`)
* Organização de assets (imagens)
* Uso correto do `Intl.NumberFormat`

---

## 🛠️ Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Google Fonts (Roboto)**

---

## 📂 Estrutura de pastas

```
📁 conversor-de-moedas
 ├─ index.html
 ├─ styles.css
 ├─ script.js
 └─ 📁 assets
     └─ 📁 img
         ├─ brasil.png
         ├─ usa.png
         ├─ euro.png
         ├─ bitcoin.png
         └─ conversor-moedas.png
```

---

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/conversor-de-moedas.git
```

2. Abra o arquivo `index.html` no navegador
   ou utilize a extensão **Live Server** no VS Code.

---

## 📌 Observações importantes

* O campo **“Valor convertido”** é apenas para exibição e não pode ser editado pelo usuário.
* As taxas de câmbio estão **fixas no código**, com objetivo didático.
* Projeto focado em **aprendizado prático de JavaScript** e fundamentos do Front-end.

---

## 🔮 Melhorias futuras

* Integração com API para taxas de câmbio em tempo real
* Conversão entre todas as moedas (BRL ↔ USD ↔ EUR ↔ BTC)
* Validação de campos
* Feedback visual (loading, mensagens de erro)
* Evolução para React.js

---

## 👨‍💻 Autor

Desenvolvido por **Wagner Muniz**
📍 Brasil
🎯 Em formação como Desenvolvedor Front-end

---

## 🤝 Créditos e Agradecimentos

Este projeto foi desenvolvido **com auxílio dos conteúdos educacionais do
Rodolfo Mori**, do **DevClub**.

Os conhecimentos aplicados neste projeto, como:

* JavaScript prático
* Manipulação do DOM
* Estruturação de projetos front-end
* Boas práticas de código

foram aprendidos e reforçados através das aulas e materiais do **DevClub**.

👉 Créditos educacionais ao **Rodolfo Mori – DevClub**.

---

## ⭐ Se você gostou do projeto

Não esqueça de deixar uma ⭐ no repositório!

---

### 🧠 Nota de mentor

Esse README está **100% adequado para vaga júnior**.
Mostra:

* Clareza
* Honestidade
* Organização
* Aprendizado real
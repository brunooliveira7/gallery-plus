# 📷 Gallery Plus

**Gallery Plus** é uma aplicação web robusta de galeria de fotos, desenvolvida com **React** e **TypeScript**, projetada para oferecer uma experiência de usuário fluida, moderna e performática.

O projeto foca na **organização eficiente de imagens por álbuns**, com recursos avançados de **upload**, **validação de dados** e **gerenciamento de estado sincronizado com a URL**, garantindo ótima DX e UX.

---

## 🚀 Funcionalidades

### 📸 Gerenciamento de Fotos

* **Upload de Imagens**
  Interface amigável para envio de novas fotos, com suporte aos formatos **PNG**, **JPG** e **JPEG**.

* **Validação Rigorosa**
  Validação automática de:

  * Formato do arquivo
  * Tamanho máximo de **50MB**
    garantindo a integridade dos dados antes do envio.

* **Visualização Imersiva**
  Ao clicar em uma foto, o usuário acessa uma visualização detalhada com:

  * Navegação para **foto anterior** e **próxima**
  * Experiência contínua, sem necessidade de voltar à listagem

* **Exclusão Segura**
  Remoção de fotos com:

  * Feedback imediato
  * Redirecionamento automático após a ação

---

### 📂 Organização de Álbuns

* **Criação de Álbuns**
  Modal intuitivo para criar novos álbuns, permitindo:

  * Definir título
  * Selecionar fotos existentes para inclusão imediata

* **Associação Flexível**
  Durante o upload de uma nova foto, é possível associá-la a **múltiplos álbuns simultaneamente**.

* **Gestão de Conteúdo**
  Facilidade para:

  * Adicionar fotos a álbuns existentes
  * Remover fotos de álbuns

---

### 🔍 Busca e Navegação (DX / UX)

* **Estado Sincronizado na URL (URL State)**
  Utilização da biblioteca **nuqs** para sincronizar filtros (como termo de busca e ID do álbum) diretamente na URL, permitindo:

  * Compartilhamento de links
  * Abertura da aplicação exatamente no mesmo estado de visualização

* **Feedback Visual**
  Uso de **Toasts** (via **Sonner**) para notificar o usuário sobre:

  * Sucesso de ações (ex: *"Foto criada com sucesso!"*)
  * Erros (ex: *"Erro ao excluir foto"*)

* **Carregamento Otimizado**
  Implementação de **Skeletons** para indicar carregamento de dados e melhorar a percepção de performance.

* **Transições Suaves**
  Uso do hook `useTransition` do React para manter a interface responsiva durante:

  * Operações pesadas
  * Atualizações de estado assíncronas

---

## 🛠️ Stack Tecnológica

A aplicação foi construída com um conjunto moderno de ferramentas focadas em **performance**, **escalabilidade** e **manutenibilidade**.

### ⚙️ Core

* **React 18+**
* **Vite** — desenvolvimento rápido e build otimizado
* **TypeScript** — tipagem estática e maior segurança no código

### 📦 Gerenciamento de Dados e Estado

* **TanStack Query (React Query)**

  * Cache inteligente
  * Invalidação automática de queries
  * Atualizações otimistas

* **Nuqs** — gerenciamento de estado via *query params* da URL (type-safe)

* **Axios** — requisições HTTP

### 🎨 Interface e Estilização

* **Tailwind CSS** — estilização utilitária e responsiva
* **Radix UI** — componentes acessíveis (Dialogs, etc.)
* **Sonner** — notificações Toast

### 📝 Formulários e Validação

* **React Hook Form** — gerenciamento performático de formulários
* **Zod** — validação de esquemas de dados (*schema validation*)

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Instale as dependências

```bash
pnpm install
```

### 2️⃣ Inicie o servidor backend (simulado ou real)

```bash
pnpm dev-server
```

### 3️⃣ Em outro terminal, inicie o frontend

```bash
pnpm dev
```


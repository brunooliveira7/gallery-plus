# 📷 Gallery Plus

**Gallery Plus** is a robust photo gallery web application built with **React** and **TypeScript**, designed to deliver a smooth, modern, and high-performance user experience.

The project focuses on **efficient image organization through albums**, featuring advanced **upload capabilities**, **data validation**, and **URL-synchronized state management**, ensuring an excellent **DX** and **UX**.

---

## 🚀 Features

### 📸 Photo Management

- **Image Upload**  
  User-friendly interface for uploading new photos, with support for **PNG**, **JPG**, and **JPEG** formats.

- **Strict Validation**  
  Automatic validation of:
  - File format  
  - Maximum size of **50MB**  
  ensuring data integrity before submission.

- **Immersive Preview**  
  When clicking on a photo, users access a detailed view with:
  - **Previous** and **next** photo navigation  
  - A continuous experience without returning to the listing

- **Safe Deletion**  
  Photo removal with:
  - Immediate feedback  
  - Automatic redirection after the action

---

### 📂 Album Organization

- **Album Creation**  
  Intuitive modal for creating new albums, allowing users to:
  - Set a title  
  - Select existing photos for immediate inclusion

- **Flexible Association**  
  During photo upload, it is possible to associate the image with **multiple albums simultaneously**.

- **Content Management**  
  Easy ways to:
  - Add photos to existing albums  
  - Remove photos from albums

---

### 🔍 Search & Navigation (DX / UX)

- **URL-Synchronized State (URL State)**  
  Uses the **nuqs** library to synchronize filters (such as search term and album ID) directly with the URL, enabling:
  - Link sharing  
  - Opening the application in the exact same view state

- **Visual Feedback**  
  **Toasts** (via **Sonner**) notify users about:
  - Successful actions (e.g., *"Photo created successfully!"*)  
  - Errors (e.g., *"Error deleting photo"*)

- **Optimized Loading**  
  **Skeletons** are used to indicate data loading and improve perceived performance.

- **Smooth Transitions**  
  React’s `useTransition` hook is used to keep the interface responsive during:
  - Heavy operations  
  - Asynchronous state updates

---

## 🛠️ Tech Stack

The application was built with a modern set of tools focused on **performance**, **scalability**, and **maintainability**.

### ⚙️ Core

- **React 18+**
- **Vite** — fast development and optimized builds
- **TypeScript** — static typing and improved code safety

### 📦 Data & State Management

- **TanStack Query (React Query)**
  - Smart caching  
  - Automatic query invalidation  
  - Optimistic updates

- **Nuqs** — type-safe URL query state management

- **Axios** — HTTP requests

### 🎨 UI & Styling

- **Tailwind CSS** — utility-first, responsive styling
- **Radix UI** — accessible components (Dialogs, etc.)
- **Sonner** — toast notifications

### 📝 Forms & Validation

- **React Hook Form** — high-performance form management
- **Zod** — schema-based data validation

---

## ⚙️ Running the Project

### 1️⃣ Install dependencies

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


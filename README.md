# GlobalVaultBank — Frontend

A modern bank dashboard frontend built with **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **React 18** — UI library
- **TypeScript** — Static typing
- **Vite** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **React Router DOM v7** — Client-side routing
- **TanStack React Query** — Server state management & data fetching
- **React Hook Form** + **Zod** — Form handling & schema validation
- **Radix UI** (Dialog, Select, Separator, Switch, Tabs) — Accessible UI primitives
- **Recharts** — Charts & data visualization
- **i18next / react-i18next** — Internationalization
- **date-fns** — Date utilities
- **react-datepicker** — Date picker component
- **Lucide React** — Icons
- **Sonner** — Toast notifications
- **React Helmet Async** — Document head management

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammadmehdidalvandii/GlobalVaultBank-frontend.git
   cd GlobalVaultBank-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build**
   ```bash
   npm run preview
   ```

6. **Lint the code**
   ```bash
   npm run lint
   ```

## 📁 Project Structure

```
GlobalVaultBank-frontend/
├── public/          # Static assets
├── src/             # Application source code
├── index.html       # Entry HTML file
├── nginx.conf        # Nginx config (for deployment)
├── package.json      # Project dependencies & scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## 🐳 Deployment

The project includes an `nginx.conf` file, indicating it's ready to be containerized and served via Nginx (e.g., with Docker).

## 📄 License

This project currently has no specified license.

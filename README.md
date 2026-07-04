# Laravel 13 + React 19 Starter Kit

A modern, full-stack **Laravel 13** and **React 19** boilerplate powered by **Inertia.js v3**, **Laravel Fortify**, **Tailwind CSS v4**, **TypeScript**, **Laravel Wayfinder**, **Shadcn UI**, and **Pest v4**.

Designed as a clean, single-user starter kit for rapid web application development—complete with enterprise authentication, passkeys, 2FA, auto-toast alerts, typed routing, and database support for **PostgreSQL** and **SQLite**.

---

## Tech Stack Overview

* **Backend**: Laravel 13 (PHP 8.5)
* **Frontend**: React 19 + Inertia.js v3 (Server-Driven SPA)
* **Styling**: Tailwind CSS v4 + Radix UI / Shadcn UI Primitives
* **Database**: PostgreSQL (Production) / SQLite (Local Dev / Testing)
* **Typed Routing**: Laravel Wayfinder (`@/actions` & `@/routes`)
* **Auth Backend**: Laravel Fortify + `@laravel/passkeys` (WebAuthn)
* **Testing & Quality**: Pest v4, Laravel Pint, TypeScript 5+

---

## Features Included

### 1. Complete Authentication & Security
* **Email & Password**: Registration, Login, Email Verification, Password Resets.
* **Passkeys (WebAuthn)**: Biometric passwordless login (FaceID / TouchID / Security Keys).
* **Two-Factor Authentication (2FA)**: TOTP QR code setup with recovery codes.
* **Password Confirmation**: Built-in modal triggers for sensitive actions.

###  2. UI Design System & Components
* **Shadcn UI Primitives**: 28+ pre-installed components in `resources/js/components/ui/` (`Button`, `Dialog`, `Table`, `Textarea`, `DropdownMenu`, `Sheet`, `Select`, `Card`, `Badge`, `Avatar`, `Input`, `Checkbox`, `Tooltip`, `Sonner`, `Skeleton`, etc.).
* **Appearance / Dark Mode**: Smooth Dark, Light, and System theme switching with persistent preferences (`useAppearance`).
* **Toast Notification System**: Automatic Sonner toast popups for backend flash messages (`with('success', 'Saved!')`).

### 3. Developer Experience (DX) Boosters
* **Wayfinder Typed Routes**: Call controllers directly in TypeScript without hardcoded URLs:
  ```tsx
  import { dashboard } from '@/routes';
  ```
* **Auto Flash Toasts**: Backend session flash messages (`session('success')`) automatically render as toasts on the frontend via `useFlashToast()`.
* **Utility React Hooks**:
  * `useFlashToast()` — Automatic toast handler for Inertia pages.
  * `useDebounce()` — Debounces fast text input for instant search fields.
  * `useCopyToClipboard()` — Copies strings to clipboard with instant toast confirmation.
  * `useAppearance()` — Handles theme switching.

---

## Quick Start Guide

### 1. Prerequisites
* **PHP**: 8.3 or higher (PHP 8.5 recommended)
* **Node.js**: 20 or higher
* **Composer**: 2+
* **Database**: PostgreSQL or SQLite

---

### 2. Initial Setup

```bash
# 1. Install PHP dependencies
composer install

# 2. Install Node dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Generate app key
php artisan key:generate
```

---

### 3. Database Configuration

#### Option A: PostgreSQL (Recommended for Production)
Update [.env](file:///.env):
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=laravel-react-bp
DB_USERNAME=postgres  # or your Mac username
DB_PASSWORD=
```

#### Option B: SQLite (Zero-Config Local Dev)
Update [.env](file:///.env):
```env
DB_CONNECTION=sqlite
```

---

### 4. Run Migrations & Database Seeder

Run `migrate:fresh --seed` to automatically prepare the database and seed a ready-to-use developer account:

```bash
php artisan migrate:fresh --seed
```

 **Default Seeded Credentials**:
* **Email**: `test@example.com`
* **Password**: `password`

---

### 5. Launch Development Server

Run the concurrent server (Laravel Artisan + Vite):

```bash
composer dev
# or
npm run dev
```

Visit `http://localhost:8000/dashboard` in your browser!

---

## CLI Reference & Useful Commands

| Command | Action |
|---|---|
| `composer dev` | Launches PHP server & Vite dev server together |
| `php artisan test --compact` | Runs the Pest test suite |
| `vendor/bin/pint --dirty --format agent` | Formats PHP code to Laravel standards |
| `npm run types:check` | Runs TypeScript type checker |
| `npm run build` | Builds production JS & CSS bundles |
| `npx wayfinder generate` | Auto-generates typed functions for Laravel routes |

---

## Project Structure & Architecture

```text
├── app/
│   ├── Actions/            # Fortify auth actions (CreateUser, Passkeys, 2FA)
│   ├── Http/
│   │   ├── Controllers/   # Inertia controllers
│   │   └── Middleware/    # Shared props & theme handling
│   ├── Models/             # User model
│   └── Providers/          # FortifyServiceProvider & Wayfinder configuration
├── database/               # Migrations, seeders (DatabaseSeeder), factories
├── resources/js/
│   ├── actions/            # Wayfinder typed controller actions
│   ├── components/
│   │   ├── ui/             # Shadcn UI primitives (Table, Textarea, Button, Dialog, etc.)
│   │   └── ...             # Navbar, Sidebar, User Menu
│   ├── hooks/              # Custom React hooks (useFlashToast, useDebounce, useCopyToClipboard, etc.)
│   ├── layouts/            # Inertia layouts (AppLayout, AuthLayout, SettingsLayout)
│   ├── pages/              # React Inertia pages (welcome, dashboard, auth/*, settings/*)
│   ├── routes/             # Wayfinder typed named route functions
│   └── types/              # TypeScript interface definitions (global.d.ts)
├── routes/                 # Web, Settings, & Console route definitions
└── tests/                  # Pest unit & feature test suites
```

---

## How to Clone for a New Project

When starting a brand-new application in the future:

```bash
# Clone this repository into your new project directory
git clone <your-repo-url> my-new-app
cd my-new-app

# Remove original git history & start fresh
rm -rf .git
git init

# Setup dependencies & database
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
```

---

## License

This starter template is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

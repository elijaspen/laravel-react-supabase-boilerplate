# Laravel 13 + React 19 + Supabase Starter Kit

A modern, full-stack **Laravel 13** and **React 19** boilerplate powered by **Supabase**, **Inertia.js v3**, **Laravel Fortify**, **Tailwind CSS v4**, **TypeScript**, **Laravel Wayfinder**, **Shadcn UI**, and **Pest v4**.

Designed as a clean, production-ready starter kit for rapid web application development—complete with enterprise authentication, passkeys, 2FA, auto-toast alerts, typed routing, Supabase JS SDK integration, and full database support for **Supabase Managed Postgres**, **Local PostgreSQL**, and **SQLite**.

---

## Tech Stack Overview

* **Backend**: Laravel 13 (PHP 8.5)
* **Frontend**: React 19 + Inertia.js v3 (Server-Driven SPA)
* **Cloud Database & Storage**: Supabase (Managed Postgres, Realtime & Buckets)
* **Styling**: Tailwind CSS v4 + Radix UI / Shadcn UI Primitives
* **Typed Routing**: Laravel Wayfinder (`@/actions` & `@/routes`)
* **Auth Backend**: Laravel Fortify + `@laravel/passkeys` (WebAuthn)
* **Supabase Client SDK**: `@supabase/supabase-js` v2
* **Testing & Quality**: Pest v4, Laravel Pint, TypeScript 5+

---

## Features Included

### 1. Complete Authentication & Security
* **Email & Password**: Registration, Login, Email Verification, Password Resets.
* **Passkeys (WebAuthn)**: Biometric passwordless login (FaceID / TouchID / Security Keys).
* **Two-Factor Authentication (2FA)**: TOTP QR code setup with recovery codes.
* **Password Confirmation**: Built-in modal triggers for sensitive actions.

### 2. Supabase Integration
* **Managed Cloud Database**: Native Laravel PDO connection to Supabase Postgres pooler.
* **Supabase JS Client SDK**: Clean singleton instance exported from `resources/js/lib/supabase.ts`.
* **React Supabase Hooks**: `useSupabase()` hook for 1-line access to Supabase Storage file uploads and Realtime channel subscriptions.

### 3. UI Design System & Components
* **Shadcn UI Primitives**: 28+ pre-installed components in `resources/js/components/ui/` (`Button`, `Dialog`, `Table`, `Textarea`, `DropdownMenu`, `Sheet`, `Select`, `Card`, `Badge`, `Avatar`, `Input`, `Checkbox`, `Tooltip`, `Sonner`, `Skeleton`, etc.).
* **Appearance / Dark Mode**: Smooth Dark, Light, and System theme switching with persistent preferences (`useAppearance`).
* **Toast Notification System**: Automatic Sonner toast popups for backend flash messages (`with('success', 'Saved!')`).

### 4. Developer Experience (DX) Boosters
* **Wayfinder Typed Routes**: Call controllers directly in TypeScript without hardcoded URLs:
  ```tsx
  import { dashboard } from '@/routes';
  ```
* **Auto Flash Toasts**: Backend session flash messages (`session('success')`) automatically render as toasts on the frontend via `useFlashToast()`.
* **Utility React Hooks**:
  * `useSupabase()` — Access Supabase client, storage, and realtime.
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
* **Database**: Supabase / PostgreSQL or SQLite

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

#### Option A: Supabase (Managed Cloud Postgres)
In your Supabase Dashboard, go to **Project Settings -> Database -> Connection string (Transaction Pooler)** and update [.env](file:///.env):

```env
DB_CONNECTION=pgsql
DB_HOST=aws-0-ap-southeast-1.pooler.supabase.com  # Your Supabase Pooler Host
DB_PORT=6543                                      # Transaction pooler port
DB_DATABASE=postgres
DB_USERNAME=postgres.your-project-ref             # Your Supabase username
DB_PASSWORD=your-supabase-db-password             # Your Supabase DB password
DB_SSLMODE=require

# Supabase API Keys (For Frontend Storage / Realtime)
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

#### Option B: Local PostgreSQL
```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=laravel-react-bp
DB_USERNAME=postgres  # or your Mac username
DB_PASSWORD=
```

#### Option C: SQLite (Zero-Config Local Dev)
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
│   ├── hooks/              # Custom React hooks (useSupabase, useFlashToast, useDebounce, etc.)
│   ├── lib/
│   │   ├── supabase.ts     # Supabase client SDK instance
│   │   └── utils.ts        # cn() helper
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

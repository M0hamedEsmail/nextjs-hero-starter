# 🚀 Next Hero Starter

[![npm version](https://img.shields.io/npm/v/next-hero-starter.svg)](https://www.npmjs.com/package/next-hero-starter)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Node.js Version](https://img.shields.io/node/v/next-hero-starter)](https://nodejs.org/)

**Production-ready Next.js starter with HeroUI, Redux Toolkit, React Hook Form, Yup validation, and authentication boilerplate.**

[Quick Start](#-quick-start) • [Features](#-features) • [What's Included](#-whats-included) • [Usage](#-usage) • [Documentation](#-documentation)

---

## 🎯 Why Next Hero Starter?

Stop wasting **hours** setting up the same configuration for every Next.js project. Get a complete, production-ready frontend with authentication, state management, form validation, and best practices baked in.

**Perfect for:**

- 🏃‍♂️ **Hackathons & MVPs** - Start building features in minutes
- 📚 **Learning Full-Stack Development** - Study modern React patterns
- 🎓 **Teaching Frontend Architecture** - Production-grade examples
- 🚀 **Rapid Prototyping** - Professional setup instantly
- 💼 **Freelance Projects** - Impress clients with quality code

---

## ✨ Features

| 🎨 Modern UI | ⚡ State Management | 🛠️ Developer Experience |
|---|---|---|
| **HeroUI Components**<br>Beautiful, accessible UI out of the box | **Redux Toolkit**<br>90% less boilerplate than classic Redux | **TypeScript**<br>Full type safety, zero `any` types |
| **Tailwind CSS v4**<br>Rapid styling with utility-first CSS | **Typed Redux Hooks**<br>Custom hooks with full inference | **Clean Architecture**<br>MVC-inspired folder structure |
| **Dark Mode Ready**<br>Built-in theme switching | **Auth Boilerplate**<br>Complete login/logout flow | **Best Practices**<br>Industry-standard patterns |

| 📋 Forms & Validation | 🔐 Security | 🚀 Performance |
|---|---|---|
| **React Hook Form**<br>Minimal re-renders, optimal performance | **Non-Commercial License**<br>Free for personal/learning use | **Next.js 16**<br>Latest React with SSR & optimization |
| **Yup Validation**<br>Schema-based, maintainable validation | **Type-Safe Auth**<br>Proper interfaces & error handling | **Code Splitting**<br>Automatic optimization |
| **Error Handling**<br>User-friendly error messages | **No Password Storage**<br>Secure authentication patterns | **React 19**<br>Latest features & improvements |

---

## 🚀 Quick Start

Get your Next.js app running in **60 seconds**:

```bash
# Clone or download the package
npx create-next-app my-app --example https://github.com/M0hamedEsmail/next-hero-starter

# Navigate to your project
cd my-app

# Install dependencies
npm install

# Start developing
npm run dev
```

That's it! Your app is now running at `http://localhost:3000` 🎉

---

## 📦 Installation & Usage

### Option 1: Use with npx (Recommended)

No installation required - just run:

```bash
npx create-next-app my-project --example https://github.com/M0hamedEsmail/next-hero-starter
```

### Option 2: Install from NPM

```bash
npm install next-hero-starter
```

Then copy the files to your project directory.

### What Happens Next

You get a complete Next.js application with:

1. ✅ All dependencies installed
2. ✅ TypeScript configured
3. ✅ Redux store ready
4. ✅ Authentication boilerplate
5. ✅ UI components styled
6. ✅ Best practices implemented

---

## 📁 What's Included

### Complete Project Structure

```
your-project/
├── 📂 src/
│   ├── 📂 app/              # Next.js App Router
│   │   ├── page.tsx         # Main page with auth example
│   │   ├── layout.tsx       # Root layout + providers
│   │   ├── store.ts         # Redux store configuration
│   │   ├── providers.tsx    # Redux & HeroUI providers
│   │   └── globals.css      # Global styles
│   │
│   ├── 📂 components/       # Reusable components
│   │   ├── LoginForm.tsx    # Form with validation
│   │   ├── navbar.tsx       # Navigation bar
│   │   └── footer.tsx       # Footer component
│   │
│   ├── 📂 store/            # Redux slices
│   │   └── authSlice.ts     # Authentication state
│   │
│   ├── 📂 types/            # TypeScript definitions
│   │   └── auth.ts          # Auth interfaces
│   │
│   └── 📂 hooks/            # Custom hooks
│       └── useRedux.ts      # Typed Redux hooks
│
├── 📂 public/               # Static assets
├── 📄 package.json          # Dependencies
├── 📄 tsconfig.json         # TypeScript config
├── 📄 tailwind.config.ts    # Tailwind config
├── 📄 next.config.ts        # Next.js config
└── 📄 README.md             # Documentation
```

### 🔋 Tech Stack & Dependencies

**Core Framework:**
- **Next.js** `16.0.1` - Latest React framework with App Router
- **React** `19.2.0` - Latest React with new features
- **TypeScript** `^5` - Full type safety

**UI & Styling:**
- **HeroUI** `^2.8.5` - Beautiful, accessible components
- **Tailwind CSS** `^4` - Utility-first CSS framework

**State Management:**
- **Redux Toolkit** `^2.10.1` - Modern Redux with less boilerplate
- **React Redux** `^9.2.0` - React bindings for Redux

**Forms & Validation:**
- **React Hook Form** `^7.66.0` - Performant form management
- **Yup** `^1.7.1` - Schema validation
- **@hookform/resolvers** `^5.2.2` - React Hook Form + Yup integration

---

## ⚙️ Configuration Guide

### Change Language Direction

The template is set to RTL (Arabic). To change to LTR, edit `src/app/layout.tsx`:

```tsx
<html lang="en" dir="ltr">  {/* Changed from "ar" and "rtl" */}
```

### Customize Theme

Edit `tailwind.config.ts`:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
};
```

### Update Branding

Edit `src/components/navbar.tsx` and `footer.tsx` with your:
- Brand name
- Logo
- Links
- Social media

---

## 🛠️ Usage

### Add Redux Slice

Create new slices in `src/store/`:

```tsx
// src/store/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { profile: null },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
```

### Create Form with Validation

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Button } from "@heroui/react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Input {...register("email")} errorMessage={errors.email?.message} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Use Redux in Components

```tsx
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { login, logout } from "@/store/authSlice";

export default function MyComponent() {
  const { isAuthenticated, user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <button onClick={() => dispatch(login({ email: "user@example.com" }))}>
          Login
        </button>
      )}
    </div>
  );
}
```

---

## 🔐 Backend Integration

Replace the example auth with real API:

```tsx
const onSubmit = async (data) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const user = await res.json();
  dispatch(login(user));
};
```

---

## 🎯 Use Cases

Perfect for building:

- 🛍️ **E-commerce Frontends** - Product catalogs, shopping carts, checkout
- 📱 **SaaS Applications** - Dashboards, user management, analytics
- 💬 **Social Platforms** - User profiles, feeds, messaging
- 📰 **Blog/CMS Frontends** - Content display, admin panels
- 🎓 **Learning Platforms** - Course interfaces, student portals
- 🏢 **Business Applications** - CRM interfaces, admin dashboards

---

## 🛡️ Best Practices Included

| Feature | Implementation |
|---------|---------------|
| 🔐 **Type Safety** | Full TypeScript, no `any` types |
| 🎯 **Custom Hooks** | Typed Redux hooks with inference |
| 📁 **Code Organization** | Clean folder structure |
| 🔄 **Separation of Concerns** | Components, state, types separated |
| ✅ **Validation** | Schema-based, maintainable |
| ⚡ **Performance** | Minimal re-renders with React Hook Form |

---

## 📖 Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🚀 Deploy

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Build for Production

```bash
npm run build
npm start
```

---

## 📊 What You Get Out of the Box

| Feature | Next Hero Starter | Create Next App | Manual Setup |
|---------|-------------------|-----------------|--------------|
| ✅ Next.js Setup | ✓ | ✓ | ✓ |
| ✅ TypeScript | ✓ | ✓ | ✓ |
| ✅ Tailwind CSS | ✓ | ✓ | ✓ |
| ✅ UI Components | ✓ | ❌ | ❌ |
| ✅ Redux Toolkit | ✓ | ❌ | ❌ |
| ✅ Form Validation | ✓ | ❌ | ❌ |
| ✅ Auth Boilerplate | ✓ | ❌ | ❌ |
| ✅ Best Practices | ✓ | ⚠️ Basic | ❌ |
| ⏱️ Setup Time | **60 seconds** | 5 minutes | **Hours** |

---

## 📄 License

**CC BY-NC 4.0** © [m0hamedesmail](https://github.com/m0hamedesmail)

**Free for:**
- ✅ Personal projects
- ✅ Learning & education
- ✅ Open source projects
- ✅ Portfolio work

**Not allowed:**
- ❌ Selling the template
- ❌ Commercial use without permission

For commercial use, please contact: [m0hamedesmail](https://github.com/m0hamedesmail)

---

## 🤝 Contributing

We welcome contributions!

1. 🐛 **Report bugs** - [Open an issue](https://github.com/M0hamedEsmail/next-hero-starter/issues)
2. 💡 **Suggest features** - Share your ideas
3. 🔧 **Submit PRs** - Fork, code, and create pull requests
4. ⭐ **Star the repo** - Show your support

---

## 💬 Support & Community

- 📚 **Documentation**: [GitHub Wiki](https://github.com/M0hamedEsmail/next-hero-starter)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/M0hamedEsmail/next-hero-starter/issues)
- ⭐ **Star us** on GitHub to stay updated

---

## 🔗 Links

- **NPM Package**: [next-hero-starter](https://www.npmjs.com/package/next-hero-starter)
- **GitHub Repository**: [M0hamedEsmail/next-hero-starter](https://github.com/M0hamedEsmail/next-hero-starter)
- **Author**: [m0hamedesmail](https://github.com/m0hamedesmail)
- **Company**: [MERNCore.com](https://merncore.com)

---

## 💡 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [HeroUI Docs](https://heroui.com)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [React Hook Form Docs](https://react-hook-form.com)

---

### ⭐ If Next Hero Starter helped you, please star the repo! ⭐

**Made with ❤️ by [m0hamedesmail](https://github.com/m0hamedesmail) - CEO & Founder of [MERNCore.com](https://merncore.com)**

[Report Bug](https://github.com/M0hamedEsmail/next-hero-starter/issues) · [Request Feature](https://github.com/M0hamedEsmail/next-hero-starter/issues) · [Contribute](https://github.com/M0hamedEsmail/next-hero-starter/pulls)

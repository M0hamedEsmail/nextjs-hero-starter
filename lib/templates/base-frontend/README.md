# {{PROJECT_NAME}}# 🚀 Next Hero Starter



A modern Next.js application built with **Next Hero Starter** - featuring HeroUI components, Redux Toolkit state management, React Hook Form validation, and authentication boilerplate.[![npm version](https://img.shields.io/npm/v/nextjs-hero-starter.svg)](https://www.npmjs.com/package/nextjs-hero-starter)

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

## 🚀 Getting Started[![Node.js Version](https://img.shields.io/node/v/nextjs-hero-starter)](https://nodejs.org/)



### Prerequisites**Production-ready Next.js starter with HeroUI, Redux Toolkit, React Hook Form, Yup validation, and authentication boilerplate.**



- Node.js 18+ [Quick Start](#-quick-start) • [Features](#-features) • [What's Included](#-whats-included) • [Usage](#-usage) • [Documentation](#-documentation)

- npm, yarn, or pnpm

---

### Installation

## 🎯 Why Next Hero Starter?

If dependencies aren't installed yet:

Stop wasting **hours** setting up the same configuration for every Next.js project. Get a complete, production-ready frontend with authentication, state management, form validation, and best practices baked in.

```bash

npm install**Perfect for:**

# or

yarn install- 🏃‍♂️ **Hackathons & MVPs** - Start building features in minutes

# or- 📚 **Learning Full-Stack Development** - Study modern React patterns

pnpm install- 🎓 **Teaching Frontend Architecture** - Production-grade examples

```- 🚀 **Rapid Prototyping** - Professional setup instantly

- 💼 **Freelance Projects** - Impress clients with quality code

### Development

---

Start the development server:

## ✨ Features

```bash

npm run dev| 🎨 Modern UI | ⚡ State Management | 🛠️ Developer Experience |

# or|---|---|---|

yarn dev| **HeroUI Components**<br>Beautiful, accessible UI out of the box | **Redux Toolkit**<br>90% less boilerplate than classic Redux | **TypeScript**<br>Full type safety, zero `any` types |

# or| **Tailwind CSS v4**<br>Rapid styling with utility-first CSS | **Typed Redux Hooks**<br>Custom hooks with full inference | **Clean Architecture**<br>MVC-inspired folder structure |

pnpm dev| **Dark Mode Ready**<br>Built-in theme switching | **Auth Boilerplate**<br>Complete login/logout flow | **Best Practices**<br>Industry-standard patterns |

```

| 📋 Forms & Validation | 🔐 Security | 🚀 Performance |

Open [http://localhost:3000](http://localhost:3000) in your browser.|---|---|---|

| **React Hook Form**<br>Minimal re-renders, optimal performance | **Non-Commercial License**<br>Free for personal/learning use | **Next.js 16**<br>Latest React with SSR & optimization |

### Build for Production| **Yup Validation**<br>Schema-based, maintainable validation | **Type-Safe Auth**<br>Proper interfaces & error handling | **Code Splitting**<br>Automatic optimization |

| **Error Handling**<br>User-friendly error messages | **No Password Storage**<br>Secure authentication patterns | **React 19**<br>Latest features & improvements |

```bash

npm run build---

npm start

```## 🚀 Quick Start



## 📁 Project StructureGet your Next.js app running in **60 seconds**:



``````bash

{{PROJECT_NAME}}/# Clone or download the package

├── src/npx create-next-app my-app --example https://github.com/M0hamedEsmail/nextjs-hero-starter

│   ├── app/              # Next.js App Router

│   │   ├── page.tsx      # Home page with auth demo# Navigate to your project

│   │   ├── layout.tsx    # Root layout with providerscd my-app

│   │   ├── store.ts      # Redux store configuration

│   │   └── globals.css   # Global styles# Install dependencies

│   │npm install

│   ├── components/       # Reusable UI components

│   │   ├── LoginForm.tsx # Form with validation# Start developing

│   │   ├── navbar.tsx    # Navigation componentnpm run dev

│   │   └── footer.tsx    # Footer component```

│   │

│   ├── store/           # Redux slicesThat's it! Your app is now running at `http://localhost:3000` 🎉

│   │   └── authSlice.ts # Authentication state

│   │---

│   ├── types/           # TypeScript types

│   │   └── auth.ts      # Auth interfaces## 📦 Installation & Usage

│   │

│   └── hooks/           # Custom hooks### Option 1: Use with npx (Recommended)

│       └── useRedux.ts  # Typed Redux hooks

│No installation required - just run:

├── public/              # Static assets

└── package.json```bash

```npx create-next-app my-project --example https://github.com/M0hamedEsmail/nextjs-hero-starter

```

## 🛠️ Tech Stack

### Option 2: Install from NPM

### Core

- **Next.js 16** - React framework with App Router```bash

- **React 19** - Latest React featuresnpm install nextjs-hero-starter

- **TypeScript** - Type-safe development```



### UI & StylingThen copy the files to your project directory.

- **HeroUI** - Beautiful component library

- **Tailwind CSS v4** - Utility-first styling### What Happens Next



### State ManagementYou get a complete Next.js application with:

- **Redux Toolkit** - Modern Redux with less boilerplate

- **React Redux** - React bindings1. ✅ All dependencies installed

2. ✅ TypeScript configured

### Forms & Validation3. ✅ Redux store ready

- **React Hook Form** - Performant forms4. ✅ Authentication boilerplate

- **Yup** - Schema validation5. ✅ UI components styled

6. ✅ Best practices implemented

## 📝 Available Scripts

---

| Command | Description |

|---------|-------------|## 📁 What's Included

| `npm run dev` | Start development server with hot reload |

| `npm run build` | Build optimized production bundle |### Complete Project Structure

| `npm start` | Start production server |

| `npm run lint` | Run ESLint checks |```

your-project/

## 🎯 Key Features├── 📂 src/

│   ├── 📂 app/              # Next.js App Router

### ✅ Authentication Boilerplate│   │   ├── page.tsx         # Main page with auth example

- Login form with validation│   │   ├── layout.tsx       # Root layout + providers

- Redux state management for auth│   │   ├── store.ts         # Redux store configuration

- TypeScript interfaces for type safety│   │   ├── providers.tsx    # Redux & HeroUI providers

│   │   └── globals.css      # Global styles

### ✅ Form Handling│   │

- React Hook Form integration│   ├── 📂 components/       # Reusable components

- Yup schema validation│   │   ├── LoginForm.tsx    # Form with validation

- Error message display│   │   ├── navbar.tsx       # Navigation bar

│   │   └── footer.tsx       # Footer component

### ✅ State Management│   │

- Redux Toolkit configured│   ├── 📂 store/            # Redux slices

- Typed hooks (`useAppDispatch`, `useAppSelector`)│   │   └── authSlice.ts     # Authentication state

- Auth slice example│   │

│   ├── 📂 types/            # TypeScript definitions

### ✅ UI Components│   │   └── auth.ts          # Auth interfaces

- HeroUI component library│   │

- Responsive navbar and footer│   └── 📂 hooks/            # Custom hooks

- Dark mode support│       └── useRedux.ts      # Typed Redux hooks

│

## 🔧 Customization├── 📂 public/               # Static assets

├── 📄 package.json          # Dependencies

### Update Theme Colors├── 📄 tsconfig.json         # TypeScript config

├── 📄 tailwind.config.ts    # Tailwind config

Edit `tailwind.config.ts`:├── 📄 next.config.ts        # Next.js config

└── 📄 README.md             # Documentation

```ts```

export default {

  theme: {### 🔋 Tech Stack & Dependencies

    extend: {

      colors: {**Core Framework:**

        primary: '#your-brand-color',- **Next.js** `16.0.1` - Latest React framework with App Router

      },- **React** `19.2.0` - Latest React with new features

    },- **TypeScript** `^5` - Full type safety

  },

};**UI & Styling:**

```- **HeroUI** `^2.8.5` - Beautiful, accessible components

- **Tailwind CSS** `^4` - Utility-first CSS framework

### Add New Redux Slice

**State Management:**

Create a new file in `src/store/`:- **Redux Toolkit** `^2.10.1` - Modern Redux with less boilerplate

- **React Redux** `^9.2.0` - React bindings for Redux

```ts

// src/store/userSlice.ts**Forms & Validation:**

import { createSlice } from '@reduxjs/toolkit';- **React Hook Form** `^7.66.0` - Performant form management

- **Yup** `^1.7.1` - Schema validation

const userSlice = createSlice({- **@hookform/resolvers** `^5.2.2` - React Hook Form + Yup integration

  name: 'user',

  initialState: { profile: null },---

  reducers: {

    setProfile(state, action) {## ⚙️ Configuration Guide

      state.profile = action.payload;

    },### Change Language Direction

  },

});The template is set to RTL (Arabic). To change to LTR, edit `src/app/layout.tsx`:



export const { setProfile } = userSlice.actions;```tsx

export default userSlice.reducer;<html lang="en" dir="ltr">  {/* Changed from "ar" and "rtl" */}

``````



Then add to `src/app/store.ts`:### Customize Theme



```tsEdit `tailwind.config.ts`:

import userReducer from '../store/userSlice';

```js

export const store = configureStore({export default {

  reducer: {  theme: {

    auth: authReducer,    extend: {

    user: userReducer, // Add here      colors: {

  },        primary: '#your-color',

});      },

```    },

  },

### Create New Form};

```

```tsx

import { useForm } from "react-hook-form";### Update Branding

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";Edit `src/components/navbar.tsx` and `footer.tsx` with your:

import { Input, Button } from "@heroui/react";- Brand name

- Logo

const schema = yup.object({- Links

  email: yup.string().email().required(),- Social media

  message: yup.string().min(10).required(),

});---



export default function ContactForm() {## 🛠️ Usage

  const { register, handleSubmit, formState: { errors } } = useForm({

    resolver: yupResolver(schema),### Add Redux Slice

  });

Create new slices in `src/store/`:

  const onSubmit = (data) => console.log(data);

```tsx

  return (// src/store/userSlice.ts

    <form onSubmit={handleSubmit(onSubmit)}>import { createSlice } from '@reduxjs/toolkit';

      <Input 

        {...register("email")} const userSlice = createSlice({

        label="Email"  name: 'user',

        errorMessage={errors.email?.message}  initialState: { profile: null },

      />  reducers: {

      <Input     setProfile(state, action) {

        {...register("message")}       state.profile = action.payload;

        label="Message"    },

        errorMessage={errors.message?.message}  },

      />});

      <Button type="submit">Submit</Button>

    </form>export const { setProfile } = userSlice.actions;

  );export default userSlice.reducer;

}```

```

### Create Form with Validation

## 🌐 Environment Variables

```tsx

Create a `.env.local` file for environment-specific configuration:import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

```envimport * as yup from "yup";

# API Configurationimport { Input, Button } from "@heroui/react";

NEXT_PUBLIC_API_URL=http://localhost:4000/api

const schema = yup.object().shape({

# App Settings  email: yup.string().email().required(),

NEXT_PUBLIC_APP_NAME="Your App Name"});

```

export default function MyForm() {

**Note:** Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.  const { register, handleSubmit, formState: { errors } } = useForm({

    resolver: yupResolver(schema),

## 📚 Learn More  });



### Documentation  return (

- [Next.js Documentation](https://nextjs.org/docs)    <form onSubmit={handleSubmit(data => console.log(data))}>

- [HeroUI Documentation](https://heroui.com)      <Input {...register("email")} errorMessage={errors.email?.message} />

- [Redux Toolkit](https://redux-toolkit.js.org)      <Button type="submit">Submit</Button>

- [React Hook Form](https://react-hook-form.com)    </form>

- [Tailwind CSS](https://tailwindcss.com)  );

}

### Next Steps```

1. Replace mock authentication with real API calls

2. Add more pages and routes### Use Redux in Components

3. Implement protected routes

4. Connect to your backend API```tsx

5. Deploy to Vercel, Netlify, or your preferred hostimport { useAppSelector, useAppDispatch } from "@/hooks/useRedux";

import { login, logout } from "@/store/authSlice";

## 🚀 Deployment

export default function MyComponent() {

### Deploy to Vercel (Recommended)  const { isAuthenticated, user } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

The easiest way to deploy:

  return (

```bash    <div>

npm install -g vercel      {isAuthenticated ? (

vercel        <p>Welcome, {user.email}</p>

```      ) : (

        <button onClick={() => dispatch(login({ email: "user@example.com" }))}>

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.          Login

        </button>

### Other Platforms      )}

- **Netlify:** Connect your Git repository    </div>

- **AWS Amplify:** Use the Amplify Console  );

- **Railway:** Deploy with `railway up`}

```

## 📄 License

---

This project was generated using **nextjs-hero-starter**.

## 🔐 Backend Integration

- Template License: CC BY-NC 4.0

- Your project: You can license it however you wantReplace the example auth with real API:



## 🤝 Support```tsx

const onSubmit = async (data) => {

### Issues with the Template?  const res = await fetch('/api/login', {

    method: 'POST',

Report issues at: [nextjs-hero-starter GitHub](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues)    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(data),

### Questions?  });

  const user = await res.json();

- Check the [documentation](https://github.com/M0hamedEsmail/nextjs-hero-starter#readme)  dispatch(login(user));

- Open a discussion on GitHub};

```

---

---

**Built with [Next Hero Starter](https://www.npmjs.com/package/nextjs-hero-starter) by [m0hamedesmail](https://github.com/m0hamedesmail)**

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

1. 🐛 **Report bugs** - [Open an issue](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues)
2. 💡 **Suggest features** - Share your ideas
3. 🔧 **Submit PRs** - Fork, code, and create pull requests
4. ⭐ **Star the repo** - Show your support

---

## 💬 Support & Community

- 📚 **Documentation**: [GitHub Wiki](https://github.com/M0hamedEsmail/nextjs-hero-starter)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues)
- ⭐ **Star us** on GitHub to stay updated

---

## 🔗 Links

- **NPM Package**: [nextjs-hero-starter](https://www.npmjs.com/package/nextjs-hero-starter)
- **GitHub Repository**: [M0hamedEsmail/nextjs-hero-starter](https://github.com/M0hamedEsmail/nextjs-hero-starter)
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

[Report Bug](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues) · [Request Feature](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues) · [Contribute](https://github.com/M0hamedEsmail/nextjs-hero-starter/pulls)

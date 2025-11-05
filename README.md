# Next Hero Starter 🚀

[![npm version](https://img.shields.io/npm/v/next-hero-starter.svg)](https://www.npmjs.com/package/next-hero-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Save hours of setup time!** A production-ready Next.js starter template with best practices, modern tools, and authentication boilerplate built-in.

## 🎯 Why This Package?

As a frontend developer, you know the pain of setting up a new Next.js project from scratch. Every time you start a new project, you spend **hours** configuring:

- ✅ UI component library
- ✅ State management
- ✅ Form validation
- ✅ TypeScript configuration
- ✅ Authentication boilerplate
- ✅ Project structure

**This starter template solves that problem.** It's a carefully crafted, production-ready setup that follows industry best practices, so you can **start building features immediately** instead of wasting time on configuration.

## ✨ What's Included

This template comes with everything you need to build a modern web application:

### 🎨 **HeroUI** - Beautiful UI Components
- Pre-configured component library with stunning, accessible components
- Built on top of React Aria for excellent accessibility
- Fully customizable with Tailwind CSS
- Dark mode support out of the box
- **Why?** Instead of building buttons, inputs, and forms from scratch, you get professional components ready to use

### 🗄️ **Redux Toolkit** - State Management
- Modern, efficient state management
- Pre-configured store with TypeScript
- Custom typed hooks (`useAppSelector`, `useAppDispatch`)
- Authentication state example included
- **Why?** Redux Toolkit reduces boilerplate by 90% compared to classic Redux, making state management simple and maintainable

### 📋 **React Hook Form** - Form Handling
- Performant form state management
- Minimal re-renders for better performance
- Easy integration with UI libraries
- **Why?** It's the most efficient form library for React, reducing unnecessary re-renders and providing excellent developer experience

### ✅ **Yup** - Schema Validation
- Type-safe validation schemas
- Clear, readable validation rules
- Automatic error messages
- **Why?** Schema-based validation is more maintainable than writing validation logic manually

### 🔐 **Authentication Boilerplate**
- Ready-to-use login form with validation
- Redux state management for auth
- Conditional rendering examples
- TypeScript interfaces for user data
- **Why?** Authentication is needed in 90% of projects - why build it from scratch every time?

### 📦 **TypeScript**
- Full type safety throughout the project
- No `any` types
- Proper interfaces and types
- **Why?** Catch bugs before runtime and enjoy better IDE support

### 🎨 **Tailwind CSS v4**
- Modern utility-first CSS
- Configured and ready to use
- **Why?** Rapid UI development with consistent design

## 🚀 Quick Start

### Installation

```bash
npx create-next-app my-app --example https://github.com/M0hamedEsmail/next-hero-starter
# or
npm install next-hero-starter
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page with auth example
│   ├── layout.tsx            # Root layout with providers
│   ├── store.ts              # Redux store configuration
│   └── providers.tsx         # Redux & HeroUI providers
├── components/
│   ├── LoginForm.tsx         # Login form with validation
│   ├── navbar.tsx            # Navigation component
│   └── footer.tsx            # Footer component
├── store/
│   └── authSlice.ts          # Redux auth slice
├── types/
│   └── auth.ts               # TypeScript interfaces
└── hooks/
    └── useRedux.ts           # Typed Redux hooks
```

## 🛠️ How to Use

### 1. **Start Building Your Features**

The login form is just an example. Replace `src/app/page.tsx` with your own homepage:

```tsx
export default function Home() {
  return (
    <div>
      <h1>Your App Here</h1>
    </div>
  );
}
```

### 2. **Add More Redux Slices**

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

Then add to the store in `src/app/store.ts`:

```tsx
import userReducer from '../store/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer, // Add here
  },
});
```

### 3. **Create New Forms**

Use the `LoginForm.tsx` as a reference:

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Your form fields */}
    </form>
  );
}
```

### 4. **Customize the UI**

All HeroUI components are customizable:

```tsx
import { Button, Input, Card } from "@heroui/react";

<Button color="primary" size="lg">
  Click Me
</Button>

<Input 
  label="Email"
  variant="bordered"
  color="primary"
/>
```

Check the [HeroUI docs](https://heroui.com) for all available components and props.

### 5. **Add New Pages**

Next.js uses file-based routing. Create new files in `src/app/`:

```
src/app/
├── page.tsx           # Home page (/)
├── about/
│   └── page.tsx       # About page (/about)
└── dashboard/
    └── page.tsx       # Dashboard page (/dashboard)
```

## 📚 Package Overview

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **Next.js 16** | `16.0.1` | React framework with SSR, routing, and optimization |
| **React 19** | `19.2.0` | UI library (latest version) |
| **HeroUI** | `^2.8.5` | Beautiful, accessible UI components |
| **Redux Toolkit** | `^2.10.1` | Simplified state management |
| **React Hook Form** | `^7.66.0` | Performant form handling |
| **Yup** | `^1.7.1` | Schema validation |
| **TypeScript** | `^5` | Type safety and better DX |
| **Tailwind CSS** | `^4` | Utility-first CSS framework |

## 🎓 Why These Technologies?

### Why Redux Toolkit?
- ✅ **90% less boilerplate** than classic Redux
- ✅ Built-in best practices (Immer, Redux DevTools)
- ✅ Great TypeScript support
- ✅ Most popular state management solution
- ✅ Perfect for apps that grow over time

**Alternative:** If you prefer simpler state, you can use Zustand or React Context, but Redux Toolkit is industry standard for complex apps.

### Why HeroUI?
- ✅ Modern, beautiful components out of the box
- ✅ Excellent accessibility (built on React Aria)
- ✅ Great TypeScript support
- ✅ Tailwind CSS integration
- ✅ Active development and community

**Alternative:** You could use shadcn/ui, MUI, or Chakra UI, but HeroUI offers the best balance of beauty, accessibility, and developer experience.

### Why React Hook Form?
- ✅ Best performance (minimal re-renders)
- ✅ Small bundle size (9kb)
- ✅ Easy validation integration
- ✅ Great developer experience
- ✅ Industry standard

**Alternative:** Formik is popular but has performance issues with large forms.

### Why Yup?
- ✅ Clear, readable validation schemas
- ✅ Reusable validation logic
- ✅ Great TypeScript inference
- ✅ Chain-able API

**Alternative:** Zod is gaining popularity and has better TypeScript support, feel free to switch!

## 🎨 Customization Guide

### Change Theme Colors

Edit `tailwind.config.ts` to customize colors:

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

### Customize Navbar/Footer

Edit `src/components/navbar.tsx` and `src/components/footer.tsx` with your:
- Brand name
- Logo
- Links
- Social media

### Change Layout Direction

The template is set to RTL (Arabic). To change to LTR, edit `src/app/layout.tsx`:

```tsx
<html lang="en" dir="ltr">  {/* Changed from "ar" and "rtl" */}
```

## 🔐 Authentication Flow

The template includes a complete authentication example:

1. **Login Form** (`LoginForm.tsx`)
   - Yup validation (min 3 chars, valid email)
   - Form state managed by React Hook Form
   - Dispatches login action to Redux

2. **Auth State** (`authSlice.ts`)
   - Stores user email
   - `isAuthenticated` flag
   - Login/logout actions

3. **Protected Content** (`page.tsx`)
   - Conditional rendering based on auth state
   - Shows login form or user info

**To integrate with a real backend:**

```tsx
// In LoginForm.tsx
const onSubmit = async (data: LoginFormData) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    dispatch(login(user));
  } catch (error) {
    // Handle error
  }
};
```

## 📖 Recommendations

### For Small Projects
- ✅ Keep Redux Toolkit (it's not overkill, even for small apps)
- ✅ Use the auth boilerplate as a reference
- ✅ Remove unused dependencies if needed

### For Large Projects
- ✅ Add `redux-persist` for state persistence
- ✅ Implement API layer (axios/fetch wrapper)
- ✅ Add protected routes middleware
- ✅ Set up CI/CD pipeline
- ✅ Add testing (Jest, React Testing Library)

### Best Practices Included
- ✅ **Type safety everywhere** - No `any` types
- ✅ **Custom hooks** - Reusable typed Redux hooks
- ✅ **Code organization** - Clear folder structure
- ✅ **Separation of concerns** - Components, state, types separated
- ✅ **Validation** - Schema-based, maintainable
- ✅ **Performance** - Minimal re-renders with React Hook Form

## 🚀 Deployment

### Deploy to Vercel (Recommended)

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

## 📝 License

MIT © [m0hamedesmail](https://github.com/m0hamedesmail)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

## 🔗 Links

- **NPM Package:** [next-hero-starter](https://www.npmjs.com/package/next-hero-starter)
- **GitHub:** [M0hamedEsmail/next-hero-starter](https://github.com/M0hamedEsmail/next-hero-starter)
- **Author:** [m0hamedesmail](https://github.com/m0hamedesmail)
- **Company:** [MERNCore.com](https://merncore.com)

## 💡 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI Documentation](https://heroui.com)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [React Hook Form Documentation](https://react-hook-form.com)
- [Yup Documentation](https://github.com/jquense/yup)

---

**Made with ❤️ by [m0hamedesmail](https://github.com/m0hamedesmail) - CEO & Founder of [MERNCore.com](https://merncore.com)**

**⭐ If this saved you time, give it a star on [GitHub](https://github.com/M0hamedEsmail/next-hero-starter)!**

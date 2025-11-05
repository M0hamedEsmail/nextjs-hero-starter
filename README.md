# Next Hero Starter 🚀

[![npm version](https://img.shields.io/npm/v/next-hero-starter.svg)](https://www.npmjs.com/package/next-hero-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Save hours of setup time!** Production-ready Next.js starter with HeroUI, Redux Toolkit, React Hook Form, Yup validation, and authentication boilerplate.

## 🎯 Why This Package?

Stop wasting hours configuring the same setup for every new Next.js project. This template provides everything you need to start building features immediately:

- ✅ Beautiful UI components (HeroUI)
- ✅ State management (Redux Toolkit)
- ✅ Form handling & validation (React Hook Form + Yup)
- ✅ TypeScript configuration
- ✅ Authentication boilerplate
- ✅ Best practices & clean architecture

## ✨ What's Included

| Technology | Why? |
|------------|------|
| **Next.js 16** | Latest React framework with SSR & optimization |
| **HeroUI** | Beautiful, accessible UI components out of the box |
| **Redux Toolkit** | 90% less boilerplate than classic Redux |
| **React Hook Form** | Best performance with minimal re-renders |
| **Yup** | Schema-based validation, clean and maintainable |
| **TypeScript** | Full type safety, no `any` types |
| **Tailwind CSS v4** | Rapid UI development |

### 🔐 Authentication Ready
- Login form with validation
- Redux auth state management
- Conditional rendering examples
- TypeScript interfaces included

## 🚀 Quick Start

```bash
# Install
npm install next-hero-starter

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## 📁 Project Structure

```
src/
├── app/          # Pages, layout, store, providers
├── components/   # LoginForm, navbar, footer
├── store/        # Redux slices
├── types/        # TypeScript interfaces
└── hooks/        # Custom typed Redux hooks
```

## 🛠️ Usage Examples

### Add Redux Slice

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
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
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

## 🎨 Customization

### Change to LTR (from RTL)
Edit `src/app/layout.tsx`:
```tsx
<html lang="en" dir="ltr">
```

### Customize Theme
Edit `tailwind.config.ts`:
```js
export default {
  theme: {
    extend: {
      colors: { primary: '#your-color' }
    }
  }
};
```

### Update Navbar/Footer
Edit `src/components/navbar.tsx` and `footer.tsx` with your branding.

## 🔐 Backend Integration

Replace the example auth with real API:

```tsx
const onSubmit = async (data) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  dispatch(login(user));
};
```

## 📖 Best Practices Included

- ✅ Full TypeScript type safety
- ✅ Custom typed Redux hooks
- ✅ Clean folder structure
- ✅ Separation of concerns
- ✅ Schema-based validation
- ✅ Performance optimized

## 🚀 Deploy

```bash
# Vercel (Recommended)
npm install -g vercel
vercel

# Or build for production
npm run build
npm start
```

## 📝 License

MIT © [m0hamedesmail](https://github.com/m0hamedesmail)

## 🔗 Links

- **NPM:** [next-hero-starter](https://www.npmjs.com/package/next-hero-starter)
- **GitHub:** [M0hamedEsmail/next-hero-starter](https://github.com/M0hamedEsmail/next-hero-starter)
- **Author:** [m0hamedesmail](https://github.com/m0hamedesmail) - CEO & Founder of [MERNCore.com](https://merncore.com)

## 💡 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [HeroUI Docs](https://heroui.com)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [React Hook Form Docs](https://react-hook-form.com)

---

**Made with ❤️ by [m0hamedesmail](https://github.com/m0hamedesmail)**

**⭐ Star on [GitHub](https://github.com/M0hamedEsmail/next-hero-starter) if this saved you time!**

# Next Hero Starter 🚀

[![npm version](https://img.shields.io/npm/v/next-hero-starter.svg)](https://www.npmjs.com/package/next-hero-starter)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

> **Save hours of setup!** Production-ready Next.js with HeroUI, Redux Toolkit, React Hook Form, Yup, and auth boilerplate.

## Why?

Skip repetitive setup. Start building features immediately with:

✅ HeroUI components • Redux Toolkit • React Hook Form + Yup • TypeScript • Auth boilerplate • Best practices

## Stack

| Tech | Why |
|------|-----|
| **Next.js 16** | SSR & optimization |
| **HeroUI** | Beautiful, accessible components |
| **Redux Toolkit** | 90% less boilerplate |
| **React Hook Form** | Minimal re-renders |
| **Yup** | Schema validation |
| **TypeScript** | Type safety |
| **Tailwind v4** | Rapid styling |

## Quick Start

```bash
npm install next-hero-starter
npm run dev
```

## Structure

```
src/
├── app/         # Pages, store, providers
├── components/  # LoginForm, navbar, footer
├── store/       # Redux slices
├── types/       # TypeScript interfaces
└── hooks/       # Typed Redux hooks
```

## Examples

**Redux Slice**
```tsx
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
```

**Form + Validation**
```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function MyForm() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return <form onSubmit={handleSubmit(data => console.log(data))} />;
}
```

**Use Redux**
```tsx
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { login } from "@/store/authSlice";

const { isAuthenticated, user } = useAppSelector(state => state.auth);
const dispatch = useAppDispatch();
```

## Customize

**LTR:** Edit `src/app/layout.tsx` → `<html lang="en" dir="ltr">`  
**Theme:** Edit `tailwind.config.ts`  
**Branding:** Edit `navbar.tsx` & `footer.tsx`

## API Integration

```tsx
const onSubmit = async (data) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  dispatch(login(await res.json()));
};
```

## Deploy

```bash
vercel        # Recommended
npm run build # Production
```

## Links

- **NPM:** [next-hero-starter](https://www.npmjs.com/package/next-hero-starter)
- **GitHub:** [M0hamedEsmail/next-hero-starter](https://github.com/M0hamedEsmail/next-hero-starter)
- **Author:** [m0hamedesmail](https://github.com/m0hamedesmail) - CEO & Founder of [MERNCore.com](https://merncore.com)

**Docs:** [Next.js](https://nextjs.org/docs) • [HeroUI](https://heroui.com) • [Redux Toolkit](https://redux-toolkit.js.org) • [React Hook Form](https://react-hook-form.com)

---

**Made with ❤️ by [m0hamedesmail](https://github.com/m0hamedesmail) • ⭐ [Star on GitHub](https://github.com/M0hamedEsmail/next-hero-starter)**

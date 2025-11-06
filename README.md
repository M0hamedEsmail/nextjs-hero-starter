<div align="center">
  <h1>🚀 nextjs-hero-starter</h1>
  <p><strong>Scaffold production-ready Next.js + HeroUI + Redux frontends in seconds</strong></p>
  
  [![npm version](https://img.shields.io/npm/v/nextjs-hero-starter.svg?style=flat-square)](https://www.npmjs.com/package/nextjs-hero-starter)
  [![npm downloads](https://img.shields.io/npm/dm/nextjs-hero-starter.svg?style=flat-square)](https://www.npmjs.com/package/nextjs-hero-starter)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
  [![Node.js Version](https://img.shields.io/node/v/nextjs-hero-starter.svg?style=flat-square)](https://nodejs.org)
  
  <p>
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-features">Features</a> •
    <a href="#-whats-included">What's Included</a> •
    <a href="#-customization">Customization</a>
  </p>
</div>

---

## 🎯 Why nextjs-hero-starter?

Stop wasting **hours** setting up the same frontend infrastructure. **nextjs-hero-starter** generates a complete, production-ready Next.js application with HeroUI components, Redux Toolkit state management, authentication, and best practices baked in.

**Perfect for:**
- 🏃‍♂️ **Hackathons & MVPs** - Start building features in minutes
- 📚 **Learning Full-Stack Development** - Study modern React patterns
- 🎓 **Teaching Frontend Architecture** - Production-grade examples
- 🚀 **Rapid Prototyping** - Professional setup instantly
- 💼 **Freelance Projects** - Impress clients with quality code

---

## ✨ Features

<table>
<tr>
<td width="33%" valign="top">

### 🎨 Modern UI
- **HeroUI Components** - Beautiful, accessible UI library
- **Tailwind CSS v4** - Utility-first styling
- **Dark Mode** - Built-in theme switching
- **Responsive Design** - Mobile-first approach

</td>
<td width="33%" valign="top">

### ⚡ State Management
- **Redux Toolkit** - 90% less boilerplate
- **Typed Hooks** - Full TypeScript inference
- **Auth Boilerplate** - Login/logout flow included
- **DevTools** - Redux DevTools integration

</td>
<td width="33%" valign="top">

### 🛠️ Developer Experience
- **TypeScript** - Full type safety
- **React Hook Form** - Performant forms
- **Yup Validation** - Schema-based validation
- **ESLint + Prettier** - Code quality tools
- **Clean Architecture** - MVC-inspired structure

</td>
</tr>
</table>

---

## 🚀 Quick Start

Get your Next.js app running in **60 seconds**:

```bash
# Create your project with npx (no installation needed)
npx create-nextjs-hero-starter my-awesome-app

# Navigate to your project
cd my-awesome-app

# Install dependencies (if not auto-installed)
npm install

# Start developing
npm run dev
```

**That's it!** Your app is now running at `http://localhost:3000` 🎉

---

## 📦 Installation & Usage

### Option 1: Use with npx (Recommended)

No installation required - just run:

```bash
npx create-nextjs-hero-starter my-project-name
```

### Option 2: Install Globally

```bash
npm install -g nextjs-hero-starter
create-nextjs-hero-starter my-project-name
```

### Available CLI Options

```bash
create-nextjs-hero-starter <project-name> [options]

Options:
  --no-install    Skip npm install
  --git           Initialize git repository
  --verbose       Show detailed logs
  -v, --version   Output version number
  -h, --help      Display help
```

### Example Usage

```bash
# Basic usage
npx create-nextjs-hero-starter my-app

# Skip dependency installation
npx create-nextjs-hero-starter my-app --no-install

# With git initialization
npx create-nextjs-hero-starter my-app --git

# Verbose output
npx create-nextjs-hero-starter my-app --verbose
```

---

## 📁 What's Included

### Complete Project Structure

```
your-project/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # Main page with auth example
│   │   ├── layout.tsx    # Root layout + providers
│   │   ├── store.ts      # Redux store configuration
│   │   ├── providers.tsx # Redux & HeroUI providers
│   │   └── globals.css   # Global styles
│   │
│   ├── components/       # Reusable components
│   │   ├── LoginForm.tsx # Form with validation
│   │   ├── navbar.tsx    # Navigation bar
│   │   └── footer.tsx    # Footer component
│   │
│   ├── store/            # Redux slices
│   │   └── authSlice.ts  # Authentication state
│   │
│   ├── types/            # TypeScript definitions
│   │   └── auth.ts       # Auth interfaces
│   │
│   └── hooks/            # Custom hooks
│       └── useRedux.ts   # Typed Redux hooks
│
├── public/               # Static assets
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind config
├── next.config.ts        # Next.js config
└── README.md             # Project documentation
```

### 🔋 Tech Stack & Dependencies

**Core Framework:**
- **Next.js** `16.0.1` - Latest React framework with App Router
- **React** `19.2.0` - Latest React with new features
- **TypeScript** `^5` - Full type safety

**UI & Styling:**
- **HeroUI** `^2.8.5` - Beautiful, accessible component library
- **Tailwind CSS** `^4` - Utility-first CSS framework

**State Management:**
- **Redux Toolkit** `^2.10.1` - Modern Redux with less boilerplate
- **React Redux** `^9.2.0` - React bindings for Redux

**Forms & Validation:**
- **React Hook Form** `^7.66.0` - Performant form management
- **Yup** `^1.7.1` - Schema validation
- **@hookform/resolvers** `^5.2.2` - Integration layer

---

## 🎯 Use Cases

Perfect for building:

- 🛍️ **E-commerce Frontends** - Product catalogs, shopping carts, checkout flows
- 📱 **SaaS Applications** - Dashboards, user management, analytics
- 💬 **Social Platforms** - User profiles, feeds, messaging interfaces
- 📰 **Blog/CMS Frontends** - Content display, admin panels
- 🎓 **Learning Platforms** - Course interfaces, student portals
- 🏢 **Business Applications** - CRM interfaces, admin dashboards
- 🎮 **Gaming Frontends** - Player dashboards, leaderboards

---

## 🛡️ Best Practices Included

| Feature | Implementation |
|---------|---------------|
| 🔐 **Type Safety** | Full TypeScript, strict mode enabled |
| 🎯 **Custom Hooks** | Typed Redux hooks with inference |
| 📁 **Code Organization** | Clean folder structure, MVC-inspired |
| 🔄 **Separation of Concerns** | Components, state, types separated |
| ✅ **Validation** | Schema-based with Yup |
| ⚡ **Performance** | Minimal re-renders with React Hook Form |
| 🎨 **Styling** | Utility-first with Tailwind CSS |
| 🌙 **Dark Mode** | Built-in theme support |

---

## 🔧 Customization

### Update Theme Colors

Edit `tailwind.config.ts` in your generated project:

```ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-brand-color',
      },
    },
  },
};
```

### Add New Redux Slice

Create a new file in `src/store/`:

```ts
// src/store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: { profile: null as User | null },
  reducers: {
    setProfile(state, action: PayloadAction<User>) {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
```

### Create Forms with Validation

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Button } from "@heroui/react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Input {...register("email")} errorMessage={errors.email?.message} />
      <Input {...register("password")} type="password" errorMessage={errors.password?.message} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

---

## 📖 Available Scripts

After generating your project:

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build optimized production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🚀 Deploy

### Vercel (Recommended)

The easiest way to deploy Next.js:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Other Platforms
- **Netlify:** Connect your Git repository
- **AWS Amplify:** Use the Amplify Console
- **Railway:** Deploy with one command
- **Digital Ocean App Platform:** Deploy from GitHub

---

## 📊 What You Get Out of the Box

| Feature | Next Hero Starter | Create Next App | Manual Setup |
|---------|-------------------|-----------------|--------------|
| ✅ Next.js Setup | ✓ | ✓ | ✓ |
| ✅ TypeScript | ✓ | ✓ | ✓ |
| ✅ Tailwind CSS | ✓ | ✓ | ✓ |
| ✅ UI Component Library | ✓ HeroUI | ❌ | ❌ |
| ✅ Redux Toolkit | ✓ | ❌ | ❌ |
| ✅ Form Validation | ✓ | ❌ | ❌ |
| ✅ Auth Boilerplate | ✓ | ❌ | ❌ |
| ✅ Typed Hooks | ✓ | ❌ | ❌ |
| ✅ Dark Mode | ✓ | ❌ | ❌ |
| ⏱️ Setup Time | **60 seconds** | 5 minutes | **Hours** |

---

## 🆚 Why Choose nextjs-hero-starter?

<table>
<tr>
<th width="25%">Manual Setup</th>
<th width="25%">Create Next App</th>
<th width="25%">Other Boilerplates</th>
<th width="25%">nextjs-hero-starter ⭐</th>
</tr>
<tr>
<td>

❌ Hours of setup

❌ No components

❌ No state management

❌ No forms

❌ No validation

</td>
<td>

⚠️ Basic setup

✅ Next.js configured

❌ No UI library

❌ No state

❌ No auth

</td>
<td>

⚠️ Overengineered

⚠️ Too opinionated

❌ Steep learning curve

⚠️ Hard to modify

</td>
<td>

✅ 60-second setup

✅ Production-ready

✅ UI library included

✅ State management

✅ Forms + validation

✅ Auth boilerplate

✅ Easy to customize

✅ Well documented

</td>
</tr>
</table>

---

## 🤝 Contributing

We welcome contributions!

1. 🐛 **Report bugs** - [Open an issue](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues)
2. 💡 **Suggest features** - Share your ideas
3. 🔧 **Submit PRs** - Fork, code, and create pull requests
4. ⭐ **Star the repo** - Show your support

---

## 📄 License

**MIT** © [m0hamedesmail](https://github.com/m0hamedesmail)

Free to use for personal and commercial projects.

---

## 💬 Support & Community

Need help? We've got you covered:

- 📚 **Documentation:** This README + generated project README
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/M0hamedEsmail/nextjs-hero-starter/discussions)
- ⭐ **Star us on GitHub** to stay updated

---

## 🗺️ Roadmap

Coming soon:

- [ ] API integration examples
- [ ] Protected routes example
- [ ] More form components
- [ ] Additional Redux slices
- [ ] Testing setup (Jest + React Testing Library)
- [ ] Storybook integration
- [ ] i18n support
- [ ] PWA configuration

---

## 🔗 Links

- **NPM Package:** [nextjs-hero-starter](https://www.npmjs.com/package/nextjs-hero-starter)
- **GitHub Repository:** [M0hamedEsmail/nextjs-hero-starter](https://github.com/M0hamedEsmail/nextjs-hero-starter)
- **Author:** [m0hamedesmail](https://github.com/m0hamedesmail)
- **Company:** [MERNCore.com](https://merncore.com)

---

## 💡 Documentation Resources

- [Next.js Docs](https://nextjs.org/docs) - Next.js framework documentation
- [HeroUI Docs](https://heroui.com) - HeroUI component library
- [Redux Toolkit Docs](https://redux-toolkit.js.org) - State management
- [React Hook Form Docs](https://react-hook-form.com) - Form handling
- [Tailwind CSS Docs](https://tailwindcss.com) - Styling utilities

---

<div align="center">

### ⭐ If nextjs-hero-starter helped you, please star the repo! ⭐

**Made with ❤️ by [m0hamedesmail](https://github.com/m0hamedesmail) - CEO & Founder of [MERNCore.com](https://merncore.com)**

[Report Bug](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues) · [Request Feature](https://github.com/M0hamedEsmail/nextjs-hero-starter/issues) · [Contribute](https://github.com/M0hamedEsmail/nextjs-hero-starter/pulls)

</div>

## প্রজেক্ট ওভারভিউ 

এই প্রজেক্টটি একটি Online Learning / Courses ফ্রন্ট-এন্ড ওয়েব অ্যাপ—ইউজাররা কোর্স ব্রাউজ করতে, ডিটেইল দেখতে এবং ইন্টারঅ্যাক্ট করতে পারে। এই প্রজেক্টটি Single Page Application হিসেবে ডেপ্লয় করা আছে ।
[![GitHub Streak](https://streak-stats.demolab.com/?user=tahmidman20&theme=dark&border_radius=4)](https://github.com/touhidcodes)

## মেইন টেকনোলজি 

React.js — SPA UI তৈরি

React Router — Routing system

Tailwind CSS — Responsive UI

Firebase Authentication — Login / Signup / User Management

Netlify — Deployment

JavaScript (ES6+)


## মেইন ফিচার 

হোম পেজ: হাইলাইটেড কোর্স/ব্যানার/ক্যাটাগরি।

কোর্স তালিকা : সার্চ ও ফিল্টার করে কোর্স দেখা।

কোর্স ডিটেইল পেজ: কোর্স বর্ণনা, পাঠ্যক্রম, রিভিউ ইত্যাদি।

রেসপন্সিভ ডিজাইন: ডেক্সটপ ও মোবাইলে ঠিকঠাক কাজ করে।

রাউট প্রটেকশন ): লগইন করা ব্যবহারকারীর জন্য ডিস্কাউন্ট/ড্যাশবোর্ড।

ড্যাশবোর্ড/প্রাইভেট রউট (ইনস্ট্রাক্টর বা ইউজার হিসাব অনুযায়ী)।

সহজ UI/UX এবং টেমপ্লেট-ভিত্তিক লেআউট।

## লোকাল মেশিনে প্রজেক্ট রান

### কমান্ড প্রম্পটে নিচের কমান্ড চালাতে হবে:
git clone <REPO_URL>
cd <PROJECT_FOLDER_NAME>

### React প্রজেক্টের সমস্ত dependency ইনস্টল করতে হবে
npm install

### Firebase Environment Variables সেট করতে হবে
প্রজেক্টের রুট ফোল্ডারে একটি .env ফাইল তৈরি করুন এবং Firebase কনফিগগুলো যোগ করুন:

### ডেভেলপমেন্ট সার্ভার চালু করতে হবে
npm run dev

## Dependencies
#### React 
react
react-dom
react-router-dom

#### UI & Styling
tailwindcss

 #### Animation 
framer-motion (optional)

#### react-icons

## firebase
Authentication






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

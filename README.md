<div align="center">

# 🧬 شجره‌نامه ژنتیکی · Pedigree Visualizer

**یک ابزار تعاملی و زیبا برای رسم شجره‌نامه‌ی پزشکی و ژنتیکی — کاملاً داخل مرورگر.**

*An interactive, glassmorphic pedigree (family-tree) builder for medical genetics — runs entirely in the browser.*

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)
![D3.js](https://img.shields.io/badge/D3.js-7-F9A03C?logo=d3dotjs&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-22c55e)

</div>

---

## ✨ چرا این پروژه؟ / Why?

این اپ برای **مشاوره‌ی ژنتیک، آموزش و پژوهش** ساخته شده. می‌توانید یک خانواده را با همه‌ی جزئیات بالینی‌اش بسازید، علائم استاندارد ژنتیک پزشکی را ببینید، ریسک ناقل بودن را تخمین بزنید و خروجی تمیز برای چاپ یا اشتراک‌گذاری بگیرید — بدون نصب هیچ چیزی و بدون ارسال داده به سرور.

Built for **genetic counseling, teaching, and research**: model a family with full clinical detail, see standard medical-genetics notation, estimate carrier risk, and export print-ready output — no install, no server, your data never leaves the browser.

---

## 🎯 امکانات / Features

| | |
|---|---|
| 🖱️ **ساخت تعاملی** | افزودن/حذف فرد، والد، همسر و فرزند با کلیک یا منوی راست‌کلیک |
| 🧬 **علائم استاندارد ژنتیک** | مربع (مرد)، دایره (زن)، لوزی (نامشخص) + مبتلا / ناقل / جهش‌دار / فوت‌شده |
| 📐 **چیدمان خودکار** | موتور layout اختصاصی با fallback داخلی؛ خط‌های ازدواج، نسب و خواهر-برادری خودکار رسم می‌شوند |
| ⚠️ **تخمین ریسک ناقل** | محاسبه‌ی تقریبی ریسک بر اساس وضعیت والدین (آموزشی/نمایشی) |
| 🔍 **جستجو و آمار زنده** | لیست افراد با جستجوی نام + شمارش نسل‌ها، مبتلایان و ناقلان |
| ↩️ **Undo / Redo کامل** | تاریخچه‌ی کامل با میان‌بر صفحه‌کلید |
| 🔭 **زوم، پن و Fit-to-view** | حرکت روی بوم با موس و scroll |
| 💾 **ورود و خروجی** | Import از JSON · Export به **JSON / CSV / SVG / PNG** |
| 🎨 **رابط کاربری Glassmorphism** | طراحی شیشه‌ای مدرن، راست‌چین (RTL) و واکنش‌گرا |

---

## 🩺 راهنمای علائم / Genetic Notation

| نماد | معنی | Meaning |
|:---:|---|---|
| ⬜ | مرد | Male |
| ⚪ | زن | Female |
| ◆ | جنسیت نامشخص | Unknown sex |
| 🔴 | مبتلا | Affected |
| 🟠 | ناقل | Carrier |
| 🔵 | جهش‌دار (تست مثبت) | Mutation carrier |
| ╲ | خط مورب = فوت‌شده | Deceased |

---

## 🚀 شروع به کار / Getting Started

نیاز: **Node.js 18+**

```bash
# نصب وابستگی‌ها
npm install

# اجرای محیط توسعه
npm run dev

# ساخت نسخه‌ی production
npm run build

# پیش‌نمایش build
npm run preview
```

سپس آدرسی که Vite در ترمینال نشان می‌دهد (معمولاً `http://localhost:5173`) را باز کنید.

---

## ⌨️ میان‌برهای صفحه‌کلید / Shortcuts

| کلید | عملکرد |
|---|---|
| `Ctrl/⌘ + Z` | بازگردانی (Undo) |
| `Ctrl/⌘ + Shift + Z` یا `Ctrl + Y` | تکرار (Redo) |
| **راست‌کلیک روی فرد** | منوی سریع: افزودن مادر/پدر/همسر/فرزند، حذف |
| **Scroll** روی بوم | زوم |
| **درگ** روی بوم | جابه‌جایی نما (Pan) |

---

## 🧱 تکنولوژی‌ها / Tech Stack

- ⚛️ **React 18** + **Vite 7** (با `@vitejs/plugin-react-swc`)
- 🎨 **Tailwind CSS** برای استایل گلَسمورفیسم
- 📊 **D3.js** · **dagre / dagre-d3** · **elkjs** برای کمک به چیدمان گراف
- 🗂️ **Dexie** (IndexedDB) برای ذخیره‌ی محلی
- 🖼️ **html2canvas** برای خروجی تصویری
- ✨ **lucide-react** برای آیکون‌ها

---

## 📁 ساختار پروژه / Project Structure

```
pedigree-visualizer/
├── index.html                  # نقطه‌ی ورود Vite
├── src/
│   ├── main.jsx                # bootstrap اپ
│   ├── GeneticPedigreeApp.jsx  # ⭐ کامپوننت اصلی (UI + state + export)
│   ├── pedigreeLayout.js       # موتور چیدمان شجره‌نامه
│   └── index.css               # استایل‌های Tailwind + انیمیشن‌ها
├── public/                     # کتابخانه‌ی pedigreejs و asset‌ها
├── tailwind.config.js
└── vite.config.js
```

> اگر فایل `public/pedigreejs/pedigreejs.v2.1.0-rc7.min.js` بارگذاری شود، اپ از موتور PedigreeJS استفاده می‌کند؛ در غیر این صورت به موتور چیدمان داخلی برمی‌گردد.

---

## ⚠️ یادداشت بالینی / Clinical Note

تخمین «ریسک ناقل بودن» در این اپ صرفاً **آموزشی و نمایشی** است و جایگزین مشاوره‌ی ژنتیک حرفه‌ای یا تست‌های تشخیصی نیست.

The carrier-risk estimate is **educational/illustrative only** and is **not** a substitute for professional genetic counseling or diagnostic testing.

---

## 📜 License

MIT — آزادانه استفاده، تغییر و به‌اشتراک‌گذاری کنید.

<div align="center">

ساخته‌شده با ❤️ برای جامعه‌ی ژنتیک پزشکی

</div>

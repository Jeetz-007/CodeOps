# 🚀 CodeOps – Single Page Application

A modern, responsive, and performance-optimized **Single Page Application (SPA)** built with **React + React Router DOM**.  
Designed as a professional portfolio project showcasing routing, API integration, UI design, and frontend architecture.

CodeOps is a fictional freelancing agency platform where:
- Developers explore available job openings  
- Businesses connect with skilled talent  
- Users can explore services & contact the team  

---

## ✨ Features

### 🧭 **SPA Routing**
Built using `react-router-dom` (v6):
- `/` – Home  
- `/about` – About  
- `/careers` – Careers Listing  
- `/careers/:id` – Dynamic Career Details Page  
- `/contact` – Contact Form  
- `*` – Not Found  

---

### 🔥 **Dynamic Careers API**
Careers page fetches data from a hosted JSON API: https://jeetz-007.github.io/Careers-API/careers.json
Includes:
- Job title  
- Role type (Full-time / Internship)  
- Experience  
- Location  
- Skills required  
- Apply link  

---

### 🎨 **Premium UI & Styling**
- Modern dark theme  
- Neon green accent styling (#00ffb3)  
- Smooth hover animations  
- Sticky responsive navbar  
- Mobile-friendly hamburger menu  
- Professional hero section  
- Clean typography & spacing  
- Skill chips + glowing buttons  

---

### 📱 **Fully Responsive**
- Desktop, tablet, and mobile optimized  
- Collapsible hamburger nav on smaller screens  
- Auto-adjusting layout for content sections  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|----------|
| **React** | UI rendering |
| **React Router DOM** | SPA routing & loaders |
| **CSS3** | Custom styling, animations |
| **Vite** | Fast development & bundling |
| **GitHub Pages / Vercel** | (For deployment) |

---

## 📂 Project Structure
src/
├─ components/
│ ├─ Layout.jsx
│ ├─ Footer.jsx
│
├─ pages/
│ ├─ Home.jsx
│ ├─ About.jsx
│ ├─ Careers.jsx
│ ├─ CareerDetails.jsx
│ ├─ Contact.jsx
│ ├─ NotFound.jsx
│
├─ style/
│ ├─ Layout.css
│ ├─ Home.css
│ ├─ About.css
│ ├─ Careers.css
│ ├─ CareerDetails.css
│ ├─ Contact.css
│ └─ NotFound.css
│
├─ assets/
│ └─ images, logos, etc.
│
├─ App.jsx
└─ main.jsx


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/codeops-spa.git
cd codeops-spa
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run development server
```bash
npm run dev
```

### 4️⃣ Build for production
```bash
npm run build
```
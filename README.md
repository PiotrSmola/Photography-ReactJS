# 📷 Photography Services Website (React + Vite)

🚀 A modern photography services website built with **React 19** and **Vite**.  
The project provides a fully responsive **portfolio and booking platform** for professional photographers.

---

## 🌟 Features

✅ Fully responsive design  
✅ Dynamic testimonials slider  
✅ Interactive service sections  
✅ Responsive Gallery with lightbox preview  
✅ Elegant animations (reveal on scroll)  
✅ Modal booking form  
✅ Styled with plain CSS

---

## 📋 Requirements

Before running the project, ensure you have the following installed:

- **Node.js** (version 18 or newer) → [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning the repository)

---

## 🚀 How to Run

### **1️⃣ Automatic Setup (Recommended)**
Use the provided startup script for easy setup:

#### 🖥 **Windows (cmd or PowerShell)**
```
start.bat
```

#### 🐧 Linux / macOS (Terminal)
```
chmod +x start-app.sh
./start.sh
```

#### This will:

1. Install dependencies (if missing)
2. Start the development server

### **2️⃣ Manual Setup**
If you prefer manual installation, follow these steps:
```
# 1. Clone the repository
git clone https://github.com/your-username/your-repo.git

# 2. Navigate into the project folder
cd your-repo

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

#### By default, the app runs on http://localhost:5173/.

## 📌 How It Works

### 1️⃣ Navigation & Sections
- The app consists of sections: **Home, About, Services, Team, Testimonials, Contact**.
- Smooth scroll and animations make transitions seamless.

### 2️⃣ Testimonials Slider
- The slider automatically cycles through reviews.
- Uses `setInterval()` to change slides every **3 seconds**.
- Resets smoothly to the first slide after the last.

### 3️⃣ Booking Modal
- Clicking the **"Hire Us Now"** button opens a modal.
- Users enter their **name and phone number** for a callback request.
- Simple form validation included.

### 4️⃣ Reveal on Scroll
- Sections smoothly appear as you scroll down.
- Implemented via a custom React hook (`useRevealOnScroll`).

## 📸 Gallery / Portfolio

The **Gallery** section serves as the portfolio for our photography services.  
It displays images in a responsive 4-column grid:

- **Initially, 8 images** are shown.
- Clicking the **"See More"** button loads an additional **4 images** per click.
- Images are dynamically generated based on a total count and use the naming format `gallery{number}.jpg`.
- All images are styled with `object-fit: cover` to ensure they fill their grid cell perfectly, even if they have different aspect ratios.
- Clicking an image opens a **Lightbox** for a full-size preview.

👉 This section effectively showcases our featured photoshoots and acts as our portfolio.


## 📸 Screenshots (Coming Soon)
![Navbar and Banner](https://github.com/user-attachments/assets/5f23674c-6332-499a-a046-0e467344e392)

 


<h1 align="center">✨ Ahmad Siddique — Personal Portfolio ✨</h1>

<p align="center">
  <em style="font-size: 18px;">
    This portfolio does exactly what every great portfolio does:
    <br/>
    <span style="color: #FFBF00; font-weight: 700;">( SHOWCASE )</span>
  </em>
</p>

<p align="center">
  <a href="https://hackclub.com" target="_blank">
    <img src="https://img.shields.io/badge/HackClub-Built%20for%20the%20Community-ec3750?style=for-the-badge" />
  </a>
  <a href="https://ahmadsiddique-dev.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Portfolio-Visit%20Now-2ea44f?style=for-the-badge" />
  </a>
</p>

---

## 📖 About
This is more than just a static site—it's a full-stack application designed to showcase my skills, manage communication, and protect user data. Built from scratch without templates, it represents my journey of learning by doing.

---

## 🎨 Preview


| **🏠 Home Page** | **📦 Projects Page** |
|:---:|:---:|
| ![Home Page](https://res.cloudinary.com/dufl96qnz/image/upload/v1763843473/Screenshot_2025-11-23_012325_zigcdr.png) | ![Projects](https://res.cloudinary.com/dufl96qnz/image/upload/v1763843473/Screenshot_2025-11-23_012706_bijji7.png) |

| **💬 Contact & Status** | **🛡️ Admin Dashboard** |
|:---:|:---:|
| ![Contact](https://res.cloudinary.com/dufl96qnz/image/upload/v1763843473/Screenshot_2025-11-23_013000_vhshom.png) | ![Dashboard](https://res.cloudinary.com/dufl96qnz/image/upload/v1763843473/Screenshot_2025-11-23_013026_zkeyrv.png) |

---

## 🚀 Technologies Used

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat&logo=reacthookform&logoColor=white)

### Backend & Database
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)

---

## ⭐ Key Features

### 🔒 The "Good Part" (Security & Admin)
- **Maintainer Dashboard:** A private route allowing me to manage content and messages easily.
- **Secure Authentication:** Uses **JWT (JSON Web Tokens)** and **HttpOnly cookies** to prevent XSS attacks and ensure secure access.
- **Message Control:** The admin can mark messages as `seen` or `delete` them entirely.

### 👤 User Experience
- **Public Message Status:** Users can track the status of their messages (Sent/Seen) on a public page.
- **Privacy First:** To protect user privacy on the public tracker, message content is masked with `****`, showing only the status.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.

---

## 🧭 The Journey

Everything began with a single command:
```bash
npm create vite@latest
```
### The Frontend
I spent most of my time writing the code myself. While it's easy to copy-paste, **Hack Club** encourages us to build by ourselves to truly learn. I used ChatGPT sparingly for debugging, but the logic is home-grown.

### The Backend Decision
When the frontend was done, I faced a choice: use a simple Google Script for the contact form or build my own solution. I thought, *"Why not store it in my own database?"*

I spun up a backend using **Node.js** and **Express.js** and connected it to **MongoDB** (my go-to for its flexibility and free tier).

### The "Idea" & Privacy Challenge
I wanted users to know if I had read their messages. I built a status page, but I immediately realized a problem: **Privacy**. I couldn't just display everyone's private messages publicly.

**The Solution:** I masked the message content (replacing text with `****`) while keeping the status visible. This led to the creation of the **Admin Dashboard**, where I can securely log in to read the actual content and update the status.

---

## 🔮 In Future (Roadmap)
There is always room for improvement. Here is what I plan to add next:

- 📧 **Email Notifications:** Integrate `Nodemailer` to get an email alert whenever a recruiter or user sends a message.
- 🌗 **Dark/Light Mode Toggle:** Improve accessibility by adding a theme switcher.
- 📝 **Blog Section:** A dynamic blog managed via the dashboard to share my coding tutorials and updates.
- 🛡️ **Rate Limiting:** Add `express-rate-limit` to the backend to prevent spam attacks on the messaging API.

---

## 🛠️ Local Installation
Want to run this locally?

1. **Clone the repo**
   ```bash
   git clone https://github.com/ahmadsiddique-dev/personal-portfolio
   ```
   **Install Dependencies (Frontend & Backend)**
   ```bash
   # For Frontend:
   npm install
   npm run dev
   ```
   ```bash
   # For Backend:
   cd personal-portfolio/backend
   npm install
   node --watch index.js or nodemon index.js
   ```

    **Setup Environment Variables Create a .env file in the server folder:**
    
    variables are mention in the `.sample.env` file. So you can see over there

    ```bash
    # Start Backend
    npm start
    ```

    ```bash
    # Start Frontend
    npm run dev 
    ```
    Open your browser and navigate to `http://localhost:5173` to see the portfolio. 

## 🤝 _Contributing_

Feel free to fork the repository and submit pull requests. Whether it's fixing bugs, improving documentation, or adding new features, your contributions are welcome!
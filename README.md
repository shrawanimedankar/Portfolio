# 💻 Personal Portfolio

A modern, responsive personal portfolio website built using **React.js** to showcase my skills, projects, certification. The portfolio includes multiple pages with smooth navigation and a functional contact form that sends messages directly to email.

## 🌐 Live Demo:

https://shrawanimedankar.onrender.com

## Features

- Responsive and mobile-friendly design
- Multi-page routing using React Router
- Dynamic projects section with detailed project pages
- Contact form integrated with EmailJS
- Clean UI with reusable components
- Fast and optimized performance

## Tech Stack

- React.js
- EmailJS
- JavaScript (ES6+)
- HTML5
- CSS3

## EmailJS Setup

1. Create an account on EmailJS
2. Create an Email Service and Email Template
3. Get the following credentials:
   - Service ID
   - Template ID
   - Public Key
4. Add these keys inside your Contact component.

```javascript
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formData,
  "YOUR_PUBLIC_KEY",
);
```

## Future Improvements

- Add dark/light theme toggle
- Add admin panel to manage projects dynamically
- Add testimonials section

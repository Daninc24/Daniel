# Daniel Mailu Ngila - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: CSS Transitions
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/
│   │   ├── ecom.png (E-commerce project image)
│   │   ├── Daniel.JPG (Profile image)
│   │   └── projects/ (Add your project images here)
│   ├── components/
│   │   └── Navigation.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with cyan/red/black/white color scheme
- **Smooth Navigation**: Fixed navigation with smooth scrolling
- **Project Showcase**: Card-based layout for project display with images
- **Skills Visualization**: Progress bars and categorized skills
- **Contact Section**: Email integration and social media links

## 🖼️ Adding Project Images

### How to Add Project Images:

1. **Place your images** in the `src/assets/` folder
2. **Import the image** in `src/pages/Projects.jsx`:
   ```javascript
   import taskManagerImage from '../assets/task-manager.png';
   import portfolioImage from '../assets/portfolio.png';
   import blogImage from '../assets/blog.png';
   ```

3. **Update the projects array** in `src/pages/Projects.jsx`:
   ```javascript
   const projects = [
     {
       id: 1,
       title: "E-Commerce Platform",
       image: ecomImage, // Already added
       // ... other properties
     },
     {
       id: 2,
       title: "Task Management App",
       image: taskManagerImage, // Add your image here
       // ... other properties
     },
     // ... more projects
   ];
   ```

### Image Requirements:
- **Format**: PNG, JPG, or WebP
- **Size**: Recommended 800x600px or 1200x800px
- **Aspect Ratio**: 4:3 or 16:9 works best
- **File Size**: Keep under 500KB for fast loading

### Current Project Images:
- ✅ **E-Commerce Platform**: `ecom.png` (already added)
- 🔄 **Task Management App**: Add `task-manager.png`
- 🔄 **Portfolio Website**: Add `portfolio.png`
- 🔄 **Blog Platform**: Add `blog.png`

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/pages/Home.jsx` - Update name and tagline
- `src/pages/About.jsx` - Update bio and story
- `src/pages/Projects.jsx` - Add your actual projects and images
- `src/pages/Skills.jsx` - Update skills and proficiency levels
- `src/pages/Contact.jsx` - Update email and social links

### Styling
- Colors: Update the cyan/red/black/white theme in `tailwind.config.js`
- Layout: Modify component classes in each page file
- Animations: Add Framer Motion for enhanced animations

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- GitHub Pages
- Firebase Hosting

## 📧 Contact

- **Email**: danmailur8@gmail.com
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Daniel Mailu Ngila

# Senior Portfolio Website

This is a modern portfolio website built for a Senior Frontend / Full Stack Developer using Next.js 14, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion animations. The website features a dark professional theme and includes various sections to showcase skills, experience, and projects.

## Project Structure

```
senior-portfolio-nextjs
├── app
│   ├── layout.tsx
│   ├── head.tsx
│   ├── page.tsx
│   └── api
│       └── contact
│           └── route.ts
├── components
│   ├── ui
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Avatar.tsx
│   │   └── ThemeToggle.tsx
│   ├── sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── FeaturedProjects.tsx
│   │   └── Contact.tsx
│   └── MotionWrapper.tsx
├── data
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── lib
│   ├── api.ts
│   └── fetcher.ts
├── hooks
│   └── useTheme.ts
├── types
│   └── index.ts
├── styles
│   └── globals.css
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
├── .eslintrc.cjs
├── .prettierrc
└── README.md
```

## Features

- **Hero Section**: Displays the developer's name, title, tagline, and action buttons.
- **About Section**: Highlights the developer's experience and skills.
- **Skills Section**: Categorizes and displays the developer's skills.
- **Experience Timeline**: Showcases the developer's work history and impact points.
- **Featured Projects**: Displays project cards with tech stack tags.
- **Contact Section**: Includes a contact form for inquiries.

## Technologies Used

- **Next.js 14**: For server-side rendering and static site generation.
- **TypeScript**: For type safety and better development experience.
- **Tailwind CSS**: For utility-first CSS styling.
- **ShadCN UI**: For UI components.
- **Framer Motion**: For smooth animations and transitions.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/senior-portfolio-nextjs.git
   ```

2. Navigate to the project directory:

   ```
   cd senior-portfolio-nextjs
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

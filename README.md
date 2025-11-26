# EASYREELS Portfolio

A high-impact, visually complex personal portfolio website for a professional Content Creator/Videographer.

## Features

- Responsive design for all device sizes
- Interactive elements with smooth animations
- Instagram reel embeds in the portfolio section
- Booking section with WhatsApp integration
- FAQ accordion functionality
- Contact form with email integration

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd easyreels-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

#### Deploy to Vercel

1. Push your code to a GitHub repository
2. Sign up or log in to [Vercel](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: Leave as is
   - Environment Variables: Add your EMAIL_USER and EMAIL_PASSWORD
5. Click "Deploy"

The deployment will automatically build and deploy your site.

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Nodemailer](https://nodemailer.com/)

## Contact

For inquiries, please contact the site owner through the contact form on the website.
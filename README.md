# YourStore - Next.js eCommerce Platform

A modern, full-featured eCommerce application built with Next.js 16+ (App Router) and NextAuth.js authentication. YourStore provides a seamless shopping experience with protected routes for product management, responsive design, and a polished user interface.

## 🚀 Live Demo

[View Live Demo](https://yourstore-demo.vercel.app)

## 📋 Project Description

YourStore is a comprehensive eCommerce platform that allows users to browse products, view detailed product information, and manage their own product listings through a protected dashboard. The application features:

- **Public Access**: Landing page, product listing, and product details
- **Protected Access**: Add and manage products (requires authentication)
- **Authentication**: Google OAuth and credentials-based login via NextAuth.js
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Polished UI**: Consistent design system with smooth interactions and animations

## ✨ Features

### Public Pages

- 🏠 **Landing Page** with 7 sections (Navbar, Hero, Features, Products, Testimonials, Newsletter, Footer)
- 🛍️ **Product Listing** with search and category filters
- 📦 **Product Details** with full descriptions and pricing
- 🔐 **Login/Register** with social and credential authentication

### Protected Pages (Login Required)

- ➕ **Add Product** - Create new product listings
- 📊 **Manage Products** - View, edit, and delete your products
- 👤 **User Profile** - Access via navbar dropdown after login

### UI Highlights

- Sticky responsive navbar with user dropdown
- Uniform card designs with hover/focus states
- Toast notifications for user actions
- Loading states and form validation
- Consistent spacing and typography
- Smooth micro-animations

## 🛠️ Technologies Used

### Frontend

- **Next.js 16+** (App Router)
- **React 18+**
- **Firebase** for authentication
- **Tailwind CSS** for styling
- **React icons** for icons

### Backend

- **Express.js** server
- **MongoDB** (or your database choice)
- **RESTful API**

### Deployment

- **Vercel** for frontend
- **vercel** for backend (optional)

## 📁 Project Structure

```
yourstore/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (protected)/
│   │   ├── add-product/
│   │   └── manage-products/
│   ├── products/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   └── products/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── ProductCard.js
│   ├── Footer.js
│   └── ...
├── lib/
│   ├── auth.js
│   └── utils.js
├── public/
│   └── images/
└── styles/
    └── globals.css
```

## 🚀 Setup & Installation

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- Git installed
- MongoDB account (or preferred database)
- Google OAuth credentials (for social login)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/yourstore.git
cd yourstore
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Step 3: Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL=your-mongodb-connection-string

# Backend API (if separate)
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 4: Setup Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to `.env.local`

### Step 5: Setup Backend (Optional)

If using a separate Express.js backend:

```bash
cd backend
npm install
npm run dev
```

### Step 6: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗺️ Route Summary

### Public Routes

| Route            | Description                                  |
| ---------------- | -------------------------------------------- |
| `/`              | Landing page with all sections               |
| `/products`      | Product listing with search and filters      |
| `/products/[id]` | Individual product details                   |
| `/login`         | Login page with Google OAuth and credentials |
| `/register`      | User registration page                       |

### Protected Routes (Require Authentication)

| Route              | Description                         | Redirect if Logged Out |
| ------------------ | ----------------------------------- | ---------------------- |
| `/add-product`     | Form to add new products            | → `/login`             |
| `/manage-products` | Dashboard to manage user's products | → `/login`             |

### API Routes

| Route                     | Method   | Description                          |
| ------------------------- | -------- | ------------------------------------ |
| `/api/auth/[...nextauth]` | GET/POST | NextAuth.js authentication endpoints |
| `/api/products`           | GET      | Fetch all products                   |
| `/api/products`           | POST     | Create new product (protected)       |
| `/api/products/[id]`      | GET      | Fetch single product                 |
| `/api/products/[id]`      | DELETE   | Delete product (protected)           |

## 📱 Landing Page Sections

1. **Navbar**

   - Logo and brand name
   - 4+ navigation links (Home, Products, About, Contact)
   - Login/Register buttons (or user dropdown when logged in)
   - Sticky positioning with responsive hamburger menu

2. **Hero Section**

   - Eye-catching headline
   - Compelling subtitle
   - Primary CTA button
   - Background image/gradient

3. **Features Section**

   - 3-4 feature cards with icons
   - Hover effects and animations

4. **Featured Products**

   - Product grid with 6+ items
   - Uniform card design

5. **Testimonials**

   - Customer reviews
   - Star ratings and avatars

6. **Newsletter/CTA Banner**

   - Email subscription form
   - Secondary call-to-action

7. **Footer**
   - Quick links and navigation
   - Social media icons
   - Copyright information

## 🔐 Authentication Flow

1. User clicks "Login" in navbar
2. Redirects to `/login` page
3. User can choose:
   - **Google OAuth**: One-click login
   - **Credentials**: Email and password
4. After successful login:
   - Redirects to homepage (`/`)
   - Navbar shows user dropdown with profile info
   - Protected routes become accessible

## 🎨 UI/UX Guidelines

### Design System

- **Colors**: Consistent primary, secondary, and accent colors
- **Typography**: Clear hierarchy (H1-H6, body, captions)
- **Spacing**: 4px base unit (4, 8, 16, 24, 32, 48, 64px)
- **Border Radius**: Consistent rounded corners

### Interactive Elements

- **Hover States**: Color shift, scale, or shadow changes
- **Focus States**: Visible outlines for accessibility
- **Loading States**: Spinners or skeleton screens
- **Disabled States**: Reduced opacity with cursor changes

### Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing

```bash
# Run tests (if configured)
npm test

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables
6. Click "Deploy"

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables for Production

Make sure to add all environment variables in Vercel dashboard:

- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `DATABASE_URL`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@Fahim20223](https://github.com/Fahim20223)
- Email: fahimshahrier2023@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NextAuth.js for simplified authentication
- Vercel for hosting platform
- All contributors and supporters

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Email: faimshahrier2023@gmail.com

---

**Built with ❤️ using Next.js App Router and NextAuth.js**

⭐ Star this repo if you find it helpful!

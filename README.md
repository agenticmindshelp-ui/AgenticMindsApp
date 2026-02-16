# AgenticMinds - AI Training Website

A professional, modern website for AgenticMinds, an AI training company offering comprehensive courses in artificial intelligence, machine learning, and automation.

## 🎨 Design & Branding

**Color Scheme:**
- Primary Green: `#2d7a4a`
- Light Green: `#4a9d6a`
- Dark Green: `#1f5433`
- Accent Green: `#5eb87d`
- White, Light Gray, Medium Gray, Dark Gray

**Typography:**
- Sans-serif font family (Segoe UI, Tahoma, Geneva, Verdana)
- Responsive font sizing for mobile devices

## 📁 Project Structure

```
agenticminds-website/
├── index.html                  # Homepage with hero, features, stats, CTA
├── assets/
│   ├── css/
│   │   ├── global.css         # Global styles, variables, utilities
│   │   ├── home.css           # Homepage and navigation styles
│   │   ├── blog.css           # Blog and course listing styles
│   │   └── courses.css        # Course detail page styles
│   ├── js/
│   │   ├── nav.js             # Navigation toggle and active link handling
│   │   └── main.js            # Main JavaScript functionality
│   └── images/                # Asset images (placeholder)
└── pages/
    ├── about.html             # About us page with mission, values, team
    ├── courses.html           # Course listing with filters
    ├── course-detail.html      # Individual course detail page
    ├── pricing.html            # Pricing plans and FAQ
    ├── contact.html            # Contact form and information
    ├── blog.html              # Blog listing page
    ├── blog-post.html         # Individual blog post
    └── login.html             # User login page
```

## 📄 Pages Overview

### Homepage (`index.html`)
- Navigation bar with mobile toggle
- Hero section with CTA buttons
- Features showcase (6 features)
- Statistics section
- Featured courses preview
- Call-to-action section
- Footer with links

### About Page (`pages/about.html`)
- Company mission statement
- Vision and core values
- Team member profiles
- Impact statistics
- Community call-to-action

### Courses Page (`pages/courses.html`)
- Course filtering by level (Beginner, Intermediate, Advanced)
- 9 course cards with details
- Course pricing and ratings
- Enrollment buttons

### Course Detail (`pages/course-detail.html`)
- Course information and overview
- Learning outcomes
- Course structure
- Instructor information
- Student reviews
- Enrollment CTA

### Pricing Page (`pages/pricing.html`)
- Three pricing tiers (Starter, Professional, Enterprise)
- Feature comparison
- FAQ section
- Comparison between plans

### Contact Page (`pages/contact.html`)
- Contact form (Name, Email, Subject, Message)
- Contact information (Email, Phone, Address)
- Social media links
- Consultation scheduling

### Blog Page (`pages/blog.html`)
- Blog post listings with categories
- Post metadata (author, date, read time)
- Featured blog posts
- Newsletter signup

### Blog Post (`pages/blog-post.html`)
- Full blog article content
- Author information
- Related posts sidebar
- Category navigation

### Login Page (`pages/login.html`)
- Email and password login form
- Social login options
- Signup link
- Responsive split layout

## 🎯 Key Features

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoint at 768px for tablets/mobile
   - Flexible grid layouts

2. **Navigation**
   - Sticky navigation bar
   - Mobile hamburger menu toggle
   - Active link highlighting
   - Smooth hover effects

3. **Interactive Elements**
   - Hover animations on cards
   - Button state transitions
   - Filter functionality on courses page
   - Form validation helper functions

4. **Accessibility**
   - Semantic HTML structure
   - Proper heading hierarchy
   - Alt text considerations
   - Color contrast compliance

5. **Performance**
   - Lightweight CSS with variables
   - Optimized JavaScript
   - Smooth scroll behavior
   - Intersection Observer for animations

## 🚀 Getting Started

### Running Locally
1. Open the project folder in VS Code
2. Use the Live Server extension or any local web server
3. Navigate to `http://localhost:5500` (or your server port)

### Customization

**Colors:**
Edit the CSS variables in `assets/css/global.css`:
```css
:root {
  --primary-green: #2d7a4a;
  --light-green: #4a9d6a;
  /* ... other colors ... */
}
```

**Content:**
- Edit HTML files in the `pages/` folder to update course listings, team members, etc.
- Update footer links and company information
- Add real images to `assets/images/` folder

**Courses:**
- Modify course cards in `pages/courses.html`
- Add/remove course levels and filter functionality
- Update pricing in `pages/pricing.html`

## 🔧 JavaScript Functionality

### `nav.js`
- Mobile menu toggle
- Active link highlighting based on current page
- Auto-close menu on link click

### `main.js`
- Smooth scrolling for anchor links
- Intersection Observer for fade-in animations
- Form validation helper functions
- Button click tracking

## 📱 Responsive Breakpoints

- **Desktop:** 1200px max-width container
- **Tablet/Mobile:** 768px and below
  - Single column layouts
  - Full-width buttons
  - Centered navigation menu
  - Adjusted font sizes

## 🎓 Course Curriculum

The website features courses across three levels:

**Beginner Level:**
- AI Fundamentals
- Data Science Basics
- Python for AI

**Intermediate Level:**
- Machine Learning Mastery
- Neural Networks & Computer Vision
- Natural Language Processing

**Advanced Level:**
- Advanced Deep Learning
- AI Model Deployment & MLOps
- Reinforcement Learning & AI Agents

## 📧 Contact Information

- **Email:** hello@agenticminds.com | support@agenticminds.com
- **Phone:** +1-800-AGENTIC
- **Address:** 123 AI Avenue, Tech City, TC 12345

## 📄 License

This website is property of AgenticMinds. All content is protected.

## 🎯 Future Enhancements

- Backend integration for enrollment and payment
- User authentication system
- Student dashboard
- Course progress tracking
- Live webinar integration
- Advanced analytics
- Content management system (CMS)
- Multi-language support

---

**Created:** February 2026  
**Last Updated:** February 15, 2026

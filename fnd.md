# SPARK Talks - FND (Functional & Design Specifications)

## Design System

### Typography
- **Heading**: Cormorant Garamond (Elegant Serif)
- **Body**: Poppins (Modern Sans Serif)

### Color Palette
- **Main Background**: Warm Beige (`#F4F1ED`)
- **Secondary Background**: Soft Khaki (`#E8D8C7`)
- **Primary Accent**: Deep Maroon (`#6A0B23`)
- **Heading Text**: Burgundy Wine (`#560B18`)
- **Soft Accent**: Dusty Pink (`#D9AEB6`)
- **Dark Contrast**: Dark Brown (`#221516`)

### Visual Identity
- **Vibe**: Elegant, modern, warm, aesthetic, luxury soft.
- **Components**: Soft shadows (`shadow-soft`), completely rounded buttons (`rounded-full`), rounded cards (`rounded-2xl` to `rounded-3xl`).
- **Animations**: Framer Motion for scroll reveals (`whileInView`, `opacity`, `translateY`).

## Component Specifications

### 1. Hero Section
- Split screen or elegant centered layout.
- Buttons: "Explore Programs" (Link to `/programs`) and "Join The Community" (WhatsApp Link).
- Background: Beige. Text: Burgundy.

### 2. About & Founder
- Profile of Salmahita Ataya Pradilla.
- Focus: "More than just a class, it's a confidence journey."

### 3. Programs
- Card 1: Online Class (Rp59K - Rp99K)
- Card 2: Offline Intensive (Rp299K - Rp499K)
- Focus: Badges for features.

### 4. Meet The Team
- 3-column desktop grid for Team Members.
- Minimalist circular avatars with initials in Dusty Pink.

### 5. Contact & Registration Form
- Built with React Hook Form + Zod.
- Fields: Full Name, Age, Domisili, Instagram, TikTok, Pekerjaan, Goals, Program, Expectations.
- Integration: Direct WhatsApp Redirect formatting.

### 6. Gallery & Community
- Gallery: Masonry Pinterest-style layout. Filterable categories.
- Community: The Speaking Room showcase. CTA to WhatsApp.

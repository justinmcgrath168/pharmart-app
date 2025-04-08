Act as a professional software project manager who have many years of experience building many enterprise level saas web application. I want you to help me build an eCommerce saas application which is specific purpose for POS system, Ecommerce system, and Management System for Pharmacy. I'll name this project "Pharmart". This saas web application allow pharmacy owner to register and set up their business on our platform. After subscription to our package, they'll receive an eCommerce website as a subdomain of our platform for listing their products. their customer can sign in or sign up, purchase the products with online payment such as KHQR. Moreover, the user receive an admin web application, where they can manage their business such as managing products, inventory, incomes, expenses, customers, staffs, purchases, pos sale, etc. I want to use Shopify as my business model. First, Let's brainstorm the core feature of our project.

### Core Features for Pharmart

## Customer-Facing eCommerce Platform

# User registration and authentication

- Product catalog with pharmacy-specific categorization
- Product search with filtering (by prescription requirements, health conditions, etc.)
- Shopping cart and checkout process
- Online payment processing (KHQR integration)
- Prescription upload and verification system
- Order tracking and history
- Customer reviews and ratings
- Refill reminders and subscription options for recurring medications

# Pharmacy Management System

- Inventory management with expiration date tracking
- Multi-location inventory support
- Prescription management
- Purchase order management
- Supplier relationship management
- Batch tracking and expiry management
- Product information management (including medical information)
- Dynamic pricing (promotions, discounts, insurance coverage)
- Staff management and role-based access control
- Customer relationship management (medical history, purchases)

# POS System

- Barcode/QR code scanning
- Prescription processing at POS
- Insurance processing and co-pay calculations
- Split payment methods (cash, card, KHQR)
- Receipt generation and digital receipts
- Quick inventory lookup
- Customer loyalty program
- Returns and refunds processing
- Shift management and cash drawer reconciliation

# Analytics and Reporting

- Sales reports and forecasting
- Inventory valuation reports
- Best-selling products
- Customer purchase patterns
- Profit margin analysis
- Expiration alerts
- Compliance reporting for regulatory requirements
- Prescription fill statistics

# Platform Administration (for Pharmart)

- Subscription management
- Multi-tenant architecture
- White-label customization options
- Template-based storefront designs
- Domain management for subdomain allocation
- Payment gateway integration
- Usage analytics
- Technical support system

# Additional Pharmacy-Specific Features

- Drug interaction checker
- Integration with healthcare provider systems
- Compliance with pharmaceutical regulations
- Automated tax calculations for medical vs. non-medical products
- Controlled substance tracking
- Insurance eligibility verification

The tech stack we'll use in this project such as : Next.js, Typescript, TailwindCss, Shadcn UI, Recharts, Supabase, etc. You can recommend some technology we need to use in our project.
Code architecture requirement:

- make sure to breakdown the pages into sections, or components which will be reusable, scalable, and easy to implement.
- make sure all the form are professional validation.
- make sure the services and functions have professional errors handler.
- make sure to comment the file directory at the top of each files.
- make sure the ui design is modern, minimalist, professional, consistency and user convenience.

```bash
/app
  /api            # API routes
  /(routes)       # Application routes
    /auth         # Authentication routes
    /admin        # Admin dashboard routes
    /store        # Store routes
    /pos          # POS system routes
/components
  /ui             # UI components from shadcn
  /common         # Common components used across the app
  /sections       # Larger section components
  /forms          # Form components
  /layouts        # Layout components
/lib
  /validations    # Zod schemas
  /utils          # Utility functions
  /hooks          # Custom hooks
  /services       # Service functions for API calls
/prisma           # Prisma schema and migrations
/public           # Static assets
```

First, let's implement our business website with enterprise grade business website which is attractive and professional to promote our platform and make our customer feel confident to our business platform.

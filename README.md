# 🛍️ E-Commerce Store

A responsive frontend e-commerce store built with React, designed to provide a complete shopping experience for browsing products, viewing product details, managing favorites, adding products to a shopping cart, completing a checkout flow, and viewing user information and order history.

The application is presented as a winter fashion store called **E-Store**, featuring a collection of winter clothing, footwear, and accessories.

This project was developed as a frontend learning project to practice React fundamentals, component-based development, state management, event handling, conditional rendering, browser storage, user interaction flows, and responsive UI development.

---

## 📌 Project Overview

The **E-Commerce Store** is a React-based frontend shopping application that simulates a complete online shopping experience.

The store currently focuses on a **Winter Collection** containing products such as coats, jackets, sweaters, footwear, pants, socks, hats, gloves, and other winter accessories.

Users can:

- Browse available products
- View individual product details
- Sign up for a local demo account
- Sign in to an existing demo account
- Add products to their shopping cart
- Save products as liked/favorite items
- Remove products from their cart or liked items
- Review their shopping cart
- Proceed through a checkout form
- Select Cash on Delivery as the available payment method
- Place a simulated order
- Receive an order confirmation with an order ID
- View profile information
- View previous orders through the dashboard
- Log out of the application

The application currently operates entirely on the frontend. User information, cart data, liked items, and purchase history are stored locally in the browser using `localStorage`.

There is currently no backend server, external database, production authentication service, or live payment gateway.

---

## 🎯 Introduction

The purpose of this project is to demonstrate how a real-world e-commerce user interface can be developed using React.

Instead of implementing isolated React exercises, this project combines multiple frontend concepts into a single interactive application.

The application demonstrates:

- React functional components
- Component-based architecture
- React state management
- React hooks
- Event handling
- Conditional rendering
- Dynamic product rendering
- Form handling
- Client-side authentication simulation
- Shopping cart management
- Favorite/liked item management
- Browser `localStorage`
- Checkout workflows
- Order confirmation
- User dashboard functionality
- Responsive layouts
- Tailwind CSS utility classes
- Interactive UI states

The project is intentionally designed as a frontend demonstration and learning project rather than a production-ready commercial e-commerce platform.

---

## ✨ Key Features

### 🏪 Product Storefront

The main storefront displays the available winter products in a responsive product-card layout.

Each product card provides:

- Product image
- Product name
- Product category
- Product price
- Like/favorite action
- Add to Cart action
- Out-of-stock state where applicable

Products are rendered dynamically from local product data.

---

### 🧥 Winter Product Collection

The application currently includes **15 sample winter products** covering multiple product categories.

The collection includes products such as:

- Woolen Winter Coat
- Stylish Padded Jacket
- Comfortable Hooded Sweater
- Warm Leather Boots
- Fleece Lined Trousers
- Knitted Scarf and Beanie Set
- High-Neck Sweater
- Heavy-Duty Snow Boots
- Classic Black Gloves
- Quilted Vest
- Thermal Base Layer
- Long Wool Socks
- Stylish Trench Coat
- Waterproof Ski Pants
- Insulated Winter Hat

Product information is maintained as local application data.

---

### 🔎 Product Details

Users can select a product to open its detailed view.

The product detail page provides information such as:

- Product name
- Price
- Description
- Category
- Availability
- Material
- Care instructions
- SKU
- Product image

Users can also:

- Like the product
- Add the product to their cart
- Use the Buy Now action

---

### ❤️ Liked / Favorite Products

Authenticated users can save products to a personal liked-items collection.

The liked-items section allows users to:

- View saved products
- Add a liked product to the cart
- Remove a product from liked items
- See unavailable products marked as out of stock

Liked products are stored in browser `localStorage` so the saved state can persist between sessions in the same browser.

---

### 🛒 Shopping Cart

Users can manage products added to their shopping cart.

The cart provides:

- Product image
- Product name
- Product price
- Remove item functionality
- Cart total
- Checkout action

The application prevents duplicate copies of the same product from being added to the cart.

Cart data is persisted using browser `localStorage`.

---

### 👤 User Registration

New users can create a demo account through the Sign Up interface.

The registration form collects:

- Full name
- Gender
- Email address
- Password

Registered demo users are stored locally in browser `localStorage`.

> **Important:** This is a frontend demonstration only. The application does not use a secure backend authentication system.

---

### 🔐 User Sign In

Existing demo users can sign in using their registered email and password.

The application validates the provided credentials against the locally stored demo user data.

After successful sign-in, the user can access authenticated features such as:

- Shopping cart
- Liked items
- Dashboard
- Checkout

---

### 🚪 Logout

Authenticated users can log out through the navigation header.

Logging out removes the currently active user session from browser storage and returns the user to the main store.

---

### 👤 User Dashboard

Authenticated users can access a personal dashboard.

The dashboard currently includes:

#### My Profile

Displays available user information such as:

- Name
- Email
- Gender
- Shipping address

#### My Orders

Displays previously placed orders stored as part of the user's local purchase history.

Order information includes:

- Product name
- Purchase date
- Product price

---

### 💳 Checkout Flow

The checkout page provides a simple order placement workflow.

Users can enter or review:

- Full name
- Email address
- Shipping address

The checkout page also displays an order summary containing:

- Selected products
- Product prices
- Total price

---

### 💵 Cash on Delivery

**Cash on Delivery (COD)** is currently available as the active payment method.

The application also displays an online payment option, but it is currently disabled and marked as:

> Online Payment (Coming Soon)

No real payment transaction is processed by the application.

---

### ✅ Order Confirmation

After a successful simulated checkout, the application:

1. Generates a unique order ID
2. Clears the shopping cart
3. Updates the user's purchase history
4. Saves the shipping address
5. Displays an order confirmation screen

The confirmation page displays the generated order ID and provides an option to continue shopping.

---

### 💾 Browser Data Persistence

The application uses the browser's `localStorage` to preserve application data.

The following information is stored locally:

- Current user
- Registered demo users
- Shopping cart
- Liked products
- User purchase history
- Shipping address information

This allows the application to maintain user state across page refreshes within the same browser environment.

---

### 📱 Responsive Design

The interface uses responsive utility classes to adapt layouts across different screen sizes.

Product grids and content sections adjust for:

- Mobile screens
- Tablet screens
- Desktop screens
- Large desktop displays

The navigation and product layouts are designed to remain usable across different viewport sizes.

---

## 🛠️ Technologies & Tools

The project uses the following technologies:

### Frontend

- **React 19** — Building the interactive user interface
- **JavaScript (ES6+)** — Application logic and functionality
- **HTML5** — Document structure
- **CSS** — Styling and layout
- **Tailwind CSS** — Utility-based styling and responsive UI development

### Development Tools

- **Create React App** — Application setup and development environment
- **React Scripts** — Development server, build, testing, and project scripts
- **npm** — Package and dependency management
- **Git** — Version control
- **GitHub** — Source code hosting

### Browser APIs

- **localStorage** — Client-side persistence for demo users, cart items, liked items, and purchase history

---

## ⚛️ React Concepts Practiced

This project was created to gain practical experience with several React concepts.

### Functional Components

The application uses React functional components for different parts of the interface.

Examples include:

- Header
- Product List
- Product Detail
- Cart
- Liked Items
- Checkout
- Order Confirmation
- Authentication
- Dashboard

---

### React Hooks

The project uses React hooks such as:

- `useState`
- `useEffect`

`useState` is used to manage interactive application state, while `useEffect` is used to load and persist information through browser storage.

---

### State Management

Application state is used to manage:

- Current user
- Cart items
- Liked items
- Current application view
- Selected product
- Authentication mode
- Loading state
- Errors
- Order ID

---

### Conditional Rendering

The application conditionally renders different interfaces based on application state.

Examples include:

- Logged-in vs logged-out navigation
- Sign In vs Sign Up forms
- Empty vs populated cart
- Empty vs populated liked-items section
- In-stock vs out-of-stock products
- Profile vs order dashboard views
- Different application screens

---

### Event Handling

User interactions are handled through React event handlers.

Examples include:

- Button clicks
- Form submissions
- Input changes
- Product selection
- Cart actions
- Like/unlike actions
- Authentication
- Checkout
- Logout

---

## 📂 Project Structure

The project follows a simple React application structure.

```text
e-commerce-demo/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### 📁 Directory & File Overview

| File / Folder | Description |
|---|---|
| `public/` | Contains public application assets and metadata |
| `public/favicon.ico` | Application favicon |
| `public/index.html` | Main HTML document and application entry template |
| `public/manifest.json` | Web application manifest |
| `public/robots.txt` | Instructions for search engine crawlers |
| `src/` | Main React source code directory |
| `src/App.js` | Main application file containing the application's UI components, product data, state management, and user interaction logic |
| `src/index.js` | React application entry point |
| `.gitignore` | Specifies files and folders that should not be committed to Git |
| `package.json` | Project metadata, dependencies, and npm scripts |
| `package-lock.json` | Locks installed dependency versions |
| `README.md` | Project documentation |

---

## 🧩 Application Components

Although the current project keeps the application implementation primarily within `App.js`, the code contains several logical React components.

### `Button`

A reusable button component used throughout the application for consistent button styling and behavior.

### `Input`

A reusable input component used for authentication and checkout forms.

### `Header`

Handles the application's main navigation and provides access to:

- Home
- Liked items
- Shopping cart
- Dashboard
- Sign In
- Logout

### `ProductList`

Displays the collection of available products.

### `ProductDetail`

Displays detailed information for a selected product.

### `Cart`

Displays the user's selected products and shopping cart total.

### `LikedItems`

Displays products saved by the user.

### `Checkout`

Handles shipping information, payment method selection, order summary, and order placement.

### `OrderConfirmation`

Displays confirmation after a simulated order is successfully placed.

### `AuthComponent`

Handles both:

- User registration
- User sign-in

### `DashboardComponent`

Provides access to:

- User profile information
- Purchase history

---

## 📦 Product Data

Product information is currently defined directly inside the React application.

Each product contains information such as:

```text
id
name
category
price
image
description
relatedInfo
```

The `relatedInfo` object contains additional product information such as:

```text
material
care
sku
```

Some products can also include an `outOfStock` state.

---

## 💾 Data Storage

The application currently uses browser `localStorage` rather than a backend database.

The following storage keys are used by the application:

| Storage Key | Purpose |
|---|---|
| `user` | Stores the currently active demo user |
| `registeredUsers` | Stores locally registered demo users |
| `cart` | Stores shopping cart items |
| `likedItems` | Stores liked/favorite products |

This approach is suitable for demonstrating frontend state persistence but is not intended for production data storage.

---

## 🔐 Security & Authentication Notice

This project uses **client-side demo authentication** for learning and demonstration purposes.

User registration and login information are handled through browser `localStorage`. Because browser storage is accessible to client-side JavaScript, this implementation should **not** be considered secure production authentication.

For a production application, authentication should be handled through a secure backend or dedicated authentication service with appropriate password hashing, session management, authorization, and security controls.

### Sensitive Information

This repository should never contain:

- API keys
- Authentication tokens
- Private credentials
- Database passwords
- Payment gateway secrets
- Private environment variables
- Other confidential configuration values

If environment variables or external services are added in the future, sensitive `.env` files should remain excluded through `.gitignore`, while safe placeholder variables can be documented in an `.env.example` file.

---

## 🖼️ Product Images

The current product catalog uses externally hosted image URLs for product images.

Because these images are loaded from external sources, their availability may depend on the source hosting provider.

For a production-ready implementation, product images could be hosted through a controlled asset storage or content delivery system.

---

## ⚙️ Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Make sure the following are installed on your computer:

- **Node.js**
- **npm**
- **Git** (optional if downloading the project as a ZIP)

You can verify your Node.js and npm installations with:

```bash
node --version
npm --version
```

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/JAVERIA-TECH/E-Commerce-Store.git
```

> Replace the repository URL above if the GitHub repository uses a different name or URL.

### 2. Navigate to the Project Directory

```bash
cd E-Commerce-Store
```

### 3. Install Dependencies

```bash
npm install
```

This installs the dependencies defined in `package.json`.

### 4. Start the Development Server

```bash
npm start
```

The Create React App development server will start the application locally.

By default, the application is available at:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

The project includes the standard Create React App scripts.

### Start Development Server

```bash
npm start
```

Runs the application in development mode.

The page automatically reloads when source files are changed.

---

### Run Tests

```bash
npm test
```

Runs the project's test runner in interactive watch mode.

---

### Create Production Build

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

The production build is intended for deployment to a suitable static hosting platform.

---

### Eject Configuration

```bash
npm run eject
```

> **Warning:** Ejecting is a one-way operation. It should generally not be necessary for this project.

---

## 🧪 Testing the Application

After starting the application, a typical user flow can be tested as follows:

### Step 1 — Browse Products

Open the application and browse the available Winter Collection.

### Step 2 — View Product Details

Select a product to open its detailed information.

### Step 3 — Create a Demo Account

Use the Sign Up option to create a local demo account.

### Step 4 — Sign In

Use the registered email and password to sign in.

### Step 5 — Like a Product

Select the heart icon on a product to save it to liked items.

### Step 6 — Add a Product to Cart

Use the **Add to Cart** button.

### Step 7 — Review the Cart

Open the shopping cart from the navigation bar and review the selected items and total.

### Step 8 — Checkout

Proceed to checkout and provide the required shipping information.

### Step 9 — Place the Order

Select the available **Cash on Delivery** option and place the simulated order.

### Step 10 — View Order Confirmation

The application displays an order confirmation page with a generated order ID.

### Step 11 — Check the Dashboard

Open **My Dashboard** to view profile information and purchase history.

---

## 💳 Payment Information

The current application does **not** process real online payments.

The available checkout option is:

- **Cash on Delivery** — available as a simulated order method

The online payment option is currently disabled and displayed as a future feature.

No payment credentials, card information, or payment gateway secrets are required to run this project.

---

## 🗄️ Backend & Database

The current version of the application does not use:

- A backend server
- A database
- REST APIs
- GraphQL
- Server-side authentication
- External payment processing

Application data is handled on the client side using React state and browser `localStorage`.

---

## 🚫 Current Limitations

As a frontend learning and demonstration project, the application has several limitations.

### Client-Side Authentication

Authentication is simulated using browser `localStorage` rather than a secure backend authentication system.

### Local Data Storage

User and shopping data are stored only in the current browser environment.

Clearing browser storage will remove locally stored application data.

### No Real Payment Processing

Online payment is not currently implemented.

### No Backend

There is no server-side API or database connected to the application.

### External Product Images

Product images are loaded from external URLs and may depend on third-party hosting availability.

### Static Product Catalog

The product catalog is defined locally in the React application rather than being retrieved from a product database or API.

---

## 🚀 Future Improvements

The project can be extended into a more complete production-style e-commerce platform by adding:

- Backend API integration
- Database integration
- Secure authentication
- Password hashing
- User authorization
- Product management
- Admin dashboard
- Product search and filtering
- Product categories
- Product quantity management
- Persistent order management
- Real payment gateway integration
- Payment confirmation
- Order status tracking
- Product reviews and ratings
- Wishlist synchronization
- Cloud image storage
- Inventory management
- Email notifications
- Improved form validation
- Secure session management

---

## 🎓 Learning Outcomes

This project provided practical experience with building an interactive React application and combining multiple frontend concepts into a single workflow.

Key learning outcomes include:

- Building reusable React components
- Managing application state with React hooks
- Working with functional components
- Handling user events
- Building interactive forms
- Managing shopping cart state
- Implementing favorite/liked item functionality
- Creating a checkout workflow
- Simulating authentication flows
- Persisting application state with `localStorage`
- Implementing conditional rendering
- Designing responsive layouts
- Using Tailwind CSS utility classes
- Organizing a frontend application
- Managing dependencies with npm
- Running and building React applications
- Using Git and GitHub for version control

---

## 📌 Project Status

**Status:** Completed frontend e-commerce learning project

The current version provides a functional frontend shopping experience with local demo authentication, product browsing, product details, favorites, shopping cart functionality, checkout, simulated order placement, and a user dashboard.

The project can be further expanded with a backend, database, secure authentication, real payment processing, and production-grade e-commerce functionality.

---

## 👩‍💻 Author

**JAVERIA-TECH**

This project was developed as part of my frontend development learning journey to practice React, responsive UI development, state management, browser storage, and interactive e-commerce workflows.

---

## 📄 License

This project is intended primarily for learning and portfolio demonstration purposes.

If the project is later distributed as an open-source application, an appropriate open-source license can be added to the repository.
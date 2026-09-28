# SpendWise Dashboard Shell

## About the Project

SpendWise is a modern financial dashboard designed to give users a simple visual overview of their spending and savings.

This project focuses on creating the visual structure of the dashboard using HTML and modern CSS. No JavaScript functionality has been added.

## What I Built

### 1. Sidebar / Navigation

The sidebar contains the SpendWise logo and navigation links for:

* Dashboard
* Expenses
* Budget
* Savings
* Reports
* Settings

### 2. Header

The header displays the dashboard title, a welcome message, and a user profile section.

### 3. Financial Category Cards

The dashboard contains six financial cards showing realistic static information:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

Each card displays a category, a short description, and an amount.

### 4. CSS Grid

CSS Grid is used to create the overall dashboard layout and arrange the financial cards into columns.

### 5. Flexbox

Flexbox is used to arrange:

* Sidebar navigation items
* Header content
* User profile information
* Content inside the financial cards

### 6. CSS Custom Properties

CSS variables are defined inside `:root` to create a consistent theme.

The variables include:

* Brand color
* Accent color
* Background color
* Surface color
* Primary text color
* Secondary text color

### 7. Responsive Design

A media query is used to make the dashboard responsive.

Below 768px:

* The sidebar and main content become a single-column layout.
* Navigation items can wrap onto multiple lines.
* The financial cards display in one column.
* Header content adjusts for smaller screens.

### 8. Card Micro-interactions

The financial cards have a subtle hover and keyboard focus effect.

The cards move slightly upward and receive a stronger shadow when interacted with.

The transition lasts 200ms.

### 9. Dark Theme

A dark theme is included using:

`@media (prefers-color-scheme: dark)`

The dark theme changes the CSS variables while keeping the same HTML structure.

## Files

* `index.html` — Contains the structure and content of the SpendWise dashboard.
* `style.css` — Contains the layout, colors, responsive design, and card interactions.
* `README.md` — Explains the project and its main components.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Media Queries

````

### Step 2 — Save it

Press **Ctrl + S**.

Your project folder should now contain:

```text
SpendWise/
│
├── index.html
├── style.css
└── README.md
````

This satisfies the README requirement: it explains **what you built** and **what each part does**.

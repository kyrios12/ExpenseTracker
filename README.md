# Expense_Tracker

Expense tracker allows user to create new expenses, edit or delete previous expenses, Authentication for old users or just walk through app without authentication.

## Features

- Browse the expenses on views page.
- Search using expense name.
- Filter by date through the list to fetch particular expense by date.
- Add new expenses to track.
- Edit any previous expenses.
- Deleted any old expenses.

## Getting Started

1. Clone the repository: [GIT Repo]([https://github.com/kyrios12/ExpenseTracker])
2. Navigate to the project directory and extract the files.
3. Run `npm install` to install the required packages.
4. Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.

## High-Level Design

![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/36d69618-90f1-430c-958c-ff30a465293d)


### Product Module

- **Product Component**: Allows browsing the product catalog, searching, and filtering products.
- **Product Card Component**: Displays product details and allows adding products to the cart.

### Cart Module

- **Cart Component**: Displays the items in the cart and cart summary.
- **Cart Item Component**: Allows increasing/decreasing quantity and deleting items from the cart.
- **Cart Summary Component**: Shows the total number of items and total amount in the cart.

### Shared Components

- **Header Component**: Displays company logo and navigation links.
- **Filter Component**: Allows applying filter values for attributes like color, gender, price range, and type.
- **Search Component**: Enables searching for products using free text.

## Screenshots

### Product Page

![Product Page](screenshots/product-page.png)

### Cart Page

![Cart Page](screenshots/cart-page.png)

### Product Page Mobile

![Product Page Mobile](screenshots/product-page-mobile.png)

### Cart Page Mobile

![Cart Page Mobile](screenshots/cart-page-mobile.png)

## Exception Handling

Exceptions are handled for scenarios like:
- When no cart items are present.
- When the searched/filtered product is not available.
- When product fetching API fails.

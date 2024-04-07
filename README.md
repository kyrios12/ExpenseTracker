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
![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/e1e33a5b-d3f2-4826-90db-f7a8162e4926)
![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/f2804a38-30d8-4199-8e9d-006613ec58fe)
![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/77322ce4-6dd8-4883-9a63-68d2873960f3)

## Low-Level Design
App
├── Components
│   ├── Filter
│   ├── Navbar
|   └── Search 
├── Custom Hooks
│   ├── dateFormater
│   └── emailName
├── Pages
│   ├── AddExpense
│   ├── EditExpense
│   ├── Home
|   └── Login
└── Reducer
    └── homeReducer
    
### Login Page
![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/abe6b0da-cfed-4ca9-a698-be9cffae2015)
### Home Page
![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/1fe9a7ec-2bcf-4190-9796-218ad006cf3c)
### AddExpense Page
![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/fa211143-9d77-407a-9882-f2f0217b6826)
### EditExpense Page
![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/c82c3330-4e15-42f1-9009-c75ff15e150b)

### Components

- **Navbar Component**: ![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/7b38e273-0ffd-43f6-9f41-479b57683b6f)

- **Filter Component**: ![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/6c3a2bf5-19c2-4f66-8bbb-e304d4067d07)

- **Search Component**: ![image](https://github.com/kyrios12/ExpenseTracker/assets/103828615/485cc4ff-5242-4253-b70c-fdee21b62584)
- 
## Routes


## Exception Handling

Exceptions are handled for scenarios like:
- When no cart items are present.
- When the searched/filtered product is not available.
- When product fetching API fails.

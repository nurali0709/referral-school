# School Referral Program Management System

This project is a Node.js application designed to manage a school's referral program. It provides functionality to generate referral links, register students, handle payments, track referrals, and more. The project uses SQLite as the database, Redis for caching, and integrates Swagger for API documentation.

## Features

- **Referral Link Generation**: Generate unique referral links for referrers.
- **Student Registration**: Register new students using a referral link.
- **Payment Processing**: Add lessons to both the referrer and the referred student after a payment.
- **Referral Statistics**: Track the number of students referred by each referrer.
- **Caching**: Redis is used for caching frequently requested data.
- **Validation**: All inputs are validated using `express-validator`.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later)
- **SQLite** (automatically managed by Sequelize)
- **Redis** (for caching)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/school-referral-system.git
cd school-referral-system
```

### 2. Install Dependencies
```
npm install
```

### 3. Run
```
npm start
```

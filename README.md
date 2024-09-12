## Cat Website with Amazon Cognito
This project is a cat-related website that uses Amazon Cognito for user authentication. It supports three types of access: public, regular user, and admin user.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

+ Node.js (Version 16 or higher recommended)
+ npm (Included with Node.js)
+ Vite (Development server)

## Getting Started
Follow these steps to set up and run the project:

1. Clone the repository to your local machine:
git clone https://github.com/ngckhanh/s3932105_a2_cognito.git
cd s3932105_a2_cognito

2. Install Dependencies
Navigate to the project directory and install the required packages:
npm install

3. Start the Development Server
To start the development server and run the application:
npm run dev
The website will be available at http://localhost:8000.

## Features
Public Access: View all cats without logging in.
Regular User Access: Log in to view and add new cats.
Admin User Access: Log in to view and delete cats by ID.
Amazon Cognito Configuration
The project uses Amazon Cognito for authentication with the following features:

## User registration
Email verification
Password retrieval
Multi-factor authentication (MFA)

## User Roles
Public Users: Can view all cats.
Regular Users: Can view and add new cats.
Admin Users: Can view and delete cats by ID.
## Admin User Credentials
Email: tonnungockhanh@gmail.com
Password: Admin@1234
## Regular User Credentials
Email: ngockhanh7643@gmail.com
Password: User@1234

## Testing and Deployment
Public Pages: Verify that public pages load without login.
Login Process: Test user registration, email verification, password retrieval, and MFA functionality.
Role-Based Access: Ensure correct access to functionality based on user roles.



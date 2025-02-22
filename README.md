# URL Shortener

A **URL Shortener** web application built with **Next.js**, **AWS Lambda**, **API Gateway**, and **DynamoDB**. This project allows users to shorten URLs, track analytics, and optionally set expiration times for generated short links.

## Features

- Shorten long URLs to a compact format.
- Custom domain support (e.g., `ra.ly/{shortCode}`).
- Automatic redirect handling.
- Expiration-based short links (default: 5 hours for free users).
- Basic analytics (number of visits, timestamps, etc.).

## Tech Stack

- **Frontend**: Next.js (React, Tailwind CSS)
- **Backend**: AWS Lambda (Node.js)
- **Database**: DynamoDB
- **API Gateway**: Manages API endpoints
- **Infrastructure**: AWS Route 53 (for custom domain), AWS S3 (for static assets, if needed)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (`>=18.x`)
- npm / yarn / pnpm / bun
- AWS CLI (configured with access credentials)
- Git

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rahulyyadav/UrlShortener.git
   cd UrlShortener
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install / pnpm install / bun install
   ```
3. Start the development server:
   ```sh
   npm run dev  # or yarn dev / pnpm dev / bun dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
UrlShortener/
│── public/                # Static assets
│── src/
│   ├── app/               # Next.js App Router structure
│   │   ├── page.tsx       # Home page
│   │   ├── api/
│   │   │   ├── shorten.ts # API endpoint for URL shortening
│   │   │   ├── redirect.ts# API endpoint for redirect handling
│   ├── components/        # Reusable UI components
│   ├── styles/            # Tailwind and global styles
│── .env                   # Environment variables
│── next.config.js         # Next.js configuration
│── README.md              # Documentation
```

## Backend (AWS Lambda + DynamoDB)

1. **URL Shortening**: A Lambda function stores the long URL in DynamoDB and returns a short code.
2. **Redirection**: Another Lambda function fetches the long URL from DynamoDB when a user visits a short URL.
3. **Expiration Handling**: Expired URLs are automatically removed using DynamoDB TTL settings.
4. **Analytics**: Tracks the number of visits per short URL.

## Deployment

### Frontend (Vercel Deployment)

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy to Vercel:
   ```sh
   vercel
   ```
3. Follow the on-screen instructions to configure your project.

### Backend (AWS Lambda Deployment)

1. **Deploy the Lambda function**:
   ```sh
   cd backend/
   npm install
   zip -r function.zip .
   aws lambda update-function-code --function-name urlShortener --zip-file fileb://function.zip
   ```
2. **Update API Gateway** with the new Lambda function.
3. **Set up a custom domain** in AWS Route 53 and link it to API Gateway.

## Environment Variables

Create a `.env` file in the root directory:

```
NEXT_PUBLIC_API_URL=https://your-api-gateway-url
AWS_REGION=us-east-1
DYNAMODB_TABLE_NAME=ShortURLs
```

## Future Improvements

- Implement user authentication for managing URLs.
- Add a dashboard to view analytics.
- Support for custom short URLs.
- Premium plans for extended link expiration.

## Author

**Rahul Yadav**

## License

This project is licensed under the MIT License.

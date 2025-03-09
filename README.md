# Call Activity App

## Overview

This project is a small ReactJS application that displays a call activity feed, allowing users to view call details and archive/unarchive calls. The app follows React best practices and maintains clean, readable, and maintainable code.

## Features

- **Activity Feed**: Displays a list of calls fetched from an API.
- **Activity Detail**: View detailed information about a specific call.
- **Archive/Unarchive Call**: Users can archive or unarchive individual calls.
- **Archive All Calls**: A button to archive all calls in the activity feed at once.
- **Unarchive All Calls**: A button to unarchive all calls in the archived calls tab.
- **Tab Navigation**: Switch between active and archived calls.
- **Responsive UI**: Optimized for various screen sizes.
- **Smooth Transitions**: Ensures a good user experience.

## Installation & Setup

To run the application locally, follow these steps:

### Prerequisites

- Ensure you have **Node.js (v16)** installed.
- Install **yarn** (or use npm as an alternative).

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/gulrezsbawa/a753bbd5.git
   cd a753bbd5
   ```

2. Set Environment Variables:

   ```sh
   Make a copy of env.example
   Remove .example from the copied file ( final name: .env )
   update the correct BASE_URL
   ```

3. Install dependencies:
   ```sh
   yarn install
   ```
4. Start the development server:
   ```sh
   yarn start
   ```
5. Open the app in the browser:
   ```
   http://localhost:8080
   ```

## API Documentation

**Base URL:** `https://aircall-api.onrender.com`

### Endpoints

| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/activities`          | Fetch all calls                  |
| GET    | `/activities/:call_id` | Retrieve call details            |
| PATCH  | `/activities/:call_id` | Archive/unarchive a call         |
| PATCH  | `/reset`               | Reset all calls to initial state |

### Example API Request (Archiving a Call)

```sh
PATCH /activities/:call_id
{
  "is_archived": true
}
```

## Deployment

The application is deployed on **[Netlify/Vercel/Render]**. You can access the live version here:

🔗 **Live Demo**: [Deployment Link]

## Tech Stack

- **React.js** - Frontend library
- **Material-UI** - UI components
- **React Router** - Routing

## Best Practices Followed

- ✅ Modular component structure
- ✅ Clean and readable code
- ✅ Optimized for performance
- ✅ Follows React best practices
- ✅ Mobile-friendly UI/UX

## Repository Naming

- **Repository Name**: First 8 digits of a UUID (e.g., `036b1c95`)

## Contact

For any issues, reach out at: **[bawagulrez@gmail.com]**

## Author

**Gulrez Bawa**

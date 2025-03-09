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

## Snapshots

<img width="376" alt="Screenshot 2025-03-09 at 6 09 31 AM" src="https://github.com/user-attachments/assets/846d06e4-3ab5-4676-b1c6-0482c4ee4abc" />
<img width="376" alt="Screenshot 2025-03-09 at 6 09 48 AM" src="https://github.com/user-attachments/assets/1152aa98-3038-4b89-9828-d805c69ee8f6" />
<img width="376" alt="Screenshot 2025-03-09 at 6 09 57 AM" src="https://github.com/user-attachments/assets/b5fad821-5fcf-41d3-9c66-a3f47fc0494d" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 05 AM" src="https://github.com/user-attachments/assets/a1268dff-55f6-4e33-9f79-e714863c150e" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 09 AM" src="https://github.com/user-attachments/assets/481cc490-3b72-483a-9cdd-25f862277626" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 23 AM" src="https://github.com/user-attachments/assets/bf5d04b3-1a98-4ca2-9e7d-a20ae82e93e0" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 28 AM" src="https://github.com/user-attachments/assets/0abbb42e-6f33-4c5e-b981-4056b28038ad" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 33 AM" src="https://github.com/user-attachments/assets/0617e29e-c25b-4773-92b3-ee899ab91cf4" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 36 AM" src="https://github.com/user-attachments/assets/3cfa3191-e32d-4c71-9f77-e4c14cecdd7c" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 42 AM" src="https://github.com/user-attachments/assets/2e50296f-769b-403c-a066-96bff0d49c07" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 45 AM" src="https://github.com/user-attachments/assets/424bf383-f8e5-42e4-b3ab-025de3d13e8c" />
<img width="376" alt="Screenshot 2025-03-09 at 6 10 52 AM" src="https://github.com/user-attachments/assets/bdef3590-c9fd-40c5-aa5b-ce7b8ce87082" />
<img width="376" alt="Screenshot 2025-03-09 at 6 11 26 AM" src="https://github.com/user-attachments/assets/24ca7d7f-1c92-4bc7-bd13-892300af60d8" />
<img width="595" alt="Screenshot 2025-03-09 at 6 11 53 AM" src="https://github.com/user-attachments/assets/43f63262-1c5e-46df-8ae8-ef0721ef2e29" />
<img width="383" alt="Screenshot 2025-03-09 at 6 12 16 AM" src="https://github.com/user-attachments/assets/3939e8c8-f44c-41cc-a917-19278e5d462b" />
<img width="513" alt="Screenshot 2025-03-09 at 6 12 29 AM" src="https://github.com/user-attachments/assets/97339353-e5c7-4d3d-9009-ae2deec437b2" />
<img width="376" alt="Screenshot 2025-03-09 at 6 12 42 AM" src="https://github.com/user-attachments/assets/f88f4248-6aad-4f12-8b41-1eb543adc7b6" />





## Contact

For any issues, reach out at: **[bawagulrez@gmail.com]**

## Author

**Gulrez Bawa**

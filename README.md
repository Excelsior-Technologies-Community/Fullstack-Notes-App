# Fullstack Notes App

A beautiful, modern notes application built with React and Express.js. Organize your thoughts with style using glassmorphism design, smooth animations, and a premium user experience.

## Features

- **✨ Modern UI Design**: Stunning glassmorphism effects with gradient backgrounds
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Beautiful Styling**: Custom CSS design system with smooth transitions
- **📝 CRUD Operations**: Create, read, update, and delete notes effortlessly
- **🎭 Smooth Animations**: Beautiful fade-in, scale-in, and hover effects
- **🏗️ Clean Architecture**: Organized codebase with reusable components
- **⚡ Fast Performance**: Built with React 19 and Vite for blazing-fast development
- **🔄 Real-time Updates**: Instant UI updates after note operations

## Screenshots

### Homepage - Notes List

![Notes Homepage](./frontend/public/projectImages/Screenshot%202025-12-05%20112356.png)

### Create New Note

![Create Note Page](./frontend/public/projectImages/Screenshot%202025-12-05%20112412.png)

### Edit Note

![Edit Note Page](./frontend/public/projectImages/Screenshot%202025-12-05%20112429.png)

## Tech Stack

### Frontend

- **React 19** - Latest React with improved performance
- **Vite 7** - Next-generation frontend build tool for blazing-fast development
- **React Router DOM** - Client-side routing for seamless navigation
- **Lucide React** - Beautiful, consistent icon library
- **Pure CSS** - Custom design system with CSS variables

### Backend

- **Express.js** - Lightweight Node.js web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling
- **CORS** - Cross-origin resource sharing enabled

## Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (running locally or MongoDB Atlas URI)
- **npm** or **yarn** package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Fullstack-Notes-App
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the `backend` folder:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/notes-app
   ```

   Create a `.env` file in the `frontend` folder:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

5. **Start MongoDB**

   ```bash
   # Windows
   net start MongoDB

   # macOS/Linux
   sudo systemctl start mongod

   # Or run mongod directly
   mongod
   ```

6. **Start Backend Server**

   ```bash
   cd backend
   npm start
   # Or for development with auto-reload:
   npm run dev
   ```

7. **Start Frontend Development Server**

   ```bash
   cd frontend
   npm run dev
   ```

8. **Access the Application**
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:5000

## 📁 Project Structure

```
Fullstack-Notes-App/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── noteController.js  # Note CRUD logic
│   ├── middleware/
│   │   └── errorHandler.js    # Error handling
│   ├── models/
│   │   └── Note.js            # Note schema
│   ├── routes/
│   │   └── noteRoutes.js      # API routes
│   ├── .env                   # Environment variables
│   ├── server.js              # Express server
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── ProjectImages/     # Application screenshots
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx       # Homepage (notes list)
    │   │   ├── AddNote.jsx    # Create note page
    │   │   └── EditNote.jsx   # Edit note page
    │   ├── components/
    │   │   ├── Navbar.jsx     # Navigation component
    │   │   ├── NoteCard.jsx   # Note card component
    │   │   └── NoteForm.jsx   # Note form component
    │   ├── lib/
    │   │   └── api.js         # API utility functions
    │   ├── App.jsx            # Main app component with routing
    │   ├── main.jsx           # Application entry point
    │   └── index.css          # Global styles & design system
    ├── index.html             # HTML template
    ├── vite.config.js         # Vite configuration
    └── package.json
```

## 🎨 Design System

The app uses a comprehensive CSS design system with:

### Color Palette

- **Primary**: Purple gradient (`hsl(262, 83%, 58%)`)
- **Secondary**: Cyan (`hsl(195, 100%, 50%)`)
- **Accent**: Pink (`hsl(330, 100%, 71%)`)

### Component Classes

- `.navbar` - Glassmorphic sticky navigation
- `.card` - Beautiful cards with hover effects
- `.btn` - Multiple button variants (primary, outline, danger)
- `.form-input` / `.form-textarea` - Styled form inputs
- `.container` - Responsive layout containers

### Animations

- Fade-in animations for page elements
- Scale-in effects for cards
- Smooth hover transitions
- Staggered list animations

## 🔌 API Endpoints

### Notes

| Method   | Endpoint         | Description     |
| -------- | ---------------- | --------------- |
| `GET`    | `/api/notes`     | Get all notes   |
| `GET`    | `/api/notes/:id` | Get note by ID  |
| `POST`   | `/api/notes`     | Create new note |
| `PUT`    | `/api/notes/:id` | Update note     |
| `DELETE` | `/api/notes/:id` | Delete note     |

### Request/Response Examples

**Create Note:**

```json
POST /api/notes
{
  "title": "My First Note",
  "content": "This is the content of my note"
}
```

**Response:**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "My First Note",
  "content": "This is the content of my note",
  "createdAt": "2025-12-04T13:15:30.000Z",
  "updatedAt": "2025-12-04T13:15:30.000Z"
}
```

## 💻 Development

### Backend Development

```bash
cd backend
npm run dev  # Uses nodemon for auto-restart on file changes
```

### Frontend Development

```bash
cd frontend
npm run dev  # Vite dev server with hot module replacement
```

### Build for Production

**Frontend:**

```bash
cd frontend
npm run build
npm start
```

**Backend:**

```bash
cd backend
npm start
```

## Usage Guide

### Creating a Note

1. Click the **"➕ Add Note"** button in the navbar or homepage
2. Enter a title and content for your note
3. Click **" Create Note"** to save

### Editing a Note

1. Click the **" Edit"** button on any note card
2. Modify the title or content
3. Click **" Update Note"** to save changes

### Deleting a Note

1. Click the **" Delete"** button on any note card
2. The note will be removed immediately

## Key Features Explained

### Glassmorphism Design

- Frosted glass effect with backdrop blur
- Semi-transparent backgrounds
- Subtle borders and shadows
- Modern, premium aesthetic

### Responsive Layout

- Mobile-first design approach
- Flexible grid system
- Adaptive typography
- Touch-friendly buttons

### Performance Optimizations

- Vite's lightning-fast hot module replacement (HMR)
- React Router for client-side navigation
- Optimized CSS with variables
- Minimal JavaScript bundle with tree-shaking

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Known Issues

- None at the moment! Report issues on GitHub.

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Note categories/tags
- [ ] Search and filter functionality
- [ ] Rich text editor
- [ ] Note sharing capabilities
- [ ] Export notes to PDF/Markdown
- [ ] Cloud storage integration
- [ ] Collaborative editing

## Support

For questions, issues, or suggestions:

- Open an issue on GitHub
- Contact: [Your Email]

## Acknowledgments

- **React Team** - For the amazing UI library
- **Vite Team** - For the blazing-fast build tool
- **MongoDB** - For the flexible database solution
- **Lucide Icons** - For beautiful, consistent icons
- **Community** - For inspiration and support

---

**Built with ❤️ using React 19, Vite 7, and Express.js**

_Last Updated: December 2025_



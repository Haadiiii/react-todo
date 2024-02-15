# Todo App

This is a simple Todo application built with React for the frontend and Node.js with Express for the backend. It allows users to create, edit, and delete todo items. User authentication is implemented using session storage.

## Features

- User authentication: Users can log in with their username and password.
- CRUD operations: Users can create, read, update, and delete todo items.
- Real-time updates: Todo items are updated in real-time without needing to refresh the page.

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/react-todo.git
```


2. Navigate to the project directory:
```
cd react-todo

```

3. Install dependencies for the frontend:
```
cd client
npm install

```


4. Install dependencies for the backend:
```
npm install
```


## Usage

1. Start the backend server:


```
npm run server

```


2. Start the frontend development server:

```
cd client
npm run dev

```

markdown


3. Open your web browser and navigate to `http://localhost:5173` to access the Todo application.

## Configuration

- Backend configuration: Modify the `.env` file in the backend directory to configure environment variables such as database connection settings and server port.
- Frontend configuration: Modify the `.env` file in the frontend directory to configure frontend settings if necessary.

## Technologies Used

- Frontend: React, Axios, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Authentication: Session storage

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

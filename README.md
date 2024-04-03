# Gradient Kolor Picker

Gradient Kolor Picker is a web application for creating and managing beautiful gradients. It leverages Rust (Tauri) for the backend and ReactJS for the frontend, providing a seamless experience for users to generate stunning color gradients.

## Features

- **Intuitive Interface**: User-friendly interface for easily creating, modifying, and saving gradients.
- **Real-time Preview**: Instantly visualize how changes affect the gradient with the real-time preview feature.
- **Export Gradients**: Save your gradients in various formats for easy integration into your projects.
- **Responsive Design**: Responsive design ensures a consistent experience across different devices and screen sizes.

## Technologies Used

- **Rust (Tauri)**: Empowers the backend with Rust's performance and safety features, allowing seamless integration with the frontend.
- **ReactJS**: Provides a dynamic and interactive user interface for managing gradients.
- **CSS**: Styling the application for a visually appealing experience.
- **HTML5 Canvas**: Rendering gradients in real-time for previews.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/gradient-kolor-picker.git
    ```

2. Navigate to the project directory:

    ```
    cd gradient-kolor-picker
    ```

3. Install dependencies for the frontend:

    ```
    cd frontend
    npm install
    ```

4. Install dependencies for the backend (Tauri):

    ```
    cd ../backend
    cargo build
    ```

## Usage

1. Start the backend (Tauri):

    ```
    cd backend
    cargo tauri dev
    ```

2. Start the frontend:

    ```
    cd ../frontend
    npm start
    ```

3. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you'd like to contribute to Gradient Kolor Picker, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by the need for an easy-to-use gradient generator.
- Special thanks to the Rust and ReactJS communities for their invaluable resources and support.

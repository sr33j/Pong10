# Pong Game Web Application

This project is a simple Pong game implemented as a web application using Flask.

## Project Structure

- `app.py`: Main file that runs the Flask app.
- `templates/index.html`: HTML file for the Pong game interface.
- `static/script.js`: JavaScript file containing the logic for the Pong game.
- `static/style.css`: CSS file that styles the Pong game.
- `requirements.txt`: Lists the dependencies needed to run the app.

## Requirements

- Python
- Flask
- Gunicorn

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:

```
pip install -r requirements.txt
```

## Running the Application

To run the Flask application, use the following command:

```
python app.py
```

The application will be accessible at `http://0.0.0.0:5000`.

For deployment, use Gunicorn:

```
gunicorn -w 4 app:app
```

## Playing the Game

Navigate to the application URL in your web browser, and you can play the Pong game with simple mouse controls. Move your mouse to control the player's paddle on the left side of the screen.
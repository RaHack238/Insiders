# Insiders

This is a Flask-based web application for managing academic records for the Indian Institute of Technology (IIT) Goa.

## Features

- Login system with JWT authentication
- View grades by semester
- View user profile
- View list of all students

## Installation

1. Clone the repository
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
    - On Windows: `venv\Scripts\activate`
    - On Unix or Linux: `source venv/bin/activate`
4. Install the required packages: `pip install -r requirements.txt`
5. Set the Flask application environment variable:
    - On Windows: `set FLASK_APP=app`
    - On Unix or Linux: `export FLASK_APP=app`
6. Initialize the database: `flask init-db`
7. Start the server: `flask run`

## API Endpoints

### GET /

Returns a welcome message.

### GET /index

Requires authentication.

Returns the logged in user's identity.

### POST /login

Requires a JSON payload with `username` and `password` fields.

Returns a JWT access token if the provided credentials are valid.

### GET /viewGrades

Requires authentication.

Returns a JSON object containing the user's information and grades by semester.

### GET /viewProfile

Requires authentication.

Returns a JSON object containing the user's information.

### GET /viewAllStudents

Returns a JSON object containing a list of all students in the database.

To generate the requirements.txt file, run the following command:

    pipreqs --force --encoding=utf-8 ./


To use database through python interface, run the following commands:

    >>> from app import app, db
    >>> from app.models import User, Post
    >>> app.app_context().push()

    For more information refer to the following article:
        https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iv-database
        

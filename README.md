# Insiders


To generate the requirements.txt file, run the following command:

    pipreqs --force --encoding=utf-8 ./


To use database through python interface, run the following commands:

    >>> from app import app, db
    >>> from app.models import User, Post
    >>> app.app_context().push()

    
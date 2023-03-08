from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

app.config.from_object(Config)
db = SQLAlchemy(app)

from app import routes, models



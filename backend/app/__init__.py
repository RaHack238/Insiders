from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

app.config.from_object(Config)

db = SQLAlchemy(app)
jwt = JWTManager(app)

from app import routes, models



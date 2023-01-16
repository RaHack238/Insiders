from app import app
from flask import request, jsonify
from functools import wraps
import jwt

app.secret_key = "Insiders_secret_key"

def jwt_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token=request.headers.get('Authorization')
        if not token:
            return jsonify(message="Token is missing"), 403
        try:
            data=jwt.decode(token, app.secret_key, algorithms=['HS256'])
        except:
            return jsonify(message="Token is invalid"), 403
        return f(*args, **kwargs)
    return decorated


@app.route('/')
@app.route('/index')
@jwt_required
def index():
    return "Hello, World!"


# Implementing a login authentication system using JWT
@app.route('/login', methods=['POST'])
def login():
    data=request.get_json()
    username=data['username']
    password=data['password']

    # user=User.query.filter_by(username=username).first()
    user={'username':'admin', 'password':'admin'}
    if user and user['password']=='admin':
        payload={'username':username}
        access_token=jwt.encode(payload, app.secret_key, algorithm='HS256')
        return jsonify(access_token=access_token), 200
    else:
        return jsonify(message="Bad username or password"), 401








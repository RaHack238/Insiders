from app import app, jwt
from flask import request, jsonify
from functools import wraps
from app.models import Student, Teacher, Grade, Course
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity


@app.route('/')
def home():
    return "Welcome To IIT Goa Ams Poral"

@app.route('/index')
@jwt_required()
def index():
    user=get_jwt_identity()
    return jsonify(logged_in_as=user), 200
    return "Hello, World!"


# Implementing a login authentication system using JWT
@app.route('/login', methods=['POST'])
def login():
    data=request.get_json()
    student_id=int(data['username'])
    password=data['password']

    # user=Student.query.filter_by(student_id=student_id).first()
    user={'student_id': 1, 'name': 'Rahul', 'contact': 1234567890, 'password': '1234'}
    if user and user['password']=='1234':
        access_token=create_access_token(identity=student_id)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify(message="Bad username or password"), 401


@app.route('/viewGrades', methods=['GET'])
@jwt_required()
def viewGrades():
    try:
        username=get_jwt_identity()
        user=Student.query.filter_by(student_id=username).first()
        
        # Remove the password from the user object
        user.pop('login_password', None)

        # I obtain the grades and course_id from the database
        grades=Grade.query.filter_by(student_id=user['student_id']).all()

        # I obtain the course description from the database
        for grade in grades:
            course=Course.query.filter_by(course_id=grade['course_id']).first()

            grade['class_id']=course['class_id']

            teacher_id=course['teacher_id']
            teacher=Teacher.query.filter_by(teacher_id=teacher_id).first()
            grade['teacher_name']=teacher['name']

        
        return jsonify(user=user, grades=grades), 200

    except Exception as e:
        return jsonify(message=str(e)), 500

    
















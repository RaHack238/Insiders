from app import app, jwt
from flask import request, jsonify
from functools import wraps
from app.models import Student, Teacher, Grade, Course
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import json 

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

    user=Student.query.filter_by(student_id=student_id).first()
    if user and user.login_password==password:
        access_token=create_access_token(identity=student_id)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify(message="Bad username or password"), 401


@app.route('/viewGrades', methods=['GET'])
@jwt_required()
def viewGrades():
    try:
        student_id=get_jwt_identity()

        # Get the user's info
        user = Student.query.filter_by(student_id=student_id).first().as_dict()
        user.pop('login_password')

        # Get the user's grades
        grades = db.session.query(Course.course_id, Course.class_id, Grade.grade_obtained)\
                .join(Grade, Grade.course_id == Course.course_id)\
                .filter(Grade.student_id == student_id)\
                .all()
    
        # Convert the results to a list of dictionaries
        grade_list = []
        for grade in grades:
            grade_dict = {
                'course_id': grade[0],
                'class_id': grade[1],
                'grade_obtained': grade[2]
            }
            grade_list.append(grade_dict)
        
        
        return jsonify(user=json.dumps(user), grades=grade_list), 200

    except Exception as e:
        return jsonify(message=str(e)), 500



@app.route('/viewProfile', methods=['GET'])
@jwt_required()
def viewProfile():
    try:
        student_id=get_jwt_identity()

        # Get the user's info
        user = Student.query.filter_by(student_id=student_id).first().as_dict()
        user.pop('login_password')
        return jsonify(user=user), 200
    except Exception as e:
        return jsonify(message=str(e)), 500

    
















from app import app, jwt, db
from flask import request, jsonify
from functools import wraps
from app.models import Student, Teacher, Grade, Course, Classroom
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import json 
from collections import defaultdict

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
        student_id = get_jwt_identity()

        # Get the user's info
        user = Student.query.filter_by(student_id=student_id).first().as_dict()
        user.pop('login_password')

        # Fetch the user's grades and course information
        grades = Grade.query.join(Course, Grade.course_id == Course.course_id) \
                    .join(Classroom, Classroom.class_id == Course.class_id) \
                    .filter(Classroom.student_id == student_id) \
                    .with_entities(Classroom.sem, Course.course_name, Course.description, Course.credits, Classroom.elective_type, Grade.grade_obtained.label('grade')) \
                    .all()

        # Group the grades by semester
        semesters = defaultdict(list)
        for grade in grades:
            semesters[grade.sem].append(grade._asdict())
            
        
        # Format the grades as a dictionary
        grade_dict = {}
        for sem, grades in semesters.items():
            grade_dict[f'sem{sem}'] = grades

        return jsonify(user=user, grades=grade_dict), 200

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


@app.route('/viewAllStudents', methods=['GET'])
def viewAllStudents():
    try:
        students = Student.query.all()
        student_list = []
        for student in students:
            student_dict = student.as_dict()
            student_list.append(student_dict)
        return jsonify(students=student_list), 200
    except Exception as e:
        return jsonify(message=str(e)), 500
    
















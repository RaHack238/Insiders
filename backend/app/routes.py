from app import app, jwt, db
from flask import request, jsonify
from functools import wraps
from app.models import Student, Teacher, Grade, Course, Classroom, ICard, ScholarshipDB
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import json 
from collections import defaultdict
from datetime import datetime


@app.route('/')
def home():
    return "Welcome To IIT Goa Ams Poral"

@app.route('/index', methods=['GET'])
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
        semesters = defaultdict(dict)
        for grade in grades:
            semesters[f'sem{grade.sem}'][grade.course_name] = grade._asdict()
            semesters[f'sem{grade.sem}'][grade.course_name].pop('course_name')
        
        return jsonify(user=user, grades=semesters), 200

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



@app.route('/userDetails', methods=['GET'])
@jwt_required()
def userDetails():
    try:
        student_id=get_jwt_identity()
        user=Student.query.filter_by(student_id=student_id).first().as_dict()
        user.pop('login_password')
        user.pop('department')
        user.pop('batch')
        return jsonify(user=user), 200
    except Exception as e:
        return jsonify(message=str(e)), 500


@app.route('/icardSubmit', methods=['POST'])
@jwt_required()
def icardSubmit():
    try:
        student_id=get_jwt_identity()
        data=request.get_json()
        sign=data['sign']
        image=data['image']
        icard=ICard(student_id=student_id, sign=sign, image=image)
        db.session.add(icard)
        db.session.commit()
    except Exception as e:
        return jsonify(message=str(e)), 500
    


@app.route('/submitScholarship', methods=['POST'])
@jwt_required()
def submitScholarship():
    try:
        student_id=get_jwt_identity()
        data=request.get_json()

        # Parse date strings into datetime objects and format as required
        otherAppliedScholarshipsStartDate = datetime.strptime(data['otherAppliedScholarshipsStartDate'], '%Y-%m-%d').strftime('%d-%m-%Y')
        otherAppliedScholarshipsEndDate = datetime.strptime(data['otherAppliedScholarshipsEndDate'], '%Y-%m-%d').strftime('%d-%m-%Y')
        ongoingScholarshipsStartDate = datetime.strptime(data['ongoingScholarshipsStartDate'], '%Y-%m-%d').strftime('%d-%m-%Y')
        ongoingScholarshipsEndDate = datetime.strptime(data['ongoingScholarshipsEndDate'], '%Y-%m-%d').strftime('%d-%m-%Y')

        # Create ScholarshipDB object with formatted dates
        scholarship_db = ScholarshipDB(
            student_id=student_id,
            otherAppliedScholarships=data['otherAppliedScholarships'],
            otherAppliedScholarshipsAmount=data['otherAppliedScholarshipsAmount'],
            otherAppliedScholarshipsOrganization=data['otherAppliedScholarshipsOrganization'],
            otherAppliedScholarshipsStartDate=otherAppliedScholarshipsStartDate,
            otherAppliedScholarshipsEndDate=otherAppliedScholarshipsEndDate,
            ongoingScholarships=data['ongoingScholarships'],
            ongoingScholarshipsAmount=data['ongoingScholarshipsAmount'],
            ongoingScholarshipsOrganization=data['ongoingScholarshipsOrganization'],
            ongoingScholarshipsStartDate=ongoingScholarshipsStartDate,
            ongoingScholarshipsEndDate=ongoingScholarshipsEndDate,
            bankName=data['bankName'],
            bankAccountNumber=data['bankAccountNumber'],
            bankIFSC=data['bankIFSC'],
            bankBranch=data['bankBranch'],
            fatherOccupation=data['fatherOccupation'],
            fatherIncome=data['fatherIncome'],
            motherOccupation=data['motherOccupation'],
            motherIncome=data['motherIncome'],
            guardianOccupation=data['guardianOccupation'],
            guardianIncome=data['guardianIncome']
        )

        db.session.add(scholarship_db)
        db.session.commit()
        return jsonify({'message': 'Scholarship submitted successfully'}), 200

    except Exception as e:
        print(str(e))
        return jsonify({'message': 'Something went wrong'}), 500

        


@app.route('/viewScholarship', methods=['GET'])
@jwt_required()
def viewScholarship():
    try:
        student_id=get_jwt_identity()
        scholarship = ScholarshipDB.query.filter_by(student_id=student_id).first()
        if scholarship:
            scholarship_dict = scholarship.as_dict()
            return jsonify(scholarship=scholarship_dict), 200
        else:
            return jsonify(message='No scholarship found'), 404

    except Exception as e:
        return jsonify(message=str(e)), 500












 
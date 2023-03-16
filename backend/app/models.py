from app import db

class BaseModel:
    def as_dict(self):
        return {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}

class Student(BaseModel,db.Model):
    _tablename_ = 'student'
    student_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    contact = db.Column(db.Integer)
    batch = db.Column(db.Integer)
    department = db.Column(db.String)
    login_password = db.Column(db.String)

    def __init__(self, student_id, name, contact, batch, department, login_password):
        self.student_id = student_id
        self.name = name
        self.contact = contact
        self.batch = batch
        self.department = department
        self.login_password = login_password


class Teacher(BaseModel,db.Model):
    _tablename_ = 'teacher'
    teacher_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    contact = db.Column(db.Integer)
    department = db.Column(db.String)
    login_password = db.Column(db.String)
    
    def __init__(self, teacher_id, name, contact, department, login_password):
        self.teacher_id = teacher_id
        self.name = name
        self.contact = contact
        self.department = department
        self.login_password = login_password

class Grade(BaseModel,db.Model):
    _tablename_ = 'grade'
    student_id = db.Column(
        db.Integer,
        db.ForeignKey('student.student_id'),
        primary_key = True
        )
    course_id = db.Column(
        db.String,
        db.ForeignKey('course.course_id'),
        primary_key = True
        )
    grade_obtained = db.Column(db.String)

    def __init__(self, student_id, course_id, grade_obtained):
        self.student_id = student_id
        self.course_id = course_id
        self.grade_obtained = grade_obtained


class ExamResult(BaseModel,db.Model):
    _tablename_ = 'exam_result'
    exam_id = db.Column(db.String, primary_key=True)
    student_id = db.Column(
        db.Integer,
        db.ForeignKey('student.student_id')
        )
    course_id = db.Column(
        db.String,
        db.ForeignKey('course.course_id')
        )
    total_marks = db.Column(db.Integer)
    marks_scored = db.Column(db.Integer)
    exam_name = db.Column(db.String)
    exam_type = db.Column(db.String)

    def __init__(self, exam_id, student_id, course_id, total_marks, marks_scored, exam_name, exam_type):
        self.exam_id = exam_id
        self.student_id = student_id
        self.course_id = course_id
        self.total_marks = total_marks
        self.marks_scored = marks_scored
        self.exam_name = exam_name
        self.exam_type = exam_type

class Course(BaseModel,db.Model):
    _tablename_ = 'course'
    course_id = db.Column(db.String, primary_key=True)
    description = db.Column(db.String)
    class_id = db.Column(db.String)
    teacher_id = db.Column(
        db.Integer,
        db.ForeignKey('teacher.teacher_id')
        )
    credits = db.Column(db.Integer)
    course_name = db.Column(db.String)

    def __init__(self, course_id, description, class_id, teacher_id, credits, course_name):
        self.course_id = course_id
        self.description = description
        self.class_id = class_id
        self.teacher_id = teacher_id
        self.credits = credits
        self.course_name = course_name



class Classroom(BaseModel,db.Model):
    _tablename_='classroom'
    index=db.Column(db.Integer, primary_key=True)
    class_id=db.Column(db.String)
    student_id=db.Column(db.Integer)
    sem=db.Column(db.Integer)
    elective_type = db.Column(db.String)

    def __init__(self, index, class_id, student_id, sem, elective_type):
        self.index = index
        self.class_id = class_id
        self.student_id = student_id
        self.sem = sem
        self.elective_type = elective_type

# db.create_all()

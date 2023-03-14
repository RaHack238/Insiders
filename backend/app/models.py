from app import db

class BaseModel:
    def as_dict(self):
        return {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}

class Student(BaseModel,db.Model):
    _tablename_ = 'student'
    student_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    contact = db.Column(db.Integer)
    batch = db.Column(db.String)
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

class Course(BaseModel,db.Model):
    _tablename_ = 'course'
    course_id = db.Column(db.String, primary_key=True)
    description = db.Column(db.String)
    class_id = db.Column(db.String)
    teacher_id = db.Column(
        db.Integer,
        db.ForeignKey('teacher.teacher_id')
        )

class Classroom(BaseModel,db.Model):
    _tablename_='classroom'
    class_id=db.Column(
        db.String,
        primary_key=True
        )
    student_id=db.Column(db.Integer)

# db.create_all()

from app import app, db
from app.models import Student, Teacher, Grade, ExamResult, Course, Classroom

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Student': Student, 'Teacher': Teacher, 'Grade': Grade, 'ExamResult': ExamResult, 'Course': Course, 'Classroom': Classroom}

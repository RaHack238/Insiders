username = 'sql12602089'
password = 'ggJNImj2UA'
hostname = 'http://sql12.freesqldatabase.com/'
database_name = 'sql12602089'

class Config(object):
    SQLALCHEMY_DATABASE_URI = f'mysql+pymysql://{username}:{password}@{hostname}:3307/{database_name}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
username = 'sql12604183'
password = 'ZdNaA3jEQb'
hostname = 'http://sql12.freemysqlhosting.net'
database_name = 'sql12604183'
port = 3306

class Config(object):
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{username}:{password}@{hostname}/{database_name}?port={port}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
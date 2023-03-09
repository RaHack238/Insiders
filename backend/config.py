username = 'sql12604183'
password = 'ZdNaA3jEQb'
hostname = 'sql12.freemysqlhosting.net'
database_name = 'sql12604183'
port = 3306

class Config(object):
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{username}:{password}@{hostname}/{database_name}?port={port}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY="Insiders_secret_key"
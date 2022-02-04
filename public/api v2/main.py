from flask import Flask
from flask_restx import Resource, Api
import pymysql, asyncio

app = Flask(__name__)
api = Api(app)

db = pymysql.connect(
    host="192.168.147.147",
    user="admin",
    passwd="pwd_secret",
    db="meteo"
    )

@api.route("/datarecept")
class datarecept(Resource):
    def post(self):
        temp = api.payload['temp']
        hum = api.payload['hum']
        print(temp)
        print(hum)
        mycursor = db.cursor()
        sql = "INSERT INTO meteo.releve \
               (id_sonde, temp, hum,time)\
               VALUES (3, " + str(temp) + ", " + str(hum) + ", NOW()+1);"
        mycursor.execute(sql)
        db.commit()
        lastrowid = mycursor.lastrowid
        print(lastrowid)
        print(mycursor.rowcount, "record inserted")
        # with db.cursor() as cursor :
        #     sql = "SELECT * from Relever order by Relever_id desc limit 1;"
        return {"result": "data recept ok"}

@api.route("/get5releve")
class get5releve(Resource):
    async def get(self):
        mycursor = db.cursor()
        sql = "SELECT * FROM releve;"
        mycursor.execute(sql)
        result = mycursor.fetchall()
        print(result)
        return(result)
        db.commit()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5001', debug=True)

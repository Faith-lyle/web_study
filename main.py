from flask import Flask
from flask import render_template
from flask import request
from utils import *
import time

app = Flask(__name__, template_folder='./templates', static_folder='./static')

error = """      
<!doctype html>
<html lang=en>
<title>404 Not Found</title>
<h1>Not Found</h1>
<p>The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.</p>
        """


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cap')
def cap():
    return render_template('cap.html')


@app.route('/capSummary')
def cap_summary():
    return get_cap_summary()


@app.route('/main')
def main():
    username = request.values.get('username')
    pwd = request.values.get('pwd')
    if determine_pwd(username, pwd):
        return render_template('main.html', name=username, text='这是首页', pwd=pwd)
    else:
        return error


@app.route('/time')
def update_time():
    t = time.strftime('%Y年%m月%d日 %X')
    return t


@app.route('/login', methods=["GET", "POST"])
def login():
    username = request.values.get('username')
    pwd = request.values.get('pwd')
    # print(username,pwd)
    if determine_pwd(username, pwd):
        return "ok"
    else:
        return "ng"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

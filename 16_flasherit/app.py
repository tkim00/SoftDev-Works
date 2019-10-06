# Taejoon Kim
# SoftDev1 pd09
# K15 -- Do I Know You?/Sessions/Creating a webpage that allows user to login
# 2019-10-3

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def login():
	return render_template("login.html", foo = "Login Page",
							user = request.args['username'],
							pword = request.args['password'])

@app.route("/Welcome")
def welcome():
	return render_template("welcome.html", foo = "Welcome Page")

@app.route("/Fail")
def fail():
	return render_template("fail.html", foo = "Fail Page")

if __name__ == "__main__":
	app.debug = True
	app.run()

# Taejoon Kim
# SoftDev1 pd09
# K16 -- Oh Yes, Perhaps I do.../Inheritance/Creating a webpage that allows user to login
# 2019-10-3

from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def login():
	return render_template("login.html")

@app.route("/Welcome")
def welcome():
	if request.args['username'] == "Bob" and request.args['password'] == "Green Cheese":
        return render_template("welcome.html",
                                user = request.args['username'])
    elif request.args['username'] != "Bob":
        return render_template("failuser.html",
                                user = request.args['username'])
    else:
        return render_template("failpword.html",
                                user = request.args['username'])

if __name__ == "__main__":
	app.debug = True
	app.run()

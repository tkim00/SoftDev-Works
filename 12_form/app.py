from flask import Flask, render_template, request
app = Flask(__name__)
#@app.route("/")


@app.route("/auth")
def render():
    render_template("foo.html")
    print(app)
    print("//////////////}}}}}}}}}}}}}}}}}}}}}}}}")
    print(request)
    print("################################################")
    print(request.args)
    return "this is foo"


if __name__ == "__main__":
    app.debug = True
    app.run()

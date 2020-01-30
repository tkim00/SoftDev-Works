# Taejoon Kim
# SoftDev1 pd09
# K#25: Getting More REST
# 2019-11-13

from flask import Flask, render_template
import urllib.request as request
from urllib.request import urlopen
import json

app = Flask(__name__)

@app.route("/")
def root():
    url = urlopen("https://api.nasa.gov/planetary/apod?api_key=PEVlo4bmgtRlLacqEUSHmR7N4Bg2myWLTAHYf5nT")
    response = url.read()
    data = json.loads(response)
    return render_template("image.html", image = data['url'])

@app.route("/lorem")
def lorem():
    url = urlopen("https://loripsum.net/")
    response = url.read()
    data = json.loads(response)
    return render_template("lore.html", paragraph = data['url'])

if __name__ == "__main__":
    app.debug = True
    app.run()

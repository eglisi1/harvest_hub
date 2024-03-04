from flask import Flask, render_template

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home() -> str:
    return render_template("index.html")


@app.route("/submit", methods=["POST"])
def submit() -> str:
    return render_template("index.html")

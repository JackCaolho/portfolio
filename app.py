from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download')
def download_file():
    return send_from_directory('static', 'GUSTAVO ALLIFY CURRICULO.pdf', as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)


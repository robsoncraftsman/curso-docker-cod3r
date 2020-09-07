import psycopg2
import os
import json
from bottle import Bottle, request


class Sender(Bottle):
    def __init__(self):
        super().__init__()
        self.route('/', method='POST', callback=self.send)

        db_host = os.getenv('DB_HOST', 'db')
        db_user = os.getenv('DB_USER', 'admin')
        db_name = os.getenv('DB_NAME', 'email')
        db_password = os.getenv('DB_PASSWORD', 'pwd')
        dsn = f'dbname={db_name} user={db_user} host={db_host} password={db_password}'
        self.conn = psycopg2.connect(dsn)

    def register_message(self, assunto, mensagem):
        SQL = 'INSERT INTO emails (assunto, mensagem) VALUES (%s, %s)'
        cur = self.conn.cursor()
        cur.execute(SQL, (assunto, mensagem))
        self.conn.commit()
        cur.close()

        print('Mensagem registrada')

    def send(self):
        assunto = request.forms.get('assunto')
        mensagem = request.forms.get('mensagem')

        self.register_message(assunto, mensagem)
        return 'Mensagem enfileirada - Assunto: "{}" Mensagem: "{}"'.format(
            assunto, mensagem
        )


if __name__ == '__main__':
    sender = Sender()
    sender.run(host='0.0.0.0', port=8080, debug=True)

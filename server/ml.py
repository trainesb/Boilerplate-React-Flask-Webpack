import click
from flask import session
from datetime import datetime
from app import create_app, db
from app.models.User import User
from flask_login import current_user

app = create_app()

@app.before_request
def update_last_active():
    session.permanent = False
    if current_user.is_authenticated:
        current_user.last_active = datetime.now()
        db.session.add(current_user)
        db.session.commit()

@app.cli.command('db_init')
def db_init():
    '''Deletes all users and creates an admin user.'''
    User.query.delete()
    user = User()
    user.username = 'admin'
    user.set_password('admin')
    user.role = 'A'
    db.session.add(user)
    db.session.commit()

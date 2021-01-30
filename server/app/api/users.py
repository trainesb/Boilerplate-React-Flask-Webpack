from app import db
from app.api import bp
from flask import request
from datetime import datetime
from app.models.User import User
from flask_login import login_user, logout_user

@bp.route('/api/login', methods=['POST'])
def login():
    '''Handle user login'''
    data = request.get_json()
    print(data)
    user = User.query.filter_by(username=data.get('username')).first()
    if user is None: return {'status': False, 'error': data.get('username') + "doesn't exist!"}
    if not user.check_password(data.get('password')): return {'status': False, 'error': 'Incorrect password!'}
    user.last_active = datetime.now()
    db.session.add(user)
    login_user(user, remember=False)
    return {'status': True, 'user': user._toDict()}

@bp.route('/api/logout', methods=['GET'])
def logout():
    '''Handle user logout'''
    logout_user()
    return {'status': True}

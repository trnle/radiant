from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('User is already registered with that email.')

def password_match(form, field):
    password = field.data
    repeat_password = field.data
    if password != repeat_password:
        raise ValidationError('Passwords must match.')

class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists, Email(message='Must be a valid email.')])
    password = StringField('password', validators=[DataRequired()])
    repeatPassword = StringField('repeat_password', validators=[DataRequired(), password_match])

from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Entry, db

entry_routes = Blueprint('entries', __name__)

@entry_routes.route('/')
@login_required
def user_entries():

  entries = Entry.query.filter(Entry.user_id == current_user.id).all()

  return jsonify([entry.to_dict() for entry in entries])
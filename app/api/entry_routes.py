from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Entry, db

entry_routes = Blueprint('entries', __name__)

@entry_routes.route('/')
@login_required
def user_entries():
  entries = Entry.query.order_by(Entry.user_id == current_user.id, Entry.created_at.desc()).all()

  return jsonify([entry.to_dict() for entry in entries])

@entry_routes.route('/<int:id>')
@login_required
def entry(id):
  entry = Entry.query.get(id)

  return entry.to_dict()
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Entry, db
from datetime import date

entry_routes = Blueprint('entries', __name__)

@entry_routes.route('/')
@login_required
def user_entries():
  entries = Entry.query.order_by(Entry.created_at.desc()).filter(Entry.user_id == current_user.id).all()

  return jsonify([entry.to_dict() for entry in entries])

@entry_routes.route('/<int:id>')
@login_required
def entry(id):
  entry = Entry.query.get(id)

  return entry.to_dict()

@entry_routes.route('/existing')
@login_required
def existing_entry():
  entry = Entry.query.filter(Entry.user_id == current_user.id, Entry.created_at == date.today().strftime(('%b %d, %Y'))).all()

  if not len(entry):
    return {}
  else:
    entry = Entry.query.filter(Entry.user_id == current_user.id, Entry.created_at == date.today().strftime(('%b %d, %Y'))).one()
    return entry.to_dict()


@entry_routes.route('/', methods=['POST'])
@login_required
def create_entry():
  entry = Entry.query.filter(Entry.user_id == current_user.id, Entry.created_at == request.json['created_at']).all();

  if not len(entry):
    entry = Entry(**request.json, user_id=current_user.id)
    
    db.session.add(entry)
    db.session.commit()

    return entry.to_dict()

  else:
    existingEntry = entry[0]

    if request.json['pm_products']:
      existingEntry.pm_products = request.json['pm_products']
    elif request.json['am_products']:
      existingEntry.am_products = request.json['am_products']

    db.session.add(existingEntry)
    db.session.commit()
    
    return existingEntry.to_dict()
 

@entry_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
@login_required
def update_entry(id):
  entry = Entry.query.get(id)

  if request.method == 'PUT':
    if request.json['img_url']:
      entry.img_url = request.json['img_url']
    if request.json['description']:
      entry.description = request.json['description']
    if request.json['rating']:
      entry.rating = request.json['rating']
    if request.json['am_products']:
      entry.am_products = request.json['am_products']
    if request.json['pm_products']:
      entry.pm_products = request.json['pm_products']

    db.session.add(entry)
 
  elif request.method == 'DELETE':
    db.session.delete(entry)

  db.session.commit()

  return entry.to_dict()
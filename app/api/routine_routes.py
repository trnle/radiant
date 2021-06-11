from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Routine, User, Product, db

routine_routes = Blueprint('routines', __name__)

@routine_routes.route('/')
@login_required
def user_routines():
  # retrieve user routines
  routines = Routine.query.filter(Routine.user_id == current_user.id).all()

  # for each routine, find products added to each routine 
  routine_products = {}
  for routine in routines:
    for product in routine.products:
      if routine.routine_type in routine_products:
        routine_products[routine.routine_type].append(product.to_dict())
      else:
        routine_products[routine.routine_type] = [product.to_dict()]

  return {'user_routines': [routine.to_dict() for routine in routines], 'user_routine_products': routine_products}
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Routine, User, Product, db

routine_product_routes = Blueprint('routine_products', __name__)

@routine_product_routes.route('/', methods=['POST', 'DELETE'])
@login_required
def add_routine_product():
  routines = Routine.query.filter(Routine.user_id == current_user.id).all()

  for routine in routines:
    if routine.routine_type == request.json['routine_type']:
      routineToAddTo = routine

  routine_product = Product.query.get(request.json['product_id'])

  # if request.method == 'POST':
  routineToAddTo.products.append(routine_product)

  db.session.add(routineToAddTo)
  db.session.commit()

  return routineToAddTo.to_dict()
  # elif request.method == 'DELETE':
    # db.session.delete()

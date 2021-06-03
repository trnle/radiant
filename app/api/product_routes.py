from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Product, User, db
# import requests

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
@login_required
def products():
  products = Product.query.all()
  return jsonify([product.to_dict() for product in products])

@product_routes.route('/<int:id>')
@login_required
def product(id):
  product = Product.query.get(id)
  user = User.query.get(product.user_id).username
  return {'product': product.to_dict(), 'user': user}

@product_routes.route('/', methods=['POST'])
@login_required
def create_product():
  # print(request.get_json()['productData'], 'testtetetsettw')
  product = Product(**request.json)

  db.session.add(product)
  db.session.commit()

  return product.to_dict()

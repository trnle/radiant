from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Product, User, db

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
  product = Product(**request.json)

  db.session.add(product)
  db.session.commit()

  return product.to_dict()

@product_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
@login_required
def update_product(id):
  product = Product.query.get(id)
  
  if request.method == 'PUT':
    product.product_name = request.json['product_name']
    product.brand_name = request.json['brand_name']
    product.skincare_step = request.json['skincare_step']
    product.target = request.json['target']
    product.am_use = request.json['am_use']
    product.pm_use = request.json['pm_use']
    product.description = request.json['description']
    product.directions = request.json['directions']
    product.precautions = request.json['precautions']
    product.ingredients = request.json['ingredients']
    product.img_url = request.json['img_url']

    db.session.add(product)

  elif request.method == 'DELETE':
    db.session.delete(product)
  
  db.session.commit()
  
  return product.to_dict()

    
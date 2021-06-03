from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product, User

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
  json_data = request.get_json()
  print(json_data)

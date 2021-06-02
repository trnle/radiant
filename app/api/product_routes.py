from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product

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
  return product.to_dict()

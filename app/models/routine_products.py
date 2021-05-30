from .db import db

class RoutineProduct(db.Model):
  __tablename__ = 'routine_products'

  id = db.Column(db.Integer, primary_key=True)
  routine_id = db.Column(db.Integer, nullable=False)
  product_id = db.Column(db.Integer, nullable=False)

  routine = db.relationship('Routine', back_populates='routine_products')
  products = db.relationship('Product', back_populates='routine_products')
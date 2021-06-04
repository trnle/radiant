# from .db import db

# class RoutineProduct(db.Model):
#   __tablename__ = 'routine_products'

#   id = db.Column(db.Integer, primary_key=True)
#   routine_id = db.Column(db.Integer, db.ForeignKey('routines.id'), nullable=False)
#   product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)

#   routine = db.relationship('Routine', back_populates='routine_products')
#   products = db.relationship('Product', back_populates='routine_products')

#   def to_dict(self):
#     return {
#       'id': self.id,
#       'routine_id': self.routine_id,
#       'product_id': self.product_id
#     }

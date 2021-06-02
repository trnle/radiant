from .db import db
from .product import routine_products_table

class Routine(db.Model):
  __tablename__ = 'routines'

  id = db.Column(db.Integer, primary_key=True)
  routine_type = db.Column(db.String, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  user = db.relationship('User', back_populates='routines')
  products = db.relationship('Product', secondary=routine_products_table, back_populates='routines')

  def to_dict(self):
    return {
      'id': self.id,
      'routine_type': self.routine_type,
      'user_id': self.user_id
    }

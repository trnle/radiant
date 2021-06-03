from .db import db

routine_products_table = db.Table('routine_products_table',
  db.Column('routine_id', db.Integer, db.ForeignKey('routines.id'), primary_key=True),
  db.Column('product_id', db.Integer, db.ForeignKey('products.id'), primary_key=True)
)

class Product(db.Model):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key=True)
  product_name = db.Column(db.String, nullable=False)
  brand_name = db.Column(db.String, nullable=False)
  skincare_step = db.Column(db.String, default='Miscellaneous', nullable=False)
  target = db.Column(db.String, default='N/A')
  am_use = db.Column(db.Boolean, default=False)
  pm_use = db.Column(db.Boolean, default=False)
  description = db.Column(db.Text, nullable=False)
  directions = db.Column(db.Text, default='N/A')
  precautions = db.Column(db.String, default='N/A')
  ingredients = db.Column(db.Text, default='N/A')
  img_url = db.Column(db.Text)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  routines = db.relationship('Routine', secondary=routine_products_table, back_populates='products')

  def to_dict(self):
    return {
      'id': self.id,
      'product_name': self.product_name,
      'brand_name': self.brand_name,
      'skincare_step': self.skincare_step,
      'target': self.target,
      'am_use': self.am_use,
      'pm_use': self.pm_use,
      'description': self.description,
      'directions': self.directions,
      'precautions': self.precautions,
      'ingredients': self.ingredients,
      'img_url': self.img_url,
      'user_id': self.user_id
    }

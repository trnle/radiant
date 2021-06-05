from .db import db
from datetime import date

class Entry(db.Model):
  __tablename__ = 'entries'

  id = db.Column(db.Integer, primary_key=True)
  img_url = db.Column(db.Text)
  description = db.Column(db.Text)
  rating = db.Column(db.Integer)
  am_products = db.Column(db.Text)
  pm_products = db.Column(db.Text)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  created_at = db.Column(db.String, default=date.today().strftime(('%b %d, %Y')), nullable=False)

  user = db.relationship('User', back_populates='entries')

  def to_dict(self):
    return {
      'id': self.id,
      'img_url': self.img_url,
      'description': self.description,
      'rating': self.rating,
      'am_products': self.am_products,
      'pm_products': self.pm_products,
      'user_id': self.user_id,
      'created_at': self.created_at
    }

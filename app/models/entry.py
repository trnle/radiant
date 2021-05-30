from .db import db

class Entry(db.Model):
  __tablename__ = 'entries'

  id = db.Column(db.Integer, primary_key=True)
  img_url = db.Column(db.Text)
  description = db.Column(db.Text)
  rating = db.Column(db.Integer)
  am_products = db.Column(db.Text)
  pm_products = db.Column(db.Text)
  user_id = db.Column(db.Integer, nullable=False)

  user = db.relationship('User', back_populates='entries')

  def to_dict(self):
    return {
      "id": self.id,
      "img_url": self.img_url,
      "description": self.description,
      "am_products": self.am_products,
      "pm_products": self.pm_products,
      "user_id": self.user_id
    }

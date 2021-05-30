from .db import db

class Routine(db.Model):
  __tablename__ = 'routines'

  id = db.Column(db.Integer, primary_key=True)
  routine_type = db.Column(db.String, nullable=False)
  user_id = db.Column(db.Integer, nullable=False)

  user = db.relationship('User', back_populates='routines')
  routine_products = db.relationship('RoutineProduct', back_populates='routine')

  def to_dict(self):
    return {
      "id": self.id,
      "routine_type": self.routine_type,
      "user_id": self.user_id
    }

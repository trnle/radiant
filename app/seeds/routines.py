from app.models import db, Routine

def seed_routines():
  routine1 = Routine(
    routine_type='AM',
    user_id=1
  )

  routine2 = Routine(
    routine_type='PM',
    user_id=1
  )

  routine3 = Routine(
    routine_type='AM',
    user_id=2
  )

  routine4 = Routine(
    routine_type='PM',
    user_id=2
  )

  db.session.add(routine1)
  db.session.add(routine2)
  db.session.add(routine3)
  db.session.add(routine4)

  db.session.commit()


def undo_routines():
  db.session.execute('TRUNCATE routines RESTART IDENTITY CASCADE;')
  db.session.commit()

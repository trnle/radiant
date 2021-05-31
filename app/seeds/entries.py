from app.models import db, Entry

def seed_entries():
  entry1 = Entry(
    description='',
    rating='7',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 13, 2021'
  )

  entry2 = Entry(
    description='',
    rating='5',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 14, 2021'
  )

  entry3 = Entry(
    description='',
    rating='7',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 17, 2021'
  )

  entry4 = Entry(
    description='',
    rating='7',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 19, 2021'
  )

  entry5 = Entry(
    description='',
    rating='7',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 21, 2021'
  )

  entry6 = Entry(
    description='',
    rating='7',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 24, 2021'
  )

  entry7 = Entry(
    description='',
    rating='7',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 26, 2021'
  )

  entry8 = Entry(
    description='',
    rating='7',
    am_products='',
    pm_products='',
    user_id=1,
    created_at='May 27, 2021'
  )

  db.session.add(entries1)
  db.session.add(entries2)
  db.session.add(entries3)
  db.session.add(entries4)
  db.session.add(entries5)
  db.session.add(entries6)
  db.session.add(entries7)
  db.session.add(entries8)

  db.session.commit()

def undo_entries():
  db.session.execute('TRUNCATE entries RESTART IDENTITY CASCADE;')
  db.session.commit()

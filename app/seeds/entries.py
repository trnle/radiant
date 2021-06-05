from app.models import db, Entry

def seed_entries():
  entry1 = Entry(
    description='My skin feels really dry today.',
    rating=3,
    am_products='Daily UV Defense Sunscreen SPF 36',
    pm_products='The Rice Wash Skin-Softening Cleanser',
    user_id=2,
    created_at='May 13, 2021'
  )

  entry2 = Entry(
    description='Skin feels a bit better today',
    rating=5,
    am_products='Superfood Antioxidant Cleanser',
    pm_products='10% Azelaic Acid Booster',
    user_id=2,
    created_at='May 14, 2021'
  )

  entry3 = Entry(
    description='',
    rating=7,
    am_products='Niacinamide 10% + Zinc 1%',
    pm_products='Truth Serum®',
    user_id=2,
    created_at='May 17, 2021'
  )

  entry4 = Entry(
    description='I\'m very happy with my skin today!! Feeling great',
    rating=9,
    am_products='Niacinamide 10% + Zinc 1%',
    pm_products='Niacinamide 10% + Zinc 1%, The Rice Wash Skin-Softening Cleanser',
    user_id=2,
    created_at='May 19, 2021'
  )

  entry5 = Entry(
    description='',
    rating=7,
    am_products='Niacinamide 10% + Zinc 1%, Daily UV Defense Sunscreen SPF 36',
    pm_products='Niacinamide 10% + Zinc 1%, Water Sleeping Mask',
    user_id=2,
    created_at='May 21, 2021'
  )

  db.session.add(entry1)
  db.session.add(entry2)
  db.session.add(entry3)
  db.session.add(entry4)
  db.session.add(entry5)

  db.session.commit()

def undo_entries():
  db.session.execute('TRUNCATE entries RESTART IDENTITY CASCADE;')
  db.session.commit()

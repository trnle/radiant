from app.models import db, RoutineProduct

def seed_routine_products():
  routine_product1 = RoutineProduct(
    routine_id=1,
    product_id=26
  )

  routine_product2 = RoutineProduct(
    routine_id=1,
    product_id=1
  )

  routine_product3 = RoutineProduct(
    routine_id=2,
    product_id=1
  )

  routine_product4 = RoutineProduct(
    routine_id=1,
    product_id=8
  )
  
  routine_product5 = RoutineProduct(
    routine_id=2,
    product_id=8
  )

  routine_product6 = RoutineProduct(
    routine_id=2,
    product_id=9
  )

  routine_product7 = RoutineProduct(
    routine_id=1,
    product_id=13
  )

  routine_product8 = RoutineProduct(
    routine_id=2,
    product_id=13
  )

  routine_product9 = RoutineProduct(
    routine_id=1,
    product_id=11
  )

  routine_product10 = RoutineProduct(
    routine_id=2,
    product_id=11
  )

  routine_product11 = RoutineProduct(
    routine_id=2,
    product_id=17
  )

  routine_product12 = RoutineProduct(
    routine_id=1,
    product_id=21
  )

  routine_product13 = RoutineProduct(
    routine_id=2,
    product_id=21
  )

  routine_product14 = RoutineProduct(
    routine_id=1,
    product_id=22
  )

  routine_product15 = RoutineProduct(
    routine_id=1,
    product_id=5
  )

  routine_product16 = RoutineProduct(
    routine_id=2,
    product_id=5
  )

  routine_product17 = RoutineProduct(
    routine_id=2,
    product_id=19
  )

  routine_product18 = RoutineProduct(
    routine_id=1,
    product_id=24
  )

  db.session.add(routine_product1)
  db.session.add(routine_product2)
  db.session.add(routine_product3)
  db.session.add(routine_product4)
  db.session.add(routine_product5)
  db.session.add(routine_product6)
  db.session.add(routine_product7)
  db.session.add(routine_product8)
  db.session.add(routine_product9)
  db.session.add(routine_product10)
  db.session.add(routine_product11)
  db.session.add(routine_product12)
  db.session.add(routine_product13)
  db.session.add(routine_product14)
  db.session.add(routine_product15)
  db.session.add(routine_product16)
  db.session.add(routine_product17)
  db.session.add(routine_product18)

  db.session.commit()


def undo_routine_products():
  db.session.execute('TRUNCATE routine_products RESTART IDENTITY CASCADE;')
  db.session.commit()

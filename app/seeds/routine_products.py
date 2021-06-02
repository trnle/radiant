from app.models import db, Routine, Product

def seed_routine_products():
  # Demo user's AM routine products
  routine3 = Routine.query.get(3)

  routine_product1 = Product.query.get(26)
  routine3.products.append(routine_product1)

  routine_product2 = Product.query.get(1)
  routine3.products.append(routine_product2)

  routine_product3 = Product.query.get(8)
  routine3.products.append(routine_product3)

  routine_product4 = Product.query.get(13)
  routine3.products.append(routine_product4)

  routine_product5 = Product.query.get(11)
  routine3.products.append(routine_product5)

  routine_product6 = Product.query.get(21)
  routine3.products.append(routine_product6)

  routine_product7 = Product.query.get(22)
  routine3.products.append(routine_product7)

  routine_product8 = Product.query.get(5)
  routine3.products.append(routine_product8)

  routine_product9 = Product.query.get(2)
  routine3.products.append(routine_product9)

  # Demo user's PM routine products
  routine4 = Routine.query.get(4)

  routine_product10 = Product.query.get(1)
  routine4.products.append(routine_product10)

  routine_product11 = Product.query.get(8)
  routine4.products.append(routine_product11)

  routine_product12 = Product.query.get(9)
  routine4.products.append(routine_product12)

  routine_product13 = Product.query.get(13)
  routine4.products.append(routine_product13)

  routine_product14 = Product.query.get(17)
  routine4.products.append(routine_product14)

  routine_product15 = Product.query.get(26)
  routine4.products.append(routine_product15)

  routine_product16 = Product.query.get(19)
  routine4.products.append(routine_product16)

  routine_product17 = Product.query.get(5)
  routine4.products.append(routine_product17)

  routine_product18 = Product.query.get(17)
  routine4.products.append(routine_product18)

  db.session.add(routine3)
  db.session.add(routine4)

  db.session.commit()


def undo_routine_products():
  db.session.execute('TRUNCATE routine_products_table RESTART IDENTITY CASCADE;')
  db.session.commit()

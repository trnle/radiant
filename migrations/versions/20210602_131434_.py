"""empty message

Revision ID: d58133d14a2c
Revises: 993d04566921
Create Date: 2021-06-02 13:14:34.643495

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd58133d14a2c'
down_revision = '993d04566921'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('products', sa.Column('directions', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('products', 'directions')
    # ### end Alembic commands ###

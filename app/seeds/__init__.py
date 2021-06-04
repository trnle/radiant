from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .routines import seed_routines, undo_routines
from .routine_products import seed_routine_products, undo_routine_products
from .entries import seed_entries, undo_entries

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_products()
    seed_routines()
    seed_routine_products()
    seed_entries()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_products()
    undo_routines()
    undo_routine_products()
    undo_entries()
    # Add other undo functions here

from AussieBuilt.settings.base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('AUSSIEBUILT_SECRET_KEY')

ALLOWED_HOSTS = [
    '127.0.0.1',
    '127.0.0.1:8000',
]
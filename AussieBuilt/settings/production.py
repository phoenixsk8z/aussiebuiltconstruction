from AussieBuilt.settings.base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

ALLOWED_HOSTS = [
    'aussiebuiltconstruction.com',
    'www.aussiebuiltconstruction.com',
    'aussiebuiltconstruction.herokuapp.com',
]

# Application definition
INSTALLED_APPS = [
    'AussieBuiltWebsite',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]


# SECURE CSFR COOKIE
CSRF_COOKIE_SECURE = True


STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# HTTPS SETTINGS 
SESSION_COOKIE_SECURE = True
CSFR_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True

# HSTS SETTINGS 
SECURE_HSTS_SECONDS = 31536000     # ~1 YEAR
SECURE_HSTS_PRELOAD = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True

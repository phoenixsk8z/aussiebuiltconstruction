from AussieBuilt.settings.base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
with open(os.path.join(BASE_DIR, 'secret_key.txt')) as key:
    SECRET_KEY = key.read().strip()

ALLOWED_HOSTS = [
    'aussiebuiltconstruction.com',
    'www.aussiebuiltconstruction.com',
    'aussiebuiltconstruction.herokuapp.com',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
]


# SECURE CSFR COOKIE
CSRF_COOKIE_SECURE = True



# HTTPS SETTINGS 
SESSION_COOKIE_SECURE = True
CSFR_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True

# HSTS SETTINGS 
SECURE_HSTS_SECONDS = 3153600     # ~1 YEAR
SECURE_HSTS_PRELOAD = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True


STATIC_ROOT = BASE_DIR / 'staticfiles'

# STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'
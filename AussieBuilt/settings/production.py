from AussieBuilt.settings.base import *

from pathlib import Path

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "v_$pl8p1goimo4_o3cpnthm(1l(1zzmaxuk(^o%gf=wy6$8)hk"

ALLOWED_HOSTS = [
    'aussiebuiltconstruction.com',
    'www.aussiebuiltconstruction.com',
    'aussiebuiltconstruction.herokuapp.com',
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


STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
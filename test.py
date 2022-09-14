import secrets
allowed_chars = [chr(i) for i in range(0x21, 0x7F)]
key_length = 80
key = ''.join(secrets.choice(allowed_chars) for i in range(key_length))

print(key)
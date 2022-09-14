from django import forms
from captcha.fields import ReCaptchaField

class EmailForm(forms.Form):
    email = forms.EmailField()

class FormWithCaptcha(forms.Form):
    captcha = ReCaptchaField()

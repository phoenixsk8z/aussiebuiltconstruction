from django.shortcuts import redirect, render
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.conf import settings
from django.urls import reverse
from AussieBuiltWebsite.forms import EmailForm
from AussieBuiltWebsite.forms import FormWithCaptcha
from email.message import EmailMessage
import smtplib
import ssl
import os

def contact(request):
    
    captchaContext = {
        "captcha": FormWithCaptcha,
    }
    form = EmailForm()
    smtp_server = "smtp.gmail.com"
    port = 587 #Gmail TLS Port
    sender_email = os.environ.get("EMAIL")
    sender_password = os.environ.get("EMAIL_PASSWORD")
    aussieBuiltConstructionEmail = "Edward@aussiebuiltconstruction.com"

    # Create a secure SSL context
    context = ssl.create_default_context()

    if request.method == "POST":
        form = EmailForm(request.POST)
        
        if form.is_valid():
            try:
                name = request.POST["name"]
                receiver_email = request.POST["email"]
                subject = request.POST["subject"]
                phone = request.POST["phone"]
                message = request.POST["message"]
                me = 'aussiebuiltsender@gmail.com'

                body = f"""
                Name: {name} 
                Phone #: {phone} 
                Email: {receiver_email}
                Subject: {subject}
                Body: {message}
                """

                customerThankYouMessage = f"Thanks for reaching out {name}, Aussie Built Construction will get back to you as soon as possible."

                defaultContext = ssl.create_default_context()
                Email = EmailMessage()

                Email['From'] = sender_email
                Email['To'] = receiver_email
                Email['Subject'] = subject
                Email.set_content(body)

                with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=defaultContext) as smtp:
                    smtp.login(sender_email, sender_password)
                    smtp.sendmail(sender_email, receiver_email, Email.as_string())
                    Email = EmailMessage()
                    Email['From'] = sender_email
                    Email['To'] = receiver_email
                    Email['Subject'] = f"Aussie Built Construction - {subject}"
                    Email.set_content(customerThankYouMessage)
                    smtp.sendmail(sender_email, receiver_email, Email.as_string())

            except Exception as error:
                # Print Any Error Messages :)
                print(error)

        return HttpResponseRedirect(reverse("contact"))

    else: 
        return render(request, "AussieBuilt/contact.html", captchaContext)
        
def home(request):
    return render(request, "AussieBuilt/home.html")

def about(request):
    return render(request, "AussieBuilt/about.html")


def kitchens(request):
    return render(request, "AussieBuilt/kitchens.html")

def bathrooms(request):
    return render(request, "AussieBuilt/bathrooms.html")

def portfolio(request):
    return render(request, "AussieBuilt/portfolio.html")

def privacy(request):
    return render(request, "AussieBuilt/privacy.html")

def reviews(request):
    return render(request, "AussieBuilt/reviews.html")

def decksstairs(request):
    return render(request, "AussieBuilt/decks&stairs.html")

def miscellaneous(request):
    return render(request, "AussieBuilt/miscellaneous.html")

def partners(request):
    return render(request, "AussieBuilt/partners.html")
from django.shortcuts import redirect, render
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.conf import settings
from django.urls import reverse
from AussieBuiltWebsite.forms import EmailForm

def contact(request):
    form = EmailForm()
    if request.method == "POST":
        form = EmailForm(request.POST)
        
        if form.is_valid(): 
            print("METHOD IS POST")
            name = request.POST["name"]
            email = request.POST["email"]
            subject = request.POST["subject"]
            phone = request.POST["phone"]
            message = request.POST["message"]
            me = 'aussiebuiltemailsender@gmail.com'
            body = f"""
            Name: {name} 
            Phone #: {phone} 
            Email: {email}
            Subject: {subject}
            Body: {message}
            """

            send_mail(
                subject, 
                body, 
                me,
                [email, "Edward@aussiebuiltconstruction.com"],
                fail_silently=False,
            )

        return HttpResponseRedirect(reverse("contact"))

    else: 
        return render(request, "AussieBuilt/contact.html")
        
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
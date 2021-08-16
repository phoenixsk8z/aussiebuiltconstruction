from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("about", views.about, name="about"),
    path("contact", views.contact, name="contact"),
    path("reviews", views.reviews, name="reviews"),
    path("privacy", views.privacy, name="privacy"),
    path("portfolio", views.portfolio, name="portfolio"),
    path("portfolio/kitchens", views.kitchens, name="kitchens"),
    path("portfolio/bathrooms", views.bathrooms, name="bathrooms"),
    path("portfolio/decks&stairs", views.decksstairs, name="decks&stairs"),
    path("portfolio/miscellaneous", views.miscellaneous, name="miscellaneous"),
]

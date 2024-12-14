# Sugestie na temat rozwoju aplikacji

1 .Dodanie prognozy na kilka dni:
- Wykorzystaj API OpenWeatherMap forecast dla prognozy 5-dniowej.

2. Wybór jednostek miary:
- Dodaj przełącznik między °C a °F.

3. Obsługa lokalizacji:
- Dodaj możliwość wykrywania lokalizacji użytkownika za pomocą navigator.geolocation.

4. Lepsza obsługa błędów:
- Informuj użytkownika, gdy pole pozostanie puste.

5. Historia wyszukiwań:
- Przechowuj ostatnio wyszukiwane miasta w localStorage.

6. Stylizacja wyników:
- Dodaj ikonki pogody, np. słoneczko, chmury.

7. Testowanie na różnych przeglądarkach:
- Upewnij się, że aplikacja działa prawidłowo na różnych urządzeniach i przeglądarkach.

# Komendy git

- git pull origin <nazwa_gałęzi>  # Zsynchronizuj z zdalnym repozytorium
- git add .                      # Dodaj zmiany do obszaru staging
- git commit -m "Opis zmian"     # Zatwierdź zmiany
- git push origin <nazwa_gałęzi> # Wyślij zmiany do zdalnego repozytorium


# Jak pisać w Readme (język Markdown)
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax


Dear Customer!


Thank you for subscribing to Free OpenWeatherMap!

API key:
- Within the next couple of hours, your API key 617f1674c75eb7058425b911e7591ae2 will be activated and ready to use
- You can later create more API keys on your account page
- Please, always use your API key in each API call

Endpoint:
- Please, use the endpoint api.openweathermap.org for your API calls
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=617f1674c75eb7058425b911e7591ae2

Useful links:
- API documentation https://openweathermap.org/api
- Details of your plan https://openweathermap.org/price
- Please, note that 16-days daily forecast and History API are not available for Free subscribers


Blog
Support center & FAQ
Contact us info@openweathermap.org.

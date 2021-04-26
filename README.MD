[Demo](https://url-shortner-service.herokuapp.com/ "URL Shortner")

```bash
        python -m venv .env
        source .env/bin/activate  
        pip install -r requirements.txt
        python manage.py makemigrations
        python manage.py migrate
        python manage.py createsuperuser
        python manage.py runserver
```
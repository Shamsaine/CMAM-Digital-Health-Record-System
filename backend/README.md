## Backend Setup With Django

### **Prerequisites**
1. **Python 3.8+**: Ensure Python is installed on your system.
2. **PostgreSQL**: Database setup.

### **Setup Instructions**

#### **Step 1: Clone the Repository**
Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/CMAM-Digital-Health-Record-System.git
cd CMAM-Digital-Health-Record-System/backend
```

#### **Step 2: Create a Virtual Environment**
Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

#### **Step 3: Install Dependencies**
Install the required Python packages:
```bash
pip install -r requirements.txt
```

#### **Step 4: Configure the Database**
Set up the PostgreSQL database and update the `DATABASES` setting in `settings.py` with your database credentials:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

#### **Step 5: Apply Migrations**
Apply database migrations to set up the database schema:
```bash
python manage.py migrate
```

#### **Step 6: Create a Superuser**
Create a superuser to access the Django admin interface:
```bash
python manage.py createsuperuser
```

#### **Step 7: Run the Development Server**
Start the Django development server:
```bash
python manage.py runserver
```

Access the backend at `http://localhost:8000`.

### **Additional Information**

#### **Running Tests**
To run the tests for the backend, use the following command:
```bash
python manage.py test
```

#### **Using Celery**
To start the Celery worker for background tasks, use the following command:
```bash
celery -A your_project_name worker --loglevel=info
```

#### **API Documentation**
API documentation is auto-generated using Swagger/OpenAPI. Access it at `http://localhost:8000/api/docs`.

### **Conclusion**
The backend setup for the CMAM Digital Record Platform involves configuring a Django application with a PostgreSQL database. Follow the steps above to get the backend up and running on your local machine.
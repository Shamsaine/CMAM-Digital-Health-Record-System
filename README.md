# CMAM-Digital-Health-Record-System
A simulation of A Digital Health Record System for the CMAM program.

**Project Design Document: CMAM Digital Record Platform**

---

### **Project Overview**
The CMAM Digital Record Platform is a web-based application designed to digitize, consolidate, and analyze data collected from the Community-based Management of Acute Malnutrition (CMAM) program. By replacing manual record-keeping with a digital solution, the platform aims to enhance efficiency, ensure data accuracy, and support research and decision-making through advanced analytics and predictive modeling. This project is built on modern technologies and tailored to meet the specific needs of the CMAM program.

---

### **Project Objectives**
1. **Digitize Record Keeping**: Transition from manual data entry to a centralized digital system.
2. **Enhance Data Accessibility**: Enable healthcare workers, supervisors, and administrators to access and manage data seamlessly.
3. **Enable Advanced Analytics**: Consolidate data for research and build predictive models to identify trends and inform decision-making.
4. **Improve Program Efficiency**: Minimize data entry errors and reduce redundancy.
5. **Facilitate Research**: Provide researchers and stakeholders with reliable data for evaluation and planning.

---

### **Target Market**
The platform targets stakeholders in the CMAM program, including:
- **Healthcare Workers**: Responsible for patient registration, monitoring, and follow-up.
- **Supervisors**: Oversee program implementation and generate reports.
- **Government Agencies and NGOs**: Leverage consolidated data for program evaluation.
- **Researchers**: Access anonymized data for studies and modeling.
- **General Public**: View general information about the CMAM program.

---

### **Tech Stack**
#### **Backend**:
- **Django**: Framework for rapid development and robust backend logic.
- **Django REST Framework (DRF)**: For building and managing RESTful APIs.
- **Redis**: Caching layer for faster data retrieval and session management.
- **PostgreSQL**: Relational database for structured data storage and advanced querying.

#### **Frontend**:
- **React**: For dynamic, responsive user interfaces.
- **HTML/CSS**: Core technologies for layout and styling.
- **Chart.js**: For interactive data visualization on the frontend.

#### **DevOps and Deployment**:
- **Git/GitHub**: Version control and collaboration.
- **GitHub Actions**: CI/CD pipeline automation.
- **Docker**: Containerization for consistent development and deployment environments.
- **Google Cloud Platform (GCP)**: Scalable cloud infrastructure.

#### **Additional Tools**:
- **Jupyter Notebooks**: For exploratory data analysis and preprocessing.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

### **System Architecture**
1. **Frontend**:
   - React application communicating with the backend via REST APIs.
   - User role-based views and dashboards.
   - Interactive charts and visualizations using Chart.js.

2. **Backend**:
   - Django application managing business logic and database operations.
   - DRF for API endpoints supporting CRUD operations and analytics.
   - Redis for caching and background task queuing (via Celery).

3. **Database**:
   - PostgreSQL storing structured data such as patient records, attendance, and program statistics.

4. **Deployment**:
   - Docker containers for scalable and consistent deployments.
   - GCP for hosting the application and database.


---

### **Database Design**
- **Users Table**:
  - Stores user information (e.g., healthcare workers, supervisors, admins).
- **Patient Records Table**:
  - Tracks individual patient data (e.g., name, age, admission details, treatment history).
- **Program Data Table**:
  - Consolidates program statistics and attendance records.

---

### **Core Features for MVP**
1. **User Authentication**:
   - Role-based access control (RBAC) for healthcare workers, supervisors, and admins.
2. **Patient Registration**:
   - Form-based patient data entry.
3. **Patient Monitoring**:
   - Update and track patient progress.
4. **Program Reporting**:
   - Generate and view summary statistics.
  

### **Challenges and Mitigation**
1. **Data Integration**:
   - Use modular Python scripts to preprocess data before database ingestion.
2. **Frontend-Backend Communication**:
   - Thorough testing of API endpoints with Postman.
3. **Role-Based Access Control**:
   - Implement Django groups and permissions for fine-grained user roles.
4. **Scalability**:
   - Optimize database queries and use Docker for horizontal scaling.

---

### **Setup Instructions**

Follow these steps to set up the CMAM Digital Record Platform on your local machine:

#### **Prerequisites**
1. **Python 3.8+**: Ensure Python is installed on your system.
2. **Node.js and yarn**: Required for the frontend setup.
4. **PostgreSQL**: Database setup.

#### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CMAM-Digital-Health-Record-System.git
   cd CMAM-Digital-Health-Record-System
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the PostgreSQL database and update the `DATABASES` setting in `settings.py` with your database credentials.

5. Apply database migrations:
   ```bash
   python manage.py migrate
   ```

6. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

7. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

#### **Frontend Setup**
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the required npm packages:
   ```bash
   yarn add
   ```

3. Start the React development server:
   ```bash
   yarn start
   ```

Access the application at `http://localhost:8000` for the backend and `http://localhost:3000` for the frontend.
---
### **Conclusion**
The CMAM Digital Record Platform is a groundbreaking initiative tailored to the specific needs of the CMAM program. By combining state-of-the-art technologies with a user-centric design, the platform aims to improve efficiency, ensure data integrity, and unlock new opportunities for data-driven decision-making in public health.


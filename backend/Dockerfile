# 1. Use an official Python runtime as a parent image
FROM python:3.11

# 2. Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 3. Set the working directory inside the container
WORKDIR /app

# 4. Install Poetry
RUN pip install poetry

# 5. Copy only the dependency definitions to leverage Docker cache
# These paths are relative to the Dockerfile's location (`backend/`)
COPY pyproject.toml poetry.lock ./

# 6. Install project dependencies using Poetry
# --no-root is used because we are installing for an app, not a library to be installed
RUN poetry install --no-root

# 7. Copy the rest of your application's source code
COPY ./app ./app

# 8. The command to run your FastAPI application using uvicorn
# This will be executed when the container starts
CMD ["poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
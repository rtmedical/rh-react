FROM python:3.8

LABEL version="0.1"
LABEL description="Docker image for python api"

COPY requirements.txt requirements.txt 
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install -U setuptools pip

EXPOSE 9999 

WORKDIR /var
CMD ["bash"]
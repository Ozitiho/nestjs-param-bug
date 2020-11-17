FROM node:13.8
LABEL maintainer="Bas van Koesveld (bas@goedgemerkt.nl)"
RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN npm install
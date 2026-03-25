FROM ruby:4.0.2

WORKDIR /app

RUN apt-get update -qq && apt-get install -y libpq-dev

COPY Gemfile* ./
RUN bundle install

COPY . .

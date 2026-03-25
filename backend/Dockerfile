FROM ruby:4.0.2

WORKDIR /rails

RUN apt-get update -qq && apt-get install -y libpq-dev build-essential

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

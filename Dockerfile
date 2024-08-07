# Use an official Jekyll image as a parent image
FROM ruby:alpine AS builder


WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/Gemfile
COPY Gemfile.lock /usr/src/app/Gemfile.lock

RUN apk add --no-cache ruby ruby-dev build-base jekyll
RUN bundle install --gemfile=/usr/src/app/Gemfile --quiet

COPY . /usr/src/app/

RUN jekyll build --destination /public

# Stage 2: Production stage
FROM nginx:alpine

COPY --from=builder /public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
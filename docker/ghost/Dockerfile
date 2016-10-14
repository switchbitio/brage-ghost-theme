FROM ghost:0.11.2

WORKDIR $GHOST_SOURCE
ADD dist/ content/themes/brage
RUN sed -i.bak s/casper/brage/g "/usr/src/ghost/core/server/data/schema/default-settings.json"

ADD config-prod.js config.example.js

ENV NODE_ENV production
ENV BLOG_URL ?
ENV MAILGUN_USER ?
ENV MAILGUN_PASSWORD ?

EXPOSE 2368

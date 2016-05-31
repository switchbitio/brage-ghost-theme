FROM ghost:0.8

WORKDIR $GHOST_SOURCE
ADD dist/ content/themes/brage
ADD config-prod.js config.example.js

ENV NODE_ENV production
ENV MAILGUN_USER ?
ENV MAILGUN_PASSWORD ?

COPY brage-entrypoint.sh /brage-entrypoint.sh
RUN ["chmod", "+x", "/brage-entrypoint.sh"]
ENTRYPOINT ["/brage-entrypoint.sh"]
CMD ["npm", "start"]

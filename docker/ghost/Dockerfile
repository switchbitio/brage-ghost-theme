FROM ghost:1.19.0-alpine

WORKDIR $GHOST_INSTALL

ADD dist/ current/content/themes/brage
RUN apk update && \
  apk --no-cache add jq
RUN jq '.theme.active_theme.defaultValue="brage" \
    | .blog.logo.defaultValue=null \
    | .blog.cover_image.defaultValue=null' \
    current/core/server/data/schema/default-settings.json \
  > /tmp/default-settings.json && \
  mv /tmp/default-settings.json current/core/server/data/schema/default-settings.json

ADD config.production.json config.production.json

ENV NODE_ENV production
ENV url ?
ENV mail__options__auth__user ?
ENV mail__options__auth__pass ?

EXPOSE 2368

#!/bin/bash
set -e

# Force copies of config.js and content/themes
rm -rf $GHOST_CONTENT/themes
rm -f $GHOST_CONTENT/config.js

chown -R user:user "$GHOST_CONTENT"
chown -R user:user "$GHOST_SOURCE"

exec /entrypoint.sh $@

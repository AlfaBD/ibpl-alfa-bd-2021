#!/usr/bin/env ash

# Serving front-end
/etc/init.d/nginx start

exec "$@"

#!/usr/bin/env bash

set -Eeo pipefail
# Serving front-end
/etc/init.d/nginx start

exec "$@"

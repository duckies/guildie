# Postgres 17 on Debian 12 (Bookworm).
#
#   Extensions: plg_ulid

FROM postgres:17-bookworm

# Download pgx_ulid
ADD "https://github.com/pksunkara/pgx_ulid/releases/download/v0.2.0/pgx_ulid-v0.2.0-pg17-amd64-linux-gnu.deb" "/tmp/pgx_ulid.deb"

# Configure shared_preload_libraries
RUN echo 'ALTER SYSTEM SET shared_preload_libraries = 'pgx_ulid';\n\
  CREATE EXTENSION IF NOT EXISTS ulid;\n' > /docker-entrypoint-initdb.d/01-init.sql

# Install extensions and cleanup
RUN apt-get update && apt-get install -y --no-install-recommends \
    /tmp/*.deb \
    && rm -rf /var/lib/apt/lists/* /tmp/*
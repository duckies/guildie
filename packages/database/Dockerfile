FROM postgres:17-bookworm

# Download pgx_ulid
ADD "https://github.com/pksunkara/pgx_ulid/releases/download/v0.2.0/pgx_ulid-v0.2.0-pg17-amd64-linux-gnu.deb" "/tmp/pgx_ulid.deb"

# Install dependencies, extensions, and then cleanup
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    /tmp/*.deb

# Clean
RUN apt-get autoremove -y && rm -rf /var/lib/apt/lists/* /tmp/*

# Run init scripts
COPY ./src/seed/* /docker-entrypoint-initdb.d/


#!/usr/bin/env bash
set -euo pipefail

: "${GITHUB_SHA:?GITHUB_SHA is required}"
[[ "$GITHUB_SHA" =~ ^[0-9a-f]{40}$ ]] || { echo "Invalid commit SHA" >&2; exit 1; }
test -f out/index.html || { echo "Static export is missing" >&2; exit 1; }

host="portfolio-deploy@87.107.108.17"
key="$HOME/.ssh/id_ed25519_portfolio"
known_hosts="$HOME/.ssh/known_hosts"
ssh_options=(-i "$key" -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile="$known_hosts" -o ConnectTimeout=20)
release="/srv/sharare-portfolio/releases/$GITHUB_SHA"

ssh "${ssh_options[@]}" "$host" "mkdir -p '$release'"
rsync -az --delete -e "ssh -i $key -o IdentitiesOnly=yes -o StrictHostKeyChecking=yes -o UserKnownHostsFile=$known_hosts -o ConnectTimeout=20" out/ "$host:$release/"
ssh "${ssh_options[@]}" "$host" "test -f '$release/index.html' && ln -sfn 'releases/$GITHUB_SHA' /srv/sharare-portfolio/current.next && mv -Tf /srv/sharare-portfolio/current.next /srv/sharare-portfolio/current"

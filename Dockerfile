# Revenue Management — production image (Brook GT / 2023–2026)
FROM node:18-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV DOCKER_BUILD=1
ENV CI=true
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=2048
ENV NEXT_PUBLIC_API_URL=https://api.revenue.et
ENV NEXT_PUBLIC_SITE_URL=https://portal.revenue.et
COPY . /app
RUN npm ci --legacy-peer-deps \
    && NODE_ENV=production npm run build:docker \
    && npm prune --omit=dev --legacy-peer-deps

FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV NEXT_PUBLIC_API_URL=https://api.revenue.et
ENV NEXT_PUBLIC_SITE_URL=https://portal.revenue.et
RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs revenue
COPY --chown=revenue:nodejs --from=builder /app /app
USER revenue
EXPOSE 3000
CMD ["npm", "start"]

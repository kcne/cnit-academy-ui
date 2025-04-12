FROM node:23-alpine

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci

COPY . .

EXPOSE 8000

# uncomment this after fixing frontend routes
# RUN npm run build
# CMD npm run start

CMD npm run dev

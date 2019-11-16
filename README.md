# Ecom graphql Api

This is a graphql api for a simple ecom project <br/>
[Ecom Project](https://github.com/KaranGoel59/ecom-client)

## How to run
Add a .env file with following config

```
NODE_ENV=development || production
PORT=3000

DB_HOST=  YOUR_DB_HOST
DB_PORT=  YOUR_DB_PORT
DB_NAME=  YOUR_DB_NAME
DB_USER=  YOUR_DB_USER
DB_PASS=  YOUR_DB_PASWORD

JWT_ENCRYPTION=secret
JWT_EXPIRATION=12h
```

In development mode you have to set up dev database

```
DEV:  {
HOST:  YOUR_DB_HOST,
PORT:  YOUR_DB_PORT,
NAME:  YOUR_DB_NAME,
USER:  YOUR_DB_USER
PASS:  YOUR_DB_PASWORD,
}
```

The default database is mysql. If you want to change you can manully change it in database/_sqlConnect.ts <br/>

To run in dev
```
yarn dev
``` 

For production
```
yarn build
```
```
yarn start
```

You can now start the graphql playground at server/graphql
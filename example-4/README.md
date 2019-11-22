# NodeJS Backend Starter Kit

## Post-Forking Steps

1. Update `db/config.json` with the correct database names for Development and Test databases.

## Initial setup steps for local development

2. Copy `env.sample` to `.env`
3. Prepare the databases

	```
	NODE_ENV=development npm run db:create
	NODE_ENV=development npm run db:migrate
	NODE_ENV=test npm run db:create
	NODE_ENV=test npm run db:migrate
	```

4. Prepare the seed data for development

	```
	NODE_ENV=development npm run db:seed
	```

5. You can update the content of `public/index.html`

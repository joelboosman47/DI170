import knex from "knex";
import { Pool } from "pg";

const PGHOST =
	"ep-delicate-cake-ageaya4b-pooler.c-2.eu-central-1.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "neondb_owner";
const PGPASSWORD = "npg_Amdny10XcWUQ";
const PGPORT = 5432;

const db = knex({
	client: "pg",
	connection: {
		host: PGHOST,
		port: PGPORT,
		user: PGUSER,
		database: PGDATABASE,
		password: PGPASSWORD,
		ssl: { rejectUnauthorized: false },
	},
});

const pool = new Pool({
	host: PGHOST,
	port: PGPORT,
	user: PGUSER,
	database: PGDATABASE,
	password: PGPASSWORD,
	ssl: { rejectUnauthorized: false },
});

const result = await pool.query(
	"select * from products where id = $1 and price = $2",
	[3, 300],
);
console.log(result.rows);

// db("products")
// 	.select("id", "price")
// 	.where("id", ">=", 2)
// 	.then((rows) => console.log(rows))
// 	.catch((err) => console.log(err));

// db("products")
// 	.update({ price: 999 }, ["id", "price"])
// 	.where({ id: 7 })
// 	// .returning("*")
// 	.then((rows) => console.log(rows))
// 	.catch((err) => console.log(err));

// db("products")
// 	.where({ id: 8 })
// 	.del()
// 	.returning("*")
// 	.then((rows) => console.log(rows))
// 	.catch((err) => console.log(err));

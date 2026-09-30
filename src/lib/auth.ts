import { setServers } from 'node:dns';
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

setServers(["1.1.1.1", "8.8.8.8"]);

const dbUrl = process.env.BETTER_AUTH_DB_URL;

if (!dbUrl) {
  throw new Error("BETTER_AUTH_DB_URL is not defined");
}

// const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const client = new MongoClient(dbUrl);

const db = client.db('next-better-auth');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});

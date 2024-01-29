import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions } from "next-auth";


export const authOptions:AuthOptions = {
    providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }), 
    ],
    //@ts-ignore
    adapter: MongoDBAdapter(clientPromise)
  }
// @ts-nocheck
import { GQLError } from "https://deno.land/x/oak_graphql/mod.ts"
import SendMail from "./smtp.ts"

const resolvers = {
  Query: {
    getUser: (parent: any, { id }: any, context: any, info: any) => {
      console.log("id", id, context)
      if (context.user === "Aaron") {
        throw new GQLError({ type: "auth error in context" })
      }
      return {
        firstName: "wooseok",
        lastName: "lee",
      }
    },
    sendMail: (parent: any, { email }: any, context: any, info: any) => {
      SendMail(email)
    },
    getPages: () => {
      return {
        footer: {
          companyName: "ANSIGlobal",
          description: "All products and services!",
          contact: {
            address:
              "ANSI Global (Pvt) Ltd, 115/8, Mattegoda Terrace, Mattegoda, 10240 Sri Lanka.",
            email: "ansi@ansiglobal.com",
            phone: "+94 11 278 3615",
          },
          socialLinks: {
            facebook: "",
            twitter: "",
            google: "",
            linkedin: "",
          },
        },
      }
    },
    getStatistics: (parent: any, {}: any, context: any, info: any) => {
      return {
        socialMedia: {
          facebookUsers: 600,
          googleUsers: 500,
          twitterUsers: 300,
        },
        orders: 1000,
        sales: 800,
        users: {
          visitors: 3000,
          uniquevisitors: 1200,
          newUsers: 400,
        },
      }
    },
    status: () => `Server Is Running OK...!`,
  },
  Mutation: {
    setUser: (
      parent: any,
      { input: { firstName, lastName } }: any,
      context: any,
      info: any
    ) => {
      console.log("input:", firstName, lastName)
      return {
        done: true,
      }
    },
  },
}

export default resolvers

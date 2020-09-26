// deno 1.2.x required oak version up to v6.0.1
//@ts-nocheck
import {
  Application,
  Router,
  RouterContext,
} from "https://deno.land/x/oak@v6.0.1/mod.ts"
import { applyGraphQL } from "https://deno.land/x/oak_graphql/mod.ts"
import Resolvers from "./resolvers.ts"
import Types from "./types.ts"

const app = new Application()

app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.headers.get("X-Response-Time")
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.response.headers.set("X-Response-Time", `${ms}ms`)
})

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: Types,
  resolvers: Resolvers,
  context: (ctx: RouterContext) => {
    return { user: "Aaron" }
  },
})

app.use(GraphQLService.routes(), GraphQLService.allowedMethods())

console.log("Server start at http://localhost:8080")
await app.listen({ port: 8080 })

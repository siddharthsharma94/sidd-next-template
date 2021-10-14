import { createHandler, Get, Post, Param } from "@storyofams/next-api-decorators"

class UserHandler {
  @Get()
  users() {
    return "Our users"
  }

  @Get("/:userId")
  public comments(@Param("userId") userId: string) {
    return `user id is ${userId}`
  }

  @Post("/:userId")
  public post(@Param("userId") userId: string) {
    return `user id posted is ${userId}`
  }
}

export default createHandler(UserHandler)

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.viewRule = "@request.auth.isManager = true ||\nid = @request.auth.id"
  collection.updateRule = "@request.auth.isManager = true ||\n(\n  id = @request.auth.id && \n  @request.data.isManager:isset = false && \n  @request.data.email:isset = false\n)"
  collection.deleteRule = "@request.auth.isManager = true ||\nid = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.viewRule = "@request.auth.isManager = true || id = @request.auth.id"
  collection.updateRule = "@request.auth.isManager = true || (id = @request.auth.id && @request.data.isManager:isset = false && @request.data.email:isset = false)"
  collection.deleteRule = "@request.auth.isManager = true || id = @request.auth.id"

  return dao.saveCollection(collection)
})

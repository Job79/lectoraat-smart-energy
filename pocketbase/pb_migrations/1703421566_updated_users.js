/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.isManager = true"
  collection.viewRule = "@request.auth.isManager = true || id = @request.auth.id"
  collection.updateRule = "@request.auth.isManager = true || (id = @request.auth.id && @request.data.isManager:isset = false && @request.data.email:isset = false)"
  collection.deleteRule = "@request.auth.isManager = true || id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "id = @request.auth.id || @request.auth.isManager = true"
  collection.viewRule = "id = @request.auth.id || @request.auth.isManager = true"
  collection.updateRule = "id = @request.auth.id || @request.auth.isManager = true"
  collection.deleteRule = "id = @request.auth.id || @request.auth.isManager = true"

  return dao.saveCollection(collection)
})

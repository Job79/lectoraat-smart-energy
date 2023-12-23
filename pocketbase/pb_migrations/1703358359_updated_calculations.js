/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94h91bvl2a9dc7j")

  collection.listRule = "location.owner = @request.auth.id"
  collection.viewRule = "location.owner = @request.auth.id"
  collection.createRule = "location.owner = @request.auth.id"
  collection.updateRule = "location.owner = @request.auth.id"
  collection.deleteRule = "location.owner = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94h91bvl2a9dc7j")

  collection.listRule = "location.owner.id = @request.auth.id"
  collection.viewRule = "location.owner.id = @request.auth.id"
  collection.createRule = "location.owner.id = @request.auth.id"
  collection.updateRule = "location.owner.id = @request.auth.id"
  collection.deleteRule = "location.owner.id = @request.auth.id"

  return dao.saveCollection(collection)
})

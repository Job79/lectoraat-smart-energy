/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gzf2vs4dtty4q4q")

  collection.listRule = "owner = @request.auth.id"
  collection.viewRule = "owner = @request.auth.id"
  collection.createRule = "owner = @request.auth.id"
  collection.updateRule = "owner = @request.auth.id"
  collection.deleteRule = "owner = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gzf2vs4dtty4q4q")

  collection.listRule = "owner.id = @request.auth.id"
  collection.viewRule = "owner.id = @request.auth.id"
  collection.createRule = "owner.id = @request.auth.id"
  collection.updateRule = "owner.id = @request.auth.id"
  collection.deleteRule = "owner.id = @request.auth.id"

  return dao.saveCollection(collection)
})

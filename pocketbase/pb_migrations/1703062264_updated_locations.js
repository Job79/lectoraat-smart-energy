/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0io8s0i2gulc86")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "we2z6x5z",
    "name": "ownerId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0io8s0i2gulc86")

  // remove
  collection.schema.removeField("we2z6x5z")

  return dao.saveCollection(collection)
})

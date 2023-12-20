/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0io8s0i2gulc86")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvoflaqh",
    "name": "postalcode",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0io8s0i2gulc86")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvoflaqh",
    "name": "postalCode",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

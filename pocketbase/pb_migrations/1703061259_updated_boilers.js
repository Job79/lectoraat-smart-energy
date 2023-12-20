/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7atbtl86cnkrdn")

  // remove
  collection.schema.removeField("gqi9vfyr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tiiabuov",
    "name": "location",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h0io8s0i2gulc86",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7atbtl86cnkrdn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqi9vfyr",
    "name": "location",
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

  // remove
  collection.schema.removeField("tiiabuov")

  return dao.saveCollection(collection)
})

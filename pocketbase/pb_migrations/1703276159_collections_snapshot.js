/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-12-22 11:13:59.092Z",
      "updated": "2023-12-22 11:20:48.027Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": null,
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": false,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": true
      }
    },
    {
      "id": "94h91bvl2a9dc7j",
      "created": "2023-12-22 11:15:13.257Z",
      "updated": "2023-12-22 16:38:23.036Z",
      "name": "calculations",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "p73mlj7y",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ebmamsms",
          "name": "comment",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "oczfj00l",
          "name": "location",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "gzf2vs4dtty4q4q",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "susa1lkw",
          "name": "calculationType",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "l5aok55p",
          "name": "parameters",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSize": 2000000
          }
        }
      ],
      "indexes": [],
      "listRule": "location.owner.id = @request.auth.id",
      "viewRule": "location.owner.id = @request.auth.id",
      "createRule": "location.owner.id = @request.auth.id",
      "updateRule": "location.owner.id = @request.auth.id",
      "deleteRule": "location.owner.id = @request.auth.id",
      "options": {}
    },
    {
      "id": "gzf2vs4dtty4q4q",
      "created": "2023-12-22 11:16:58.681Z",
      "updated": "2023-12-22 15:58:47.217Z",
      "name": "locations",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "sosdtnda",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "xtnlp1zq",
          "name": "residence",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "xclgvvfz",
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
        },
        {
          "system": false,
          "id": "7wigwtjc",
          "name": "owner",
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
        }
      ],
      "indexes": [],
      "listRule": "owner.id = @request.auth.id",
      "viewRule": "owner.id = @request.auth.id",
      "createRule": "owner.id = @request.auth.id",
      "updateRule": "owner.id = @request.auth.id",
      "deleteRule": "owner.id = @request.auth.id",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})

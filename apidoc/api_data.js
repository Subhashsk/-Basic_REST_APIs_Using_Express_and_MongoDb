define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create a product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the product name should be passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>the product category should be passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>the product price should be passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>the product brand should be passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isInStock",
            "description": "<p>the product stock status should be passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sizes",
            "description": "<p>the product sizes should be passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfPiecesAvailable",
            "description": "<p>the number of available pieces of product should be passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       productID: \"string\",\n                       name: \"string\",\n                       category: \"string\",\n                       price: number,\n                       brand: \"string\",\n                       isInStock: boolean,\n                       sizes: object(type = array),\n                       numberOfPiecesAvailable : number,\n                       addedOn: \"date\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/cart/:productID/remove",
    "title": "Remove a product from cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>the productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": []\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "delete",
    "name": "PostApiV1CartProductidRemove"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:productID/delete",
    "title": "Delete a particular product by productID",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>the productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": []\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/cart/:productID/add",
    "title": "Add a product to cart",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>the productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       productID: \"string\",\n                       name: \"string\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "edit",
    "name": "PutApiV1CartProductidAdd"
  },
  {
    "type": "put",
    "url": "/api/v1/products/:productID/edit",
    "title": "Edit a particular product",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>the productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       productID: \"string\",\n                       name: \"string\",\n                       category: \"string\",\n                       price: number,\n                       brand: \"string\",\n                       isInStock: boolean,\n                       sizes: object(type = array),\n                       numberOfPiecesAvailable : number,\n                       addedOn: \"date\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductsProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/cart/all",
    "title": "Get all products from cart",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       productID: \"string\",\n                       name: \"string\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/cart.js",
    "groupTitle": "read",
    "name": "GetApiV1CartAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       productID: \"string\",\n                       name: \"string\",\n                       category: \"string\",\n                       price: number,\n                       brand: \"string\",\n                       isInStock: boolean,\n                       sizes: object(type = array),\n                       numberOfPiecesAvailable : number,\n                       addedOn: \"date\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/by/:productID",
    "title": "Get a particular product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productID",
            "description": "<p>the productID should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n       \"message\": \"All Product Details Found\",\n       \"status\": 200,\n       \"data\": [\n                   {\n                       productID: \"string\",\n                       name: \"string\",\n                       category: \"string\",\n                       price: number,\n                       brand: \"string\",\n                       isInStock: boolean,\n                       sizes: object(type = array),\n                       numberOfPiecesAvailable : number,\n                       addedOn: \"date\"\n                   }\n               ]\n           }\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n        \"error\": true,\n        \"message\": \"Failed To Find Product Details\",\n        \"status\": 500,\n        \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/product.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewByProductid"
  }
] });

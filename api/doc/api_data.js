define({ "api": [
  {
    "type": "get",
    "url": "/api/dash/collections",
    "title": "Collection Counts",
    "version": "1.0.0",
    "name": "collections",
    "group": "Analytics",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "filename": "./index.js",
    "groupTitle": "Analytics"
  },
  {
    "type": "get",
    "url": "/api/dash/traffic",
    "title": "Session Counts",
    "version": "1.0.0",
    "name": "traffic",
    "group": "Analytics",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Report anonymouns traffic data about the number of user session created in a given day.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"datasets\": [{\n        \"label\": \"Unique Daily Sessions\" ,\n        \"data\": [{\n            \"x\": \"2020-08-19T06:00:00.000Z\",\n            \"y\": 145\n        }]\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Analytics"
  },
  {
    "type": "post",
    "url": "/api/collections",
    "title": "Create Collection",
    "version": "1.0.0",
    "name": "Create",
    "group": "Collections",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"name\": \"global\",\n    \"sources\": [\"**\"]\n    \"created\": \"2020-07-30T11:56:37.405Z\",\n    \"s3\": \"s3://v2.openaddresses.io/test/collection-global.zip\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "get",
    "url": "/api/collections/:collection/data",
    "title": "Get Collection Data",
    "version": "1.0.0",
    "name": "Data",
    "group": "Collections",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Download a given collection file</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":collection",
            "description": "<p>Collection ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "delete",
    "url": "/api/collections/:collection",
    "title": "Delete Collection",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Collections",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":collection",
            "description": "<p>Collection ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "get",
    "url": "/api/collections",
    "title": "List Collections",
    "version": "1.0.0",
    "name": "List",
    "group": "Collections",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return a list of all collections and their glob rules</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  [{\n      \"id\": 1,\n      \"name\": \"us-northeast\",\n      \"created\": \"2020-08-12T04:17:45.063Z\"\",\n      \"s3\": \"s3://v2.openaddresses.io/test/collection-us-northeast.zip\",\n      \"sources\": [\n          \"us/ri/**\",\n          \"us/ct/**\",\n          \"us/ma/**\"\n          \"us/nh/**\"\n          \"us/vt/**\"\n          \"us/me/**\"*\n      ]\n  }]\n\n[{\"id\":1,\"name\":\"global\",\"created\":\"2020-08-12T04:17:44.111Z\",\"sources\":[\"**\"]},{\"id\":2,\"name\":\"us-northeast\",\"created\":\"2020-08-12T04:17:45.063Z\",\"sources\":[\"us/ri/**\",\"us/ct/**\",\"us/ma/**\",\"us/nh/**\",\"us/vt/**\",\"us/me/**\"]},{\"id\":5,\"name\":\"us-south\",\"created\":\"2020-08-12T04:17:50.246Z\",\"sources\":[\"us/fl/**\",\"us/ga/**\",\"us/sc/**\",\"us/nc/**\",\"us/dc/**\",\"us/md/**\",\"us/de/**\",\"us/va/**\",\"us/wv/**\",\"us/al/**\",\"us/ms/**\",\"us/tn/**\",\"us/ky/**\",\"us/la/**\",\"us/ar/**\",\"us/ok/**\",\"us/tx/**\"]},{\"id\":6,\"name\":\"us-west\",\"created\":\"2020-08-12T04:17:53.223Z\",\"sources\":[\"us/ak/**\",\"us/nm/**\",\"us/az/**\",\"us/co/**\",\"us/ut/**\",\"us/nv/**\",\"us/wy/**\",\"us/id/**\",\"us/mt/**\",\"us/ca/**\",\"us/or/**\",\"us/wa/**\"]},{\"id\":7,\"name\":\"us-midwest\",\"created\":\"2020-08-12T04:17:53.835Z\",\"sources\":[\"us/oh/**\",\"us/in/**\",\"us/mi/**\",\"us/il/**\",\"us/wi/**\",\"us/md/**\",\"us/ia/**\",\"us/ks/**\",\"us/ne/**\",\"us/mn/**\",\"us/sd/**\",\"us/nd/**\"]}]",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "patch",
    "url": "/api/collections/:collection",
    "title": "Update Collection",
    "version": "1.0.0",
    "name": "Update",
    "group": "Collections",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":collection",
            "description": "<p>Collection ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"name\": \"global\",\n    \"sources\": [\"**\"]\n    \"created\": \"2020-07-30T11:56:37.405Z\",\n    \"s3\": \"s3://v2.openaddresses.io/test/collection-global.zip\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Collections"
  },
  {
    "type": "get",
    "url": "/api/data",
    "title": "List Data",
    "version": "1.0.0",
    "name": "List",
    "group": "Data",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>Filter results by source name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "layer",
            "description": "<p>Filter results by layer type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Filter results by layer name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "point",
            "description": "<p>Filter results by geographic point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "?source",
          "content": "?source=us/ca",
          "type": "String"
        },
        {
          "title": "?layer",
          "content": "?layer=addresses",
          "type": "String"
        },
        {
          "title": "?name",
          "content": "?name=city",
          "type": "String"
        },
        {
          "title": "?point",
          "content": "?point=<lng>,<lat>",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": 271,\n    \"source\": \"pl/lubelskie\",\n    \"updated\": \"2020-07-30T11:56:37.405Z\",\n    \"layer\": \"addresses\",\n    \"name\": \"country\",\n    \"job\": 635,\n    \"output\": {\n        \"cache\": true,\n        \"output\": true,\n        \"preview\": true\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/data/:data",
    "title": "Get Data",
    "version": "1.0.0",
    "name": "Single",
    "group": "Data",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":data",
            "description": "<p>Data ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 271,\n    \"source\": \"pl/lubelskie\",\n    \"updated\": \"2020-07-30T11:56:37.405Z\",\n    \"layer\": \"addresses\",\n    \"name\": \"country\",\n    \"job\": 635,\n    \"output\": {\n        \"cache\": true,\n        \"output\": true,\n        \"preview\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/api/data/:data/history",
    "title": "Return Data History",
    "version": "1.0.0",
    "name": "SingleHistory",
    "group": "Data",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":data",
            "description": "<p>Data ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"jobs\": [{\n        \"id\": 1,\n        \"created\": \"2020-04-20T06:31:11.689Z\",\n        \"status\": \"Success\"\n        \"output\": {\n            \"cache\": true,\n            \"output\": true,\n            \"preview\": true\n        },\n        \"run\": 1\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Data"
  },
  {
    "type": "post",
    "url": "/api/github/event",
    "title": "Github Webhook",
    "version": "1.0.0",
    "name": "Event",
    "group": "Github",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Callback endpoint for GitHub Webhooks. Should not be called by user functions</p>",
    "filename": "./index.js",
    "groupTitle": "Github"
  },
  {
    "type": "get",
    "url": "/api/job/error/count",
    "title": "Job Error Count",
    "version": "1.0.0",
    "name": "ErrorCount",
    "group": "JobError",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"count\": 123\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "post",
    "url": "/api/job/error",
    "title": "Create Job Error",
    "version": "1.0.0",
    "name": "ErrorCreate",
    "group": "JobError",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "job",
            "description": "<p>Job ID of the given error</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Text representation of the error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"job\": 123,\n    \"message\": \"Failed to download source\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "get",
    "url": "/api/job/error",
    "title": "Get Job Errors",
    "version": "1.0.0",
    "name": "ErrorList",
    "group": "JobError",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "post",
    "url": "/api/job/error/:job",
    "title": "Resolve Job Error",
    "version": "1.0.0",
    "name": "ErrorManager",
    "group": "JobError",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "JobError"
  },
  {
    "type": "patch",
    "url": "/api/job/:job",
    "title": "Update Job",
    "version": "1.0.0",
    "name": "JobPatch",
    "group": "Job",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "post",
    "url": "/api/job/:job",
    "title": "Rerun Job",
    "version": "1.0.0",
    "name": "JobRerun",
    "group": "Job",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job",
    "title": "List Jobs",
    "version": "1.0.0",
    "name": "List",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Limit number of returned jobs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "run",
            "description": "<p>Only show job associated with a given ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "defaultValue": "Success,Fail,Pending,Warn",
            "description": "<p>Only show job with one of the given statuses</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "live",
            "defaultValue": "All",
            "description": "<p>Only show jobs associated with a live run</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "before",
            "defaultValue": "",
            "description": "<p>Only show jobs before the given date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "after",
            "defaultValue": "",
            "description": "<p>Only show jobs after the given date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>Filter results by source name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "?limit",
          "content": "?limit=12",
          "type": "String"
        },
        {
          "title": "?run",
          "content": "?run=12",
          "type": "String"
        },
        {
          "title": "?status",
          "content": "?status=Warn\n?status=Warn,Pending\n?status=Success,Fail,Pending,Warn",
          "type": "String"
        },
        {
          "title": "?env",
          "content": "?env=true\n?env=false",
          "type": "String"
        },
        {
          "title": "?before",
          "content": "?before=2020-01-01\n?before=2020-12-01",
          "type": "String"
        },
        {
          "title": "?after",
          "content": "?after=2020-01-01\n?after=2020-12-01",
          "type": "String"
        },
        {
          "title": "?source",
          "content": "?source=us/ca",
          "type": "String"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job",
    "title": "Get Job",
    "version": "1.0.0",
    "name": "Single",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"run\": 187\n    \"map\": null;\n    \"created\": \"2020-08-03T17:37:47.036Z\",\n    \"source_name\":\"us/wy/lincoln\",\n    \"source\":\"https://raw.githubusercontent.com/openaddresses/openaddresses/0f2888ba5bd572f844991f8ea0bef9c39fa39ada/sources/us/wy/lincoln.json\",\n    \"layer\":\"addresses\",\n    \"name\":\"country\",\n    \"output\":{\n        \"cache\":true,\n        \"output\":true,\n        \"preview\":true\n    },\n    \"loglink\":\"batch-staging-job/default/bfdd23b5-9575-4344-93d3-bf9cacd4761c\",\n    \"status\":\"Success\",\n    \"version\":\"1.0.0\",\n    \"count\":4257,\n    \"bounds\":{\"type\":\"Polygon\",\"coordinates\": [\"..geojson coords here..\"],\n    \"stats\":{\n        \"counts\":{\n            \"city\":0,\n            \"unit\":0,\n            \"number\":4244,\n            \"region\":0,\n            \"street\":4257,\n            \"district\":0,\n            \"postcode\":0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/delta",
    "title": "Job Stats Comparison",
    "version": "1.0.0",
    "name": "SingleDelta",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "description": "<p>Compare the stats of the given job against the current live data job</p>",
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/log",
    "title": "Get Job Log",
    "version": "1.0.0",
    "name": "SingleLog",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/output/cache.zip",
    "title": "Get Job Cache",
    "version": "1.0.0",
    "name": "SingleOutputCache",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/output/source.geojson.gz",
    "title": "Get Job Data",
    "version": "1.0.0",
    "name": "SingleOutputData",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/job/:job/output/source.png",
    "title": "Get Job Preview",
    "version": "1.0.0",
    "name": "SingleOutputPreview",
    "group": "Job",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":job",
            "description": "<p>Job ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Job"
  },
  {
    "type": "get",
    "url": "/api/login",
    "title": "Session Info",
    "version": "1.0.0",
    "name": "get",
    "group": "Login",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Return information about the currently logged in user</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"username\": \"example\"\n    \"email\": \"example@example.com\",\n    \"access\": \"admin\",\n    \"flags\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Login"
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Create Session",
    "version": "1.0.0",
    "name": "login",
    "group": "Login",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Log a user into the service and create an authenticated cookie</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"username\": \"example\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Login"
  },
  {
    "type": "get",
    "url": "/api/map",
    "title": "Coverage TileJSON",
    "version": "1.0.0",
    "name": "TileJSON",
    "group": "Map",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "filename": "./index.js",
    "groupTitle": "Map"
  },
  {
    "type": "get",
    "url": "/api/map/:z/:x/:y.mvt",
    "title": "Coverage MVT",
    "version": "1.0.0",
    "name": "VectorTile",
    "group": "Map",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "z",
            "description": "<p>Z coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "x",
            "description": "<p>X coordinate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "y",
            "description": "<p>Y coordinate</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Map"
  },
  {
    "type": "post",
    "url": "/api/run",
    "title": "Create Run",
    "version": "1.0.0",
    "name": "Create",
    "group": "Run",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "live",
            "description": "<p>If the job succeeds, should it replace the current data entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "github",
            "description": "<p>If not live, information about the GitHub CI reference</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "github.ref",
            "description": "<p>Git reference (branch) of the given run</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "github.sha",
            "description": "<p>Git SHA of the given run</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "github.url",
            "description": "<p>Github URL to the specific commit</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "github.check",
            "description": "<p>Github check ID to update</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run",
    "title": "List Runs",
    "version": "1.0.0",
    "name": "List",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Limit number of returned runs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "run",
            "description": "<p>Only show run associated with a given ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "defaultValue": "Success,Fail,Pending,Warn",
            "description": "<p>Only show runs with one of the given statuses</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "before",
            "defaultValue": "",
            "description": "<p>Only show runs before the given date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "after",
            "defaultValue": "",
            "description": "<p>Only show runs after the given date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "?limit",
          "content": "?limit=12",
          "type": "String"
        },
        {
          "title": "?run",
          "content": "?run=12",
          "type": "String"
        },
        {
          "title": "?status",
          "content": "?status=Warn\n?status=Warn,Pending\n?status=Success,Fail,Pending,Warn",
          "type": "String"
        },
        {
          "title": "?before",
          "content": "?before=2020-01-01\n?before=2020-12-01",
          "type": "String"
        },
        {
          "title": "?after",
          "content": "?after=2020-01-01\n?after=2020-12-01",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": 1,\n    \"live\": true,\n    \"created\": \"2020-08-03T17:37:47.036Z\",\n    \"github\": {},\n    \"closed\": true,\n    \"status\": \"Fail\",\n    \"jobs\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run/:run/count",
    "title": "Run Stats",
    "version": "1.0.0",
    "name": "RunStats",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return statistics about jobs within a given run</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"run\": 1,\n    \"status\": {\n        \"Warn\": 1\n        \"Success\": 3,\n        \"Pending\": 2,\n        \"Fail\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run/:run",
    "title": "Get Run",
    "version": "1.0.0",
    "name": "Single",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": 1,\n    \"live\": true,\n    \"created\": \"2020-08-03T17:37:47.036Z\",\n    \"github\": {},\n    \"closed\": true\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "get",
    "url": "/api/run/:run/jobs",
    "title": "List Run Jobs",
    "version": "1.0.0",
    "name": "SingleJobs",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "post",
    "url": "/api/run/:run/jobs",
    "title": "Populate Run Jobs",
    "version": "1.0.0",
    "name": "SingleJobsCreate",
    "group": "Run",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Given an array sources, explode it into multiple jobs and submit to batch or pass in a predefined list of sources/layer/names</p> <pre><code>Note: once jobs are attached to a run, the run is &quot;closed&quot; and subsequent jobs cannot be attached to it</code></pre>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "jobs",
            "description": "<p>Jobs to attach to run</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "jobs",
          "content": "['https://github.com/path_to_source', {\n    \"source\": \"https://github/path_to_source\",\n    \"layer\": \"addresses\",\n    \"name\": \"dcgis\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "patch",
    "url": "/api/run/:run",
    "title": "Update Run",
    "version": "1.0.0",
    "name": "Update",
    "group": "Run",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":run",
            "description": "<p>Run ID</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Run"
  },
  {
    "type": "post",
    "url": "/api/schedule",
    "title": "Scheduled Event",
    "version": "1.0.0",
    "name": "Schedule",
    "group": "Schedule",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Type of lambda scheduled event to respond to. One of &quot;sources&quot; or &quot;collect&quot;</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "Schedule"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "Server Healthcheck",
    "version": "1.0.0",
    "name": "Health",
    "group": "Server",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>AWS ELB Healthcheck for the server</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"healthy\": true,\n    \"message\": \"I work all day, I work all night to get the open the data!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Server"
  },
  {
    "type": "get",
    "url": "/api",
    "title": "Get Metadata",
    "version": "1.0.0",
    "name": "Meta",
    "group": "Server",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Return basic metadata about server configuration</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"version\": \"1.0.0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "Server"
  },
  {
    "version": "1.0.0",
    "name": "CreateToken",
    "group": "Token",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "type": "",
    "url": "",
    "filename": "./index.js",
    "groupTitle": "Token"
  },
  {
    "version": "1.0.0",
    "name": "DeleteToken",
    "group": "Token",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "type": "",
    "url": "",
    "filename": "./index.js",
    "groupTitle": "Token"
  },
  {
    "version": "1.0.0",
    "name": "ListTokens",
    "group": "Token",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "type": "",
    "url": "",
    "filename": "./index.js",
    "groupTitle": "Token"
  },
  {
    "type": "post",
    "url": "/api/upload",
    "title": "Create Upload",
    "version": "1.0.0",
    "name": "upload",
    "group": "Upload",
    "permission": [
      {
        "name": "upload",
        "title": "Upload",
        "description": "<p>The user must be an admin or have the &quot;upload&quot; flag enabled on their account</p>"
      }
    ],
    "description": "<p>Statically cache source data</p> <pre><code>If a source is unable to be pulled from directly, authenticated users can cache data resources to the OpenAddresses S3 cache to be pulled from</code></pre>",
    "filename": "./index.js",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "/api/health",
    "title": "Create User",
    "version": "1.0.0",
    "name": "Create",
    "group": "User",
    "permission": [
      {
        "name": "public",
        "title": "Public",
        "description": "<p>This API endpoint does not require authentication</p>"
      }
    ],
    "description": "<p>Create a new user</p>",
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "List Users",
    "version": "1.0.0",
    "name": "list",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Return a list of users that have registered with the service</p>",
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/me",
    "title": "Get User Session Metadata",
    "version": "1.0.0",
    "name": "self",
    "group": "User",
    "permission": [
      {
        "name": "user",
        "title": "User",
        "description": "<p>A user must be logged in to use this endpoint</p>"
      }
    ],
    "description": "<p>Return basic user information about the currently authenticated user</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"username\": \"example\"\n    \"email\": \"example@example.com\",\n    \"access\": \"admin\",\n    \"flags\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/api/user/:id",
    "title": "Update User",
    "version": "1.0.0",
    "name": "self",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Admin",
        "description": "<p>The user must be an admin to use this endpoint</p>"
      }
    ],
    "description": "<p>Update information about a given user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>The UID of the user to update</p>"
          }
        ]
      }
    },
    "filename": "./index.js",
    "groupTitle": "User"
  }
] });

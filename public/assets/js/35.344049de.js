(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{425:function(n,t,e){"use strict";e.r(t);var s=e(2),o=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h4",{attrs:{id:"pymongodb操作"}},[n._v("pymongodb操作")]),n._v(" "),t("h1",{attrs:{id:""}},[t("img",{attrs:{src:"https://i.imgur.com/FySOMGj.png",alt:""}})]),n._v(" "),t("h1",{attrs:{id:"-2"}},[t("img",{attrs:{src:"https://i.imgur.com/J7nNjQo.png",alt:""}})]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('    mongod --auth --dbpath="/usr/local/mongodb/data" --logpath="/usr/local/mongodb/logs/mongod.log" --install\n    #创建admin数据表\n    use admin\n    #创建管理用户的用户\n    db.createUser(\n      {\n        user: "root",\n        pwd: "123456",\n        roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]\n      }\n    )\n    #认证\n    db.auth(\'user\',\'pass\')\n    #切换数据表\n    use testdb\n    #创建当前数据表的操作用户\n    db.createUser(\n      {\n        user: "test",\n        pwd: "123456",\n        roles: [ { role: "readWrite", db: "testdb" } ]\n      }\n    )\n')])])]),t("h3",{attrs:{id:"-3"}}),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("class MONGODB_CONFIG:\n  HOST = \"127.0.0.1\"\n  PORT = 27017\n  DB_NAME = \"testdb\"\n  USER_NAME = \"test\"\n  PASSWORD = \"123456\"\n\nimport config\nimport pymongo\n# 创建连接对象 ''' mongodb://localhost:27017/ '''\nclient = pymongo.MongoClient(host=config.MONGODB_CONFIG.HOST, port=config.MONGODB_CONFIG.PORT)\n# 连接数据库\ndb = client[config.MONGODB_CONFIG.DB_NAME]\ndb.authenticate(config.MONGODB_CONFIG.USER_NAME, config.MONGODB_CONFIG.PASSWORD,mechanism='SCRAM-SHA-1')\n# 连接表\ncollection = db.news\n")])])]),t("h3",{attrs:{id:"-4"}}),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("def init():\n    #创建连接对象 ''' mongodb://localhost:27017/ '''\n    client = pymongo.MongoClient(host='127.0.0.1',port=27017)\n    #指定数据集(数据库名称) ''' client['test'] '''\n    db = client.testDB\n    #指定集合 ''' db['students'] '''\n    return db.students\n\n#插入单条数据\ndef insert(collection,student):\n    result = collection.insert(student)\n    print(result)\n\n#插入多条数据\ndef insert(collection,students):\n    result = collection.insert(students)\n    print(result)\n\n#使用3.x推荐方法插入单条数据\ndef insert_one(collection,student):\n    result = collection.insert_one(student)\n    print(result)\n    print(result.inserted_id)\n\n#使用3.x推荐方法插入多条数据\ndef insert_many(collection,students):\n    result = collection.insert_many(students)\n    print(result)\n    print(result.inserted_ids)\n\n#查询单条数据\ndef find_one(collection,args):\n    result = collection.find_one(args)\n    print(type(result))\n    print(result)\n\n#查询多条数据\ndef finds(collection,args):\n    results = collection.find(args)\n    print(type(results))\n    print(results)\n    for result in results:\n        print(result)\n\n#查询记录数\ndef count(collection,args):\n    count = collection.find(args).count()\n    print(count)\n\n#排序 ''' ASCENDING 升序  DESCENDING 降序 '''\ndef sort(collection,args,cending):\n    results = collection.find().sort(args, cending)\n    print([result[args] for result in results])\n\n#偏移n位后查询\ndef skip(collection,index):\n    results = collection.find().skip(index)\n    print([result['name'] for result in results])\n\n#获取n条记录\ndef limit(collection,index):\n    results = collection.find().limit(index)\n    print([result['name'] for result in results])\n\n#更新数据库\ndef update(condition,student):\n    result = collection.update(condition, student)\n    print(result)\n\n#删除数据 delete_one() delete_many()\ndef remove(collection,args):\n    result = collection.remove(args)\n    print(result)\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);
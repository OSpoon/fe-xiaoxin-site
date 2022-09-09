(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{420:function(e,t,n){"use strict";n.r(t);var s=n(2),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"cos-sdk-安装"}},[e._v("cos sdk 安装")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("sdkname = cos-python-sdk-v5\n")])])]),t("h4",{attrs:{id:"腾讯云cosv5python-sdk-目前可以支持python2-6与python2-7"}},[e._v("腾讯云COSV5Python SDK, 目前可以支持Python2.6与Python2.7")]),e._v(" "),t("h4",{attrs:{id:"pip安装指南"}},[e._v("pip安装指南:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("pip install -U cos-python-sdk-v5\n")])])]),t("h4",{attrs:{id:"cos最新可用地域-参照"}},[e._v("cos最新可用地域,参照")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("https://www.qcloud.com/document/product/436/6224\nlogging.basicConfig(level=logging.DEBUG, stream=sys.stdout)\n")])])]),t("h4",{attrs:{id:"设置用户属性-包括secret-id-secret-key-region"}},[e._v("设置用户属性, 包括secret_id, secret_key, region")]),e._v(" "),t("h4",{attrs:{id:"appid已在配置中移除-请在参数"}},[e._v("appid已在配置中移除,请在参数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("Bucket中带上appid。Bucket由bucketname-appid组成\n\nsecret_id = 'AKID15IsskiBQACGbAo6WhgcQbVls7HmuG00'     # 替换为用户的secret_id\nsecret_key = 'csivKvxxrMvSvQpMWHuIz12pThQQlWRW'     # 替换为用户的secret_key\nregion = 'ap-beijing-1'    # 替换为用户的region\ntoken = ''                 # 使用临时秘钥需要传入Token，默认为空,可不填\nconfig = CosConfig(Region=region, Secret_id=secret_id, Secret_key=secret_key, Token=token)  # 获取配置对象\nclient = CosS3Client(config)\n")])])]),t("h4",{attrs:{id:"文件流-简单上传"}},[e._v("文件流 简单上传")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("file_name = 'test.txt'\nwith open('test.txt', 'rb') as fp:\n    response = client.put_object(\n        Bucket='test04-123456789',  # Bucket由bucketname-appid组成\n        Body=fp,\n        Key=file_name,\n        StorageClass='STANDARD',\n        CacheControl='no-cache',\n        ContentDisposition='download.txt'\n    )\n    print response['ETag']\n")])])]),t("h4",{attrs:{id:"字节流-简单上传"}},[e._v("字节流 简单上传")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("response = client.put_object(\n    Bucket='test04-123456789',\n    Body='abcdefg',\n    Key=file_name,\n    CacheControl='no-cache',\n    ContentDisposition='download.txt'\n)\nprint response['ETag']\n")])])]),t("h4",{attrs:{id:"文件下载-获取文件到本地"}},[e._v("文件下载 获取文件到本地")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("response = client.get_object(\n    Bucket='test04-123456789',\n    Key=file_name,\n)\nresponse['Body'].get_stream_to_file('output.txt')\n")])])]),t("h4",{attrs:{id:"文件下载-获取文件流"}},[e._v("文件下载 获取文件流")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("response = client.get_object(\n    Bucket='test04-123456789',\n    Key=file_name,\n)\nfp = response['Body'].get_raw_stream()\nprint fp.read(2)\n")])])]),t("h4",{attrs:{id:"文件下载-捕获异常"}},[e._v("文件下载 捕获异常")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("try:\n    response = client.get_object(\n        Bucket='test04-123456789',\n        Key='not_exist.txt',\n    )\n    fp = response['Body'].get_raw_stream()\n    print fp.read(2)\nexcept CosServiceError as e:\n    print e.get_origin_msg()\n    print e.get_digest_msg()\n    print e.get_status_code()\n    print e.get_error_code()\n    print e.get_error_msg()\n    print e.get_resource_location()\n    print e.get_trace_id()\n    print e.get_request_id()\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{427:function(s,e,a){"use strict";a.r(e);var t=a(2),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"scrapyd-doc"}},[s._v("Scrapyd-DOC")]),s._v(" "),e("p",[s._v("[TOC]")]),s._v(" "),e("h3",{attrs:{id:"安装"}},[s._v("安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("pip  install  scrapyd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"api"}},[s._v("API")]),s._v(" "),e("h4",{attrs:{id:"daemonstatus-json"}},[s._v("daemonstatus.json")]),s._v(" "),e("h5",{attrs:{id:"检查服务的负载状态"}},[s._v("检查服务的负载状态")]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/daemonstatus.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{ "status": "ok", "running": "0", "pending": "0", "finished": "0", "node_name": "node-name" }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"addversion-json"}},[s._v("addversion.json")]),s._v(" "),e("h5",{attrs:{id:"将项目添加到项目中-如果项目不存在则创建项目"}},[s._v("将项目添加到项目中，如果项目不存在则创建项目")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，必填） - 项目名称")]),s._v(" "),e("li",[e("code",[s._v("version")]),s._v(" （字符串，必填） - 项目版本")]),s._v(" "),e("li",[e("code",[s._v("egg")]),s._v(" （file，required） - 包含项目代码的Python egg")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/addversion.json -F project=myproject -F version=r23 -F egg=@myproject.egg\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok", "spiders": 3}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"schedule-json"}},[s._v("schedule.json")]),s._v(" "),e("h5",{attrs:{id:"运行爬虫返回作业id"}},[s._v("运行爬虫返回作业ID")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，必填） - 项目名称")]),s._v(" "),e("li",[e("code",[s._v("spider")]),s._v(" （字符串，必填） - 蜘蛛名称")]),s._v(" "),e("li",[e("code",[s._v("setting")]),s._v(" （字符串，可选） - 运行蜘蛛时使用的Scrapy设置")]),s._v(" "),e("li",[e("code",[s._v("jobid")]),s._v(" （字符串，可选） - 用于标识作业的作业ID，覆盖默认生成的UUID")]),s._v(" "),e("li",[e("code",[s._v("_version")]),s._v(" （string，optional） - 要使用的项目版本")]),s._v(" "),e("li",[s._v("任何其他参数都作为spider参数传递")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/schedule.json -d project=myproject -d spider=somespider\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok", "jobid": "6487ec79947edab326d6db28a2d86511e8247444"}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"cancel-json"}},[s._v("cancel.json")]),s._v(" "),e("h5",{attrs:{id:"停止爬虫。如果作业处于待处理状态-则会将其删除。如果作业正在运行-它将被终止。"}},[s._v("停止爬虫。如果作业处于待处理状态，则会将其删除。如果作业正在运行，它将被终止。")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，必填） - 项目名称")]),s._v(" "),e("li",[e("code",[s._v("job")]),s._v(" （字符串，必填） - 作业ID")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/cancel.json -d project=myproject -d job=6487ec79947edab326d6db28a2d86511e8247444\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok", "prevstate": "running"}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"listprojects-json"}},[s._v("listprojects.json")]),s._v(" "),e("h5",{attrs:{id:"获取上传到此scrapy服务器的项目列表"}},[s._v("获取上传到此Scrapy服务器的项目列表")]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/listprojects.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok", "projects": ["myproject", "otherproject"]}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"listversions-json"}},[s._v("listversions.json")]),s._v(" "),e("h5",{attrs:{id:"获取某些项目可用的版本列表。版本按顺序返回-最后一个版本是当前使用的版本"}},[s._v("获取某些项目可用的版本列表。版本按顺序返回，最后一个版本是当前使用的版本")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，必填） - 项目名称")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/listversions.json?project=myproject\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok", "versions": ["r99", "r156"]}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"listspiders-json"}},[s._v("listspiders.json")]),s._v(" "),e("h5",{attrs:{id:"获取某个项目的最后一个-除非被覆盖-版本中可用的蜘蛛列表"}},[s._v("获取某个项目的最后一个（除非被覆盖）版本中可用的蜘蛛列表")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，必填） - 项目名称")]),s._v(" "),e("li",[e("code",[s._v("_version")]),s._v(" （string，optional） - 要检查的项目的版本")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/listspiders.json?project=myproject\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok", "spiders": ["spider1", "spider2", "spider3"]}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"listjobs-json"}},[s._v("listjobs.json")]),s._v(" "),e("h5",{attrs:{id:"获取某个项目的待处理-正在运行和已完成的作业列表"}},[s._v("获取某个项目的待处理，正在运行和已完成的作业列表")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，选项） - 将结果限制为项目名称")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/listjobs.json?project=myproject | python -m json.tool\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "status": "ok",\n    "pending": [\n        {\n            "project": "myproject", "spider": "spider1",\n            "id": "78391cc0fcaf11e1b0090800272a6d06"\n        }\n    ],\n    "running": [\n        {\n            "id": "422e608f9f28cef127b3d5ef93fe9399",\n            "project": "myproject", "spider": "spider2",\n            "start_time": "2012-09-12 10:14:03.594664"\n        }\n    ],\n    "finished": [\n        {\n            "id": "2f16646cfcaf11e1b0090800272a6d06",\n            "project": "myproject", "spider": "spider3",\n            "start_time": "2012-09-12 10:14:03.594664",\n            "end_time": "2012-09-12 10:24:03.594664"\n        }\n    ]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h4",{attrs:{id:"delversion-json"}},[s._v("delversion.json")]),s._v(" "),e("h5",{attrs:{id:"删除项目版本。如果给定项目没有更多可用版本-则该项目也将被删除"}},[s._v("删除项目版本。如果给定项目没有更多可用版本，则该项目也将被删除")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，必填） - 项目名称")]),s._v(" "),e("li",[e("code",[s._v("version")]),s._v(" （字符串，必填） - 项目版本")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/delversion.json -d project=myproject -d version=r99\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok"}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"delproject-json"}},[s._v("delproject.json")]),s._v(" "),e("h5",{attrs:{id:"删除项目及其所有上载的版本"}},[s._v("删除项目及其所有上载的版本")]),s._v(" "),e("p",[s._v("参数：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("project")]),s._v(" （字符串，必填） - 项目名称")])]),s._v(" "),e("p",[s._v("示例请求：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://localhost:6800/delproject.json -d project=myproject\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("响应示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{"status": "ok"}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"配置文件"}},[s._v("配置文件")]),s._v(" "),e("h5",{attrs:{id:"scrapyd在以下位置搜索配置文件-并按顺序解析它们-最新的配置文件具有更高的优先级"}},[s._v("Scrapyd在以下位置搜索配置文件，并按顺序解析它们，最新的配置文件具有更高的优先级：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("/etc/scrapyd/scrapyd.conf")]),s._v(" （UNIX）")]),s._v(" "),e("li",[e("code",[s._v("c:\\scrapyd\\scrapyd.conf")]),s._v(" （视窗）")]),s._v(" "),e("li",[e("code",[s._v("/etc/scrapyd/conf.d/*")]),s._v(" （按字母顺序排列，Unix）")]),s._v(" "),e("li",[e("code",[s._v("scrapyd.conf")])]),s._v(" "),e("li",[e("code",[s._v("~/.scrapyd.conf")]),s._v(" （用户主目录）")])]),s._v(" "),e("h5",{attrs:{id:"配置文件支持以下选项-请参阅示例中的默认值-。"}},[s._v("配置文件支持以下选项（请参阅"),e("a",{attrs:{href:"https://scrapyd.readthedocs.io/en/latest/config.html#config-example",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例中的"),e("OutboundLink")],1),s._v("默认值）。")]),s._v(" "),e("h6",{attrs:{id:"http-port"}},[s._v("HTTP_PORT")]),s._v(" "),e("p",[s._v("HTTP JSON API将侦听的TCP端口。默认为"),e("code",[s._v("6800")]),s._v("。")]),s._v(" "),e("h6",{attrs:{id:"bind-address"}},[s._v("bind_address")]),s._v(" "),e("p",[s._v("网站和json webservices将侦听的IP地址。默认为"),e("code",[s._v("127.0.0.1")]),s._v("（localhost）")]),s._v(" "),e("h6",{attrs:{id:"max-proc"}},[s._v("max_proc")]),s._v(" "),e("p",[s._v("将启动的最大并发Scrapy进程数。如果未设置或"),e("code",[s._v("0")]),s._v("将使用系统中可用的cpus数乘以"),e("code",[s._v("max_proc_per_cpu")]),s._v("选项中的值。默认为"),e("code",[s._v("0")]),s._v("。")]),s._v(" "),e("h6",{attrs:{id:"max-proc-per-cpu"}},[s._v("max_proc_per_cpu")]),s._v(" "),e("p",[s._v("每个cpu将启动的最大并发Scrapy进程数。默认为"),e("code",[s._v("4")]),s._v("。")]),s._v(" "),e("h6",{attrs:{id:"调试"}},[s._v("调试")]),s._v(" "),e("p",[s._v("是否启用调试模式。默认为"),e("code",[s._v("off")]),s._v("。启用调试模式时，如果处理JSON API调用时出错，则将返回完整的Python回溯（作为纯文本响应）。")]),s._v(" "),e("h6",{attrs:{id:"eggs-dir"}},[s._v("eggs_dir")]),s._v(" "),e("p",[s._v("将存储项目egg的目录。")]),s._v(" "),e("h6",{attrs:{id:"dbs-dir"}},[s._v("dbs_dir")]),s._v(" "),e("p",[s._v("将存储项目数据库的目录（包括蜘蛛队列）。")]),s._v(" "),e("h6",{attrs:{id:"logs-dir"}},[s._v("logs_dir")]),s._v(" "),e("p",[s._v("将存储Scrapy日志的目录。如果要禁用存储日志，请将此选项设置为空，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("logs_dir  =\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h6",{attrs:{id:"items-dir"}},[s._v("items_dir")]),s._v(" "),e("p",[s._v("0.15版本的新功能。")]),s._v(" "),e("p",[s._v("将存储Scrapy项目的目录。默认情况下禁用此选项，因为您需要使用数据库或源导出程序。将其设置为非空会导致通过覆盖scrapy设置将已删除的项目源存储到指定的目录"),e("code",[s._v("FEED_URI")]),s._v("。")]),s._v(" "),e("h6",{attrs:{id:"jobs-to-keep"}},[s._v("jobs_to_keep")]),s._v(" "),e("p",[s._v("0.15版本的新功能。")]),s._v(" "),e("p",[s._v("每个蜘蛛保留的已完成作业数。默认为"),e("code",[s._v("5")]),s._v("。这指的是日志和项目。")]),s._v(" "),e("p",[s._v("此设置"),e("code",[s._v("logs_to_keep")]),s._v("在以前的版本中命名。")]),s._v(" "),e("h6",{attrs:{id:"finished-to-keep"}},[s._v("finished_to_keep")]),s._v(" "),e("p",[s._v("版本0.14中的新功能。")]),s._v(" "),e("p",[s._v("要在启动器中保留的已完成进程数。默认为"),e("code",[s._v("100")]),s._v("。这仅反映在网站/作业端点和相关的json webservices上。")]),s._v(" "),e("h6",{attrs:{id:"poll-interval"}},[s._v("POLL_INTERVAL")]),s._v(" "),e("p",[s._v("用于轮询队列的间隔，以秒为单位。默认为"),e("code",[s._v("5.0")]),s._v("。可以是浮点数，如"),e("code",[s._v("0.2")])]),s._v(" "),e("h2",{attrs:{id:"scrapyd-client"}},[s._v("Scrapyd-Client")]),s._v(" "),e("h3",{attrs:{id:"安装-2"}},[s._v("安装：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("pip install scrapyd-client\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"运行"}},[s._v("运行")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("将 "),e("strong",[s._v("scrapyd-deploy")]),s._v(" 拷贝到scrapy项目于scrapy.cfg同级")])]),s._v(" "),e("li",[e("p",[s._v("修改scrapy.cfg内容")])]),s._v(" "),e("li",[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[settings]\ndefault = cnblogSpider.settings\n\n[deploy:100]\nurl = http://localhost:6800/\nproject = cnblogSpider\n\nusername = admin\npassword = admin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("启动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scrapyd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("发布")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("scrapyd-deploy <deploy名称> -p <项目名称> -v <版本号>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("运行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl http://127.0.0.1:6800/schedule.json -d project=cnblogSpider -d spider=anjuke\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
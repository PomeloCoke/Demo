
var listInfo = new Vue({
    el:"#list-main-body",
    data:{
        search:"",
        listInfo:[
            {
                name:"零基础资源：HTML+CSS",
                link:"https://pan.baidu.com/s/1ZRxeSiwHB8WFyy7ghmSQCA",
                password:"b8f2",
            },
            {
                name:"零基础资源：JavaScript",
                link:"https://pan.baidu.com/s/1gddTdaHmzxvzQK9NWR9yEA",
                password:"p3gc",
            },
            {
                name:"移动Web网页开发资源",
                link:"https://pan.baidu.com/s/1cqegbA4gXMahWF8PV1bX-Q",
                password:"2fdp",
            },
            {
                name:"Node.js",
                link:"https://pan.baidu.com/s/12Kk5ek7DqpHTaaLzZl4GOA",
                password:"kvwj",
            },
            {
                name:"AJAX从入门到精通",
                link:"https://pan.baidu.com/s/1Ny6Y_snzV_YaRMrjhuDh5A",
                password:"banx",
            },
            {
                name:"Vue.js入门到精通",
                link:"https://pan.baidu.com/s/178YyZ-zHvijAO46BdVbD6g",
                password:"sm4v",
            },
            {
                name:"React.js精品教程视频",
                link:"https://pan.baidu.com/s/1AL_aFlNhIzX0E3HkfNIwFg",
                password:"346y",
            },
            {
                name:"[项目] 超级玛丽",
                link:"https://pan.baidu.com/s/1Xr3S8Q4DKPoYQkNaW6oOuA",
                password:"aw9z",
            },
            {
                name:"[项目] 成绩管理系统",
                link:"https://pan.baidu.com/s/1ilvozGK8oB_-j5bhlvcB7w",
                password:"l4v2",
            },
            {
                name:"[项目] 个人理财系统",
                link:"https://pan.baidu.com/s/1uBY0ym-8jrNTn9ues_a-aw",
                password:"lbpc",
            },
            {
                name:"[项目] 人事管理系统项目实战视频",
                link:"https://pan.baidu.com/s/1wCNWOG-xaLb1yAvsIdK5Og",
                password:"3ayb",
            },
            {
                name:"[项目] JBPM采购申请系统",
                link:"https://pan.baidu.com/s/1tZdSrIIYH4bnZrMBOBqGHg",
                password:"0su2",
            },
            {
                name:"[项目] 用户管理系统",
                link:"https://pan.baidu.com/s/1-LO1aDSdC0Kxy0c7ZNU_Bg",
                password:"2wlf",
            },
            {
                name:"[项目] Java web网上图书商城·完整项目",
                link:"https://pan.baidu.com/s/1tjmhDwGAn3Mdsof0Iu-efA",
                password:"k3sx",
            },
            {
                name:"[项目] VIP商场",
                link:"https://pan.baidu.com/s/1n3DuWFFIyyRzGI2RxR7jsw",
                password:"q8zt",
            },
            {
                name:"[项目] 《企业招聘系统》视频-jeecg开源频台",
                link:"https://pan.baidu.com/s/12b_V2LxoBoEP7EWK4Kc_Ew",
                password:"20sd",
            },
            {
                name:"[项目] 博客系统项目",
                link:"https://pan.baidu.com/s/1xGTxVPr-tijhyZPup54Euw",
                password:"4em4",
            },
            {
                name:"[项目] QQ聊天器",
                link:"https://pan.baidu.com/s/1G1CX_GerVYMYWI3y7bbJRQ",
                password:"yvbn",
            },
            {
                name:"[项目] 坦克大战",
                link:"https://pan.baidu.com/s/1iQD04fXlCqrSG1Ezna_iqg",
                password:"fjtv",
            },
            {
                name:"[项目] 五子棋游戏",
                link:"https://pan.baidu.com/s/1Nwau0LZyWxAWp6Yqmsz0fw",
                password:"pw1l",
            },
            {
                name:"[项目] 报名系统",
                link:"https://pan.baidu.com/s/1bpJwXzysEgiOfLmULBMBOQ",
                password:"vm11",
            },
            {
                name:"[项目] OA供应链系统",
                link:"https://pan.baidu.com/s/1YBoNDKUmmRg-ycTMKxeMNg",
                password:"kr6t",
            },
            {
                name:"[项目] 杰信商贸ssm版",
                link:"https://pan.baidu.com/s/1m0EmptzKd7WDpYQ_i5fa4Q",
                password:"yukp",
            },
            {
                name:"[项目] 国家税务协同平台项目",
                link:"https://pan.baidu.com/s/1VkFTRv4DfKShN4VrlZyxdA",
                password:"runc",
            },
            {
                name:"[项目] Javaweb聊天室",
                link:"https://pan.baidu.com/s/1qKyQEzRABYDXAOK7Mx8XDQ",
                password:"evf5",
            },
            {
                name:"[项目] 网上书店",
                link:"https://pan.baidu.com/s/1Ya2NhTvoSNWthhCAvHUnSw",
                password:"82od",
            },
            {
                name:"[项目] 手机进销存系统",
                link:"https://pan.baidu.com/s/1SgZnAA_OhOZEjlB4Tr5GRA",
                password:"lbng",
            },
            {
                name:"[项目] 俄罗斯方块游戏开发视频教程",
                link:"https://pan.baidu.com/s/1_qXE5PpkEA3h2BX9dz64Bw",
                password:"jat1",
            },
            {
                name:"[项目] 银行业务调度系统视频教程",
                link:"https://pan.baidu.com/s/18cZZ22va495qjlAAU4jFzA",
                password:"w6ri",
            },
            {
                name:"[项目] 供应链系统视频教程",
                link:"https://pan.baidu.com/s/1TfV2dfrLnUAYlCVG8ppOlA",
                password:"hpz8",
            },
            {
                name:"[项目] 网上商城项目",
                link:"https://pan.baidu.com/s/1nHpOCPTinMDOhi07YFRR4w",
                password:"xrz0",
            },
            {
                name:"[项目] 药品集中采购视频教程",
                link:"https://pan.baidu.com/s/1i4xffBJjF-dwFC-QhrZA0g",
                password:"mwtw",
            },
            {
                name:"[项目] CRM客户管理项目",
                link:"https://pan.baidu.com/s/1I-OJSE-VXbX9dm8aN0QP4w",
                password:"o1vv",
            },
            {
                name:"[项目] 宅急送项目",
                link:"https://pan.baidu.com/s/1VFJ7TTwApFUZsQQnogjr-A",
                password:"phtf",
            },
            {
                name:"[项目] 校园网项目",
                link:"https://pan.baidu.com/s/1H4nUEtw3-WKVN78b6TuklA",
                password:"87gc",
            },
            {
                name:"[项目] Java邮件开发教程",
                link:"https://pan.baidu.com/s/1ZpLoacAYhk4v8_PzyGzxIg",
                password:"yzsb",
            },
            {
                name:"[项目] Java网上在线支付实战视频",
                link:"https://pan.baidu.com/s/1t3DjD7Fa7Vv66wyTND2ddQ",
                password:"3q1o",
            },
            {
                name:"[项目] 天猫商城购物车实战视频资料",
                link:"https://pan.baidu.com/s/1UxtMqsszcAKpZ_2a41raSQ ",
                password:"c1rd",
            },
            {
                name:"[项目] 移动端混合APP视频和资料",
                link:"https://pan.baidu.com/s/1bwDYjR8UMk5pgpvPcxWBfA ",
                password:"tkyj",
            },
            {
                name:"[项目] 企业级网站前端制作视频和源码",
                link:"https://pan.baidu.com/s/1joNyOi5CegvJW4G-UeBODA ",
                password:"wock",
            },
            {
                name:"[项目] 企业级网站后台制作视频和源码",
                link:"https://pan.baidu.com/s/1769hXRG6OnWOfpZWwMpA-w ",
                password:"k2wn",
            },
            {
                name:"[项目] OA办公自动化项目",
                link:"https://pan.baidu.com/s/1YqRWtnWJZAFNNCf_Z2SLtA",
                password:"ccj9",
            },
            {
                name:"Nginx",
                link:"https://pan.baidu.com/s/1fRjIbk-rsL0HBo1WWaM-OQ",
                password:"5z3a",
            },
            {
                name:"[项目] 麦子商城制作视频和源码",
                link:"https://pan.baidu.com/s/1DpoF958TsQwdqYGK7r34lw ",
                password:"5ab6",
            },
            {
                name:"[项目] 前端到后台ThinkPHP开发整站",
                link:"https://pan.baidu.com/s/1FZa8O03NLEOdSeqqb_HgEw",
                password:"3km2",
            },
            {
                name:"快速上手Linux 玩转典型应用",
                link:"https://pan.baidu.com/s/1dPZA47vku2eYQY_PhfCOtg",
                password:"2rdm",
            },
            {
                name:"[项目] Vue核心技术 vue实战精讲",
                link:"https://pan.baidu.com/s/1sHStCWy4XJWflft6H_qAKA",
                password:"0ybr",
            },
            {
                name:"[项目] 基于Laravel，AngularJS全栈开发知乎",
                link:"https://pan.baidu.com/s/1MKwxwY6GmHJIdT2d3s_F2Q",
                password:"uvv7",
            },
            {
                name:"[项目] 强力django+杀手级xadmin 打造上线标准的在线教育平台",
                link:"https://pan.baidu.com/s/1enDpWa6jmRh5FR5cMvTFJQ",
                password:"bfwy",
            },
            {
                name:"[项目] 前端 Vue+Node+MongoDB高级全栈开发",
                link:"https://pan.baidu.com/s/1EpuXIb7kpVc_7VrstTMWRg",
                password:"8vcp",
            },
            {
                name:"[项目] 电商秒杀活动视频和源码",
                link:"https://pan.baidu.com/s/1RHHV8SOC7Q9BnPRTSVWYNg ",
                password:"ze4h",
            },
            {
                name:"[项目] Web自动化测试 Selenium基础到企业应用",
                link:"https://pan.baidu.com/s/1IlcpX_iHrC2b3d3lyJbZ4w",
                password:"23jb",
            },
            {
                name:"第三套前端全套视频和源码",
                link:"https://pan.baidu.com/s/1rd6gB64fS17ylqi3A9IA-w ",
                password:"egy5",
            },
            {
                name:"PHP全套第一套视频和资料",
                link:"https://pan.baidu.com/s/13DCQxHpLos6VcB6gY5LZSw ",
                password:"tmqq",
            },
            {
                name:"PHP全套第二套视频和资料",
                link:"https://pan.baidu.com/s/18GF5u8Z4PploD2lYFgs_Ww ",
                password:"l84u",
            },
            {
                name:"[项目] Web自动化测试 Selenium基础到企业应用",
                link:"https://pan.baidu.com/s/1XAuKpMXenB9qs1QNMF9g-Q",
                password:"2xew",
            },
            {
                name:"[项目] 京东手机端制作视频和源码",
                link:"https://pan.baidu.com/s/1GcCgnuYoZoOUadA8IpiywA ",
                password:"o7z9",
            },
            {
                name:"[项目] vue.js高仿饿了么",
                link:"https://pan.baidu.com/s/1uqBpqttmP_jCZoao57Gz9g",
                password:"km8w",
            },
            {
                name:"[项目] 大型SpringMVC，Mybatis，Redis，Solr，Nginx，SSM分布式电商项目视频教程",
                link:"https://pan.baidu.com/s/1m71jc-K-0xfJ3zC6Au_byQ",
                password:"tjpx",
            },
            {
                name:"Spring Cloud",
                link:"https://pan.baidu.com/s/1EkZwDVcqLY8OZ42NxHEuPA",
                password:"18nj",
            },
            {
                name:"第一套前端全套视频和源码",
                link:"https://pan.baidu.com/s/1-eTjKfe1Ozge0YccblhY4w ",
                password:"eyxs",
            },
            {
                name:"第二套前端全套视频和源码",
                link:"https://pan.baidu.com/s/1e6OC7fBWWQuzU6sGDj0Spw ",
                password:"p8qm",
            },
            {
                name:"spark视频和资料",
                link:"https://pan.baidu.com/s/1IOX-gjWJtWam3XYZk9l6BQ ",
                password:"euql",
            },
            {
                name:"响应式一招开发制胜",
                link:"https://pan.baidu.com/s/1yLxWwW2Ql0fo0R-p8mt_qw",
                password:"r52v",
            },
            {
                name:"四大维度解锁Webpack3.0前端工程化",
                link:"https://pan.baidu.com/s/1svUZaIruItMV8NPAMzW-cw",
                password:"uwe7",
            },
            {
                name:"SVN视频和资料",
                link:"https://pan.baidu.com/s/1QOXjJNF0_BOLN2hePal5_g ",
                password:"1way",
            },
            {
                name:"[项目] 网上商城Extjs4.1，Spring3.2，hibernate4.1，MySql5（视频+源码）",
                link:"https://pan.baidu.com/s/1wQAGwXBDK5XmZCl_J29Qug",
                password:"xyme",
            },
            {
                name:"mysql视频和资料",
                link:"https://pan.baidu.com/s/1c1ErxrBn7YC6ALtnMz9bNg ",
                password:"qk5g ",
            },
            {
                name:"go语言视频和资料",
                link:"https://pan.baidu.com/s/1bIqDCXld1oHxHTqfhx6Acw ",
                password:"xp6v",
            },
            {
                name:"手机端开发视频和资料",
                link:"https://pan.baidu.com/s/1z8Q2bZ_ZYzLbjIHRqVjrvQ ",
                password:"1xgt",
            },
            {
                name:"scale视频和资料",
                link:"https://pan.baidu.com/s/1IOX-gjWJtWam3XYZk9l6BQ ",
                password:"euql",
            },
            {
                name:"[项目] 微服务气象实战",
                link:"https://pan.baidu.com/s/1A-9DPRPK7D3d2KcocZwRig",
                password:"qz2f",
            },
            {
                name:"高级架构师进阶",
                link:"https://pan.baidu.com/s/1-sGHknOU0IZjhdk_-7XUzg ",
                password:"ujs8",
            },
            {
                name:"PPT2000套",
                link:"https://pan.baidu.com/s/1qVX5zDUPSnnTGoqMrSBM9w ",
                password:"s93g",
            },
            {
                name:"Hadoop视频和资料",
                link:"https://pan.baidu.com/s/12fOK6lIYKNPZU4Kc-Ir3TQ ",
                password:"dy4y",
            },
            {
                name:"Linux指导",
                link:"https://pan.baidu.com/s/1EIEAmgQGcxUD7YgzNfIRJg ",
                password:"3431",
            },
            {
                name:"JavaEE实战",
                link:"https://pan.baidu.com/s/1TzKXFANtO5qL2PRg3hmr8w ",
                password:"ycjn",
            },
            {
                name:"前端视频和资料",
                link:"https://pan.baidu.com/s/1euDIVgo2hHyBl1YcLwu3nQ ",
                password:"7xzc",
            },
            {
                name:"Python高级编程技巧",
                link:"https://pan.baidu.com/s/1jtC8WerhWeIEFoUag8hpDg ",
                password:"xwxx",
            },
            {
                name:"bootstrap视频和资料",
                link:"https://pan.baidu.com/s/1SGfKhzibnYh-5W5IQNnluQ ",
                password:"md4w",
            },
            {
                name:"0基础入门安卓",
                link:"https://pan.baidu.com/s/1T9QsNZWBAz43io-gJWFEcQ ",
                password:"xkkd",
            },
            {
                name:"软件测试指导",
                link:"https://pan.baidu.com/s/1-C845J5vIiqmTXMAYEOEcQ ",
                password:"vx4b",
            },
            {
                name:"JS设计模式全解",
                link:"https://pan.baidu.com/s/1fYkCfOQQdb_PFGap_vCTLw ",
                password:"fwxm",
            },
            {
                name:"疑难问题解决方案",
                link:"https://pan.baidu.com/s/1z5FXuVzMTx_IzQS8YkwDyA ",
                password:"f2a6",
            },
            {
                name:"[项目] React Native项目实战",
                link:"https://pan.baidu.com/s/1VnCivgkqxfYeHr7JXMkJWw ",
                password:"vbpb",
            },
            {
                name:"React 贯穿全栈开发APP",
                link:"https://pan.baidu.com/s/1BSMdvKmTvonegV_P0RfYZQ ",
                password:"36mj",
            },
            {
                name:"Java并发编程",
                link:"https://pan.baidu.com/s/1zX41jbjZjG7Hads-q-0uWw ",
                password:"53it",
            },
            {
                name:"Java面试突击营",
                password:"qsnr",
                link:"https://pan.baidu.com/s/1zUEimHjvg17c1dABrjeu3A",
            },
            {
                name:"9000套网页模板",
                password:"8get",
                link:"https://pan.baidu.com/s/1IxPdgZLpoBUvewyCm4hY9w",
            },
            {
                name:"Java笔试题库",
                password:"6and",
                link:"https://pan.baidu.com/s/1x9d-NpNIrJ0vxwuCiomOBw",
            },
            {
                name:"进入大数据 Spark SQL 的世界",
                password:"7tig",
                link:"https://pan.baidu.com/s/1cOUnGTX5FvG5GtBiDV3tfw",
            },
            {
                name:"Java深入微服务原理改造房产销售平台",
                password:"d88s",
                link:"https://pan.baidu.com/s/1oAd11CLU-bsWGFMxjxCiMg",
            },
            {
                name:"小程序教程大全",
                password:"9msv",
                link:"https://pan.baidu.com/s/1ByLHoZbQBKApqmAGIJc57A",
            },
            {
                name:"前端成长之路",
                password:"qey8",
                link:"https://pan.baidu.com/s/1JMAK1qVUCr5rBqIxGelorw",
            },
            {
                name:"前端面试题",
                password:"hub2",
                link:"https://pan.baidu.com/s/11A1OwZn-QzzdecN-JQClow",
            },
            {
                name:"前端跳槽技巧",
                password:"petc",
                link:"https://pan.baidu.com/s/1nEi4VU_kvG7mPmqwx_Av0w",
            },
            {
                name:"Java面试套路",
                password:"gmk3",
                link:"https://pan.baidu.com/s/1E9M-KYc75BCafHZ9GzgJrQ",
            },
            {
                name:"Web系统运维高级架构师大数据2019版带文档",
                password:"bqf7",
                link:"https://pan.baidu.com/s/1wYTPocOe-VK0bETnEunerg",
            },
            {
                name:"Java简历模板",
                password:"p2ug",
                link:"https://pan.baidu.com/s/1wcsd16qtKV26kBc69n6Pvg",
            },
            {
                name:"Python3数据科学入门与实战",
                password:"3hew",
                link:"https://pan.baidu.com/s/1KO7uDU48e-zZizkQUFdooQ",
            },
            {
                name:"实际工作需求文档",
                password:"yb4g",
                link:"https://pan.baidu.com/s/1a1Yp1rq3zfphO-yGg-R8Bw",
            },
            {
                name:"SpringCloud微服务实战",
                password:"93in",
                link:"https://pan.baidu.com/s/1gMej53RpLX9jS1AubeJVaA",
            },
            {
                name:"300套小程序",
                password:"4s99",
                link:"https://pan.baidu.com/s/1AKLXJSM4ioPMeYkSvJf-ng",
            },
            {
                name:"Google面试官Java面试",
                password:"hey5",
                link:"https://pan.baidu.com/s/1_WGGsVls9B9mr9DxSqPpBw",
            },
            /*{
                name:"**前端（一）",
                password:"rech",
                link:"https://pan.baidu.com/s/1NtH1KIESYlFXNZ8O-A0X-w",
            },*/
            /*{
                name:"**Java（一）",
                password:"rc9j",
                link:"https://pan.baidu.com/s/1WB9wPtbeYqh9vYVV8P4VVg",
            },*/
            {
                name:"新python机器学习",
                password:"h1ir",
                link:"https://pan.baidu.com/s/1RjFkYOIzNMc4EvjULkTYjw",
            },
            {
                name:"SpringBoot点餐系统",
                password:"nm2u",
                link:"https://pan.baidu.com/s/1k8p1Ivtu6kW_4WroTEg3Cw",
            },
            {
                name:"从0开始Java开发电商项目",
                password:"vfv4",
                link:"https://pan.baidu.com/s/1wCkJ4nciPNl1PctXAvs56w",
            },
            {
                name:"Zookeeper分布式",
                password:"ixx4",
                link:"https://pan.baidu.com/s/1yplwWTANnXjM-NFoFXYKyQ",
            },
            {
                name:"面试指导",
                password:"a6vu",
                link:"https://pan.baidu.com/s/1BOGexWDjSd-lbCmPx1XdyA",
            },
            {
                name:"java算法大全源码包",
                password:"sep9",
                link:"https://pan.baidu.com/s/10TlotV18BDexD9jp1xwrMg",
            },
        ],
    },
    computed: {
        searchData: function() {
        var search = this.search;
        if (search) {
        return this.listInfo.filter(function(listInfo) {
        return Object.keys(listInfo).some(function(key) {
        return String(listInfo[key]).toLowerCase().indexOf(search) > -1
        })
        })
        }
        return this.listInfo;
        }
    },
})

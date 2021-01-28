;(function () {
    var innerServicesList = [
        { href: "http://newi.nuc.edu.cn", description: "新版个人门户" },
        { href: "https://www.cnki.net/", description: "中国知网" },
        {
            href: "http://lib.nuc.edu.cn/new/index_dangan.jsp",
            description: "图书馆 & 档案馆",
        },
        {
            href: "http://222.31.49.139/jwglxt/xtgl/login_slogin.html",
            description: "教学信息服务平台",
        },
        {
            href: "http://222.31.49.141/aexp/stuIndex.jsp",
            description: "实践教学管理平台",
        },
    ]
    var outerServicesList = [
        { href: "http://www.nuc.edu.cn", description: "中北大学官网" },
        { href: "https://vpn.nuc.edu.cn:4433", description: "中北大学VPN" },
        {
            href: "http://mail.st.nuc.edu.cn/cgi-bin/login?fun=bizopenssologin",
            description: "学生教育邮箱",
        },
        {
            href: "https://nuc.fanya.chaoxing.com/portal",
            description: "中北大学在线课程平台 (超星尔雅)",
        },
        {
            href: "https://nuc.xuetangx.com",
            description: "中北大学慕课平台",
        },
        {
            href: "http://zbjy.nuc.edu.cn",
            description: "中北大学就业创业网",
        },
    ]
    var innerServicesBox = document.getElementById("nuc-nav-inner-services")
    var outerServicesBox = document.getElementById("nuc-nav-outer-services")
    var innerServicesDom = innerServicesList.map(
        (item) => `<li><a href="${item.href}">${item.description}</a></li>`
    )
    var outerServicesDom = outerServicesList.map(
        (item) => `<li><a href="${item.href}">${item.description}</a></li>`
    )
    innerServicesBox.innerHTML = innerServicesDom.join("")
    outerServicesBox.innerHTML = outerServicesDom.join("")

    document.getElementById(
        "myssl-link"
    ).href = `https://myssl.com/${location.hostname}?from=mysslid`
})()

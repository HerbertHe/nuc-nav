;(function () {
    fetch("https://cdn.jsdelivr.net/gh/HerbertHe/nuc-nav@main/data/info.json")
        .then((res) => res.json())
        .then((data) => {
            var innerServicesBox = document.getElementById(
                "nuc-nav-inner-services"
            )
            var outerServicesBox = document.getElementById(
                "nuc-nav-outer-services"
            )
            var innerServicesDom = data.inner.map(
                (item) =>
                    `<li><a href="${item.href}">${item.description}</a></li>`
            )
            var outerServicesDom = data.outer.map(
                (item) =>
                    `<li><a href="${item.href}">${item.description}</a></li>`
            )
            innerServicesBox.innerHTML = innerServicesDom.join("")
            outerServicesBox.innerHTML = outerServicesDom.join("")

            document.getElementById("nuc-nav-info-slot").innerHTML = data.info
        })
        .catch(() => alert("❌请求数据错误, 请提交反馈"))
    document.getElementById(
        "myssl-link"
    ).href = `https://myssl.com/${location.hostname}?from=mysslid`
})()

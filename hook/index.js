async function preInit(inputObj) {
    console.log(`
    #### ########  ####  ######  
    ##  ##     ##  ##  ##    ## 
    ##  ##     ##  ##  ##       
    ##  ########   ##   ######  
    ##  ##   ##    ##        ## 
    ##  ##    ##   ##  ##    ## 
   #### ##     ## ####  ###### 
                               `)
}

async function postInit(inputObj) {

    console.log(`
    Welcome to use start-iris

     * 请在linux/mac os环境下进行部署（Windows可使用linux子系统）

     * 部署前执行请安装go
         go  : https://golang.google.cn/doc/install
       
     * 项目初始化完成，您可以直接进入项目目录下，并使用 s deploy 进行项目部署
`)
}

module.exports = {
    postInit,
    preInit
}

async function preInit(inputObj) {
    console.log(`
    _____ _____  _____  _____ 
    |_   _|  __ \|_   _|/ ____|
      | | | |__) | | | | (___  
      | | |  _  /  | |  \___ \ 
     _| |_| | \ \ _| |_ ____) |
    |_____|_|  \_\_____|_____/ 

                               `)
}

async function postInit(inputObj) {

    console.log(`
    Welcome to use start-iris

     * 部署前执行请安装go
         go  : https://golang.google.cn/doc/install
       
     * 项目初始化完成，您可以直接进入项目目录下，并使用 s deploy 进行项目部署
`)
}

module.exports = {
    postInit,
    preInit
}

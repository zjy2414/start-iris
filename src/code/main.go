package main

import (
	"github.com/kataras/iris/v12"
)

func Index(ctx iris.Context) {
	ctx.View("index.html")
}

func main() {
	app := iris.New()
	app.RegisterView(iris.HTML("./views", ".html"))
	app.Favicon("./assets/imgs/favicon.ico")
	app.HandleDir("/assets", "./assets")
	app.Get("/", Index)
	app.Listen(":8080")
}

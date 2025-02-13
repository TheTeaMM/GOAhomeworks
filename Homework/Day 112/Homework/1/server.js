console.log("Hello World!")
const http = require("http")
const server = http.createServer((req, res) => {
    if(req.url === "/about"){
        res.end("grdzeloLomia")
    }
    if(req.url === "/homepage"){
        res.end("<a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>Shemodit am web saitze</a>")
    }
    if(req.url === "/"){
        res.end("<div>Temo Like Apples</div>")
    }
    if(req.url === "/1"){
        res.end("<div>Temo Like Apples1</div>")
    }
    if(req.url === "/2"){
        res.end("<div>Temo Like Apples</div>")
    }
    if(req.url === "/3"){
        res.end("<div>Temo Like Apples3</div>")
    }
    if(req.url === "/4"){
        res.end("<div>Temo Like Apples4</div>")
    }
    if(req.url === "/5"){
        res.end("<div>Temo Like Apples5</div>")
    }
    if(req.url === "/6"){
        res.end("<div>Temo Like Apples6</div>")
    }
    if(req.url === "/7"){
        res.end("<div>Temo Like Apples7</div>")
    }
    if(req.url === "/8"){
        res.end("<div>Temo Like Apples8</div>")
    }
    if(req.url === "/9"){
        res.end("<div>Temo Like Apples9</div>")
    }
    if(req.url === "/10"){
        res.end("<div>Temo Like Apples10</div>")
    }
    if(req.url === "/11"){
        res.end("<div>Temo Like Apples11</div>")
    }
    if(req.url === "/12"){
        res.end("<div>Temo Like Apples12</div>")
    }
    if(req.url === "/13"){
        res.end("<div>Temo Like Apples13</div>")
    }
    if(req.url === "/14"){
        res.end("<div>Temo Like Apples14</div>")
    }
    if(req.url === "/15"){
        res.end("<div>Temo Like Apples15</div>")
    }
    if(req.url === "/16"){
        res.end("<div>Temo Like Apples16</div>")
    }
    if(req.url === "/17"){
        res.end("<div>Temo Like Apples17</div>")
    }
    if(req.url === "/18"){
        res.end("<div>Temo Like Apples18</div>")
    }
    if(req.url === "/19"){
        res.end("<div>Temo Like Apples19</div>")
    }
    if(req.url === "/20"){
        res.end("<div>Temo Like Apples20</div>")
    }
})
const localhost = 3001
console.log(`Temo maimunobs am serverze http://localhost:${localhost}`)
server.listen(localhost)
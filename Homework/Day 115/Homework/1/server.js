console.log("Hello Grdzelo Crew!")
const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/posts") {
        res.end("posts")
    }
    if(req.url === "/photos"){
       res.end("img")
    }
})

const localhost = 3000

console.log(`Temo iyideba aqa: http://localhost:${localhost}`)
server.listen(localhost)

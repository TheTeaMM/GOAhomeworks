console.log("grdzelo>>>")
const {clear} = require("console")
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write("Hi")
        res.end()
    }
})
server.listen(5000)
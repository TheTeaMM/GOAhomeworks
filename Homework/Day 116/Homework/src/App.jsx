const http = require("http")
const html = fs.readFileSync("./index.html")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(html)
        res.end()
    }
})

server.listen(5000)
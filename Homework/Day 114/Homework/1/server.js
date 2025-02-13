console.log("Hello Grdzelo Crew!")

const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("<p>hello</p>")
    }
    if(req.url === "/davit"){
        res.end("<p>Davit Agmashenebeli One of The Best King Ever In Georgian History</p>")
    }
    if(req.url === "/erekle"){
        res.end("<p>Heraclius II, also known as Erekle II and The Little Kakhetian, of the Bagrationi dynasty, was the king of the Kingdom of Kakheti from 1744 to 1762, and of the Kingdom of Kartli-Kakheti from 1762 until his death in 1798. In the contemporary Persian sources he is referred to as Erekli Khan </p>")
    }
    if(req.url === "/vaxtang"){
        res.end("<p>Vakhtang I Gorgasali, of the Chosroid dynasty, was a king of Iberia, natively known as Kartli in the second half of the 5th and first quarter of the 6th century.</p>")
    }
    if(req.url === "/Napoleon"){
        res.end("<p>Napoleon Bonaparte, later known by his regnal name Napoleon I, was a French general and statesman who rose to prominence during the French Revolution and led a series of military campaigns across Europe during the French Revolutionary and Napoleonic Wars from 1796 to 1815. He led the French Republic as First Consul from 1799 to 1804, then ruled the French Empire as Emperor of the French from 1804 to 1814, and briefly again in 1815.</p>")
    }
})

const localhost = 3000

console.log(`Just Localhost http://localhost:${localhost}`)
server.listen(localhost)

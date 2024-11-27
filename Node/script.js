const http = require("http")
http.createServer((req, res) => {
    if (req.url === '/about') {
        res.write("hi")
        res.end()
    }

    else if(req.url === '/ab'){
        res.write("hiiiii")
        res.end()
    }
}).listen(4000, () => {
    console.log("server is running....");
})
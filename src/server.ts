import { createServer, IncomingMessage, Server, ServerResponse } from "http";

// const server : Server = createServer((req : IncomingMessage, res : ServerResponse)=>{
// console.log("request",res);
// console.log("request",req);
// console.log("url",req.url);
// console.log("method",req.method);

//     const url = req.url;
//     const method = req.method;

//     if(url === "/" && method === "GET"){
// console.log("This is root route");
//         res.writeHead(200,{"content-type" : "application/json"});
//         res.end(JSON.stringify({message : "This is root route!!"}))

//     }else{
// console.log("This route is not define");
//         res.writeHead(404,{"content-type" : "application/json"});
//         res.end(JSON.stringify({message : "This route is not define!!"}))

//     }

// })

// server.listen(5000, ()=>{
//     console.log("server is running on port");

// })

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log("request",req);
    // console.log("response",res);

    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      // console.log("This is a root route");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is root route" }));
    } else if (url?.startsWith("/products")) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is products route" }));
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "This route is not define" }));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is running ");
});

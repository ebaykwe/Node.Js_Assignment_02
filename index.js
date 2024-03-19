const http = require("http");

const behavior = (req, res) => {
  console.log(req.method); // GET, POST, PUT, DELETE
  console.log(req.url); // /books, /books/author, etc.

  if (req.method === "GET" && req.url === "/books") {
    res.write("Get list of books");
  }
  if (req.method === "PUT" && req.url === "/books") {
    res.write("Update list of books");
  }
  if (req.method === "DELETE" && req.url === "/books") {
    res.write("Delete all books");
  }
  if (req.method === "GET" && req.url === "/books/authors") {
    res.write("Get author details");
  }
  if (req.method === "POST" && req.url === "/books/authors") {
    res.write("Create new author");
  }
  if (req.method === "PUT" && req.url === "/books/authors") {
    res.write("Update author details...");
  }
  res.end();
};

const server = http.createServer(behavior);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

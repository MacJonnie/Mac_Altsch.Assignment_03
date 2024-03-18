
function getBooks(req, res) {
  console.log("getBooks", req.body);
  res.setHeader("Content-Type", "application/json");

    if (req.method === "GET") {
      res.write("All books collection:")
    }
   
    if (req.method === "POST") {
      res.write("New book added:")
    }
    
    if (req.method === "PUT") {
      res.write("Resource updated:")
    }
  
    if (req.method === "PATCH") {
      res.write("Resource updated:")
    }
    
    if (req.method === "DELETE") {
      res.write("Book deleted:")
    }

    res.end(JSON.stringify({ Books: [{ name: "Harry Potter" },{ name: "Twilight" }, { name: "Rome" }] }));
  };

  module.exports = getBooks;
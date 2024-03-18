function getAuthors(req, res) {
  console.log("getAuthors", req.body);
  res.setHeader("Content-Type", "application/json");

    if (req.method === "GET") {
      res.write("All authors:")

    }
  
    if (req.method === "POST") {
      res.write("New author added:")
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

    res.end(JSON.stringify({ Authors: [{ name: "J.K. Rowling" }, { name: "T.J Omori" }, { name: "Chris Hemsworth" }] }));
  };

  module.exports = getAuthors;
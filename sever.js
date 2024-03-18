const http = require("http");
const  findUser  = require("./db_function.js");
const  getBooks  = require ("./Routes/books_route.js");
const  getAuthors = require ("./Routes/authors_route.js");



function getBodyFromStream(req) {
  return new Promise((resolve, reject) => {
    const data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      const body = Buffer.concat(data).toString();
      if (body) {
        // assuming that the body is a json object
        resolve(JSON.parse(body));
        return;
      }
      resolve({});
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
};


function authenticate(req, res, next) {
  const { username, password } = req.body;
  console.log("authenticate", req.body);
  const user = findUser(username);

  if (!user) {
    res.statusCode = 401;
    res.end();
    return;
  }

  if (user.username !== username || user.password !== password) {
    res.statusCode = 401;
    res.end();
    return;
  }
  next(req, res);
}


async function action (req, res) {
  try {
    const body = await getBodyFromStream(req);
    req.body = body;

    if (req.url === "/books") {
      authenticate(req, res, getBooks);
    }

    if (req.url === "/authors") {
      authenticate(req, res, getAuthors);
    }
  } catch (error) {
    res.statusCode = 500;
    res.end(error.message);
  }
}

const server = http.createServer(action);

server.listen(8900, () => {
  console.log("Server is listening on port 8900");
});
const fs = require("fs");

function findUser(username) {
  const usersData = fs.readFileSync("./Utils/db.json", "utf8");
  console.log("usersData:", usersData);
  const users = JSON.parse(usersData);
  return users.find((user) => user.username === username);
};


module.exports = findUser;

const bcrypt = require("bcrypt");

async function run() {
  const salt = bcrypt.genSalt(10);
  console.log(salt);
}
run();

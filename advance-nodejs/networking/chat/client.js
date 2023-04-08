const net = require("net");
const readline = require("readline/promises");

const PORT = 3001;
const HOST = "127.0.0.1";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

const moveCursor = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

let id;

const client = net.createConnection({ host: HOST, port: PORT }, async () => {
  console.log("Connected to the server!");

  const ask = async () => {
    const message = await rl.question("Enter a message > ");
    // move the cursor one line up
    await moveCursor(0, -1);
    // clear the current line that the cursor is in
    await clearLine(0);
    client.write(`${id}-message-${message}`);
  };

  ask();

  client.on("data", async (data) => {
    // log an empty line
    console.log();
    // move the cursor one line up
    await moveCursor(0, -1);
    // clear that line that cursor just moved into
    await clearLine(0);

    if (data.toString("utf-8").substring(0, 2) === "id") {
      // When we are getting the id...

      // everything from the third character up until the end
      id = data.toString("utf-8").substring(3);

      console.log(`Your id is ${id}!\n`);
    } else {
      // When we are getting a message...

      console.log(data.toString("utf-8"));
    }

    ask();
  });
});

client.on("end", () => {
  console.log("Connection was ended!");
});
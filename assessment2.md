# 🧠 Node.js Interview Questions with Real-World Examples (With Explanations)

---

## 1) ❓ Write a function using `fs.readFile` (callback) to read a file and log its contents. Handle errors properly.

```js
// Import the built-in 'fs' module
const fs = require("fs");

// Function to read a file asynchronously using callbacks
function readFileUsingCallback(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err.message);
      return;
    }
    console.log("📄 File Contents:", data);
  });
}

// Usage
readFileUsingCallback("sample.txt");
```

### ✅ Explanation:

- `fs.readFile` is **asynchronous** and does **not block the event loop**.
- The callback handles success and error scenarios.
- Ideal for I/O-heavy operations where non-blocking behavior is required.

---

## 2) ❓ Convert the above `fs.readFile` example into a Promise-based version using `.then()` and `.catch()`.

```js
const fs = require("fs").promises; // Using the Promise-based API of fs

function readFileWithPromise(filePath) {
  fs.readFile(filePath, "utf8")
    .then((data) => {
      console.log("📄 File Contents:", data);
    })
    .catch((err) => {
      console.error("❌ Error reading file:", err.message);
    });
}

// Usage
readFileWithPromise("sample.txt");
```

### ✅ Explanation:

- Uses the `fs.promises` API.
- Promises provide cleaner syntax with `.then()` and `.catch()`.
- Can be converted into `async/await` for even better readability.

---

## 3) ❓ Create a basic HTTP server using the `http` module that responds with "Hello, World!" for all requests.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
```

### ✅ Explanation:

- Built-in `http` module.
- Handles all incoming requests with a fixed response.
- Great for understanding the low-level working of HTTP servers.

---

## 4) ❓ What is the role of the event loop in Node.js?

### ✅ Explanation:

- The **event loop** is the heart of Node.js.
- It enables **non-blocking I/O** by delegating work to the system and callback queues.
- Continuously monitors queues and picks up tasks to run in the **single-threaded** environment.
- Enables Node.js to handle **thousands of concurrent operations** without multi-threading.

---

## 5) ❓ Why do synchronous file operations like `fs.readFileSync` degrade performance in a Node.js server?

### ✅ Explanation:

- Node.js uses a **single-threaded event loop**.
- When `fs.readFileSync` is used, it **blocks the main thread** until the file is completely read.
- While waiting, the server **cannot respond to any other requests**.
- In contrast, `fs.readFile` delegates work to the **libuv thread pool**, allowing the event loop to continue.

---

## 6) ❓ Design a user-defined module that wraps `fs.readFileSync` and `fs.writeFileSync` in Promises, and expose methods that can be awaited.

### 📁 fileHelper.js

```js
const fs = require("fs");

module.exports = {
  readFile: (path) => {
    return new Promise((resolve, reject) => {
      try {
        const data = fs.readFileSync(path, "utf8");
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },

  writeFile: (path, content) => {
    return new Promise((resolve, reject) => {
      try {
        fs.writeFileSync(path, content, "utf8");
        resolve("✅ File written successfully");
      } catch (err) {
        reject(err);
      }
    });
  },
};
```

### 📁 Usage

```js
const fileHelper = require("./fileHelper");

async function run() {
  try {
    const data = await fileHelper.readFile("input.txt");
    console.log(data);
    await fileHelper.writeFile("output.txt", data + "\nWritten via custom module");
  } catch (err) {
    console.error("❌", err.message);
  }
}

run();
```

---

## 7) ❓ Build a simple REST API using the `http` module that:

- Accepts `GET /users` → Returns a mock JSON user list.
- Accepts `POST /users` → Logs the request body.

```js
const http = require("http");

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  } else if (req.method === "POST" && req.url === "/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log("📥 Received body:", body);
      res.end("User received");
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(4000, () => {
  console.log("✅ REST API running at http://localhost:4000");
});
```

### ✅ Explanation:

- Demonstrates how to use `http.createServer` for basic REST endpoints.
- Streams data in chunks for POST requests.
- No external libraries used.

---

## 8) ❓ Write a Node.js script that connects to a MongoDB database using the official MongoDB Node.js driver. Insert and retrieve documents.

```js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "schoolDB";
const collectionName = "students";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert a document
    const result = await collection.insertOne({
      name: "Utkarsh",
      course: "Node.js",
      score: 98,
    });

    console.log("📥 Inserted:", result.insertedId);

    // Retrieve all documents
    const students = await collection.find().toArray();
    console.log("📄 Students:", students);
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

run();
```

### ✅ Explanation:

- Connects to MongoDB using the **official MongoDB driver**.
- Inserts one document and retrieves all from `students` collection.
- Use `npm install mongodb` to install the dependency.

---

🧑‍💻 Prepared by: UTK

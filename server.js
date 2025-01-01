const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const { read_File, write_File } = require("./devTools.js");
const port = process.env.PORT || 10000; // Render.com avtomatik PORTni ishlatadi

/////////////////////////////////////////////////////////////animal
const app = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/get_data") {
    const currentDB = read_File("animal.json");
    res.writeHead(200, { "content-type": "application/JSON" });
    res.end(JSON.stringify(currentDB));
  }

  if (req.method === "POST" && req.url === "/add_data") {
    req.on("data", (chunk) => {
      const data = JSON.parse(chunk);
      const currentDB = read_File("animal.json");
      console.log(currentDB);
      currentDB.push({
        id: Symbol("id"),
        ...data,
      });
      write_File("animal.json", currentDB);
      res.writeHead(201, { "content-type": "application: JSON" });
      res.end(
        JSON.stringify({
          message: "added new data",
        })
      );
    });
  }
});

app.listen(port, '0.0.0.0', () => { // 0.0.0.0 bilan ishlash
    console.log(`Server is running on port ${port}`);
});


//////////////////////////////////////////// fruit


// const app = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/get_data") {
//     const currentDB = read_File("fruit.json");
//     res.writeHead(200, { "content-type": "application/JSON" });
//     res.end(JSON.stringify(currentDB));
//   }

//   if (req.method === "POST" && req.url === "/add_data") {
//     req.on("data", (chunk) => {
//       const data = JSON.parse(chunk);
//       const currentDB = read_File("fruit.json");
//       console.log(currentDB);
//       currentDB.push({
//         id: Symbol("id"),
//         ...data,
//       });
//       write_File("fruit.json", currentDB);
//       res.writeHead(201, { "content-type": "application: JSON" });
//       res.end(
//         JSON.stringify({
//           message: "added new data",
//         })
//       );
//     });
//   }
// });

// app.listen(PORT, () => {
//   console.log("server is running on http://localhost:" + PORT);
// });


/////////////////////////////////// car

// const app = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/get_data") {
//     const currentDB = read_File("car.json");
//     res.writeHead(200, { "content-type": "application/JSON" });
//     res.end(JSON.stringify(currentDB));
//   }

//   if (req.method === "POST" && req.url === "/add_data") {
//     req.on("data", (chunk) => {
//       const data = JSON.parse(chunk);
//       const currentDB = read_File("car.json");
//       console.log(currentDB);
//       currentDB.push({
//         id: Symbol("id"),
//         ...data,
//       });
//       write_File("car.json", currentDB);
//       res.writeHead(201, { "content-type": "application: JSON" });
//       res.end(
//         JSON.stringify({
//           message: "added new data",
//         })
//       );
//     });
//   }
// });

// app.listen(PORT, () => {
//   console.log("server is running on http://localhost:" + PORT);
// });

/////////////////////////////////// countries

// const app = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/get_data") {
//     const currentDB = read_File("countries.json");
//     res.writeHead(200, { "content-type": "application/JSON" });
//     res.end(JSON.stringify(currentDB));
//   }

//   if (req.method === "POST" && req.url === "/add_data") {
//     req.on("data", (chunk) => {
//       const data = JSON.parse(chunk);
//       const currentDB = read_File("countries.json");
//       console.log(currentDB);
//       currentDB.push({
//         id: Symbol("id"),
//         ...data,
//       });
//       write_File("countries.json", currentDB);
//       res.writeHead(201, { "content-type": "application: JSON" });
//       res.end(
//         JSON.stringify({
//           message: "added new data",
//         })
//       );
//     });
//   }
// });

// app.listen(PORT, () => {
//   console.log("server is running on http://localhost:" + PORT);
// });


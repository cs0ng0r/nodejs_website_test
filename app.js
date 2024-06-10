const http = require("http"); // HTTP modul
const fs = require("fs"); // File System modul
const port = 3000; // Általunk választott port

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404); // 404-es hibakód
      res.write("Error: Nem találtam meg ezt a filet."); // Hibaüzenet, ha nem találja a fájlt
    } else {
      res.write(data); // Visszaadja a fájlt, ha megtalálta és nincs hiba
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Valami nem stimmel", error); // Hibaüzenet, ha valami nem stimmel
  } else {
    console.log("A szerver az alábbi porton fut: " + port);  // Sikeres indítás esetén kiírja a portot
  }
});

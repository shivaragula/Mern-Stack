// 

// 

// 

const fs = require("fs");

// Use callbacks to ensure order and handle errors
fs.writeFile("example.txt", "Hello, World!\n", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    fs.appendFile("example.txt", "Appended text.\n", (err) => {
        if (err) {
            console.error("Error appending file:", err);
            return;
        }
        fs.readFile("example.txt", "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
            } else {
                console.log("File content:", data);
            }
        });
    });
});

console.log("this is Asynchronous method with callbacks.");
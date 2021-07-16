var fs = require("fs");

fs.writeFile("movies.txt", "Inception, Die Hard, Harry Potter", (error) => {
    if(error){
        console.log(error);
    }else{
        console.log("file updated")
    }
})
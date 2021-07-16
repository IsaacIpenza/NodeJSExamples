var bandas =  require("./bands.js");

var search = process.argv[2];

for(var genero in bandas){
    if(genero === search || search == null){
        console.log(`A ${genero} band is ${bandas[genero]}`)
    }
}

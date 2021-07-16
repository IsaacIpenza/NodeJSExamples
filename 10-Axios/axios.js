var axios = require("axios");

axios.get("https://es.wikipedia.org/wiki/Steve_Jobs")
.then(response => {
    console.log(response.data);
})

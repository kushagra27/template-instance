// const fetch = require('node-fetch');
const fs = require('fs')
sc = require("sourcecred").sourcecred
const pako = require('pako');


instance = sc.instance.readInstance.getNetworkReadInstance(
    "https://raw.githubusercontent.com/sourcecred/cred/gh-pages/"
  )

// read the file
fs.readFile('./output/graphs/sourcecred/discord/graph', function(err, data){
    
    // Display the file content
    console.log(data);
    const result = pako.inflate(data, { level: 3});
    console.log(result)
   
    var enc = new TextDecoder("utf-8");
    var arr = new Uint8Array(result);
    
    const decoded = enc.decode(arr)

    console.log(decoded)
    // const parsedCredGraph = sc.core.credGraph.CredGraph.fromJSON(
    //     JSON.parse(decoded)
    // );
    
    // console.log(parsedCredGraph)
});
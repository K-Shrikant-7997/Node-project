import { readFile}  from "node:fs/promises";

async function main(){
    console.log("READ FILE DEMO");
    let filepath ="C:\\Users\\admin\\Desktop\\webtechnology\\day1\\1.html";
    let output =await readFile(filepath , {encoding: "utf8"});
    console.log(output);
}

main();
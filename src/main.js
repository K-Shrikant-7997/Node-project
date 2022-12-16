import { createConnection } from "mysql"; 
function main()
{
    console.log("MYSQL CONNECTIONS");
    let connectionURi ={
        host:"localhost",
        user:"root",
        password:"itsme@117143",
        database:"WPT",
    };
    let connection = createConnection(connectionURi);
    connection.connect();

    console.log("connected succesfully!!!");

    connection.end();
}   

main();
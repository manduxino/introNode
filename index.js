
console.log("funziona");
var a = 5;
var b = "3";
var express =require("express");
var apiServer = express();
console.log(a+b);



var port = 3000;
var host = "localhost";
apiServer.listen(port, host, ()=>{
    console.log("server running at http://%s:%d");
});

apiServer.get("/", (request, response)=> {
    console.log("get apiServer");
    response.send("<h1>Ciao client sei in home</h1>");
});


var nome = "fabio";
apiServer.get("/nome", (request,respose) =>{

    console.log("richiesta get nome");
    response.send("il mio nome è"+nome);
});

apiServer.get("/mioNome", (request,response) =>{

    console.log("richiesta get mioNome",request);
    response.send("il tuo nome è"+request.query.nome);
});

apiServer.get("/somma", (request,response) =>{

    console.log("somma request",request.query);
    response.send("risultato= "+(request.query.a -(-request.query.b)));
});

apiServer.get("/student", (request,response) =>{

    console.log("student id: ",request.query.id);
    //leggere il file
    fs.readFile("studenti.json", (err, data) => {
        if(err){ console.log("error: "+err)
    }else{
            var students = JSON.parse(data);
            console.log("students: "+students);
            console.log("surname :"+students[0].surname);
        }
    });
    //prelevare l'oggetto con l'id
    //send
});
var fs= require("fs");
apiServer.get("/studentbyID", (request,response) =>{

    console.log("student id: ",request.query.id);
    //leggere il file
    fs.readFile("studenti.json", (err, data) => {

        if(err){
         console.log("error: "+err);
     }else{
    
        var students = JSON.parse(data);
        response.send(
            students.find(x => x.id === request.query.id));
     }});

});

//http://localhost:3000/

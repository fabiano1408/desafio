const app = require("express")()

const users = [
  {nome: 'fabiano', idade: "23"},
   {nome: 'Israel', idade:"29" },
   {nome: 'fdgfd', idade:"11" },
   {nome: '´kopio', idade:"22" },
   {nome: 'ty7ui', idade:"33" },
   ]

  app.get("/users", (request, response) => response.json(users))

app.get("/users/:nome/:idade", (request, response) =>
response.json(users.filter(value => value.nome == request.params.nome))

)

//app.get("/users/:nome/:idade", (request, response) =>
//response.json(users.filter(value => value.idade == request.params.idade)))
//app.post("/users", (request, response) =>{
//console.log(request.get)
//})
//const users = users.filter(value => value.id == request.params.id)
//)

    
app.listen(8081);
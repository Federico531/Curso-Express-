const express = require ('express'); 
const app = express();  
const morgan = require('morgan');
app.use(express.json()); //le dice a express que entienda formato JSON cuando una app/cliente se lo envie

/* function logger(req, res, next){ 
        console.log()
        console.log(`Route received ${req.protocol}://${req.get('host')}${req.originalUrl}`); 
                                    //req.protocol = http --> :// --> req.get('host') --> localhost:3001   req.originalUrl --> ruta del usuario
        next();        
    }

app.use(logger); /*

//todas las rutas '/user' van a tener que pasar primero por app.all 
//cuando paso por la ruta user, esto me avisa por consola y envia una respuesta de vuelta al navegador

/* app.all('/user', (req,res, next)=>{ 
    console.log("por aqui paso");
    next();
}); */


app.use(morgan('dev'));
app.get('/user',(req, res)=>{
    res.json({
        userName : "Federico_531",
        firstName: "Federico",
        lastName: "Marchetta"
        
    }); 
}); 

app.post('/user/:id',(req,res)=>{
    var culo = req.body;
    console.log(culo); //aca mostramos el body que enviamos a traves de POSTMAN (Objeto .JSON)
    console.log(req.params); //con esto pedimos los parametros del :id (que se da en el post de la aplicacion)
   
    res.send('TA ANDANDO EL POST')   ;
});




    
app.put('/user/:usuario',(req,res)=>{
    console.log(req.body);
    res.send(`USUARIO ${req.params.usuario} ACTUALIZADO`);

});

app.delete('/user/:usuario',(req,res)=>{
    res.send(`User ${req.params.usuario} deleted`); //requiero tal (:usuario) usuario para eliminarlo
    console.log("al usuario " + req.params.usuario + " ia lo he borrao"); //muestro el nombre del usuario que estoy borrando por consola

});   
//este middleware ya viene con express, igual que express.json
app.use(express.static('public')); //el nombre de la carpeta que creamos dentro del workspace 



app.listen(3001, ()=>{
    console.log("Servidor en puerto 3001")
})
 

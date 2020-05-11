const express = require ('express'); 
const app = express();  
const morgan = require('morgan');

//express settings
app.set('appName', 'Curso express 2' ) // variable appName - nombre 'curso express 2' --> lo llamamos desde app.listen
app.set('port', 5000);
app.set('view engine', 'ejs');
// Middlewares
app.use(express.json()); //le dice a express que entienda formato JSON cuando una app/cliente se lo envie
app.use(morgan('dev')); //dev es solo uno hay varios mas

//ROUTES
/* app.all('/user', (req,res, next)=>{ 
    console.log("por aqui paso");
    next();
}); */
app.get('/',(req,res)=>{
    const data = [{name: "Jose"},{name: "Fede"},{name: "Rubio"}] //datos que recibo de una BASE DE DATOS
    res.render('index.ejs', {people: data}); //people sera una variable que tendra esos datos, que llamaremos desde index.ejs
})
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



app.listen(app.get('port'), ()=>{
    console.log(app.get('appName')) 
    console.log("Servidor en puerto", app.get('port') ) 
    //con esto evito tener que venir a cambiar mi puerto si es una app grande
})
 

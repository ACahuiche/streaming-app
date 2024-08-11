const http = require('./app');
const port = 3000;

http.listen(port, ()=>{
    console.log(`Server de stream corriendo en el puerto ${port}`);
});
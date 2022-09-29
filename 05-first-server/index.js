// importamos el módulo http
const http = require('http')

// recibe un requestListener
const server = http.createServer((request, response)=>{

    const url = request.url
    console.log('url: ', url)
    const method = request.method
    console.log('method: ', method)
    if(method==='GET'&& url ==='/koders'){
    response.write('Aqui estan todos los koders')
    } else if(method==='POST'&&url ==='/koders'){
    response.write('Aqui puedes crear un koder')
    } else{
    response.write('No conozco esta solicitud')
    }
    response.end() //cerramos la respuesta
})

// Poniendo a escuchar en un puerto al server
// puerto 8080 -> para ambiente de desarrollo
// http -> 80
// https -> 443
// ssh -> 22
server.listen(8080, ()=>{
    console.log('Server listening on port 8080')
})

/*
Ejercicio:
    Reaccionar a las siguientes rutas:
    
    GET/koders -> aqui estarán todos los koder
    POST/koders -> aqui puedes crear un koder
    X/x -> No conozco esta solicitud
*/
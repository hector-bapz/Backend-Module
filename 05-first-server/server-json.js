/*

    Crear su servidor

    Get /koders ->{"message": "Aqui se obtendrán los koders"}

*/

const http = require('http')

const server = http.createServer((request, response)=>{

    if(request.url==='/koders' && request.method==='GET'){
        response.writeHead(200,{
            'Content-Type': 'application/json'
        })

        const message = {
            message: 'Aqui se obtendrán todos los koders'
        }

        const messageString = JSON.stringify(message)
        response.write(messageString)
    }

    response.end() 
})


server.listen(8080, ()=>{
    console.log('Server listening on port 8080')
})
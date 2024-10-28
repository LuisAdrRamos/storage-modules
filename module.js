module.exports.login = (username,password)=>{
    if(!username && !password) return console.log("Usuario y contraseña incorrectas")
    console.log(`Bienvenido ${username}`)
}

module.exports.LIKES = 144
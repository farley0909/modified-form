async function getUserData(token){
    let req = await fetch(`http://localhost:8080/usuario/info/${token}`)
    let res = await req.json()
    return res.usuario
}
export { getUserData }
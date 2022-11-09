function getToken(){
    let path = location.pathname
    let pathSplit = path.split('/')
    return pathSplit[2]
}
export { getToken }
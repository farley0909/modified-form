
async function copy(){
    let text = document.getElementById("linkResearch").value
    await navigator.clipboard.writeText(text)
}
export {copy}
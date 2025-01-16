let names=['dash','edward','luna','biden']
const btn=document.querySelector("#btn")
// let state=
// {
//     count:1
// }
let state=0
 function change()
{
    userName=names[state]
    state++
    if(state>=names.length)
        {state=0}
    render()
}
function btnComponent(count)
{
    const btn=document.createElement("button")
    btn.innerHTML=`Counter: ${userName}`
    btn.setAttribute("onclick","change()")
    return btn
}
function render()
{
    document.getElementById("root").innerHTML=""
    const Component=btnComponent(userName)
    document.getElementById("root").appendChild(Component)
}
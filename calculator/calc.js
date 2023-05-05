let uinput=document.getElementById("input")
let expresn=" "
function click1(x){
   expresn=expresn+x
    uinput.value=expresn

}
function equal()
{
    expresn=eval(expresn)
    uinput.value=expresn

}

function clear1()
{
expresn=" "
uinput.value=expresn
}
function percnt()
{
    expresn=expresn/100
}
let f=document.querySelector("section")
let ff=document.querySelector("article")
function dark()
{
    f.style.backgroundColor="black"
    ff.style.backgroundColor="white"
    document.body.style.backgroundColor="white"

}
function light()
{
    f.style.backgroundColor="white"
    ff.style.backgroundColor="black"
    document.body.style.backgroundColor="black"

}
// let aa=document.querySelector("body")
// defaultcolor()
// {
//     aa.style.backgroundColor="white"

// }
// chgcolor(){
   
//     aa.style.backgroundColor="black"
// }
// chgcolor1()
// {
// aa.style.backgroundColor="red"
// }
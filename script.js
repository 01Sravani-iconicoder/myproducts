const para = document.getElementsByClassName("para0");
let count = 0;
let data = [];
function incr()
{
    count++;
    para[0].textContent = count;
}
function decr()
{
    if(count>0)
    {
        count--;
        para[0].textContent = count;
    }
    else
    {
        alert('Items not be in negetive')
    }
}
function reset()
{
    count=0;
    para[0].textContent = count;
}
const modalDiv = document.getElementById("md")


function closee ()
{
    	modalDiv.style.display = "none"

}
const mainDiv = document.getElementById('results')
fetch("https://fakestoreapi.com/products")
.then(function(res)
{
    return res.json()
})
.then(function(p)
{
    data = p;
data.forEach(function(val)
{
    const img = document.createElement('img')
    img.src = val.image
    img.alt = val.title 
    img.style.height = "100px"
    img.style.width = "100px"
    const title = document.createElement('h2')
    title.textContent = val.title
    const p = document.createElement('p')
    p.textContent = "$"+" "+val.price;
    const btn = document.createElement('button')
    btn.textContent = "Add to Cart"
    btn.addEventListener("click",function openn() {
        modalDiv.style.display = "block"
    })
    const subDiv = document.createElement('div')
    subDiv.appendChild(img)
    subDiv.appendChild(title)
    subDiv.appendChild(p)
    subDiv.appendChild(btn)
    subDiv.classList.add("items")
    mainDiv.appendChild(subDiv)
})
})
const bar = document.getElementById("mySidenav")
function openNav() {
    bar.style.width = "250px";
  }
  
  function closeNav() {
    bar.style.width = "0";
  }
const people=[
    {name : "dress"},
    {name : "shorts"},
    {name : "saree"},
    {name : "ethnic"},
    {name : "indian"},
    {name : "western"}
];
var list =document.getElementById("list"); 

function setlist(group){
 clearlist(list);
for(const person of group){
let item=document.createElement('li')
 
const text=document.createTextNode(person.name)
item.appendChild(text);
list.appendChild(item);



}
if(group.length===0){
    noResult();
}
}
function clearlist(list){
while(list.firstChild){
    list.removeChild(list.firstChild)
}
}

function noResult(){
    const item=document.createElement('li')
    item.classList.add('list-group-item')
    const text=document.createTextNode("No result found")
    item.appendChild(text);
    list.appendChild(item)
}

function getRelavancy(value, searchterm){
if(value===searchterm){
    return 2;//it can be any number it as to dec
}
else if(value.startsWith(searchterm)){
    return 1;
}
else if(value.includes(searchterm)){
    return 0;
}
}
const serachInput= document.getElementById('search')

serachInput.addEventListener('input' , (event)=> {
    let value = event.target.value
    console.log(value)
    if(value && value.trim().length>0){
         value=value.trim().toLowerCase();
     
         setlist(people.filter(person =>{
             return person.name.includes(value);
         }).sort((personA ,personB)=>{
             return getRelavancy(personB.name, value)-getRelavancy(personA.name ,value);
         }));
    }
    else{
        //  
    }
})
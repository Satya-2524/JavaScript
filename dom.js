
function addData(){
    var username=document.getElementById("username");
var address=document.getElementById("address");
var city=document.getElementById("city");
var state=document.getElementById("state");
var phoneno=document.getElementById("phoneno");
postData(username,address,city,state,phoneno);
}
function postData(username,address,city,state,phoneno){
var url="https://stump-summer-cemetery.glitch.me/user";
var options = {
    "method":"POST",
    "headers":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "username":username.value,
        "address":address.value,
        "city":city.value,
        "state":state.value,
        "phoneno":phoneno.value
    })
}
fetch(url,options)
    .then(respone=>{
        if(respone.ok){
            alert("Data Submitted successfully...");
            displayData();
            alert("Data Added Successfully...");
            username.value = ""
            address.value = ""
            city.value = ""
            state.value = ""
            phoneno.value=""
        }
    })
    .catch(err=>{
        alert("Something Went Wrong...");
        console.error(err);
    })
}

function displayData() {
    var container=document.getElementById("container2");
    fetch("https://stump-summer-cemetery.glitch.me/user")
    
    .then( res => res.json())
    .then(data =>{
        for ( var obj of data){

            var item = document.createElement("div");
            item.className = "item";
            var usernamepara = document.createElement("p")
            var addresspara = document.createElement("p")
            var citypara = document.createElement("p")
            var statepara = document.createElement("p")
            var phonenopara = document.createElement("p")

            var { username, address, city, state,phoneno} = obj;

            usernamepara.innerText = username;
            addresspara.innerText = address;
            citypara.innerText = city;
            statepara.innerText = state;
            phonenopara.innerText = phoneno;

            item.appendChild(usernamepara)
            item.appendChild(addresspara)
            item.appendChild(citypara)
            item.appendChild(statepara)
            item.appendChild(phonenopara)

            container.appendChild(item)

        }
    })

}
displayData();
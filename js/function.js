
function sendData(key, std){
    let data = JSON.stringify(std)
    localStorage.setItem(key, data) 
}

function getData(key){
    let data =localStorage.getItem(key)  
    return data ? JSON.parse(data) : false;
}
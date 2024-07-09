// Add your code here
function submitData(name,email){
    const url='http://localhost:3000/users'
    const configObj={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({
            name:name,
            email:email
        })
    }
    return fetch(url,configObj)
    .then(response=> response.json())
    .then(data=>{
        document.body.innerHTML+= `<p>${data.id}</p>`
        return data
    })
    .catch(error=>{
        document.body.innerHTML+=`<p>${error.message}</p>`
        return error
    })
}

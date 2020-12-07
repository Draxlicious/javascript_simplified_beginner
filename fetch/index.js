// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response )=>{
//     return response.json()
// }).then(data=>{
//     data.forEach(element => {
//         console.log(element.name);
//     });
// })

// POST Method
async function doStuff(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify({
            title: "New post"
        })

    })
    const post = await response.json()
    console.log(post);
}

doStuff();



// GET Method
// async function getPost(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
//     const comments = await response.json()
//     console.log(comments);
// }

// getPost()
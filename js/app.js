function submitPost(){
    axios.request({
        url : `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title : document.getElementById(`postTitleBox`).value,
            body : document.getElementById(`postBodyBox`).value,
            userId : document.getElementById(`userIdBox`).value
        }
    }).then(postSuccess).catch(apiFailure);
}

function loadPosts(){
    axios.request({
        url : `https://jsonplaceholder.typicode.com/posts`,
        method: `GET`,
    }).then(loadSuccess).catch(apiFailure)
}

function loadSuccess(response){
    let loaded = response.data;
    for (data of loaded){
        document.getElementById(`oldPosts`).insertAdjacentHTML(`beforeend`, `<h3>${data.id}</h3>`),
        document.getElementById(`oldPosts`).insertAdjacentHTML(`beforeend`, `<h3>${data.userId}</h3>`),
        document.getElementById(`oldPosts`).insertAdjacentHTML(`beforeend`, `<h3>${data.title}</h3>`),
        document.getElementById(`oldPosts`).insertAdjacentHTML(`beforeend`, `<h3>${data.body}</h3>`)
    }

}

function postSuccess(response){
    let data = response.data;
    postContainer.insertAdjacentHTML(`beforeend`, `<h3>${data.userId}</h3>`);
    postContainer.insertAdjacentHTML(`beforeend`, `<h3>${data.title}</h3>`);
    postContainer.insertAdjacentHTML(`beforeend`, `<h3>${data.body}</h3>`);
    console.log(data);
}

function apiFailure(error){
    document.body.insertAdjacentHTML(`beforeend`, `<h3>Failed to Post</h3>`);
    console.log(error);
}

function clearPost(){
    postContainer.innerHTML = "";
}

function clearOld(){
    document.getElementById(`oldPosts`).innerHTML = "";
}

/**function editPost(){
    axios.request({
        url : `https://jsonplaceholder.typicode.com/posts`,
        method: `PATCH`,
        data: {
            title : document.getElementById(`postTitleBox`).value,
            body : document.getElementById(`postBodyBox`).value,
            userId : document.getElementById(`userIdBox`).value
        }
    }).then(editSuccess).catch(apiError)
} */


const postContainer = document.getElementById(`results`);

document.getElementById(`submitPost`).addEventListener(`click`, submitPost);
document.addEventListener(`readystatechange`, loadPosts);
document.getElementById(`clearPost`).addEventListener(`click`, clearPost);
document.getElementById(`clearOld`).addEventListener(`click`, clearOld);
//document.getElementById(`editPost`).addEventListener(`click`, editPost);//

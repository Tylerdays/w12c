function submitPost(){
    axios.request({
        url : `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title : document.getElementById(`postTitleBox`).value,
            body : document.getElementById(`postBodyBox`).value,
            userId : document.getElementById(`userIdBox`).value
        }
    }).then(postSuccess).catch(postFailure);
}

function postSuccess(response){
    let data = response.data;
    postContainer.insertAdjacentHTML(`beforeend`, `<h3>${data.userId}</h3>`);
    postContainer.insertAdjacentHTML(`beforeend`, `<h3>${data.title}</h3>`);
    postContainer.insertAdjacentHTML(`beforeend`, `<h3>${data.body}</h3>`);
    console.log(data);
}

function postFailure(error){
    document.body.insertAdjacentHTML(`beforeend`, `<h3>Post has failed</h3>`);
    console.log(error);
}

function clearPost(){
    postContainer.innerHTML = "";
}

const postContainer = document.getElementById(`results`);

document.getElementById(`submitPost`).addEventListener(`click`, submitPost);
document.getElementById(`clearPost`).addEventListener(`click`, clearPost);

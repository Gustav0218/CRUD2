let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msj");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "El campo no puede estar vacio.";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
    }


    //Guardando datos//

    let data = {};
    let acceptData = () => {
        data["text"] = input.value;
        console.log(data);
        createPost();

    };
    if (input.value === "") {
    } else {
        acceptData();
    };

};

let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
    return
};



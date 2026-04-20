document.addEventListener("DOMContentLoaded", function () {

const simpleBlogForm = document.querySelector(".simpleBlogForm");

const allPostsUl = document.querySelector(".allPosts ul");

if (!simpleBlogForm || !allPostsUl) {
          console.error(
            "Required elements not found: .simpleBlogForm or .allPosts ul",
          );
         

} else {
          const titleInput = simpleBlogForm.querySelector(
            'input[name="title"]',
          );
          const imageInput = simpleBlogForm.querySelector(
            'input[name="image"]',
          );
          const messageInput = simpleBlogForm.querySelector(
            'textarea[name="message"]',
          );

          
          let posts = JSON.parse(localStorage.getItem("simpleBlogPosts")) || [];

          
          function savePosts() {
            localStorage.setItem("simpleBlogPosts", JSON.stringify(posts));
}

function renderPosts() {
    allPostsUl.innerHTML = ""; 
    posts.forEach((post, index) => {
    const postCard = document.createElement("li");

    postCard.className = "postCard";
    postCard.dataset.index = index;


    const postTitle = document.createElement("li");


    postTitle.textContent = post.title || "Untitled Post";

    postTitle.style.textAlign = "center";

    postTitle.style.margin = "0px";

    postTitle.style.padding = "10px 0";

    postTitle.style.width = "100%";

    postTitle.style.backgroundColor = "#fafafa";

    postTitle.style.borderBottom = "1px solid #ccc";
    postCard.appendChild(postTitle);

if (post.imageUrl) {
  const postImage = document.createElement("img");
  postImage.src = post.imageUrl;

  postImage.alt = post.title || "Post image";
  postImage.className = "postImage";

  postImage.style.width = "330px";

  postImage.style.height = "auto";
  postCard.appendChild(postImage);
}
 const postMessage = document.createElement("p");
 postMessage.textContent = post.message;

 postCard.appendChild(postMessage);

 const actions = document.createElement("div");

 actions.className = "post-actions";
    const editButton = document.createElement("button");


    editButton.type = "button";
    editButton.textContent = "Edit";

    editButton.style.backgroundColor = "#4CAF50";

    editButton.style.color = "white";

    editButton.style.border = "none";

    editButton.style.padding = "10px";

    editButton.style.width = "175px";

    editButton.style.margin = "5px";

    editButton.style.cursor = "pointer";

    editButton.style.borderRadius = "5px";

    editButton.style.fontSize = "14px";

    editButton.style.fontWeight = "bold";

    actions.appendChild(editButton);

    const deleteButton = document.createElement("button");

    deleteButton.type = "button";

    deleteButton.textContent = "Delete";

    deleteButton.style.backgroundColor = "#f44336";
    deleteButton.style.color = "white";

    deleteButton.style.border = "none";


    deleteButton.style.padding = "10px";

    deleteButton.style.width = "175px";


    deleteButton.style.margin = "5px";
    deleteButton.style.cursor = "pointer";

    deleteButton.style.borderRadius = "5px";

    deleteButton.style.fontSize = "14px";


    deleteButton.style.fontWeight = "bold";

actions.appendChild(deleteButton);

postCard.appendChild(actions);

allPostsUl.appendChild(postCard);

editButton.addEventListener("click", function () {
 const newTitle = prompt("Edit title", post.title);

 const newImage = prompt("Edit image URL", post.imageUrl);

 const newMessage = prompt("Edit message", post.message);

 if (newTitle !== null)
   post.title = newTitle.trim() || "Untitled Post";

 if (newMessage !== null) post.message = newMessage.trim();

 if (newImage !== null) post.imageUrl = newImage.trim();
 savePosts();
 renderPosts();
});
deleteButton.addEventListener("click", function () {
posts.splice(index, 1);
     savePosts();
     renderPosts();
});
deleteButton.addEventListener("click", function () {

     posts.splice(index, 1);

     savePosts();

     renderPosts();

   });

 });

}

         
renderPosts();

simpleBlogForm.addEventListener("submit", function (event) {
    event.preventDefault();

            const title = titleInput ? titleInput.value.trim() : "";

            const imageUrl = imageInput ? imageInput.value.trim() : "";

            const message = messageInput ? messageInput.value.trim() : "";
if (!title && !message) {
              return;
}

const newPost = { title, imageUrl, message };

    posts.push(newPost);
    savePosts();

    renderPosts();


        titleInput.value = "";
        imageInput.value = "";
        messageInput.value = "";
    });
}
        
});
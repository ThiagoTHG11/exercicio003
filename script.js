const posts = [
    {
        title: "lorem ipsum 1",
        content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras accumsan, risus in maximus interdum, nunc orci tempus quam, eu auctor elit elit at enim."
    },
    {
        title: "lorem ipsum 2",
        content: "Mauris vitae purus ac eros molestie auctor. In hac habitasse platea dictumst. Integer commodo velit vitae dui eleifend, hendrerit iaculis libero dapibus. Quisque tempor diam enim, sit amet fringilla libero dictum vel. Phasellus rutrum nec lorem sed scelerisque."
    },
    {
        title: "lorem ipsum 3",
        content: "Pellentesque cursus metus nec porttitor viverra. Cras bibendum elementum suscipit. Fusce sed erat vitae massa consequat pulvinar."
    },

];

const section = document.getElementById("posts");

for (let i=0; i<posts.length; i++) {
    const postData = posts[i];

    const article = document.createElement("article");
    article.classList.add("article");
    const title = document.createElement("h1");
    const titleText = document.createTextNode(postData.title);
    title.classList.add("h1");
    title.appendChild(titleText);
    article.appendChild(title);

    const content = document.createElement("p");
    const contentTxt = document.createTextNode(postData.content);
    content.appendChild(contentTxt);
    article.appendChild(content);

    section.appendChild(article);

}

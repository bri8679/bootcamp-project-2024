var blogs = [
    {
        title: "Hellweek",
        date: "October 21-25",
        description: "Hell week for united movement dance practice",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5HXhDhB879563O1I1x6C45yTZoVR0ETammQ&s",
        imageAlt: "wowwww girl cant even get a picture",
        slug: "hellweek",
    },
    {
        title: "K2 hellweek",
        date: "October 21-25",
        description: "Hell week for K2 practice",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFQt4BNZEytRYSEMNh6YgtxxWuthbbzr-UA&s",
        imageAlt: "wowwww girl cant even get a picture",
        slug: "k2hellweek",
    },
];
var blogContainer = document.getElementById("blog-container");
function createBlogs(blogs) {
    blogs.forEach(function (blog) {
        var newBlog = document.createElement("div");
        newBlog.className = "blog-post";
        var titleEl = document.createElement("h1");
        titleEl.textContent = blog.title;
        newBlog.appendChild(titleEl);
        var titleLink = document.createElement("a");
        titleLink.href = "".concat(blog.slug, ".html");
        titleLink.textContent = blog.title;
        titleEl.appendChild(titleLink);
        var child2 = document.createElement("img");
        child2.src = blog.image;
        child2.alt = blog.imageAlt;
        newBlog.appendChild(child2);
        var child3 = document.createElement("p");
        child3.textContent = blog.description;
        newBlog.appendChild(child3);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(newBlog);
    });
}
createBlogs(blogs);

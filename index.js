const user = {
    lastActivityTime: null,
    posts: []
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve(user.lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.posts.length > 0) {
                const deletedPost = user.posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}


createPost("First post")
    .then((post) => updateLastUserActivityTime().then((lastActivityTime) => ({ post, lastActivityTime })))
    .then(({ post, lastActivityTime }) => {
        console.log("User's posts:", user.posts);
        console.log("User's last activity time:", lastActivityTime);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log("Deleted post:", deletedPost);
        console.log("Remaining posts:", user.posts);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

window.addEventListener("DOMContentLoaded", () => {
    init()
})

const postButton = document.getElementsByTagName("button")[0];
const getButton = document.getElementsByTagName("button")[1];
const putButton = document.getElementsByTagName("button")[2];
const deleteButton = document.getElementsByTagName("button")[3];
const response = document.getElementById("response");
const date = document.getElementById("date");

const form = document.getElementsByTagName("form")[0];

function init() {
    postButton.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        date.value = new Date();
        const fd = new FormData(form);
        xhr.open("POST", "https://httpbin.org/post");
        // Source: Discussion Week 9
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.stringify(JSON.parse(this.responseText),null,2);
                console.log(resp)
                response.innerText = resp;
            } else {
                console.log('Error:', this.statusText);
            }
            }
        };
        xhr.send(fd)
    });

    getButton.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://httpbin.org/get");
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.stringify(JSON.parse(this.responseText),null,2);
                console.log(resp)
                response.innerText = resp;
            } else {
                console.log('Error:', this.statusText);
            }
            }
        };
        xhr.send()
    });

    putButton.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        const fd = new FormData(form);
        xhr.open("PUT", "https://httpbin.org/put");
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.stringify(JSON.parse(this.responseText),null,2);
                console.log(resp)
                response.innerText = resp;
            } else {
                console.log('Error:', this.statusText);
            }
            }
        };
        xhr.send(fd)
    });

    deleteButton.addEventListener("click", () => {
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", "https://httpbin.org/delete");
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                const resp = JSON.stringify(JSON.parse(this.responseText),null,2);
                console.log(resp)
                response.innerText = resp;
            } else {
                console.log('Error:', this.statusText);
            }
            }
        };
        xhr.send()
    });
}
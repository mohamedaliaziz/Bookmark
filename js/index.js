
var bookMarkName = document.getElementById("bookmarkName").value;
var bookMarkurl = document.getElementById("bookmarkURL").value;
var nameError = document.getElementById('nameError');
var urlError = document.getElementById('urlError');
var bookMark = [];
if (localStorage.getItem(`mark`) != null) {
    bookMark = JSON.parse(localStorage.getItem(`mark`))
    displaymark(bookMark);
    clarForm()
}
function submit() {

    var bookMarkName = document.getElementById("bookmarkName").value;
    var bookMarkurl = document.getElementById("bookmarkURL").value;

    nameError.classList.replace('d-block', 'd-none');
    urlError.classList.replace('d-block', 'd-none');
    if (checkName(bookMarkName) && checkUrl(bookMarkurl)) {
        bookMarkurl = url(bookMarkurl);
        var bookmarks = { name: bookMarkName, url: bookMarkurl };
        bookMark.push(bookmarks);
        localStorage.setItem(`mark`, JSON.stringify(bookMark))
        displaymark(bookMark);
        // bookMarkName = " mohamed"
        clarForm()


    } else {
        if (!checkName(bookMarkName)) {
            NameError("this name already exist");
        }

        if (!checkUrl(bookMarkurl)) {
            UrlError("this url already exist");
        }
        if (bookMarkName == null || bookMarkName == "") {
            NameError("Name is required");
        }
        if (bookMarkurl == null || bookMarkurl == "") {
            UrlError("Url Field is required");
        }
    }
    
}
function clarForm() {
    bookMarkName = "";
    bookMarkurl = "";

}

function displaymark(arr) {
    cartoon = ``
    for (i = 0; i < arr.length; i++) {
        cartoon += `<tr>
        <td>
            <h1 class="me-5 text-black-50">${arr[i].name}</h1>
        </td>
        <td><a href="${arr[i].url}" class="btn btn-warning" target="_blank">Visit</a></td>
        
        
        <td><button onclick="delet(${i})" class="btn btn-danger ">Delete</button></td>


    </tr>`;

    }
    document.getElementById(`bookmarksTable`).innerHTML = cartoon;
}
function delet(index) {
    bookMark.splice(index, 1);
    localStorage.setItem(`mark`, JSON.stringify(bookMark))

    displaymark(bookMark);
}

function checkName(name) {
    if (name == null || name == "") {
        return false;
    }
    for (var i = 0; i < bookMark.length; i++) {
        if (bookMark[i].name === name)
            return false;
    }
    return true;
}

function checkUrl(url) {
    if (url == null || url == "") {
        return false;
    }
    for (var i = 0; i < bookMark.length; i++) {
        if (bookMark[i].url === url)
            return false;
    }
    return true;
}

function NameError(alert) {
    var nameError = document.getElementById('nameError');
    nameError.innerHTML = alert;
    nameError.classList.replace('d-none', 'd-block');
}

function UrlError(alert) {
    var urlError = document.getElementById('urlError');
    urlError.innerHTML = alert;
    urlError.classList.replace('d-none', 'd-block');

}
function url(url) {
    if (url.search("http://") == -1 && url.search("https://") == -1)
        return "http://" + url;
    return url;
}





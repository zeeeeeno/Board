const editorForm = document.querySelector('#editor-form');
const writerInput = document.querySelector('#editor-writer-input');
const titleInput = document.querySelector('#editor-title-input');
const contentInput = document.querySelector('#editor-content-input');

const BOARDLIST_LS = 'boardLists';
const boardListsObj = [];

let nums = 0;
let date = new Date();
let views = 0;

function onEditorFormSubmit(e) {
    e.preventDefault();

    var num = document.getElementById("hz").selectedIndex;
    var arr = document.getElementById("hz").options;

    const title = titleInput.value;
    const content = contentInput.value;
    const author = writerInput.value;
    const category = arr[num].text;

    const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
    if (!lists) {
        const objArr = [];
        objArr.push({
            num: `${nums++}`,
            title: `${title}`,
            author: `${author}`,
            category: `${category}`,
            date: `${date.getFullYear()}.${
                    date.getMonth()+1
                }.${date.getDate()}.`,
            views: `${views++}`,
            content: `${content}`,
        });

        localStorage.setItem(BOARDLIST_LS, JSON.stringify(objArr));
    } else {
        lists.push({
            num: `${nums++}`,
            title: `${title}`,
            author: `${author}`,
            category: `${category}`,
            date: `${date.getFullYear()}.${
            date.getMonth()+1
        }.${
            date.getDate()}.`,
            views: `${views++}`,
            content: `${content}`,
        });

        localStorage.setItem(BOARDLIST_LS, JSON.stringify(lists));
    }

    titleInput.value = '';
    contentInput.value = '';
    writerInput.value = '';
    titleInput.focus();
    window.location.reload();
    window.location.replace("./Board.html");
}   

function assignIndex() {
    const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
    if (!lists) {
        nums = 0;
    } else {
        nums = parseInt(lists[lists.length - 1].num) + 1;
    }
}

editorForm.addEventListener('submit', onEditorFormSubmit);

window.onload = function() {
    assignIndex();
}

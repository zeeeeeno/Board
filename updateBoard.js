const BOARDLIST_UPD = 'boardLists';
const clickBoardNum = 'clickBoardNum';
const boardIndexUpd = localStorage.getItem(clickBoardNum);

const updTitleInput = document.querySelector('#upd_editor-title-input');
const updContentInput = document.querySelector('#upd_editor-content-input');

function updateBoard() {
    console.log("updateBoard()")
    let lists = JSON.parse(localStorage.getItem(BOARDLIST_UPD));

    const idx = boardIndexUpd;
    
    var num = document.getElementById("hz").selectedIndex;
    var arr = document.getElementById("hz").options;

    const updCategory = arr[num].text;

    const updTitle = updTitleInput.value;
    const updContents = updContentInput.value;

    lists[idx].title = updTitle
    lists[idx].content = updContents
    lists[idx].category = updCategory

    localStorage.setItem(BOARDLIST_UPD, JSON.stringify(lists));

    location.replace("http://localhost:5500/BoardDetail.html");

}


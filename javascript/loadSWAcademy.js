const boardTableBody = document.querySelector('#board-body');
const BOARDinputLIST_LS = 'boardLists';
let contentsNum = 0;

function onTitleClick(e) {
    let lists = JSON.parse(localStorage.getItem(BOARDinputLIST_LS));
    const index = e.target.parentNode.id.replace(/[a-z|-]/gi, '');
    
    contentsNum = index;
    var clickBoardNum = "clickBoardNum"

    // 조회수 올리기
    var legacyIdx = Number(lists[contentsNum].views);
    var chIdx = legacyIdx + 1;

    lists[contentsNum].views = chIdx;

    localStorage.setItem(BOARDinputLIST_LS, JSON.stringify(lists));

    localStorage.setItem(clickBoardNum, contentsNum);

    window.location.replace("./BoardDetail.html");

    // window.location.href = 'http://localhost:5500/BoardDetail.html';
}

function emptyCheck() {
    const lists = JSON.parse(localStorage.getItem(BOARDinputLIST_LS));

    if(!lists) {
        const tr = document.createElement('tr');
        tr.classList.add('board__content');

        const tdNum = document.createElement('td');
        tdNum.classList.add('board__content-column');
        tdNum.colSpan = 5;
        tdNum.style.textAlign = "center";
        tdNum.textContent = "게시글이 없습니다.";

        tr.appendChild(tdNum);

        boardTableBody.appendChild(tr);

    }
}

function assignIndex() {
    const lists = JSON.parse(localStorage.getItem(BOARDinputLIST_LS));
    if (!lists) {
        nums = 0;
    } else {
        nums = parseInt(lists[lists.length - 1].num) + 1;
    }
}

function showBoardLists() {
    console.log('showBoardLists()')
    const lists = JSON.parse(localStorage.getItem(BOARDinputLIST_LS));

    const newLists = [];

    lists.forEach(list => {
        if (list.category === "SW아카데미") {
            newLists.push(list)
        }
    })

    
    if(newLists === "") {
        alert(newLists)
        const tr = document.createElement('tr');
        tr.classList.add('board__content');

        const tdNum = document.createElement('td');
        tdNum.classList.add('board__content-column');
        tdNum.colSpan = 6;
        tdNum.style.textAlign = "center";
        tdNum.textContent = "게시글이 없습니다.";

        tr.appendChild(tdNum);

        boardTableBody.appendChild(tr);

    }

    newLists.forEach((list, index) => {
        if (index < 5) {
            const tr = document.createElement('tr');
            tr.classList.add('board__content');
            tr.style.height = '50px';
            tr.style.borderBottom = '1px solid gray';

            const tdNum = document.createElement('td');
            tdNum.classList.add('board__content-column');
            tdNum.textContent = list.num;

            const aTitle = document.createElement('a');
            aTitle.href = '#';
            aTitle.id = `link-to-content${index}`;

            const tdTitle = document.createElement('td');
            tdTitle.classList.add('board__content-column');
            tdTitle.textContent = list.title;
            tdTitle.style.paddingTop = "15px"

            aTitle.appendChild(tdTitle);

            const tdAuthor = document.createElement('td');
            tdAuthor.classList.add('board__content-column');
            tdAuthor.textContent = list.author;

            const tdDate = document.createElement('td');
            tdDate.classList.add('board__content-column');
            tdDate.textContent = list.date;

            const tdCategory = document.createElement('td');
            tdCategory.classList.add('board__content-column');
            tdCategory.textContent = list.category;

            const tdViews = document.createElement('td');
            tdViews.classList.add('board__content-column');
            tdViews.textContent = list.views;

            tr.appendChild(tdNum);
            tr.appendChild(aTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdDate);
            tr.appendChild(tdCategory);
            tr.appendChild(tdViews);

            boardTableBody.appendChild(tr);
            const linkToContent = document.querySelector(
                `#link-to-content${index}`
            );

            linkToContent.addEventListener('click', onTitleClick);

        } else if (index === 5) {
            const boardIndexMax = Math.ceil(lists.length / 5);
            for (let i = 0; i < boardIndexMax; i++) {
                const indexContainer = document.querySelector('#index-container');

                const aIndex = document.createElement('a');
                aIndex.classList.add('board__index-link');

                const spanIndexText = document.createElement('span');
                spanIndexText.classList.add('board__index');
                spanIndexText.textContent = i + 1;

                aIndex.appendChild(spanIndexText);
                indexContainer.appendChild(aIndex);

                aIndex.addEventListener('click', () => {
                    showBoardListsNewPage(i);
                });
            }
        }
    });
}

function showBoardListsNewPage(pageIndex) {
    boardTableBody.textContent = '';
    const lists = JSON.parse(localStorage.getItem(BOARDinputLIST_LS));
    const limitPage = pageIndex * 5;

    const newLists = [];

    lists.forEach(list => {
        if (list.category === "SW아카데미") {
            newLists.push(list)
        }
    })
    
    newLists.forEach((list, index) => {
        if (index >= limitPage && index < limitPage + 5) {
                        const tr = document.createElement('tr');
            tr.classList.add('board__content');
            tr.style.height = '50px';
            tr.style.borderBottom = '1px solid gray';

            const tdNum = document.createElement('td');
            tdNum.classList.add('board__content-column');
            tdNum.textContent = list.num;

            const aTitle = document.createElement('a');
            aTitle.href = '#';
            aTitle.id = `link-to-content${index}`;

            const tdTitle = document.createElement('td');
            tdTitle.classList.add('board__content-column');
            tdTitle.textContent = list.title;
            tdTitle.style.paddingTop = "15px"


            aTitle.appendChild(tdTitle);

            const tdAuthor = document.createElement('td');
            tdAuthor.classList.add('board__content-column');
            tdAuthor.textContent = list.author;

            const tdDate = document.createElement('td');
            tdDate.classList.add('board__content-column');
            tdDate.textContent = list.date;

            const tdCategory = document.createElement('td');
            tdCategory.classList.add('board__content-column');
            tdCategory.textContent = list.category;

            const tdViews = document.createElement('td');
            tdViews.classList.add('board__content-column');
            tdViews.textContent = list.views;

            tr.appendChild(tdNum);
            tr.appendChild(aTitle);
            tr.appendChild(tdAuthor);
            tr.appendChild(tdDate);
            tr.appendChild(tdCategory);
            tr.appendChild(tdViews);

            boardTableBody.appendChild(tr);
            const linkToContent = document.querySelector(
                `#link-to-content${index}`
            );

            linkToContent.addEventListener('click', onTitleClick);
        }
    });
}

window.onload = function() {
    if (boardTableBody) {
        emptyCheck();
        assignIndex();
        showBoardLists();
    }
}

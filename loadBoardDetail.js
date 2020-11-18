const boardIndexKey = "clickBoardNum";
const boardIndex = localStorage.getItem(boardIndexKey);
const BOARDLIST_DETAIL = 'boardLists';
const contentsContainer = document.querySelector('.contents__container');

const detailBoardTable = document.querySelector('#detail_board');
const detailBoardContents = document.querySelector('#detail_contents_info');

function loadBoardDetail() {
    const lists = JSON.parse(localStorage.getItem(BOARDLIST_DETAIL));
    const idx = boardIndex;

    const table = document.createElement('table');
    table.classList.add('detail_table')

    const thead = document.createElement('thead');
    thead.classList.add('detail_thead')

    const trFir = document.createElement('tr');
    trFir.classList.add('trFir')

    const tdTitle = document.createElement('td');
    tdTitle.classList.add('tdTitle')
    tdTitle.textContent = "제목"
    tdTitle.style.borderRight = '1px solid gray';
    tdTitle.style.borderBottom = '1px solid gray';

    const tdTitleInput = document.createElement('td');
    tdTitleInput.classList.add('tdTitleInput')
    tdTitleInput.textContent = lists[idx].title
    tdTitleInput.style.borderRight = '1px solid gray';
    tdTitleInput.style.borderBottom = '1px solid gray';

    const tdWriter = document.createElement('td');
    tdWriter.classList.add('tdWriter')
    tdWriter.textContent = "작성자"
    tdWriter.style.borderRight = '1px solid gray';
    tdWriter.style.borderBottom = '1px solid gray';

    const tdWriterInput = document.createElement('td');
    tdWriterInput.classList.add('tdTitleInput')
    tdWriterInput.textContent = lists[idx].author
    tdWriterInput.style.borderBottom = '1px solid gray';

    const trSec = document.createElement('tr');
    trSec.classList.add('detail_trSec')

    const tdCategory = document.createElement('td');
    tdCategory.classList.add('tdCategory')
    tdCategory.textContent = "카테고리"
    tdCategory.style.borderRight = '1px solid gray';

    const tdCategoryInput = document.createElement('td');
    tdCategoryInput.classList.add('tdTitleInput')
    tdCategoryInput.textContent = lists[idx].category
    tdCategoryInput.style.borderRight = '1px solid gray';

    const tdDate = document.createElement('td');
    tdDate.classList.add('tdDate')
    tdDate.textContent = "날짜"
    tdDate.style.borderRight = '1px solid gray';

    const tdDateInput = document.createElement('td');
    tdDateInput.classList.add('tdTitleInput')
    tdDateInput.textContent = lists[idx].date

    trFir.appendChild(tdTitle);
    trFir.appendChild(tdTitleInput);
    trFir.appendChild(tdWriter);
    trFir.appendChild(tdWriterInput);

    trSec.appendChild(tdCategory);
    trSec.appendChild(tdCategoryInput);
    trSec.appendChild(tdDate);
    trSec.appendChild(tdDateInput);

    thead.appendChild(trFir);
    thead.appendChild(trSec);

    table.appendChild(thead);

    detailBoardTable.appendChild(table);

    const contentsContent = document.createElement('div');
    contentsContent.classList.add('contents__content');
    contentsContent.textContent = lists[idx].content;

    detailBoardContents.appendChild(contentsContent);
}

function boardDelete() {
    console.log('board delete()')
}

window.onload = function() {
    loadBoardDetail();
}
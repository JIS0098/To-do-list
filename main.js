//유저가 값을 입력한다
// + 버튼을 누르면 할일추가됨
// delete버튼을 누르면 할일 삭제
// check버튼을 누르면 할일끝 밑줄그어짐 
//진행중 끝남 탭 누르면 언더바 이동
//끝난탭은 끝난아이템만 진행중인탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴 

let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#add-bnt");
let checkButton = document.querySelector("#check-bnt");
let deleteButton = document.querySelector("#delete-bnt");
let taskList =[];

addButton.addEventListener("click",addTask);



function addTask(){
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    render();
}

function render(){
    let resultHTML = '';
    for(let i =0; i<taskList.length; i++){
        resultHTML += `<div class="task"> 
        <div>${taskList[i]}</div>
        <div>
            <button class="check-bnt">Check</button>
            <button class="delete-bnt">Delete</button>
        </div>
    </div>`;
    }


    document.querySelector("#task-board").innerHTML=resultHTML;


}

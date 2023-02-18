//유저가 값을 입력한다
// + 버튼을 누르면 할일추가됨
// delete버튼을 누르면 할일 삭제
// check버튼을 누르면 할일끝 밑줄그어짐 
//진행중 끝남 탭 누르면 언더바 이동
//끝난탭은 끝난아이템만 진행중인탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴 
let tabs =document.querySelectorAll(".task-tabs div");
let taskInput = document.querySelector("#task-input");
let addButton = document.querySelector("#add-bnt");
let checkButton = document.querySelector("#check-bnt");
let deleteButton = document.querySelector("#delete-bnt");
let taskList =[];
let mode = "all"
let filterList = [];

addButton.addEventListener("click",addTask);

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){filter(event)});
}


function addTask(){
    let task = {
        id : randomeIDGenerate(),
        taskContent: taskInput.value,
        isComplect: false,
    }
    taskList.push(task);
    render();
    console.log(taskList);
}

function render(){
let list=[]
    if(mode == "all"){
        list = taskList;
    }else if(mode == "ongoing"){
        list = filterList;
    }

    let resultHTML = '';
    for(let i =0; i<list.length; i++){
        if(list[i].isComplect==true){
            resultHTML += `<div class="task",  > 
            <div class='task-done'>${list[i].taskContent}</div>
            <div>
                <button onclick = "togglecomplete('${list[i].id}')"  class="check-bnt"><i class="fas fa-redo-alt"></i></button>
                <button onclick = "deleteTask('${list[i].id}')" class="delete-bnt"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>`;
        }else{
            resultHTML += `<div class="task"> 
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick = "togglecomplete('${list[i].id}')"  class="check-bnt"><i class="fas fa-check"></i></i></button>
                <button onclick = "deleteTask('${list[i].id}')" class="delete-bnt"><i class="fas fa-trash-alt"></i></button>
            </div>
         </div>`;
        }
    }

    document.querySelector("#task-board").innerHTML=resultHTML;
}



    function togglecomplete(id) {
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplect = !taskList[i].isComplect;
            break;
        }
    }
    render();
    }

    function deleteTask(id){
       for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id ){
            taskList.splice(i,1)
            break;
        }
    }
    render();
    }

    function filter(event){
        mode=event.target.id;
        filterList = [];

        console.log("필터클릭됨", mode);
        if(mode == "all"){
            render();
        }else if(mode == "ongoing"){
            for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplect == false){
                filterList.push(taskList[i]);
            }
        } render();
    }
    }
    

    function randomeIDGenerate(){
       return '_' + Math.random().toString(36).substr(2, 9);
    }



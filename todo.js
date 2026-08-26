console.log('divya');
let tasks=[];
let dates=[];
function addTask()
{
let addInput=document.getElementById("add");
let task = addInput.value;

let addDate=document.getElementById("dates");
let date = addDate.value;
if(task.trim()==""||date.trim()=="")
{alert("Please enter both task and date.");
    return;
}
console.log({task:task,date:date});
tasks.push({task:task,date:date});

let success=document.getElementById("success");
success.textContent="Task added successfully \u2705";
setTimeout(function(){success.textContent="";}, 1000);
addInput.value="";
addDate.value="";
console.log(date);
console.log(tasks);
}

function viewTask()
{document.getElementById("pending").style.display="block";
  let  viewList=document.getElementById("list");
viewList.innerHTML="";
document.getElementById("pending").style.display="block";
  
if (tasks.length==0)
{alert("There are no tasks to show.");
    return;
}
  for(let i=0;i<tasks.length;i++)
  {
  
    let li=document.createElement("li");
    li.textContent=tasks[i].date +' : '+ tasks[i].task + " ";
    
    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete"
    li.appendChild(deleteBtn)
  deleteBtn.onclick=function (){tasks.splice(i,1);
    viewTask();};
  viewList.appendChild(li);
  }
}

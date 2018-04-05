class Task {
    constructor(id, name, performer){
        this.id = id;
        this.status = false;
        this.name = name;
        this.performer = performer;
        this.timeStart = Date.now();
        this.spentTime = this.timeStart + 25;
    }

}
 Task.maxID = 1;

class ServiseTask {
    constructor(){
        this.data = [];
    }

    start(taskId){

    }
    stop(taskId){

    }
    pause(taskId){

    }
    remove(taskId){

    }
    add(task){
        this.data.push(task);
    }

    update(taskId){

    }

    getTask(task){
        this.data.forEach(item => {
            return item;
        });
        return task;

    }

    getTaskById(id){
        this.data.filter(item => {
            item.id === id;
        });
        return id;
    }

    getTaskByName(name){
        this.data.filter(item => {
            item.name === name;
        });
        return name;

    }

    getTaskByStatus(status){
        this.data.filter(item => {
            item.status === name;
        });
        return status;

    }

    getAllTasks(){
        return this.data
    }

}

const servise = new ServiseTask();
const task1 = new Task(Task.maxID++, 'JS', 'Alex');
const task2 = new Task(Task.maxID++, 'PHP', 'Stas');


servise.add( task1);
servise.add( task2 );
servise.add(  );
console.log(servise.getTask(new Task(Task.maxID++, 'C++', 'Dima')));




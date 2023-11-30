import { makeAutoObservable } from "mobx";
import timer from "./timer";

class tasks {
    active = {
        taskId: 0,
        taskDuration: 0,
        taskName: '',
        taskDescription: '',
    }

    tasksList = [
        {
            taskId: 0,
            taskDuration: 4,
            taskName: 'Work',
            taskDescription: 'I need to do work'
        },
        {
            taskId: 1,
            taskDuration: 15,
            taskName: 'Work',
            taskDescription: 'I need to do work'
        },
        {
            taskId: 2,
            taskDuration: 30,
            taskName: 'Work',
            taskDescription: 'I need to do work'
        },
        {
            taskId: 3,
            taskDuration: 60,
            taskName: 'Work',
            taskDescription: 'I need to do work'
        },
    ];

    taskComplete(id) {
        for(let category of this.todos) {
            for(let item of category.tasks) {
                if(item.taskId == id) {
                    item.taskStatus = true;
                }
            }
        }
    }

    getActive(id) {
        for(let item of this.tasksList) {
            if(item.taskId === id) {
                timer.getActiveCountdown(item.taskDuration);
            }
        }
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default new tasks();
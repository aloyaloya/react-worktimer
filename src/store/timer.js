import { makeAutoObservable } from "mobx";
import tasks from "./tasks";

class timer {  
    activeCountdown = 0;
    tempCountdown = 0; 

    constructor() {
        makeAutoObservable(this);
    }

    getActiveCountdown(time) {
        this.activeCountdown = time;
    }

    getBreakCountdown() {
        this.tempCountdown = this.activeCountdown;
        this.activeCountdown = 900000;
    }

    getFinishCountdown(time, id) {
        for(let item of tasks.tasksList) {
            if(item.taskId == id) {
                item.taskDuration = time;

                this.activeCountdown = 0;
            }
        }
    }
}

export default new timer();
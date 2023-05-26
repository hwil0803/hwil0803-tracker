var taskList = [];

function addTask(name, category, icon, starttime, endtime, physscale, phystext, psyscale, psycheckbox, psytext, motivation) {

let task = {
    name,
    category,
    icon,
    id: Date.now(),
    date: new Date().toISOString(),
    time:{starttime, endtime },
    physfatigue: {physscale, phystext },
    psyfatigue: {psyscale, psycheckbox, psytext },
    motivation,
}

taskList.push(task);

}

addTask("Ball Sport", "Cardio", "./image/ball-icon,jpg", 1230, 200, "8", "sore quads", "7", "happy, energised", "Keen for next training", "3");

console.log(taskList);






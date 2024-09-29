function promiseDoJob(job, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let now = new Date();
            resolve(`完成工作 ${job} at ${now.toISOString()}`);
        }, time);
    })
}
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
promiseDoJob("刷牙", 1000)
    .then((data) => {
        console.log(data)
        return promiseDoJob("吃早餐", 3000)
    })
    .then((data) => {
        console.log(data)
        return promiseDoJob("寫功課", 1000)
    })
    .then((data) => {
        console.log(data)
        return promiseDoJob("吃午餐", 2000)
    })
    .then((data) => {
        console.log(data)
    })
export default class 游戏Class {
    constructor(users) {
        this.玩家 = users

        this.场局 = '东';  // 东风局/南风局等  场风
        this.庄家 = '东';  // 庄家对应的风向   
        this.本场数 = 0;   // 庄家连庄数
        this.立直棒数 = 0;  
    }
}


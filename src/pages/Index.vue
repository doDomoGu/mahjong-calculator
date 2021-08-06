<template>
  <!-- <div> this is Mahjong Calculator </div> -->
  <!-- <div> this is Mahjong Calculator </div> -->

    <div id="main">
        <template v-if="status > 0" >
            <div class="user-panel user-panel-0">
                <div class="user-panel-info">
                    <UserPanel :user="game['玩家'][0]" />
                </div>
            </div>
            <div class="user-panel user-panel-1">
                <div class="user-panel-info">
                    <UserPanel :user="game['玩家'][1]" />
                </div>
            </div>
            <div class="user-panel user-panel-2">
                <div class="user-panel-info">
                    <UserPanel :user="game['玩家'][2]" />
                </div>
            </div>
            <div class="user-panel user-panel-3">
                <div class="user-panel-info">
                    <UserPanel :user="game['玩家'][3]" />
                </div>
            </div>
        </template>

        <Button type="success" v-if="status == 0" @click="init">开始(初始化)</Button>
        <Button type="danger" v-if="status == 1" @click="forceStop">停止(强制结束)</Button>
        <Button type="primary" v-if="status == 2" @click="newGame">开始新游戏(进入初始化表单)</Button>
    </div>
  
</template>

<script>
import 游戏Class from '@/models/游戏';
import 玩家Class from '@/models/玩家';

import UserPanel from '@/components/UserPanel'

import { Button } from 'vant';


export default {
    data() {
        return {
            status: 0, // 0:未开始, 1:进行中, 2:游戏结束,结算中
            game: null
        }
    },
    components: { Button, UserPanel},
    mounted() {
        console.log('mounted')

        // this.init()
    },
    methods: {
        init() {
            const [玩家_东_名字,玩家_南_名字,玩家_西_名字,玩家_北_名字] = ['A东','B南','C西','D北'];

            // 初始化
            const 游戏 = new 游戏Class(
                    [
                        new 玩家Class(玩家_东_名字),
                        new 玩家Class(玩家_南_名字),
                        new 玩家Class(玩家_西_名字),
                        new 玩家Class(玩家_北_名字)
                    ]
                );


            console.log(游戏)

            this.game = 游戏

            this.status = 1
        },
        forceStop() {
            this.status = 2
        },
        newGame() {
            this.status = 0
        }

    }
}
</script>

<style>
#main {
    position: relative;
    width:100vmin;
    height:100vmin;
    margin-top:calc((100vh - 100vmin)/2);
    margin-left:calc((100vw - 100vmin)/2);
    /* calc((100vm - 100vmin)/2); */
    overflow: hidden;
    color:#fff;
    background: #448833;
}
.user-panel {
    /* background: #332291; */
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50vmin;
    width: 100vmin;
    transform-origin:center top;
}
.user-panel-1 {
    /* background: #992291; */
    transform:rotate(-90deg)
}
.user-panel-2 {
    /* background: #329291; */
    transform:rotate(-180deg)
}
.user-panel-3 {
    /* background: #999911; */
    transform:rotate(-270deg)
}

.user-panel-info {
    position: absolute;
    bottom:0;
    left:50%;
    margin-left: -20vmin;
    width: 40vmin;
}
</style>
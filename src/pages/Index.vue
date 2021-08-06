<template>
  <div> this is Mahjong Calculator </div>
  <div> this is Mahjong Calculator </div>
</template>

<script>
import 游戏Class from '@/models/游戏';
import 玩家Class from '@/models/玩家';



export default {
    data() {
        return {}
    },
    mounted() {
        console.log('mounted')

        this.init()
    },
    methods: {
        init() {
            const [玩家_东_名字,玩家_南_名字,玩家_西_名字,玩家_北_名字] = ['A东','B南','C西','D北'];

            // 初始化
            let 游戏 = new 游戏Class(
                    [
                        new 玩家Class(玩家_东_名字),
                        new 玩家Class(玩家_南_名字),
                        new 玩家Class(玩家_西_名字),
                        new 玩家Class(玩家_北_名字)
                    ]
                );


            console.log(游戏)
        }
    }
}
</script>

<style>

</style>
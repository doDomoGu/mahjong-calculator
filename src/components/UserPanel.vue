<template>
    <div style="text-align:center;">
        <div>
            {{user.name}}
        </div>
        <div>
            {{user.point}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    mounted(){
        console.log(this.user)
    }
}
</script>

<style>

</style>
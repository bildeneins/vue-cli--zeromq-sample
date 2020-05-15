<template>
    <div>
        <button @click="pushed">送信</button>
    </div>
</template>

<script>
    import { sendRequest } from '@/ZmqClient'
    export default {
        name: "sample.vue",
        methods: {
            pushed() {
                let sampleObj = {name:"sample"}
                sendRequest("sample-path", "show", sampleObj, this.nextFunc)
            },
            nextFunc(obj){
                if(obj.is_success) {
                    alert("success!")
                }
            }
        }
    }
</script>

<style scoped>

</style>

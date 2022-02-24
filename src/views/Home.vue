<template>
    <div>Hi</div>
</template>


<script lang="ts" setup>

import http from '../composables/useAxios'


const getList = () => {
    http.get("http://acnhapi.com/v1a/fish/")
        .then((response: { data: any }) => {
            console.log(response.data)

        })
}

getList()
</script>






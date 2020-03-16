<template>
    <v-layout row wrap align-center justify-center my-5 py-5>
        <v-flex xs12 text-center mt-5>
            <img src="../../../public/images/under_construction_2.gif" height="400" width="600"/>
        </v-flex>
        <v-flex xs12>
            <p :align="'center'" style="font-size: 24px">Site Under Construction</p>
        </v-flex>

    </v-layout>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                notifications: true,
            }
        },
    }
</script>

<style scoped>

</style>

<template>
    <v-layout row wrap align-center justify-center>
        <v-dialog v-model="notifications" width="300">
            <v-card>
                <v-card-title>
                    Site Under Construction
                </v-card-title>
            </v-card>
        </v-dialog>
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

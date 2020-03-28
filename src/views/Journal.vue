<template>
    <v-container>
        <v-layout>
            <h1>Journal<br></h1>
            <v-tabs
            color="green"
            grow
            slider-color="cyan"
            >
            <v-tab ripple>
                Color
            </v-tab>
            <v-tab ripple>
                Word
            </v-tab>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        contents
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        contents
                    </v-card-text>
                </v-card>
            </v-tab-item>
            </v-tabs>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Journal"
    }
</script>

<style scoped>

</style>
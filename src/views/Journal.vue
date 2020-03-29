<template>
    <v-container>
        <v-layout>
            <v-row>
                <v-col>
            <h1>Journal</h1>
                </v-col>
            <v-col cols="12">
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
                    <v-card-actions>
                        <v-col  cols="12">
                            <v-row>
                        <v-btn width="50%" color="red"></v-btn>
                        <v-btn width="50%" color="yellow"></v-btn>
                            </v-row>
                        <v-row>
                        <v-btn width="50%" color="blue"></v-btn>
                        <v-btn width="50%" color="green"></v-btn>
                        </v-row>
                        </v-col>
                    </v-card-actions>
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
                </v-col>
            <v-col cols="12">
            <v-btn width="33%" large outlined to="/">Back</v-btn>
            <v-btn width="33%" large outlined to="/">Skip Journal</v-btn>
            <v-btn width="33%" large outlined to="/">Next</v-btn>
            </v-col>
            </v-row>
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
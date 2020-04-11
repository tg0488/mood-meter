<template>
    <v-container>
        <v-layout style="white-space: pre-line;">
            <v-row>
                <v-col cols="12">
                    <h1>January 2</h1>
                    <v-divider></v-divider>
                </v-col>
                <v-col class="pt-0" cols="12">
                    <div style="height:100%; width: 100%; background-color: blue;">
                        <h2 style="color: white;">Tired</h2>
                    </div>
                </v-col>
                <v-col cols="12">
                    <h3>Entry</h3>
                    <b>
                        I did not get enough sleep last night and have not had coffee.
                        I have too much work to do to relax and need to talk to my
                        professors about the issues I am having.
                    </b>
                </v-col>
            </v-row>
        </v-layout>
        <v-layout>
            <v-row style="width:100%;" justify="space-around">
                <v-col cols="6">
                    <v-btn style="width:90%; margin-left:5%; margin-right:5%;" large outlined to="PersonalLog">Back</v-btn>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "PersonalEntry"
    }
</script>

<style scoped>
    h2 {
        color: #11f
    }
    b {
        font-weight: normal;
    }
</style>

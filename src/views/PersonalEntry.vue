<template>
    <v-container>
        <v-layout style="white-space: pre-line;">
            <v-col>
            <v-row>
                <h1>
                    January 2
                </h1>
            </v-row>
            <v-divider>
            </v-divider>
            <v-row>
            <h2 color="Blue">
                Tired
            </h2>
        </v-row>
            <v-row>
            <h3>
                Entry
            </h3>
        </v-row>
        <v-row>
            <b>
                I did not get enough sleep last night and have not had coffee.
                I have too much work to do to relax and need to talk to my
                professors about the issues I am having.
            </b>
        </v-row>
        <v-row >
            <v-btn large outlined to="PersonalLog">
                Back
            </v-btn>
        </v-row>
            </v-col>
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

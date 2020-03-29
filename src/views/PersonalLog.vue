<template>
    <v-container>
        <v-layout>
            <h1>Personal Log</h1>
            <v-row>
                <v-col>
                    <h2>Monday</h2>
                </v-col>
                <v-col>
                    <h2>Tuesday</h2>
                </v-col>
                <v-col>
                    <h2>Wednesday</h2>
                </v-col>
                <v-col>
                    <h2>Thursday</h2>
                </v-col>
                <v-col>
                    <h2>Friday</h2>
                </v-col>
                <v-col>
                    <h2>Saturday</h2>
                </v-col>
                <v-col>
                    <h2>Sunday</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn large outlined to="/">Elated</v-btn>
                </v-col>
                <v-col>
                    <v-btn large outlined to="/">Depressed</v-btn>
                </v-col>
                <v-col>
                    <v-btn large outlined to="/">Tired</v-btn>
                </v-col>
                <v-col>
                    <v-btn large outlined to="/">Angry</v-btn>
                </v-col>
                <v-col>
                    <v-btn large outlined to="/"></v-btn>
                </v-col>
                <v-col>
                    <v-btn large outlined to="/"></v-btn>
                </v-col>
                <v-col>
                    <v-btn large outlined to="/"></v-btn>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      name: "PersonalLog"
    }
</script>

<style scoped>

</style>

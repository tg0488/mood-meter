<template>
    <v-container>
        <v-layout style="white-space: pre-line;">
            <v-col>
            <v-row>
                <h1>
                    {{chosenEntry[0]}}
                </h1>
            </v-row>
            <v-divider>
            </v-divider>
            <v-row>
            <h2 :style="{ color : '#' + chosenEntry[1] }">
                {{chosenEntry[2]}}
            </h2>
        </v-row>
            <v-row>
            <h3>
                Entry
            </h3>
        </v-row>
        <v-row>
            <b>
                {{chosenEntry[3]}}
                <!--I did not get enough sleep last night and have not had coffee.
                I have too much work to do to relax and need to talk to my
                professors about the issues I am having.-->

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
        name: "PersonalEntry",
        mounted() {
            this.entryPicker()
        },
        data() {
            return {
                entryList: [['Date','d11','Angry','My boss yelled at me for not cleaning up the sink. I need to relax.'],
                ['Date','11d','Tired','I woke up late today. I need to go to bed earlier.'],
                ['Date','ea0','Elated','I love my new assignment. It provides many interesting problems for me to solve.'],
                ['Date','183','Calm','The day is going well so far and I am content with my current assignment.']],
                chosenEntry: ['','','',''],
                entryDate: ''
            }
        },
        created() {
            this.entryDate = this.$route.params.entryDate;
        },
        methods: {
            entryPicker: function(){
                var chosenNumber = Math.floor(Math.random() * this.entryList.length);
                this.chosenEntry = this.entryList[chosenNumber]
                this.chosenEntry[0] = this.entryDate
            }
        }
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

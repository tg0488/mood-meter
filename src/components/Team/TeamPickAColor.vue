<template>
    <v-container style="width: 90vh; height: 75vh">
        <v-card class="pa-3" light style="width: 100%; height: 100%;">
            <v-layout>
                <v-row style="width:100%">
                    <v-col cols="12">
                        <grid-btn v-on:change="change" :size="6" :number="2" :btncolor="['red', 'yellow']"></grid-btn>
                        <grid-btn v-on:change="change" :size="6" :number="2" :btncolor="['blue','green']"></grid-btn>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout text-center>
                <v-row>
                    <v-col cols="12">
                        <span>I am feeling {{journal.color}} today</span>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout style="width: 100%;">
                <v-row>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_left" large outlined @click="close">Back</v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn class="direction_buttons_right" large outlined @click="log">Log</v-btn>
                    </v-col>
                </v-row>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    import GridBtn from "../gridbtn";
    export default {
        name: "TeamPickAColor",
        props: [
          'selectedTeam'
        ],
        components: {GridBtn},
        data () {
            return {
                journal: {
                    color: '______',
                    word: '',
                    written: ''
                }
            }
        },
        methods: {
            change: function(value, color) {
                this.journal.word = value;
                this.journal.color = color;
            },
            close: function(){
                this.$emit('closePickAColorOverlay', false);
            },
            log: function(){
                this.$store.dispatch('addTeamJournal',{'teamName': this.selectedTeam, 'teamMember':'Myself', 'journal':this.journal})
                this.$emit('closePickAColorOverlay', false);
            }
        }
    }
</script>

<style scoped>
    .direction_buttons_left{
        width: 85%;
        margin-left: 10%;
        margin-right: 5%;
        font-size: medium;
        text-align: center;
    }
    .direction_buttons_right{
        width: 85%;
        margin-left: 5%;
        margin-right: 10%;
        font-size: medium;
        text-align: center;
    }
</style>
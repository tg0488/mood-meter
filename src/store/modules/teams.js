const state = {
    yourTeams:{
        'SWEN 444 - Team 5': {
            'Myself': "No response yet",
            'Taylor Grant': "No response yet",
            'Zach Tucker': "No response yet",
            'Dan Murray': "No response yet"
        },
        'Team PSK': {
            'Myself': "No response yet",
            'Connor': "No response yet",
            'Carter': "No response yet",
            'Menz': "No response yet",
        },
        'Team SWEN Profs': {
            'Myself': "No response yet",
            "Yasmine Elglaly": "No response yet"
        }
    },
    allTeams:{
        'SWEN 444 - Team 5': {
            'Taylor Grant': "No response yet",
            'Zach Tucker': "No response yet",
            'Dan Murray': "No response yet"
        },
        'Team PSK': {
            'Connor': "No response yet",
            'Carter': "No response yet",
            'Menz': "No response yet",
        },
        'Team SWEN Profs': {
            "Yasmine Elglaly": "No response yet"
        },
        'Team 4':{
            'Team member 1': '',
            'Team member 2': '',
            'Team member 3': ''
        },
        'Team 5': {
            'Team member 1': '',
            'Team member 2': '',
            'Team member 3': ''
        },
        'Team 6': {
            'Team member 1': '',
            'Team member 2': '',
            'Team member 3': ''
        }
    }
};

const mutations = {
    ADD_TEAM(state, payload){
        state.yourTeams[payload.teamName] = payload.teamMembers;
        state.allTeams[payload.teamName] = payload.teamMembers;
    },
    JOIN_TEAM(state,payload){
        state.yourTeams[payload.teamName] = payload.teamMembers;
    },
    ADD_TEAM_JOURNAL(state, payload){
        state.yourTeams[payload.teamName][payload.teamMember] = payload.journal;
    }
};

const actions = {
    addTeam(context, payload){
        context.commit("ADD_TEAM", payload);
    },
    joinTeam(context, payload){
        context.commit("JOIN_TEAM", payload);
    },
    addTeamJournal(context, payload){
        context.commit("ADD_TEAM_JOURNAL", payload)
    }
};

const getters = {
    getYourTeams(state){
        return state.yourTeams;
    },
    getAllTeams(state){
        return state.allTeams;
    },
    getTeamMembers:(state) => (teamName) =>{
        return state.allTeams[teamName];
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
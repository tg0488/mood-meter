const state = {
    yourTeams:{
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
    ADD_TEAM(state, teamName, teamMembers){
        state.yourTeams[teamName] = teamMembers;
        state.allTeams[teamName] = teamMembers;
    },
    JOIN_TEAM(state,teamName,teamMembers){
        state.yourTeams[teamName] = teamMembers;
    }
};

const actions = {
    addTeam(context, teamName, teamMembers){
        context.commit("ADD_TEAM", teamName, teamMembers);
    },
    joinTeam(context, teamName, team){
        context.commit("JOIN_TEAM", teamName,team);
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
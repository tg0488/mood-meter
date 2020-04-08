const state = {
    yourTeams:{
        'Team 1': {
            'Taylor Grant': "No response yet",
            'Zach Tucker': "No response yet",
            'Dan Murray': "No response yet"
        },
        'Team 2': {
            'Connor': "No response yet",
            'Carter': "No response yet",
            'Menz': "No response yet",
        },
        'Team 3': {
            "Yasmine Elglaly": "No response yet"
        }
    }
};

const mutations = {
    ADD_TEAM(state, teamName, teamMembers){
        state.yourTeams[teamName] = teamMembers;
    }
};

const actions = {
    addTeam(context, teamName, teamMembers){
        context.commit("ADD_TEAM", teamName, teamMembers);
    }
};

const getters = {
    getYourTeams(state){
        return state.yourTeams;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
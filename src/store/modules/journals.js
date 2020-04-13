const state = {
    Journals: []
    //structure of journal [Date(YYYY-MM-DD), Color, Word, Content]
};

const mutations = {
    ADD_JOURNAL(state, journal){
        state.Journals[state.Journals.length] = journal
    }
};

const actions = {
    addJournal(context, journal){
        context.commit("ADD_JOURNAL", journal);
    }
};

const getters = {
    getJournals(state){
        return state.Journals;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
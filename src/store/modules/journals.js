const state = {
    Journals: []
    //Array of Arrays
    // Structure of journal Array
    // [Date(YYYY-MM-DD-ID), Color, Word, Content]
    //ID = num of journal, incremented by one per existing journal
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
    },
    numJournals(state){
        return state.Journals.length;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
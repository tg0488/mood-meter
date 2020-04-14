const state = {
    Journals: [],
    //Array of Arrays
    // Structure of journal Array
    // [Date(YYYY-MM-DD-ID), Color, Word, Content]
    //ID = num of journal, incremented by one per existing journal
    lastColor: 'black'
    // last color selected for use in UI
    // initilized to black so the user can see the color 
    // spring to life after their first journal
    // can grab with "this.$store.getters.getLastColor"
};

const mutations = {
    ADD_JOURNAL(state, journal){
        state.Journals.push(journal);
        //Journal ID is the number of journals currently in the store
    },
    NEW_LASTCOLOR(state, color){
        state.lastColor = color;
    }
};

const actions = {
    addJournal(context, journal){
        context.commit("ADD_JOURNAL", journal);
    },
    newLastColor(context, color){
        context.commit("NEW_LASTCOLOR", color);
    }
};

const getters = {
    getJournals(state){
        return state.Journals;
    },
    numJournals(state){
        return state.Journals.length;
    },
    getLastColor(state){
        return state.lastColor;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
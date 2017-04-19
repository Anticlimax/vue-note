import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  ADD_NOTE(state){
    const newNote = {
      title: 'New Note',
      favorite: false,
      content:'',
      id: new Date()
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  ACTIVE_NOTE(state,payload){
    state.activeNote = payload
  },
  EDIT_NOTE(state,payload){

    state.activeNote.content = payload

  },
  EDIT_TITLE(state,payload){
    state.activeNote.title = payload
  },
  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite
  },
  DELETE_NOTE(state){
    state.notes.forEach((item,index)=>{
      if(item.id === state.activeNote.id){
        state.notes.splice(index,1)
        if(index > 0){
          state.activeNote = state.notes[index-1]
        }
      }
    })
  }
}

const getters = {
  // currentNote(state){
  //   return state.activeNote
  // }
}


export default new Vuex.Store({
  state,
  mutations,
  getters
})

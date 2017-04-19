<template>
  <div id="app">
    <Toolbar></Toolbar>
    <NoteList></NoteList>
    <Editor></Editor>
  </div>
</template>

<script>

  import Toolbar from './components/Toolbar.vue'
  import Editor from './components/Editor.vue'
  import NoteList from './components/NoteList.vue'
  import store from './vuex/store'
  import './assets/css/reset.css'

  export default {
    name: 'app',
    store,
    components: {
      Toolbar,
      NoteList,
      Editor
    },
    created(){

      window.onbeforeunload = ()=>{
        this.$store.commit('SAVE_DATA')
      }

      this.$store.commit('INIT_DATA')

    }
  }
</script>

<style>
  #app {
    display: flex;
    height: 100vh;
    font-family: "Microsoft YaHei UI";
    font-weight: 500;
    overflow: hidden;
  }

  #Toolbar {
    flex: 1;
    min-width: 90px;
    max-width:110px;
    background-color: whitesmoke;
  }

  #NoteList {
    flex: 4;
    max-width: 450px;
    min-width: 400px;
    background-color: lightblue;
  }

  #Editor {
    flex: 12;
    background-color: lawngreen;
  }
</style>

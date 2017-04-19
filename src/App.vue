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
    }
  }
</script>

<style>
  #app {
    display: flex;
    height: 100vh;
    font-family: "Microsoft YaHei UI";
    font-weight: 500;
  }

  #Toolbar {
    flex: 1;
    min-width: 90px;
    background-color: whitesmoke;
  }

  #NoteList {
    flex: 4;
    background-color: lightblue;
  }

  #Editor {
    flex: 12;
    background-color: lawngreen;
  }
</style>

<template>
  <div id="Editor">
    <input type="text" id="EditorTitle" placeholder="请输入笔记标题"
           :value="activeNoteTitle" @input="updateTitle">
    <textarea name="editor" id="editorPanel"
              @input="updateContent" :value="activeNoteText">
    </textarea>
  </div>
</template>
<script>

  import '../../static/font/iconfont.css'

  export default {
    name:'Editor',
    computed:{
      activeNoteText(){
         return this.$store.state.activeNote.content
      },
      activeNoteTitle(){
        return this.$store.state.activeNote.title
      }
    },
    methods:{
      updateContent(e){
        console.log(this.activeNoteText)
        this.$store.commit("EDIT_NOTE", e.target.value)
      },
      updateTitle(e){
        this.$store.commit("EDIT_TITLE",e.target.value)
      }
    }
  }
</script>
<style>
  #Editor {
    background-color: white;
  }
  #EditorTitle {
    width: 100%;
    height: 5%;

    outline: none;
    resize: none;
    border: none;
    overflow: visible;
    font-size: 30px;
  }
  #editorPanel {
    width: 100%;
    height: 90%;

    outline: none;
    resize: none;
    border: none;
    overflow: visible;
    font-size: 20px;
  }
</style>

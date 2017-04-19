<template>
  <div id="Toolbar">
    <ul class="btnList">
      <li @click="addNote" ><i class="iconfont icon-jiahao"></i></li>
      <li><i @click="toggleFavorite" :class="{ star: activeNoteStar === true }" class="iconfont icon-wujiaoxingshixin"></i></li>
      <li><i @click="deleteNote" class="iconfont icon-cheng"></i></li>
    </ul>
  </div>
</template>
<script>

  export default {

    computed:{
      activeNoteStar(){
        return this.$store.state.activeNote.favorite
      }
    },
    methods:{
      addNote(){
        this.$store.commit('ADD_NOTE')
      },
      toggleFavorite(){

        this.$store.commit('TOGGLE_FAVORITE')
      },
      deleteNote(){
        this.$store.commit('DELETE_NOTE')
      }
    }
  }
</script>
<style>
  #Toolbar {
    border: 1px solid #293f4d;
    background-color: #293f4d;
  }
  .btnList {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: gray;
  }

  .btnList li {
    padding: 1.5rem 0;
    cursor: pointer;
  }
  .btnList li:first-child {
    margin-top: 2rem  ;
  }
  .btnList  .iconfont {
    font-size: 40px ;
  }

  @keyframes round {
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  .btnList li:hover  {
    animation: round 1s linear 1 .3s;
  }

  .star {
    color: yellow;
  }
</style>

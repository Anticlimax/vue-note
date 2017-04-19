<template>
  <div id="NoteList">
    <div class="header-wrapper">
      <h3 class="header">NOTES</h3>
      <div class="btn-wrapper">
        <a href="#" class="all" @click="show = 'all'"
           :class="{active: show === 'all'}">All Notes</a>
        <a href="#" class="favorites" @click="show = 'favorites'"
           :class="{active: show === 'favorites'}">Favorites</a>
      </div>
    </div>
    <ul class="list">
      <li v-for="note in noteList"
          @click="activeNote(note)"
          :class="{ activeLi : current === note}">
        {{ note.title }}

      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'NodeList',
    data(){
      return {
        show: 'all',
        init:''
      }
    },
    computed: {
      noteList(){
        if (this.show === 'all') {
          return this.$store.state.notes
        } else if (this.show === 'favorites') {
          return this.$store.state.notes.filter((item) => {
            return item.favorite === true
          })
        }
      },
      current(){
        return this.$store.state.activeNote
      }
    },
    methods: {
      activeNote(note){
        this.$store.commit('ACTIVE_NOTE', note)
      }
    }
  }
</script>
<style>
  #NoteList {
    height: 100%;

    border-right: 1px solid #f2f2f2;
    background-color: #f2f2f2;

  }

  .header-wrapper {
    hieght:23%;
  }

  .header {
    font-size: 2.8rem;
    padding: 3rem;
    text-align: center;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .all, .favorites {
    padding: 1rem 3rem;

    background-color: white;
    border: 1px solid #f2f2f2;
    color: #000;
  }

  .all {
    border-radius: 8px 0 0 8px;
    border-right: none;
  }

  .favorites {
    border-radius: 0 8px 8px 0;
    border-left: none;
  }

  .active {
    background-color: lightgray;
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, .2);
  }

  .list {
    height: 77%;
    margin-top: 2rem;
    background-color: white;
    overflow: scroll;
  }


  .list li {
    padding: 1rem;
    font-size: 1.2rem;
    height: 3.3rem;
    cursor: pointer;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .selected {
    background-color: #1e78bb;
    color: white;
  }

  .activeLi {
    background-color: #337ab7;
    color: white;
  }
</style>

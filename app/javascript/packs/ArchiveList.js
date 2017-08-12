import Vue from 'vue/dist/vue.esm'
import ArchiveList from "../components/ArchiveList.vue"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#archiveList",
    template: "<archiveList/>",
    components: { ArchiveList }
  })
})

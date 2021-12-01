<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb h4">
                <li
                  v-for="breadcrumb in this.getFolderItem.breadcrumbs"
                  :key="breadcrumb.hashed_id"
                  :class="
                    breadcrumb.hashed_id === thisFolderHashedId
                      ? 'breadcrumb-item active'
                      : 'breadcrumb-item'
                  "
                >
                  <router-link
                    data-toggle="collapse"
                    :class="
                      breadcrumb.hashed_id === thisFolderHashedId
                        ? 'text-reset'
                        : ''
                    "
                    :to="{
                      name: 'f',
                      params: { hashed_id: breadcrumb.hashed_id },
                    }"
                    >{{ breadcrumb.name }}</router-link
                  >
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- /.content-header -->
    <!-- Main content -->

    <div class="container">
      <div class="row">
        <!-- {{this.getFolderItem}} -->
        <div class="col-md-1 mr-5 text-justify">
          <button class="btn btn-default" @click="toggle()">
            <i class="fas fa-folder-plus fa-5x"></i>
            <p class="text-center text-bold">Create</p>
          </button>
        </div>
        <div
          v-for="folder in this.getFolderItem.folders"
          :key="folder.hashed_id"
          class="col-md-1 mr-5 text-justify"
          @contextmenu="menuOpen($event, folder.hashed_id)"
        >
          <router-link
            data-toggle="collapse"
            class="btn btn-default"
            :to="{
              name: 'f',
              params: { hashed_id: folder.hashed_id },
            }"
          >
            <i class="fas fa-folder fa-5x"></i>
            <p class="text-center text-bold">{{ folder.name }}</p>
          </router-link>
          <ul
            id="right-click-menu"
            tabindex="-1"
            v-if="viewMenu"
            :style="{ top: top, left: left }"
          >
            <li>First list item</li>
            <li>Second list item</li>
          </ul>
        </div>
      </div>
    </div>
    <div :class="modalClasses" class="fade" id="reject" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Create Folder</h4>
            <button type="button" class="close" @click="toggle()">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <form
              @submit.prevent="createFolderEvent"
              id="createFolderForm"
              class="form-horizontal"
              enctype="multipart/form-data"
            >
              <div class="form-group">
                <label class="control-label col-md-6">Folder Name : </label>
                <div class="col-md-12">
                  <input
                    type="text"
                    v-model="folderName"
                    id="folderName"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="form-group" align="center">
                <input
                  type="submit"
                  name="submit"
                  id="createFolderModalSubmitButton"
                  class="btn btn-info"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      modalClasses: ["modal", "fade"],
      folderName: null,
      thisFolderHashedId: null,
      viewMenu: false,
      top: "0px",
      left: "0px",
    };
  },
  methods: {
    ...mapActions(["fetchFolderItem", "createNewFolder"]),
    fetchFolderItems() {
      this.thisFolderHashedId = this.$route.params.hashed_id;
      this.fetchFolderItem(this.$route.params.hashed_id);
    },
    toggle() {
      document.body.className += " modal-open";
      let modalClasses = this.modalClasses;

      if (modalClasses.indexOf("d-block") > -1) {
        modalClasses.pop();
        modalClasses.pop();

        //hide backdrop
        let backdrop = document.querySelector(".modal-backdrop");
        document.body.removeChild(backdrop);
      } else {
        modalClasses.push("d-block");
        modalClasses.push("show");

        //show backdrop
        let backdrop = document.createElement("div");
        backdrop.classList = "modal-backdrop fade show";
        document.body.appendChild(backdrop);
      }
    },
    createFolderEvent(e) {
      e.preventDefault();
      this.createNewFolder({
        name: this.folderName,
        parent_id: this.getFolderItem.id,
        native_folder_hashed_id: this.getFolderItem.hashed_id,
      });
      this.toggle();
    },
    setMenu: function (top, left) {
      largestHeight = window.innerHeight - this.$$.right.offsetHeight - 25;
      largestWidth = window.innerWidth - this.$$.right.offsetWidth - 25;

      if (top > largestHeight) top = largestHeight;

      if (left > largestWidth) left = largestWidth;

      this.top = top + "px";
      this.left = left + "px";
    },
    menuOpen: function(e, hashed_id) {
      this.viewMenu = true;
      console.log(this.$$)
      // Vue.nextTick(
      //   function () {
      //     this.$$.right.focus();

      //     this.setMenu(e.y, e.x);
      //   }.bind(this)
      // );
      e.preventDefault();
    },
    menuClose(e) {},
  },
  watch: {
    "$route.params.hashed_id": function (id) {
      if (this.getFolderItem.hashed_id != id) {
        this.fetchFolderItems();
      }
    },
  },
  mounted() {
    this.fetchFolderItems();
  },
  computed: {
    ...mapGetters(["getFolderItem"]),
  },
  updated() {},
  created() {
    this.fetchFolderItems();
  },
};
</script>
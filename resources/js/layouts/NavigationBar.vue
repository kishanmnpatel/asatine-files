<template>
  <div>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="" class="nav-link">Files</a>
        </li>
      </ul>

      <!-- SEARCH FORM -->
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input
            class="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <!-- @if ($notificationsCount!=NULL)
            <span class="badge badge-warning navbar-badge">{{$notificationsCount}}</span>
          @endif -->
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header"
              >You have 10 Notifications</span
            >
            <div class="dropdown-divider"></div>
            <!-- @foreach ($notifications as $item)
              <a href="#" class="dropdown-item">
                 {{$item->content}}
              </a>
            <div class="dropdown-divider"></div>
            @endforeach -->

            <a href="#" class="dropdown-item dropdown-footer"
              >See All Notifications</a
            >
          </div>
        </li>
        <li class="nav-item dropdown user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
            <img
              src="/images/k.png"
              class="user-image img-circle elevation-2"
              alt="User Image"
            />
            <span class="d-none d-md-inline">Kishan Patel</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <!-- User image -->
            <li class="user-header bg-primary">
              <img
                src="/images/k.png"
                class="img-circle elevation-2"
                alt="User Image"
              />

              <p>Kishan Patel</p>
            </li>
            <!-- Menu Body -->
            <li class="user-body">
              <div class="row">
                <div class="col-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div class="col-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div class="col-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </div>
              <!-- /.row -->
            </li>
            <!-- Menu Footer-->
            <li class="user-footer">
              <a href="/profile" class="btn btn-default btn-flat">Profile</a>
              <a
                href="/logout"
                class="btn btn-default btn-flat float-right"
                onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();"
                >Sign out</a
              >
              <form
                id="logout-form"
                action="/logout"
                method="POST"
                style="display: none"
              >
                @csrf
              </form>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="/" class="brand-link">
        <img
          src="/images/a.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">Asatine Files</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

            <li class="nav-item">
              <router-link
                class="nav-link"
                data-toggle="collapse"
                :to="{ name: 'f' , params: {hashed_id:this.getCurrentUser.root_folder_id}}"
              >
                <i class="nav-icon fas fa-file-alt"></i>
                <p>Root</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                data-toggle="collapse"
                :to="{ name: 'shared' }"
              >
                <i class="nav-icon fas fa-file-alt"></i>
                <p>Shared with you</p>
              </router-link>
            </li>
            <!-- <li class="nav-item has-treeview">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  Shared with you
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="/brokers/create" class="nav-link">
                    <i class="far fa-circle nav-icon text-info"></i>
                    <p>બ્રોકર બનાવો</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/brokers" class="nav-link">
                    <i class="far fa-circle nav-icon text-info"></i>
                    <p>બ્રોકર લિસ્ટ</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item has-treeview">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  ઓર્ડર
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="/orders/create" class="nav-link">
                    <i class="far fa-circle nav-icon text-info"></i>
                    <p>ઓર્ડર બનાવો</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/orders" class="nav-link">
                    <i class="far fa-circle nav-icon text-info"></i>
                    <p>ઓર્ડર લિસ્ટ</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/orderRequest" class="nav-link">
                    <i class="far fa-circle nav-icon text-info"></i>
                    <p>ઓર્ડર રિકવેસ્ટ</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="/verities" class="nav-link">
                <i class="far fa-circle nav-icon text-info"></i>
                <p>Verity Manager</p>
              </a>
            </li>
            <li class="nav-item has-treeview">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  Excel Downloads
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a
                    href="/excel\createSalesVouchers.xlsx"
                    class="nav-link"
                    download="createSalesVouchers.xlsx"
                  >
                    <i class="far fa-circle nav-icon text-info"></i>
                    <p>Create Sales Voucher</p>
                  </a>
                </li>
              </ul>
            </li> -->
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "navigation-bar",
  watch: {
    $route() {
      $("#navbarCollapse").collapse("hide");
    },
  },
  methods: {
    ...mapActions(["userLogout"]),
    authenticate() {
      this.userLogout();
    },
  },
  computed: {
    ...mapGetters([
      'getCurrentUser'
    ])
  }
};
</script>

<style>
</style>
<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link data-toggle="collapse" :to="{ name: 'home' }">Root</router-link>
              </li>
              <li class="breadcrumb-item"></li>
              <!-- <li class="breadcrumb-item active">Create</li> -->
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- /.content-header -->
    <!-- Main content -->

    <div class="container">
      <div class="row">
        <div class="col-md-1 mr-5 text-justify"><button class="btn btn-default"><i class="fas fa-folder-plus fa-5x"></i><p class="text-center text-bold">Create</p></button></div>
        <div class="col-md-1 mr-5 text-justify"><button class="btn btn-default"><i class="fas fa-folder fa-5x"></i><p class="text-center text-bold">Sales</p></button></div>
        <div class="col-md-1 mr-5 text-justify"><button class="btn btn-default"><i class="fas fa-folder fa-5x"></i><p class="text-center text-bold">Orders</p></button></div>
        <div class="col-md-1 mr-5 text-justify"><button class="btn btn-default"><i class="fas fa-folder fa-5x"></i><p class="text-center text-bold">Vouchers</p></button></div>
        <div class="col-md-1 mr-5 text-justify"><button class="btn btn-default"><i class="fas fa-folder fa-5x"></i><p class="text-center text-bold">Dealers</p></button></div>
        <div class="col-md-1 mr-5 text-justify"><button class="btn btn-default"><i class="fas fa-folder fa-5x"></i><p class="text-center text-bold">Customers</p></button></div>
        <div class="col-md-1 mr-5 text-justify"><button class="btn btn-default"><i class="fas fa-folder fa-5x"></i><p class="text-center text-bold">Personal</p></button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
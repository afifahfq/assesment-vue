<template>
    <div class="landing">
      <!-- Desktop -->
      <div class="d-none d-md-block">
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2>
                  <strong>A Simple Vue App,</strong>
                  <br />in Your Gadget
                </h2>
                <p>Dibuat untuk memenuhi assesment test Fintax.</p>
                <router-link class="btn btn-lg btn-success" to="/about">
                  Find out more
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="../assets/drawing.png" width="100%" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingComp",
  };
  </script>
  
  <style>
  </style>
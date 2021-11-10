<template>
  <!-- <div class="loading">
    
        <div class="uil-ring-css" style="transform: scale(0.79)">
    
          <div></div>
    
        </div>
    
      </div> -->

  <div class="loading flex justify-center items-center flex-col">
    <div class="loader book-loader bg-primary">
      <figure class="page"></figure>

      <figure class="page"></figure>

      <figure class="page"></figure>
    </div>
  </div>
</template>
<style scoped>
*.hidden {
  display: none !important;
}

div.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 16, 16, 0.5);
  z-index: 9999;
}

.loader {
  margin: 5% auto 30px;
}

.book-loader {
  border: 4px solid #fff;
  width: 60px;
  height: 45px;
  position: relative;
  perspective: 150px;
}

.page {
  display: block;
  width: 30px;
  height: 45px;
  border: 4px solid #fff;
  border-left: 1px solid rgb(51, 211, 227);
  margin: 0;
  position: absolute;
  right: -4px;
  top: -4px;
  overflow: hidden;
  background: rgb(51, 211, 227);
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}

.book-loader .page:nth-child(1) {
  -webkit-animation: pageturn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s infinite;
  animation: pageturn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s infinite;
}

.book-loader .page:nth-child(2) {
  -webkit-animation: pageturn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s infinite;
  animation: pageturn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s infinite;
}

.book-loader .page:nth-child(3) {
  -webkit-animation: pageturn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s infinite;
  animation: pageturn 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s infinite;
}

/* Page turn */

@-webkit-keyframes pageturn {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  20% {
    background: rgb(51, 211, 227);
  }
  40% {
    background: rgb(42, 178, 190);
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
  100% {
    background: rgb(42, 178, 190);
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
}

@keyframes pageturn {
  0% {
    transform: rotateY(0deg);
  }
  20% {
    background: rgb(51, 211, 227);
  }
  40% {
    background: rgb(42, 178, 190);
    transform: rotateY(-180deg);
  }
  100% {
    background: rgb(42, 178, 190);
    transform: rotateY(-180deg);
  }
}
</style>
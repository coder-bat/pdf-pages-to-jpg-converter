<template>
  <div class="flex flex-col">
    <LayoutHeader />
    <Body />

    <!-- <LayoutLoader v-if="loadingState" /> -->
    <!-- <div class="sbuttons">
      <ShareButtons
        v-for="(network, index) in networks"
        :key="index"
        :network="network.network"
        :url="sharing.url"
        :title="sharing.title"
        :description="sharing.description"
        :hashtags="sharing.hashtags"
        :media="sharing.media"
        :icon="network.icon"
        :class="network.class"
      />
      <a target="_blank" class="sbutton mainsbutton" tooltip="Share">
        <font-awesome-icon :icon="['fas', 'share-alt']" />
      </a>
    </div> -->
  </div>
</template>
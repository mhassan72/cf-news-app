<template>
<ion-page>
    <ion-content>
        <div class="top_nav" :class="{ absolute: article.data.featured_media?.fearured}">
            <button class="fll" @click="backBtn()"> <ion-icon :icon="chevronBackOutline"></ion-icon></button>
            <button class="flr"> <ion-icon :icon="bookmarkOutline"></ion-icon></button>
            <button class="flr mr10"> <ion-icon :icon="heartOutline"></ion-icon></button>

        </div>
        <div class="featuredImage" 
             v-if="article.data.featured_media?.fearured"
             :style="{'background-image': `url(${article.data.featured_media.url})`}">
        </div>

        <div class="header">
            <p> {{ timeDist(article.data.created_at) }}</p>
            <h1 v-html="article.data.title" class="title"></h1>
        </div>

        <div class="fontSize">
            <!-- {{ font.size.toFixed(2) }} -->
            <button @click="remove()" class="remove">
                <ion-icon :icon="removeOutline"></ion-icon>
            </button>
            <button>
                <ion-icon :icon="textOutline"></ion-icon>
            </button>
            <button @click="add()" class="add">
                <ion-icon :icon="addOutline"></ion-icon>
            </button>  
        </div>
        

        <div class="content">
            <p v-html="removeScript(article.data.content)" :style="{ 'font-size': `${font.size.toFixed(2)}rem`}"></p>
        </div>

        <all-comments></all-comments>

    </ion-content>
</ion-page>

</template>

<script lang="ts">
import defineComponent  from "./show";
export default defineComponent
</script>
<style>
.featuredImage {
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 83%);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 83%);
    padding: 0;
    margin: 0;
    /* background: #000; */
    height: 500px;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
}

.content {
    padding: 5%;
}

.header {
    width: 90%;
    padding-left: 5%;
}
.fontSize {
    font-size: 1.6rem;
    width: 100%;
    text-align: right;
    padding-right: 5%;
    padding-top: 20px;
    padding-bottom: 20px;
}

.fontSize button {
    background: none;
    padding: 12px;
    border-radius: 4px;
}
.fontSize .add {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-left: 20px;
}

.fontSize .remove {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-right: 20px;

}

iframe {
    width: 100% !important;
}

.content img {
  margin: 0 auto;
  display: inline-block;
  width: 100%;
  height: auto;
  border-radius: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.top_nav {
    padding: 12px;
    height: 80px;
    padding-top: 20px;

}
.top_nav .flr {
    float: right;
}
.top_nav .mr10 {
    margin-right: 10px;
}
.top_nav .fll {
    float: left;
}
.top_nav button {
    font-size: 1.6rem;
    background: none;
    color: inherit;
}

.absolute {
    position: absolute;
    z-index: 1;
    /* background: #000; */
    width: 100%;
    color: white;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,0.865983893557423) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.865983893557423) 0%, rgba(0,0,0,0) 100%);
    background: linear-gradient(180deg, rgba(0,0,0,0.865983893557423) 0%, rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}
</style>
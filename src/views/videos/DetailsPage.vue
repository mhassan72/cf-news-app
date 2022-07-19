<template>
    <ion-page>
        <ion-content class="page">

            <div class="fixedHeader">
                <button> <ion-icon :icon="chevronBackOutline"></ion-icon> </button>
            </div>

            <div class="videos">

                <div class="video" v-for="(video, index) in videos" :key="index" :id="`index_${index}`" :ref="'player' + index">
                    <!-- {{ video }} -->
                    <video controls preload="metadata" playsinline >
                        <source :src="video.url" type="video/mp4">
                    </video>

                    <div class="informationContainer">
                        <h4>{{ video.title }}</h4>
                        <p>{{ video.description}}</p>
                    </div>
                </div>

            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonContent, IonIcon } from '@ionic/vue'
import { chevronBackOutline} from 'ionicons/icons';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
        IonIcon
    },
    setup() {

        const videos : any = [
            {
                title : "Big Buck Bunny",
                description : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... ",
                url: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4",

            },
            {
                title: "FORTNITE Creative V21.30 Update",
                description: "The v21.30 update brings the new Player Marker device, the Prime Shotgun from Battle Royale, as well as new Galleries such as the Deserted Fortress collection, the Waterfall Gallery and the Cuddle Tree Prop Gallery...",
                url: "https://assets.mixkit.co/videos/preview/mixkit-young-man-playing-an-online-video-game-43532-large.mp4"
            },
            {
                title: "For Bigger Blazes",
                description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
                url: "https://assets.mixkit.co/videos/preview/mixkit-young-man-dancing-upside-down-on-a-pedestrian-bridge-3627-large.mp4"
            },
            {
                title: "For Bigger Fun",
                description: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
                url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            }
        ]
        
        return {
            chevronBackOutline,
            videos
        }
    }
})
</script>

<style>
.fixedHeader {
    width: 100vw;
    height: 90px;
    padding-top: 20px;
    padding-left: 20px;
    position: fixed;
    z-index: 3;
    font-size: 1.6rem;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,0.40940126050420167) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.40940126050420167) 0%, rgba(0,0,0,0) 100%);
    background: linear-gradient(180deg, rgba(0,0,0,0.40940126050420167) 0%, rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}
.fixedHeader button {
    background: none;
    color: white;
}
.video {
    min-height: 100vh;
    background: black;
}
video {
    width: 100vw;
    height: 100vh;
}

video::-webkit-media-controls {
  opacity: 0;
}
.informationContainer {
    color: white;
    padding: 20px;
    position: relative;
    height: 200px;
    margin-top: -200px;
    bottom: 0;
    z-index: 1;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(0deg, rgba(0,0,0,0.865983893557423) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(0deg, rgba(0,0,0,0.865983893557423) 0%, rgba(0,0,0,0) 100%);
    background: linear-gradient(0deg, rgba(0,0,0,0.865983893557423) 0%, rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}
</style>

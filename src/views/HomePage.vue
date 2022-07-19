<template>
    <ion-page>
     <ion-content>

        <section>
            <div class="videosHeader">
                <div class="header">
                    <h5>Latest</h5>
                    <p>Trending Videos</p>
                </div>
                <div class="moreOptions">
                    <button> <ion-icon :icon="codeOutline"></ion-icon> </button>
                </div>
            </div>

            <div class="videos">

                <div class="video" v-for="(video, index) in videos" :key="index">
                    <div class="videoCover" :style="{'background-image': `url(${video.cover_image})`}">
                        <div class="playerBtn">
                            <ion-icon :icon="play"></ion-icon>
                        </div>
                    </div>
                    <div class="informatics">
                        <h6 class="title">{{ truncateString(video.title, 40) }}</h6>
                    </div>
                </div>

            </div>
        </section>

        <!-- <section>
            <div class="sectionHeader">
                <div class="header">
                    <h5>Trending</h5>
                    <p>Baraha Bulshada</p>
                </div>
                <div class="moreOptions">
                    <button> <ion-icon :icon="codeOutline"></ion-icon> </button>
                </div>
            </div>

            <div class="articles">
                <div class="article" :class="{ borderTop: index > 0}" v-for="(article, index) in articles" :key="index">
                    <div class="coverImage" v-if="index < 1" :style="{ 'background-image': `url(${article.cover_image })`}"></div>
                    <div class="information">
                        <h4 class="title">
                            {{ article.title }}
                        </h4>
                        <p>
                            {{ article.time_ago }} |  <strong> {{ article.source_name }} </strong>
                        </p>
                    </div>
                </div>
            </div>

        </section> -->

        <section>
            <div class="sectionHeader">
                <div class="header">
                    <h5>News</h5>
                    <p>Wararka Maanta</p>
                </div>
                <div class="moreOptions">
                    <button @click="changeRoute('/articles')">
                        <ion-icon :icon="codeOutline"></ion-icon>
                    </button>
                </div>
            </div>

            <div class="articles">
                <div class="article" :class="{ borderTop: index > 0}" v-for="(article, index) in data.articles" :key="index" @click="pushRoute(article.id)">
                    <div class="coverImage" v-if="isOdd(index) && article.data.featured_media.fearured" :style="{ 'background-image': `url(${article.data.featured_media.url })`}"></div>
                    <div class="information">
                        <h4 class="title">
                            {{ article.data.title }}
                        </h4>
                        <p>
                            {{ timeDist(article.data.created_at) }} |  <strong> {{ article.data.source.name }} </strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>


     </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonContent, IonPage, IonIcon} from '@ionic/vue';
import { defineComponent, reactive } from 'vue'
import { play, codeOutline } from 'ionicons/icons';
import { db } from '../database/firebase'
import { collection, query, orderBy, getDocs, limit, where } from "firebase/firestore";
import time_ago from '../helpers/time_ago'
import { useRouter } from 'vue-router';
export default defineComponent({
    components: { IonContent, IonPage, IonIcon},
    setup() {

        const videos = [
            {
                title: 'Why Private Billions Are Flowing Into Fusion',
                cover_image: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/2YMEK3KTLFJI5IXMABWUPQP4XE.jpg'
            },
            {
                title: 'Ciidanka DANAB oo howlgal kudilay Xubno katirsan Al-Shabaab',
                cover_image: 'https://static.dw.com/image/57331594_303.jpg'
            },
            {
                title: 'R/W Xamza qarka u saaran inuu ku adkaado qorshihiisa xukuumad kooban oo tayo leh',
                cover_image: 'https://www.caasimada.net/wp-content/uploads/2022/06/Xamza-Cabdi-Barre-2.jpeg'
            },
            {
                title: 'Why Private Billions Are Flowing Into Fusion',
                cover_image: 'https://i.ytimg.com/vi/Dp6W7g9no0w/maxresdefault.jpg'
            }
        ]

        // {
        //         title: 'R/W Xamza qarka u saaran inuu ku adkaado qorshihiisa xukuumad kooban oo tayo leh',
        //         cover_image: 'https://www.caasimada.net/wp-content/uploads/2022/06/Xamza-Cabdi-Barre-2.jpeg',
        //         time_ago: '4 minutes',
        //         source_name: 'Banadir'
        // }


        const data : any = reactive({
            articles: []
        })

        const router = useRouter()

        function truncateString(str: string, num: number) {
            if (str.length > num) {
                return str.slice(0, num) + "...";
            } else {
                return str;
            }
        }

        async function database() {
            const q = query(collection(db, "articles"), where("featured_media.fearured", "==", true),orderBy("created_at", "desc"), limit(12));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.articles.push({id: doc.id, data: doc.data()})
            })
        }

        database()

        function timeDist(time: string) {
            const timer = new Date(time).getTime()
            return time_ago(timer)
        }

        function changeRoute (val: string) {
            router.push({ path: val })
        }


        function pushRoute (uid: string) {
            router.push({ path: `/article/${uid}`})
        }


        function isOdd (number: number) {
            if(number % 2 == 0) {
                return false
            }
            else {
                return true
            }
        }

        return {
            play,
            videos,
            truncateString,
            codeOutline,
            data,
            isOdd,
            timeDist,
            pushRoute,
            changeRoute
        }
    },
})
</script>
<style scoped>
.article {
    cursor: pointer;
}
.borderTop {
    border-top: 1px solid #f1f1f1;
}

.article .coverImage {
    width: 100%;
    height: 250px;
    background: #000;
    background-size: cover;
    /* display: none; */
}

.article .information {
    width: 90%;
    margin: 0 auto;
}

.sectionHeader {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    margin-top: 30px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-top: 1px solid #f1f1f1;
}

.sectionHeader .header h5 {
    padding: 0;
    margin: 0;
}

.sectionHeader .header p {
    padding: 0;
    margin: 0;
}



.videosHeader {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    margin-top: 10px;
}

.videosHeader .header h5 {
    padding: 0;
    margin: 0;
}

.videosHeader .header p {
    padding: 0;
    margin: 0;
}

.moreOptions {
    margin-right: 10px;
    font-size: 1.4rem;
}
.moreOptions button {
    background: none;
}

.videos {
    display: flex;
    overflow-x: auto;
}

.videos::-webkit-scrollbar {
  display: none;
}
.video {
    margin: 4px;
    min-width: 200px;
    cursor: pointer;
}
.video  .videoCover {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: #000;
    border-radius: 3px;
    background-position: top center;
    background-size: cover;
}

.video .videoCover .playerBtn {
    color: white;
    font-size: 2.6rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.video .informatics {
    width: 100%;
}
</style>
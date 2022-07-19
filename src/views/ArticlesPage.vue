<template>
  <ion-page>
    <ion-content :fullscreen="true">
    <div class="header">
      <router-link to="/" class="backBtn"> <ion-icon :icon="chevronBackOutline"></ion-icon> <small>Home</small></router-link>
    </div>
    
      <div id="container">
        <div class="articles">

          <div class="article" v-for="(article, index) in data.articles" :key="index" @click="pushRoute(article.id)">

            <div class="featuredMedia" v-if="article.data.featured_media.fearured">
              <img :src="article.data.featured_media.url" /> 
            </div>

            <h1 v-html="article.data.title"></h1>
            <p>
              {{ timeDist(article.data.created_at) }} | {{ article.data.source.name }}

              <label class="badge rounded-pill text-bg-secondary" v-for="(tag, index) in article.data.tags" :key="index">
                {{ tag.name }} 
              </label>

              <label class="badge rounded-pill text-bg-secondary" v-for="(cat, index) in article.data.categories" :key="index">
                {{ cat.name }}
              </label>
            </p>

            <!-- <div class="content" v-html="removeScript(article.data.content)"></div> -->

            <div class="btn-icons">
              <button class="views">
                <ion-icon :icon="pulseOutline"></ion-icon> 
              </button> 
              <button class="comments">
                <ion-icon :icon="chatboxEllipsesOutline"></ion-icon>
              </button> 
              <button class="fav">
                <ion-icon :icon="heartOutline"></ion-icon>
              </button>
            </div>
          </div>

        </div>
        <!-- {{ data.articles }} -->
      </div>
    </ion-content>
  </ion-page>
</template>
<!-- <ion-icon name="pulse-outline"></ion-icon> -->
<script lang="ts">
import { IonContent, IonPage, IonIcon} from '@ionic/vue';
import { defineComponent, onMounted, reactive } from 'vue';
import { db } from '../database/firebase'
import { collection, query, orderBy, getDocs, limit } from "firebase/firestore";
import time_ago from '../helpers/time_ago'
import { heartOutline, chatboxEllipsesOutline, pulseOutline, chevronBackOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonIcon
  },
  setup () {

    const data: any = reactive({
      articles: []
    })

    const router = useRouter()

    function avatar (avatar: any) {
      if(avatar) {
        return true
      } else { return false }
    }
    
    function removeScript (txt: string) {
      const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
      const insRegex = /<ins\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/ins>/gi
      return txt.replace(scriptRegex, "").replace(insRegex, "")
    }

    async function database() {
      const q = query(collection(db, "articles"), orderBy("created_at", "desc"), limit(30));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.articles.push({id: doc.id, data: doc.data()})
      })
    }

    function timeDist(time: string) {
      const timer = new Date(time).getTime()
      return time_ago(timer)
    }


    function pushRoute (uid: string) {
      router.push({ path: `/article/${uid}`})
    }

    onMounted( () => {
      database()
    })
    

    return {
      data,
      timeDist,
      removeScript,
      avatar,
      heartOutline,
      chatboxEllipsesOutline,
      chevronBackOutline,
      pulseOutline,
      pushRoute
    }
  }
});
</script>

<style scoped>
.header {
  padding-top: 20px;
}
#container {
  width: 90%;
  margin: 0 auto;
}
#container img {
  margin: 0 auto;
  display: inline-block;
  width: 100%;
  height: auto;
  border-radius: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
}
video {
  width: 100%;
  height: auto;
}
figcaption {
  background: #f1f1f1;
}

.backBtn {
  font-size: 1.6rem;
  color: inherit;
}

.user .avatar {

  background: #f1f1f1;
  float: left;
  border-radius: 50px;
  background-position: top center;
  background-size: cover;
  margin-top: 6px;
}

.user .user_info {
  float: left;
  margin-left: 12px;
  padding-top: 5px;
}
.user .user_info h4 {
  padding: 0;
  margin: 0;
}
.user .user_info p {
  padding: 0;
  margin: 0;
}

.article {
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 20px;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  /* padding: 12px; */
}
.content h4 {
  font-weight: 400 !important;
}
.content strong {
  font-weight: 400 !important;
}

.featuredMedia img{
  border-radius: 5px !important;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.btn-icons {
  font-size: 1.5rem;
}

.btn-icons button {
  background: none;
}
</style>
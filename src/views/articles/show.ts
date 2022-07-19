import { IonContent, IonPage, IonIcon} from '@ionic/vue';
import { defineComponent, reactive } from 'vue';
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/database/firebase';
import { useRoute, useRouter } from 'vue-router';
import { textOutline, addOutline, removeOutline, chatboxEllipsesOutline, chevronBackOutline, bookmarkOutline, heartOutline } from 'ionicons/icons';
import time_ago from '../../helpers/time_ago'
import AllComments from '../../components/comments/AllComments.vue'

export default defineComponent({
  name: 'ShowPage',
  components: {
    IonContent,
    IonPage,
    IonIcon,
    AllComments
  },
  setup () {

    const article : any = reactive({ data: {}})
    const route = useRoute()
    const router = useRouter()
    const font : any = reactive({
        size: 1.1
    })

    const modelState =  reactive({
        isOpen: false
    })

    async function data () {
        const articleId = route.params.articleId
        const docRef = doc(db, "articles", `${articleId}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            article.data = docSnap.data()
            console.log(docSnap.data());
            
        } else {
            console.log("No such document!");
        }
    }

    data()

    function removeScript (txt: string) {
        const scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        const insRegex = /<ins\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/ins>/gi
        return txt?.replace(scriptRegex, "")?.replace(insRegex, "")
    }
    
    function isOpen () {
        modelState.isOpen = !modelState.isOpen
    }

    function add () {
        font.size = font.size + .1
    }

    function remove () {
        if(font.size < 1.1) {
            font.size = 1.10
        }

        font.size = font.size - .1
        
    }

    function timeDist(time: string) {
        const timer = new Date(time).getTime()
        return time_ago(timer)
    }

    function backBtn () {
        router.push('/articles')
        console.log("back Btn")
    }

    return {
        article,
        textOutline,
        addOutline,
        removeOutline,
        add,
        remove,
        font,
        timeDist,
        chatboxEllipsesOutline,
        chevronBackOutline,
        bookmarkOutline,
        heartOutline,
        backBtn,
        removeScript,
        isOpen,
        modelState
    }

  }

})

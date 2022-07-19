<template>
<div>
    <div class="btn-bottom">
        <button @click="setOpen()" >
            <ion-icon :icon="chatboxEllipsesOutline"></ion-icon>
        </button>
    </div>

    <ion-modal :is-open="isOpen">
      <ion-content class="ion-padding">
        <div class="headerSpace">
            <h4>
                Comments <label class="badge bg-primary"> 2 </label>
            </h4>
        </div>
        <button @click="setOpen()" class="closeBtn">
            <ion-icon :icon="closeOutline"></ion-icon>
        </button>

        <ion-list>
            <div class="comment">
                <ion-chip>
                    <ion-avatar>
                        <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg">
                    </ion-avatar>
                    <ion-label>Gen Bad meceeye</ion-label>
                </ion-chip>
                <label id="timeAgo"> 6 Minutes</label>
                <br />
                <br />
                <ion-item>
                    <p id="comment">
                        Booliska Soomaaliya ayaa mar kale faahfaahiyey qorshaha ka dambeeya in bandow lagu soo rogo socdaalka Mooto Bajaaj-ta, wixii ka dambeeya 12:00 AM saqda dhexe ee habeenkii...
                    </p>

                </ion-item>
                <div class="buttons">
                    <button class="fav"> <ion-icon :icon="heart"></ion-icon> </button>
                    <button class="dead"> <ion-icon :icon="skull"></ion-icon> </button>
                </div>

            </div>

            <div class="comment">
                <ion-chip>
                    <ion-avatar>
                        <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg">
                    </ion-avatar>
                    <ion-label>Salah Abdi Jr</ion-label>
                </ion-chip>
                <label id="timeAgo"> 4 Hours</label>
                <br />
                <br />
                <ion-item>
                    <p id="comment">
                        Madaxweynaha Jamhuuriyadda Federaalka Soomaaliya Mudane Xasan Sheekh Maxamuud ayaa inta uu ku sugan yahay Jabuuti waxa uu kulan la qaadan doonaa walaalkiis Madaxweyne Ismaaciil Cumar Geelle
                    </p>
                </ion-item>
                <div class="buttons">
                    <button class="fav"> <ion-icon :icon="heart"></ion-icon> </button>
                    <button class="dead"> <ion-icon :icon="skull"></ion-icon> </button>
                </div>
            </div>


        </ion-list>

      </ion-content>
    </ion-modal>
</div>
</template>
<script lang="ts">
  import { IonModal, IonContent, IonIcon, IonItem, IonList, IonLabel, IonAvatar, IonChip } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { chatboxEllipsesOutline, closeOutline, skull, heart } from 'ionicons/icons';

  export default defineComponent({
    components: { IonModal, IonContent, IonIcon, IonItem, IonList, IonLabel, IonAvatar, IonChip },
    setup (props) {

        const isOpen = ref(false)

        function setOpen () {
            isOpen.value = !isOpen.value
        }


        return {
            isOpen,
            setOpen,
            props,
            chatboxEllipsesOutline,
            closeOutline,
            skull,
            heart
        }


    }
  });
</script>
<style scoped>
.buttons .fav {
    color: #576574;
}

.buttons .dead {
    color: #576574;
}

ion-item {
    border-color: #5866751a;
}

ion-chip {
    background: white;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    margin-right: 10px;
}

#timeAgo {
    font-weight: 400;
    color: #222f3e
}

.buttons {
    width: 100%;
    padding-left: 20px;
}

.buttons button {
    padding: 6px;
    background: none;
    margin-right: 10px;
    font-size: 1.4rem;
}

.headerSpace {
    height: 50px;
    width: 100%;
}
.btn-bottom {
    padding-bottom: 120px;
}
.btn-bottom button {
    font-size: 1.6rem;
    padding: 10px;
    position: fixed;
    bottom: 2%;
    right: 6%;
    background: white;
    border-radius: 5px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
.closeBtn {
    background: white;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 12px;
    border-radius: 50px;
    font-size: 1.6rem;
    width: 50px;
    height: 50px;
    position: fixed;
    right: 12px;
    top: 10px;
}

.comment {
    margin-top: 20px;
}

#comment {
    color: #222f3e;
}
</style>
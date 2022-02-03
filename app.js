
import  { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';
const baseUrl = 'vue3-course-api.hexschool.io/';
const path = 'yunyi123';
const app = createApp({
    data(){
        return{
            user:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        login(){
            axios.post(`https://${baseUrl}v2/admin/signin`,this.user)
            .then(response => {   
                const { token,expired,uid } = response.data;
                document.cookie =  `myToken=${token}; expires=${new Date(expired)}; path=/`;

                window.location = 'week1.html';
            })
            .catch(error => {
                console.dir(error.data);
            });
        }
    }
});
app.mount('#app');


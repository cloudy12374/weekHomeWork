import  { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';


const app = createApp({
    data(){
        return{
            products : [],
            temp: {},
            baseUrl: 'vue3-course-api.hexschool.io/',
            path: 'yunyi123',
        }
    },
    methods: {
        renderItem(item){
            this.temp = {...item};
        },
        checkLogin(){
            axios.post(`https://${this.baseUrl}v2/api/user/check`)
            .then(response =>{
                return axios.get(`https://${this.baseUrl}v2/api/${this.path}/admin/products`)
            })
            .then(response =>{
                this.products = response.data.products;
                console.log(response.data);
            })
            .catch(error =>{
                alert(error.data.message);
                  // 失敗則重新導回登入頁面
                window.location='week2login.html';
            })
        },
        getProducts(){
            axios.get(`https://${this.baseUrl}v2/api/${this.path}/admin/products`)
            .then(response =>{
                console.log(response.data);
            })
            .catch(error =>{
                console.log(error.data);
            })
        }
    },
    created() {             
        // this.products = [...products];
        var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = myCookie;
        this.checkLogin();
    },
});

app.mount('#app');
const app=Vue.createApp({
    data(){
        return{
            firstName:'Nived',
            lastName:'Narayanan',
            age:21,
            email:"nived@gmail.com",
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    methods:{
        async getUser()
        {

            const res=await fetch('https://randomuser.me/api')
            const {results}=await res.json()
            console.log(results)

            this.firstName=results[0].name.first,
            this.lastName=results[0].name.last,
            this.age=results[0].dob.age,
            this.email=results[0].email,
            this.gender=results[0].gender,
            this.picture=results[0].picture.large
        },
    },
})

app.mount('#app')
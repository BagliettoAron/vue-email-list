
const app= new Vue({

    el:'#root',
    data: {
        newMail: [],  
    },
    
    created() {
        
        for (let i = 0; i < 10; i++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((resp) => {
                console.log(resp.data.response);
                this.newMail.push(resp.data.response);
            })
        }
        
    },
});





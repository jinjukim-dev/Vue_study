<template>
    <div><input type="text" v-model="userId" required/></div>
    <div><input type="password" v-model="userPassword" v-on:keypress="pressEnter($event)" required/></div>
    <div><button type="button" @click='loginSubmit'>LOG IN</button></div>
</template>

<script>
import adminList from '/json/admin.json';

export default{

    name: 'login',
    
    data(){
        return {
            adminInfo: [],
            userId: null,
            userPassword: null
        }
    },

    created() {
        this.adminInfo = this.admins();
    },

    methods: {
        admins(){
            return adminList.map((items =>{
                return items;
            }))
        },

        loginSubmit(){
            let saveData = {};
            saveData.userId = this.userId;
            saveData.userPassword = this.userPassword;

            let data = null;
            data = this.adminInfo;

            // adminInfo(admin.json)에서 해당 uuid가 존재하는지 찾기
            for(const key in data){
                let uuid = data[key].uuid;
                let password = data[key].password;

                // uuid 존재 o
                if(saveData.userId.indexOf(uuid) > -1){
                    //uuid의 password와 this.userPassword 비교
                    if(saveData.userPassword.indexOf(password) > -1){
                        // 로그인 성공 시 userInfo 페이지로 이동.
                        alert("로그인 되었습니다.");
                        this.$router.push('/userInfo');
                    }else{
                        alert("비밀번호 재입력해주세요.");
                        return;
                    }

                }
                
            }

        },

        pressEnter(event){
            if(event.key === "Enter"){
                this.loginSubmit();
            }
        }
    }

}

</script>
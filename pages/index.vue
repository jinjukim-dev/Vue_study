<template>
    <div>
        <div>
            console 창을 확인해보세요
        </div>
        <input type="text" v-model="nickname"/>
        <div>
            {{ nickname }}
        </div>
        <div v-if="nickname.length > 0 && nickname.length <= 10">
            {{ sentence }}
        </div>
        <div v-else-if="nickname.length > 10">
            별명은 10자 이하로 입력해주세요
        </div>
        <div v-else>
            입력창을 입력해보세요
        </div>
        <div>SUM : {{ sum(1, 2) }}</div>
        <div>FACTORIAL : {{ factorial(5) }}</div>
        <div>
            v-for
            <span v-for="item in numbers">{{ item }}&nbsp;</span>
        </div>
        <br>
        <div v-if="resultGender != null">
        5. 남성/여성 비율 계산 <br>
            {{ resultGender }}
        </div>
        <br>
        6. 나이대 계산
        <div v-if="resultAge != null">
            {{ resultAge }}
        </div>
        <br> 
        <GetDataList></GetDataList>

        <div v-if="resultState != null">
            7. 거주지(State)별 계산 <br>
            {{ resultState }}
        </div>
        <br>
        <table style="border: 1px solid">
            <thead>
                <tr style="border: 1px solid">
                    <th v-for="item in userInfoCol">{{ item }}</th>
                </tr>
            </thead>
            <tbody id = "getCreateTable" style="border: 3px solid">
            </tbody>
        </table>
    </div>
</template>

<script>

import { getData } from './api/axios';
import Vue from 'vue';


export default{

    data() {
        return {
            nickname: "",
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            userInfoCol:[],
            userInfo:[],
            resultGender: "",
            resultAge: "",
            resultState: ""
            
        }
    },


    mounted() {
        console.log("mounted")
    },
    created() {
        console.log("created")
        this.fetchData();
    },
    updated() {
        console.log("updated")
    },

    computed: {
        sentence() {
            return `당신의 별명은 ${this.nickname} 입니다.`
        }
    },
    methods: {
        sum(a, b) {
            return a + b;
        },
        factorial(n) {
            if (n > 1) {
                return n * this.factorial(n-1)
            }
            else return 1;
        },

        // 1. random-data-api.com/api/v2/users?size=10 호출
        fetchData() {

            getData()
            .then((response) => {
                console.log("fetchData")

                this.userInfoCol = Object.keys(response.data[0]);
                this.userInfo = response.data;

                // 테이블 생성
                this.createTable(this.userInfo);

                this.getGenderData(this.userInfo);

                this.getAge(this.userInfo);

                this.getState(this.userInfo);

            })
            .catch((err) => {
                console.log('데이터 불러오기 실패', err)
            })
        },

        // 5. 남성/여성 비율 계산
        getGenderData(data){
            
            const genderData = [];

            // gender 값 배열에 담기
            for(let i = 0; i < data.length; i++){
                genderData[i]=data[i].gender;
            }

            var reducer = genderData.reduce((acc, value, index) => {
                if(acc.hasOwnProperty(value)){
                    acc[value] = acc[value] + 1;
                }else {
                    acc[value] = 1;
                }
                return acc;
                
            }, []);

            var listName = 'getGender';
            this.getDataList(reducer, listName);

        },

        // 6. 나이대 계산
        getAge(data){

            const ageData = [];
            // 생년 월일 배열에 담기
            for(let i =0 ; i< data.length; i++){
            ageData[i] = data[i].date_of_birth;
            }

            let today = new Date();
            for(var i=0; i<ageData.length; i++){

                let birthday = new Date(ageData[i]);
                let age = today.getFullYear() - birthday.getFullYear();

                ageData[i] = Math.floor(age / 10);
            }

            var reducer = ageData.reduce((acc, value, index) => {
                if(acc.hasOwnProperty(value)){
                    acc[value] = acc[value] + 1;
                }else {
                    acc[value] = 1;
                }
                return acc;
                
            }, []);

            var listName = 'getAge';
            return this.getDataList(reducer, listName);

        },

        // 7. 거주지 (State) 별 인원 계산
        getState(data){

            const stateData = [];

            // 거주지 배열에 담기
            for(let i =0 ; i< data.length; i++){
            stateData[i] = data[i].address.state;
            }

            var reducer = stateData.reduce((acc, value, index) => {
                if(acc.hasOwnProperty(value)){
                    acc[value] = acc[value] + 1;
                }else {
                    acc[value] = 1;
                }
                
                return acc;
                
            }, []);

            var listName = 'getState';
            return this.getDataList(reducer, listName);

        },

        getDataList(reducer, listName){
      
                for(const key in reducer){
            
                    if(listName === 'getAge'){
            
                        this.resultAge += key + "0대 : " + reducer[key] +"명 ";
            
                    } else if (listName === 'getGender'){
            
                        reducer[key] = reducer[key] / 10 * 100;
                        this.resultGender += key + " : " + reducer[key] +"% "
                        
                        
                    } else if (listName === 'getState'){
                        this.resultState += key + " : " + reducer[key] +"명 "
                                               
                    }
                    
                }   
               
        },

        createTable(data){
            let data_value = null;
            let html = '';
            for(const key in data){

                data_value = Object.values(data[key]);
                
                html += '<tr>';
                for(const key in data_value){
                    if (key === '12') {
                        data_value[key] = data_value[key].title + " " + data_value[key].key_skill;
                    }
                    else if (key === '13'){
                        data_value[key] = data_value[key].country + " " + data_value[key].city + " " + data_value[key].street_name + " " + data_value[key].street_address + " " + data_value[key].zip_code;
                    }else if (key === '14'){
                        data_value[key] = data_value[key].cc_number;
                    }else if (key === '15'){
                        data_value[key] = data_value[key].plan + " " + data_value[key].status + " " + data_value[key].payment_method + " " + data_value[key].term;
                    }
                    
                    html += '<td>' + data_value[key] + '</td>';
                }
                html += '</tr>';
            }

            const getCreateTable = document.getElementById("getCreateTable");
            getCreateTable.innerHTML=html;
        }
    },
    watch: {
        nickname() {
            console.log("nickname updated")
        },
        sentence() {
            console.log("sentencce updated")
        }
    },
    unmounted() {
        console.log("unmounted")
    }
}
</script>
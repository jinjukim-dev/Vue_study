<template>

    <table width="100%" style="text-align:center; border:1px;">
        <tr>
            <td colspan="2" style="background-color:#FAF8F1;margin:4px;padding:4px;">
                <h2>회원정보 테이블</h2>
            </td>
        </tr>
        <tr>
            <td style="background-color:#FAF8F1; width:280px; text-align: left; vertical-align: top;"> 
                <!-- 좌측메뉴 -->
                <leftMenu></leftMenu>
            </td>
            <td style="background-color:#FAF8F1;height:60px;">
                <!-- 검색 창 -->
                <td style="text-align: left;">
                    <input type="text" v-model="searchWord" placeholder="검색어를 입력하세요." style="margin-right: 10px; width:250px; height:22px;"/>
                    <button type="button" @click='search'>검색</button>
                </td>
                <div></div>
                <!-- 회원정보 테이블 출력 -->
                <table style="border: 1px solid">
                    <thead>
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid" v-for="item in userInfoCol">{{ item }}</th>
                        </tr>
                        </thead>
                        <tbody style="border: 1px solid" v-html="tableHtml">
                        </tbody>
                </table>
            </td>
        </tr>
    </table>

</template>


<script>
    import leftMenu from './components/leftMenu.vue';
    import userDetail from './user_detail.vue';
    import userList from '/json/user.json';

    export default{

        name: 'userInfo',

        components: {
            leftMenu,
            userDetail,
        },

        data() {
            return {
                userInfoCol: [],
                userInfo: [],
                tableHtml: "",
                searchWord: null
            }
        },

        created() {
            this.userInfo = this.users();
            this.userInfoCol = Object.keys(this.userInfo[0]);

            //테이블 생성
            if(this.tableHtml === ''){
                this.createTable(this.userInfo);
            }
            
        },
        

        methods: {
            users(){
                return userList.map((items => {
                    return items;
                }))
            },

            createTable(data){
                this.tableHtml = '';
                let data_value = null;
                let data_keys = null;
                let html = '';
                let param = '';
                for(const key in data){

                    data_keys = Object.keys(data[key]);
                    data_value = Object.values(data[key]);
                    
                    html += '<tr style="border: 1px solid">';
                    for(const key in data_value){
                        
                        if(key === '1'){

                            for(const key in data_value){
                                param += data_keys[key] + '=';
                                param += data_value[key] + '&';
                            }

                            data_value[key] = '<a href="/user_detail?'+ param +'" tag="a">' + data_value[key] + '</a>';
                        }
                        
                        
                        if(key === '3'){
                            data_value[key] = '<input type="image" src='+data_value[key]+' width="150px">';
                        }

                        html += '<td style="border: 1px solid">' + data_value[key] + '</td>';

                        
                    }
                    param = '';

                    html += '</tr>';
                }
                
                this.tableHtml = html;
      
            },

            search(){
                 // 테이블 초기화
                this.tableHtml = '';
                let searchWord = this.searchWord;
                let searchData = [];
                let data = this.userInfo;
                var rowNum = 0;
                

                for(const num in data){

                    let data_value = Object.values(data[num]);
                    
                    for(const key in data_value){
                        if(data_value[key].indexOf(searchWord) > -1){
                            searchData[num] = data[num];
                            break;
                        }
                    }


                }

                // 검색 후 테이블 다시 그려주기
                this.createTable(searchData);
            }

        }
    }
</script>
<template>
    <h3>회원 상세정보</h3>
    <div>uuid : {{$route.query.uuid}}</div>
    <div>nickname : {{$route.query.nickname}}</div>
    <div>email : {{$route.query.email}}</div>
    <!-- <div>avatar <input type="image" src={{$route.query.avatar}} width="150px"></div> -->
    <div>avatar : {{$route.query.avatar}}</div>
    <div>password :  {{$route.query.password}}</div>
    <div>birthdate : {{$route.query.birthdate}}</div>
    <div>registerdAt : {{$route.query.registeredAt}}</div>

</template>
<script>
    
    export default{
        
    }
</script>
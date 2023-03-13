<template>
    <!-- 좌측 메뉴 -->
    <div>
        <router-link tag="a" to="/userInfo">회원정보</router-link>
    </div>
    <div>
        <router-link tag="a" to="/productInfo">상품정보</router-link>
    </div>
    <div>
        <router-link tag="a" to="/login">로그아웃</router-link>
    </div>
</template>

<style>
    a {
        text-decoration: none;
        font-size: 18px;
    }

    div {
        margin-bottom: 10px;
    }
</style>

<script>
    
</script>
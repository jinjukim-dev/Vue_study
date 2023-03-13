<template>
    <h3>상품 상세정보</h3>
    <div>uuid :  {{$route.query.uuid}}</div>
    <div>productName : {{$route.query.productName}}</div>
    <div>image : {{$route.query.image}}</div>
    <div>price : {{$route.query.price}}</div>
    <div>description : {{$route.query.description}}</div>
    <div>registeredAt : {{$route.query.registeredAt}}</div>
</template>
<script>
    
    export default{
        
    }
</script>
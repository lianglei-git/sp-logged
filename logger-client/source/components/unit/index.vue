<template>
    <div ref="container" v-for="(info) in infos" :key="info.ip" class="unit">
        <h1>{{info.port || '主进程'}}</h1>
        <Item :info="info"></Item>
    </div>
</template>
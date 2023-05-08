<template>
    <div>
    <!-- <div ref="container" v-for="(info) in infos" :key="info.ip" class="unit">
        <h1>{{info.port || '主进程'}}</h1>
        <Item :info="info"></Item>
    </div> -->
    <div >
        <sp-collapse active-index="0" accordion='true'>
            <sp-collapse-panel ref="container" v-for="(info,idx) in infos" :key="info.id" :index="idx" :title="info.id ">
                <div class="unit" :id="info.id">
                    <Item :info="info"></Item>
                </div>
            </sp-collapse-panel>
        </sp-collapse>
    </div>
    </div>

    
</template>
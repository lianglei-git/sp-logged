<template>
    <div v-for="(item, number) in info.lines" :key="item.label" class="unit-item">
        <div class="line-overlays">{{number}} &nbsp</div>
        <pre class="view-line" v-html="item.label"></pre>
    </div>
</template>

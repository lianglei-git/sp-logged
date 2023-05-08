/** fristDesign.less */
import { defineComponent, onUpdated, ref } from 'vue';

const template = `
<div class="design1_0">
<div class="dir">
    <div class="logo">🐲 Splogged</div>
    <div class="checkedFunc">
        <ul>
            <li v-for="item in checkeds" :key="item">{{item}}</li>
        </ul>
    </div>
</div>
</div>


`

export default defineComponent({
    template,
    setup() {
        const checkeds = [
            'Dashborad',
            'Monitors',
            'Status Page',
            'Log Count',
            'Settings'
        ]
        return {
            checkeds
        }
    }
})
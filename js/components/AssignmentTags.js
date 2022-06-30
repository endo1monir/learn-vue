export default {
    template: `
    <button v-for="tag in alltags" @click="$emit('update:modelValue',tag)" 
    class="border rounded px-1 py-px text-xs"
    :class="{'border-blue-500 text-blue-500':tag==modelValue}"
    >{{tag}}</button>`,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        tags: Array,
        modelValue: String
    },
    computed: {
        alltags() {
            // return ['math', 'science', 'deutch']
            return ['all', ...new Set(this.tags)];
            // return this.assignments.map(function(a) {
            //     return a.tag;
            // });
        }
    }

}
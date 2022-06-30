export default {
    template: `<button type = ""
    :class = "{
        'border rounded px-5 py-2 disabled:cursor-not-allowed':true,
        'bg-gray-200':btn_type==='gray',
        'bg-blue-200':btn_type==='primary',
        'bg-purple-200':btn_type==='secondry',
        'is-loading':processing,
    }":disabled="processing" @click="toggle" > <slot/> </button>`,
    props: {
        btn_type: {
            type: String,
            default: "primary"
        },
        processing: {
            type: String,
            default: "true"
        }
    },
    data() {
        return {
            // processing: false
        }
    },
    methods: {
        toggle() {
            // this.processing = !this.processing
        }
    }
}
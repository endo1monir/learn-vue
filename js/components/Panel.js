export default {
    template: `
    <div 
    :class="{'bg-gray-700 p-4 border border-gray-600 rounded-lg text-white':theme=='dark',
'bg-white-700 p-4 border border-gray-600 rounded-lg text-black':theme==light}">
    <h2 class="font-bold" v-if="$slots.heading"><slot name="heading"/></h2>
    <slot/>
    <footer v-if="$slots.footer">
    <slot name="footer" />
    </footer>
    </div>
    `,
    props: {
        theme: {
            type: String,
            default: "dark"
        },
        heading: String
    }
}
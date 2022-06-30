export default {
    template: `<li>
    {{ assignment.name }}
    <input type="checkbox" v-model="assignment.complete" name="" id="" />
</li>`,
    props: {
        assignment: Object
    }
}
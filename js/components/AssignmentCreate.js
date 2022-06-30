export default {
    template: `<form @submit.prevent="add">
    <div class="border border-gray-600 text-black">
    <input v-model="newAssignment" placeholder="new assignment...." class="p-2">
    <input type="submit" class="bg-white p-2 border-l" value="Add">
    </div>
    </form>`,
    // props: {
    //     assignments: Array
    // },
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('addx', this.newAssignment)
            this.newAssignment = '';
            // this.assignments.push({
            //     name: this.newAssignment,
            //     complete: false,
            //     id: this.assignments.length + 1
            // });
        }
    }
}
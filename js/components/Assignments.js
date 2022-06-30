import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
    <section class="flex gap-8">
     <assignment-list :assignments="filters.inProgress" title="In completed Assignments">
     <assignment-create @addx="add"></assignment-create>
     </assignment-list>   
    <assignment-list :assignments="filters.completed" title="Completed Assignments" v-if="showCompleted" @toggle="showCompleted=false" :canToggle="true"></assignment-list>
    
    </section>
<!--<section class="mt-8" v-show="completedAssignments.length">
    <h2>Completed Assignments</h2>
    <ul>
        <li v-for="assignment in assignments.filter(a=>a.complete)" :key="assignment.id">
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.complete" name="" id="" />
        </li>
    </ul>
</section>-->
`,
    data() {
        return {
            assignments: [],
            showCompleted: true

        };
    },
    computed: {
        completedAssignments() {
            return this.assignments.filter(a => a.complete);
        },
        inCompletedAssignments() {
            return this.assignments.filter(a => !a.complete);
        },
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        },

    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => this.assignments = assignments)
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
            // this.assignments.push({
            //     name: this.newAssignment,
            //     complete: false,
            //     id: this.assignments.length + 1
            // });
            // this.newAssignment = '';
        }
    }
}
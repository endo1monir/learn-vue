import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
export default {
    components: { Assignment, AssignmentTags },
    template: `
    <section v-show="assignments.length">
    <div class="flex justify-between items-start">
    <h2>{{ title }}
    <span>({{ assignments.length }})</span>
    </h2>
    <!--<button v-show="canToggle" @click="show=false">&times</button>-->
    <button v-show="canToggle" @click="$emit('toggle')">&times</button>
    </div>
    <div class="flex gap-2">
    <!--<assignment-tags :tags="assignments.map(a=>a.tag)" @change="currentTag=$event" /> -->
    <assignment-tags :tags="assignments.map(a=>a.tag)" v-model="currentTag" />
    </div>
    <ul>

    <assignment v-for="assignment in filterdAssignments" :key="assignment.id" :assignment="assignment" ></assignment>
    <!--  <li v-for="assignment in assignments" :key="assignment.id">
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.complete" name="" id="" />
        </li> -->
    </ul>
    <slot></slot>
</section>
`,
    props: {
        assignments: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentTag: 'all',
            show: true
        }
    },
    computed: {
        filterdAssignments() {
            if (this.currentTag == 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag == this.currentTag)
        },
        tags() {
            // return ['math', 'science', 'deutch']
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
            // return this.assignments.map(function(a) {
            //     return a.tag;
            // });
        }
    }
}
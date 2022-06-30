import Assigments from "./Assignments.js";
import Panel from "./Panel.js"
export default {
    components: { Assigments, Panel },
    template: `
    <div class="grid gap-6">
    <assigments></assigments>
  <panel theme="dark">
  <template v-slot:heading>
  Hi I'am Heading
  </template>
  <template v-slot:default>
  THats the content
  </template>
  <template v-slot:footer>
  my footer
  </template>
  </panel>
  <panel theme="light">
  <template v-slot:heading>
  Hi I'am Heading
  </template>
  <template v-slot:default>
  THats the content
  </template>
  <template v-slot:footer>
  my footer
  </template>
  </panel>
    </div>
    `,
}
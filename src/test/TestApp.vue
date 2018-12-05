<template>
    <div id="app">
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
            </li>
        </ul>

        <b-card header="Todo List" :no-block="tasksExist">
            <b-list-group v-if="tasksExist">
                <b-list-group-item v-for="task in tasks" :key="task.id">
                    <task :item="task" @customClick="moveToDoingList"></task>
                </b-list-group-item>
            </b-list-group>
            <h5 v-else @click="addTodoList">해야할 일이 없습니다.</h5>
        </b-card>
    </div>
</template>

<script>
import Task from "./task.vue";

export default {
    name: "app",
    components: {
        Task
    },
    data() {
        return {
            msg: "start app",
            tasks: [
                { work: "my", id: 1 },
                { work: "work", id: 2 },
                { work: "is", id: 3 }
            ]
        };
    },
    computed: {
        tasksExist() {
            return this.tasks && this.tasks.length > 0;
        }
    },
    methods: {
        addTodoList() {
            this.tasks.push({ work: "new", id: this.tasks.length + 1 });
            alert("추가!");
        },
        moveToDoingList(id) {
            console.log(id);
        }
    }
};
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

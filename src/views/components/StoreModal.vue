<template>
    <div id="wrapper">
        <modal :close="hideModal">
            <template slot="header">
                <h4 class="modal-title">Modal Title</h4>
                <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="hideModal"
                >
                    <md-icon>clear</md-icon>
                </md-button>
            </template>

            <template slot="body">
                <md-content class="md-scrollbar scroll_modal">
                    <md-card class="md-card-nav-tabs">
                        <md-card-content>슬롯 한개
                            <br>
                            <md-button
                                @click="$router.push('/')"
                                class="md-simple md-success md-lg"
                            >나는 모달이다 다시한번 따라해바 나는 모달이다. {{$route.params.id}}</md-button>
                        </md-card-content>
                    </md-card>
                    <p v-for="i in Array(25)" :key="i">스크롤 테스트용</p>
                </md-content>
            </template>

            <template slot="footer">
                <md-button class="md-simple">Nice Button</md-button>
                <md-button class="md-danger md-simple" @click="hideModal">Close</md-button>
            </template>
        </modal>
    </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
    components: {
        Modal
    },
    methods: {
        hideModal() {
            this.$router.push("/");
        }
    }
};
</script>

<style lang="scss">
.scroll_modal {
    max-height: calc(100vh - 300px);
    overflow-y: auto;
}
</style>

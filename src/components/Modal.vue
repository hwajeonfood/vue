<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" @click-outside="closeModal">
                    <div class="modal-header">
                        <slot name="header"></slot>
                    </div>

                    <div class="modal-body text-center">
                        <slot name="body"></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "modal",
    methods: {
        closeModal() {
            this.$emit("close");
        }
    },
    mounted() {
        let el = document.body;
        let className = "scroll-lock";
        if (!this.hasClass(el, className)) {
            this.addClass(el, className);
        }
    },
    destroyed() {
        let el = document.body;
        let className = "scroll-lock";
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
    }
};
</script>

<style lang="scss">
.scroll-lock {
    overflow-y: hidden;
}
</style>


<style lang="scss" scoped>
* {
    z-index: 6;
}

.modal-container {
    max-width: calc(85vw);
}

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>

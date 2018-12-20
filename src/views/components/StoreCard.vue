<template>
    <div>
        <md-card class="md-card-example">
            <md-card-area md-inset>
                <md-card-media md-ratio="16:9">
                    <img :src="content.thumbnail" alt="Coffee House">
                </md-card-media>

                <md-card-header>
                    <h2 class="md-title">{{content.store_name}}</h2>
                    <div class="md-subhead">
                        <md-icon>location_on</md-icon>
                        <span>{{content.location}}</span>
                    </div>
                </md-card-header>

                <md-card-content>{{content.description}}</md-card-content>
            </md-card-area>

            <md-card-actions>
                <md-button
                    @click="$emit('clickButton', content.id)"
                    class="md-primary md-round classic-modal"
                >
                    <md-tooltip
                        md-direction="top"
                        class="fit-content"
                    >{{$t('store-card.modal-open-button-description')}}</md-tooltip>
                    {{$t("store-card.modal-open-button")}}
                </md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
export default {
    props: ["content"]
};
</script>

<style lang="scss" scoped>
#app {
    min-width: 10rem;
    max-width: 20rem;
    padding: 10px;
    margin: 5px;
}

.fit-content {
    width: 300px;
}

.md-card-header {
    margin: 0px;
    padding: 5% 5% 0% 5%;
    background-color: #fff;
    box-shadow: none;
    text-align: center;
}

.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}

.md-card-example {
    .md-subhead {
        .md-icon {
            $size: 16px;

            width: $size;
            min-width: $size;
            height: $size;
            font-size: $size !important;
        }

        span {
            vertical-align: middle;
        }
    }

    .card-reservation {
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .md-icon {
            margin: 8px;
        }
    }

    .md-button-group {
        display: flex;

        .md-button {
            min-width: 60px;
            border-radius: 2px;
        }
    }
}
</style>

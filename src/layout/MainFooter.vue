<template>
    <footer
        class="footer"
        :class="{[`footer-${type}`]: type}"
        :data-background-color="backgroundColor"
    >
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="https://github.com/hwajeonfood/vue">
                            <md-icon>location_city</md-icon>Github page
                        </a>
                    </li>
                    <li>
                        <a href="http://kau.ac.kr">
                            <md-icon>school</md-icon>Where we are in
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hwajeonfood/vue/blob/master/LICENSE">
                            <md-icon>copyright</md-icon>License
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                MIT, &copy; {{year}}, made with
                <md-icon>favorite</md-icon>by
                <a href="https://github.com/hwajeonfood/" target="_blank">Hwajeon Food</a>,
                <br>and you can see our containing 3rd party library from
                <a
                    href="https://github.com/hwajeonfood/vue/blob/master/NOTICE.md"
                    target="_blank"
                >this link</a>.
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    props: {
        backgroundColor: String,
        type: String
    },
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>
<style>
</style>

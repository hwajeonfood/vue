const NavbarStore = {
    showNavbar: false
};

export default {
    data() {
        return {
            NavbarStore,
            navigatorStore: {
                locale: 'ko'
            }
        };
    },
    methods: {
        addClass(el, className) {
            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += " " + className;
            }
        },
        removeClass(el, className) {
            if (el.classList) el.classList.remove(className);
            else
                el.className = el.className.replace(
                    new RegExp(
                        "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
                        "gi"
                    ),
                    " "
                );
        },
        hasClass(el, className) {
            if (el.classList)
                return el.classList.contains(className);
            else
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }
}
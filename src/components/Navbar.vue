<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item home" to="/">
                Sneaker
            </router-link>

            <a @click="toggleBurger()" role="button" class="navbar-burger" :class="{'is-active': isActive}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" :class="{'is-active': isActive}">
            <div class="navbar-start">
            
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="navbar-item">
                        <router-link to="/" class="has-text-white link">SNEAKERS</router-link>
                    </div>
                    <div class="navbar-item">
                        <router-link to="/tshirt" class="has-text-white link">TSHIRT</router-link>
                    </div>
                    <div class="navbar-item">
                        <router-link to="/gloves" class="has-text-white link">GLOVES</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        toggleBurger() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Mono&family=Roboto:wght@100;300;400&family=Rokkitt:wght@100;300;400&display=swap');
    
    .home {
        font-size: 20px;
        font-family: 'Righteous', monospace;
        color: white !important;
        margin-left: 20px;
    }

    .home:hover {
        color: white !important;
    }

    .link {
        font-family: 'Roboto', monospace;
        font-size: 12px;
        margin: 15px;
    }

    nav {
        margin-left: 5%;
        margin-right: 5%;
        background: rgba(0, 0, 0, 0);
    }


    .is-active {
        background: rgba(0, 0, 0, 0);
    }

    .navbar-burger {
        color: white;
    }
</style>
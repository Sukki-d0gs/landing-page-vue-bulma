<template>
    <div class="content">
        <div class="img">
            <img class="image" src="../assets/sneakers-image.png" alt="Sneakers image">
        </div>
        <div class="description">
            <h1>Sneakers are here</h1>
            <p>The new way for your feet to breathe...</p>
            <div class="btn">
                <button>Learn more</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@100;300;400&family=Rokkitt:wght@100;300;400&display=swap');

.content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 0;
    margin-left: 5%;
    margin-right: 5%;
    height: 90vh;

    .img {
        margin-left: 30px;
        height: 524px;
        width: 540px;
    }

    .description {

        h1 {
            font-family: 'Rokkitt', monospace;
            font-weight: 400;
            font-size: 4em;
            color: white;
            margin-bottom: 0;
        }
        p {
            font-style: italic;
            font-family: 'Roboto', monospace;
            font-size: 22px;
            color: white;
            margin-bottom: 50px;
        }

        button {
            font-family: 'Roboto Mono', monospace;
            color: #fff;
            border: none;
            background: #323232;
            width: 136px;
            height: 50px;
            cursor: pointer;
        }
    }
}

@media (max-width: 700px) {
    .content {
        display: flex;
        justify-content: center;
        height: 100vh;

        .description { 
            h1, p, button {
                text-align: center;
            }
            
            h1 {
                font-size: 3em;
            }
             
            p {
                font-size: 18px;
                margin-bottom: 3%;
            }
            
            .btn {
                display: flex;
                justify-content: center;
            }
        }
    }
}

</style>
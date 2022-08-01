<script lang="ts">

</script>

<div class="root">
    <div class="wrapper">
        <ul class="wrapper">
            <li><a href="./calculator">calcultor</a></li>
            <li><a href="./0720">Bar Graph as SCSS</a></li>
            <li><a href="./0727">Practice for SVG</a></li>
            <li><a href="./BarGraphSVG">Bar Graph as SVG</a></li>
        </ul>
    </div>
</div>

<style lang="scss">
    .root {
        display: flex;
        width: 100%;
        position: relative;
        .wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            ul {
                width: 100%;
                padding-inline-start: 0;
                list-style-type: none;
                li {
                    padding: 0 24px;
                    line-height: 56px;
                    height: 56px;
                    background-color: #0088FF;
                    border-radius: 16px;
                    margin-bottom: 16px;
                    text-align: center;
                    a {
                        text-decoration: none;
                        color: white;
                        font-weight: 700;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
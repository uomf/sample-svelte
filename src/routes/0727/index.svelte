<script lang="ts">

</script>


    <svg class="root">
        <rect x="100" y="100" width="50" height="50" />
        <circle cx="200" cy="200" r="50"/>
    </svg>

<style lang="scss">
    .root {
        width: 100%;
        height: 100%;
        display: block;
        height: 400px;
    }
    rect {
        fill: red;
    }
    circle {
        fill: none;
        stroke: #f0f;
        stroke-dasharray: 3, 3;
        stroke-width: 8px;
        stroke-dashoffset: 3;
        animation: anim 10s;

        @keyframes anim {
            from {
                stroke-dashoffset: 1;
            }
            to {
                stroke-dashoffset: 100;
            }
        }
    }
</style>
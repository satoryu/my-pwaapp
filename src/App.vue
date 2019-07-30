<template>
    <div>
        <h1>{{ greeting }} {{ name }}!</h1>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            greeting: 'Hello,',
            name: 'Vue Component'
        }
    }
}
</script>

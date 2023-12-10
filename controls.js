export default {
    jump: new KeyboardEvent('keydowmn', {key: 'Space', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event]);
    }
}

function getCompoent() {
    import('lodash').then(({ default: _ ,VERSION: v}) => {
        const element = document.createElement('div');

        element.innerHTML = _.join(['Hello','webpack'],'')
        return element;
    })
}

getCompoent().then((e)=>{
    document.body.appendChild(e)
})


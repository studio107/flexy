import $ from 'jquery'

$(document).on('click', '.b-flash', e => {
    e.preventDefault()

    let $target = $(e.target)
    $target.fadeOut(300, () => {
        $target.remove()
    })
})

import $ from 'jquery'

$(document)
    .on('click', '.b-dropdown__toggle', e => {
        let $target = $(e.target),
            $menu = $target
                .closest('.b-dropdown')
                .children('.b-dropdown__menu'),
            openCls = 'b-dropdown__menu_open'

        if ($menu.hasClass(openCls)) {
            $menu.removeClass(openCls)
        } else {
            $('.b-dropdown__menu').removeClass('b-dropdown__menu_open')
            $menu.addClass(openCls)
        }
    })
    .on('click', e => {
        let $target = $(e.target)
        if ($target.closest('.b-dropdown').length > 0) {
            return e
        }

        $('.b-dropdown__menu').removeClass('b-dropdown__menu_open')
    })

import $ from 'jquery'

$(document).on('click', '.b-tab__tab', e => {
    let $target = $(e.target),
        $container = $target.closest('.b-tab'),
        $tabs = $container.find('.b-tab__tab'),
        $content = $container.find('.b-tab__content'),
        $currentTab = $target.closest('.b-tab__tab'),
        id = $currentTab.attr('data-tab')

    if ($currentTab.hasClass('b-tab__tab_disabled')) {
        return
    }

    $tabs.removeClass('b-tab__tab_active')
    $content.removeClass('b-tab__content_active')
    $container
        .find('.b-tab__content[data-tab="' + id + '"]')
        .addClass('b-tab__content_active')

    $currentTab.addClass('b-tab__tab_active')
})

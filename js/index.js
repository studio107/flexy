import $ from 'jquery';
import 'magnific-popup';
import _ from 'underscore';

$(document)
    .on('click', '[data-modal]', e => {
        e.preventDefault();

        let $target = $(e.target),
            html = $($target.attr('href')).wrap('<div/>').parent().html();

        $('.b-source__content').html(_.escape(html));

        $.magnificPopup.open({
            items: {
                src: $('.b-source'),
                type: 'inline'
            },
            delegate: 'a',
            removalDelay: 0,
            midClick: false
        }, 0);
    });

$(document)
    .on('click', '.b-tab__tab', e => {
        let $target = $(e.target),
            $container = $target.closest('.b-tab'),
            $tabs = $container.find('.b-tab__tab'),
            $content = $container.find('.b-tab__content'),
            $currentTab = $target.closest('.b-tab__tab'),
            id = $currentTab.attr('data-tab');

        if ($currentTab.hasClass('b-tab__tab_disabled')) {
            return;
        }

        $tabs.removeClass('b-tab__tab_active');
        $content.removeClass('b-tab__content_active');
        $container
            .find('.b-tab__content[data-tab="' + id + '"]')
            .addClass('b-tab__content_active');

        $currentTab.addClass('b-tab__tab_active');
    });
jQuery(function($) {
    $.fn.zoomInstagramWidget = function () {
        return $(this).each(function () {
            var $this = $(this);
            var $list = $this.find('.zoom-instagram-widget__items');


            var minItemsPerRow = $list.data('images-per-row');
            var desiredItemWidth = $list.data('image-width');
            var itemSpacing = 10;

            var fitPerRow;
            var itemWidth;

            if ($this.width() / desiredItemWidth < minItemsPerRow) {
                fitPerRow = minItemsPerRow;
                itemWidth = Math.floor(($this.width() - 1 - (minItemsPerRow - 1) * itemSpacing) / minItemsPerRow);
            } else {
                fitPerRow = Math.floor(($this.width() - 1) / desiredItemWidth);
                itemWidth = Math.floor(($this.width() - 1 - (fitPerRow - 1) * itemSpacing) / fitPerRow);
            }

            $this.find('li').each(function(i) {
                if ( ++i % Math.floor(fitPerRow) == 0 ) {
                    $(this).css('margin-right', '0');
                } else {
                    $(this).css('margin-right', '');
                }
            });

            $this.find('img').width(itemWidth);
        });
    };

    $(window).on('resize', function() {
        $('.zoom-instagram-widget').zoomInstagramWidget();
    });

    $('.zoom-instagram-widget').zoomInstagramWidget();
});

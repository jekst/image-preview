/**
 * 图片预览插件
 */
(function ($) {
    $.fn.imagePreview = function (option) {
        var defaultOption = {
            multiple: false,
            previewSelector: '.j-image-preview'
        };
        option = $.extend(defaultOption, option);
        var $preview = $(option.previewSelector);
        this.change(function () {
            var fileName = $(this).val();
            if (!fileName.match(/.jpg|.gif|.png|.bmp/i)) {
                console.log('图片格式错误');
                return false;
            }
            var file = this.files[0],
                URL = window.URL || window.webkitURL;
            if (window.FileReader) {
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    $preview.attr('src', reader.result);
                }, false);
                if (file) {
                    reader.readAsDataURL(file);
                }
            }
            else if (URL) {
                var objectUrl = URL.createObjectURL(this.files[0]);
                $preview.attr('src', objectUrl);
                $preview.get(0).onload = function () {
                    URL.revokeObjectURL(objectUrl);
                };
            }
            else {
                //IE下，使用滤镜
                this.select();
                this.blur();
                var imgSrc = document.selection.createRange().text;
                //图片异常的捕捉，防止用户修改后缀来伪造图片
                try {
                    $preview.css('filter', "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=" + imgSrc + ")");
                } catch (e) {
                    console.log('图片格式错误');
                    return false;
                }
                document.selection.empty();
            }
        });
        return this;
    };
})(jQuery);
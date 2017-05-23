## Description
Simple plugin of JQuery to preview image.

## Install

In a browser:

    <script src="yourpath/jquery.min.js"></script>
    <script src="yourpath/jquery.image-preview.js"></script>    
    
## Usage

HTML:
    
     <img id="imgPreview" src=" default.jpg" width="280" height="180">
     <input class="file-choose" id="img" name="img" type="file" accept="image/png, image/jpeg,image/jpg">

Javascript:

     $('#img').imagePreview({previewSelector: '#imgPreview'});
     
## License

MIT

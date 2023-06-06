
var _usfGridItemClasses = function (index, p) {
    var productsPerRow = window._usfGlobalSettings['productsPerRow']
    var classes = { 'product': true }
    var productClass = 'product-' + p.id
    if (index == 0) classes['first'] = true;
    if (index % 4 == 0) classes['flush'] = true;
    classes[productClass] = true;
    if (window._usfGlobalSettings['enable_product_details_overlay']) classes['product-card-alt'] = true
    return classes
}

function _getEmptyIMG() {
    var x = [
        '<svg class="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M375.5 345.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0-1.1-2.9-2.3-5.5-3.4-7.8-1.4-4.7-2.4-13.8-.5-19.8 3.4-10.6 3.6-40.6 1.2-54.5-2.3-14-12.3-29.8-18.5-36.9-5.3-6.2-12.8-14.9-15.4-17.9 8.6-5.6 13.3-13.3 14-23 0-.3 0-.6.1-.8.4-4.1-.6-9.9-3.9-13.5-2.1-2.3-4.8-3.5-8-3.5h-54.9c-.8-7.1-3-13-5.2-17.5-6.8-13.9-12.5-16.5-21.2-16.5h-.7c-8.7 0-14.4 2.5-21.2 16.5-2.2 4.5-4.4 10.4-5.2 17.5h-48.5c-3.2 0-5.9 1.2-8 3.5-3.2 3.6-4.3 9.3-3.9 13.5 0 .2 0 .5.1.8.7 9.8 5.4 17.4 14 23-2.6 3.1-10.1 11.7-15.4 17.9-6.1 7.2-16.1 22.9-18.5 36.9-2.2 13.3-1.2 47.4 1 54.9 1.1 3.8 1.4 14.5-.2 19.4-1.2 2.4-2.3 5-3.4 7.9-4.4 11.6-6.2 26.3-5 32.6 1.8 9.9 16.5 14.4 29.4 14.4h176.8c12.9 0 27.6-4.5 29.4-14.4 1.2-6.5-.5-21.1-5-32.7zm-97.7-178c.3-3.2.8-10.6-.2-18 2.4 4.3 5 10.5 5.9 18h-5.7zm-36.3-17.9c-1 7.4-.5 14.8-.2 18h-5.7c.9-7.5 3.5-13.7 5.9-18zm4.5-6.9c0-.1.1-.2.1-.4 4.4-5.3 8.4-5.8 13.1-5.8h.7c4.7 0 8.7.6 13.1 5.8 0 .1 0 .2.1.4 3.2 8.9 2.2 21.2 1.8 25h-30.7c-.4-3.8-1.3-16.1 1.8-25zm-70.7 42.5c0-.3 0-.6-.1-.9-.3-3.4.5-8.4 3.1-11.3 1-1.1 2.1-1.7 3.4-2.1l-.6.6c-2.8 3.1-3.7 8.1-3.3 11.6 0 .2 0 .5.1.8.3 3.5.9 11.7 10.6 18.8.3.2.8.2 1-.2.2-.3.2-.8-.2-1-9.2-6.7-9.8-14.4-10-17.7 0-.3 0-.6-.1-.8-.3-3.2.5-7.7 3-10.5.8-.8 1.7-1.5 2.6-1.9h155.7c1 .4 1.9 1.1 2.6 1.9 2.5 2.8 3.3 7.3 3 10.5 0 .2 0 .5-.1.8-.3 3.6-1 13.1-13.8 20.1-.3.2-.5.6-.3 1 .1.2.4.4.6.4.1 0 .2 0 .3-.1 13.5-7.5 14.3-17.5 14.6-21.3 0-.3 0-.5.1-.8.4-3.5-.5-8.5-3.3-11.6l-.6-.6c1.3.4 2.5 1.1 3.4 2.1 2.6 2.9 3.5 7.9 3.1 11.3 0 .3 0 .6-.1.9-1.5 20.9-23.6 31.4-65.5 31.4h-43.8c-41.8 0-63.9-10.5-65.4-31.4zm91 89.1h-7c0-1.5 0-3-.1-4.2-.2-12.5-2.2-31.1-2.7-35.1h3.6c.8 0 1.4-.6 1.4-1.4v-14.1h2.4v14.1c0 .8.6 1.4 1.4 1.4h3.7c-.4 3.9-2.4 22.6-2.7 35.1v4.2zm65.3 11.9h-16.8c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h16.8v2.8h-62.2c0-.9-.1-1.9-.1-2.8h33.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-33.9c-.1-3.2-.1-6.3-.1-9h62.5v9zm-12.5 24.4h-6.3l.2-1.6h5.9l.2 1.6zm-5.8-4.5l1.6-12.3h2l1.6 12.3h-5.2zm-57-19.9h-62.4v-9h62.5c0 2.7 0 5.8-.1 9zm-62.4 1.4h62.4c0 .9-.1 1.8-.1 2.8H194v-2.8zm65.2 0h7.3c0 .9.1 1.8.1 2.8H259c.1-.9.1-1.8.1-2.8zm7.2-1.4h-7.2c.1-3.2.1-6.3.1-9h7c0 2.7 0 5.8.1 9zm-7.7-66.7v6.8h-9v-6.8h9zm-8.9 8.3h9v.7h-9v-.7zm0 2.1h9v2.3h-9v-2.3zm26-1.4h-9v-.7h9v.7zm-9 3.7v-2.3h9v2.3h-9zm9-5.9h-9v-6.8h9v6.8zm-119.3 91.1c-2.1-7.1-3-40.9-.9-53.6 2.2-13.5 11.9-28.6 17.8-35.6 5.6-6.5 13.5-15.7 15.7-18.3 11.4 6.4 28.7 9.6 51.8 9.6h6v14.1c0 .8.6 1.4 1.4 1.4h5.4c.3 3.1 2.4 22.4 2.7 35.1 0 1.2.1 2.6.1 4.2h-63.9c-.8 0-1.4.6-1.4 1.4v16.1c0 .8.6 1.4 1.4 1.4H256c-.8 11.8-2.8 24.7-8 33.3-2.6 4.4-4.9 8.5-6.9 12.2-.4.7-.1 1.6.6 1.9.2.1.4.2.6.2.5 0 1-.3 1.3-.8 1.9-3.7 4.2-7.7 6.8-12.1 5.4-9.1 7.6-22.5 8.4-34.7h7.8c.7 11.2 2.6 23.5 7.1 32.4.2.5.8.8 1.3.8.2 0 .4 0 .6-.2.7-.4 1-1.2.6-1.9-4.3-8.5-6.1-20.3-6.8-31.1H312l-2.4 18.6c-.1.4.1.8.3 1.1.3.3.7.5 1.1.5h9.6c.4 0 .8-.2 1.1-.5.3-.3.4-.7.3-1.1l-2.4-18.6H333c.8 0 1.4-.6 1.4-1.4v-16.1c0-.8-.6-1.4-1.4-1.4h-63.9c0-1.5 0-2.9.1-4.2.2-12.7 2.3-32 2.7-35.1h5.2c.8 0 1.4-.6 1.4-1.4v-14.1h6.2c23.1 0 40.4-3.2 51.8-9.6 2.3 2.6 10.1 11.8 15.7 18.3 5.9 6.9 15.6 22.1 17.8 35.6 2.2 13.4 2 43.2-1.1 53.1-1.2 3.9-1.4 8.7-1 13-1.7-2.8-2.9-4.4-3-4.6-.2-.3-.6-.5-.9-.6h-.5c-.2 0-.4.1-.5.2-.6.5-.8 1.4-.3 2 0 0 .2.3.5.8 1.4 2.1 5.6 8.4 8.9 16.7h-42.9v-43.8c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v44.9c0 .1-.1.2-.1.3 0 .1 0 .2.1.3v9c-1.1 2-3.9 3.7-10.5 3.7h-7.5c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h7.5c5 0 8.5-.9 10.5-2.8-.1 3.1-1.5 6.5-10.5 6.5H210.4c-9 0-10.5-3.4-10.5-6.5 2 1.9 5.5 2.8 10.5 2.8h67.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-67.4c-6.7 0-9.4-1.7-10.5-3.7v-54.5c0-.8-.6-1.4-1.4-1.4s-1.4.6-1.4 1.4v43.8h-43.6c4.2-10.2 9.4-17.4 9.5-17.5.5-.6.3-1.5-.3-2s-1.5-.3-2 .3c-.1.2-1.4 2-3.2 5 .1-4.9-.4-10.2-1.1-12.8zm221.4 60.2c-1.5 8.3-14.9 12-26.6 12H174.4c-11.8 0-25.1-3.8-26.6-12-1-5.7.6-19.3 4.6-30.2H197v9.8c0 6.4 4.5 9.7 13.4 9.7h105.4c8.9 0 13.4-3.3 13.4-9.7v-9.8h44c4 10.9 5.6 24.5 4.6 30.2z"></path><path d="M286.1 359.3c0 .4.3.7.7.7h14.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-14.7c-.3 0-.7.3-.7.7zm5.3-145.6c13.5-.5 24.7-2.3 33.5-5.3.4-.1.6-.5.4-.9-.1-.4-.5-.6-.9-.4-8.6 3-19.7 4.7-33 5.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7zm-11.3.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H242c-19.9 0-35.3-2.5-45.9-7.4-.4-.2-.8 0-.9.3-.2.4 0 .8.3.9 10.8 5 26.4 7.5 46.5 7.5h38.1zm-7.2 116.9c.4.1.9.1 1.4.1 1.7 0 3.4-.7 4.7-1.9 1.4-1.4 1.9-3.2 1.5-5-.2-.8-.9-1.2-1.7-1.1-.8.2-1.2.9-1.1 1.7.3 1.2-.4 2-.7 2.4-.9.9-2.2 1.3-3.4 1-.8-.2-1.5.3-1.7 1.1s.2 1.5 1 1.7z"></path><path d="M275.5 331.6c-.8 0-1.4.6-1.5 1.4 0 .8.6 1.4 1.4 1.5h.3c3.6 0 7-2.8 7.7-6.3.2-.8-.4-1.5-1.1-1.7-.8-.2-1.5.4-1.7 1.1-.4 2.3-2.8 4.2-5.1 4zm5.4 1.6c-.6.5-.6 1.4-.1 2 1.1 1.3 2.5 2.2 4.2 2.8.2.1.3.1.5.1.6 0 1.1-.3 1.3-.9.3-.7-.1-1.6-.8-1.8-1.2-.5-2.2-1.2-3-2.1-.6-.6-1.5-.6-2.1-.1zm-38.2 12.7c.5 0 .9 0 1.4-.1.8-.2 1.3-.9 1.1-1.7-.2-.8-.9-1.3-1.7-1.1-1.2.3-2.5-.1-3.4-1-.4-.4-1-1.2-.8-2.4.2-.8-.3-1.5-1.1-1.7-.8-.2-1.5.3-1.7 1.1-.4 1.8.1 3.7 1.5 5 1.2 1.2 2.9 1.9 4.7 1.9z"></path><path d="M241.2 349.6h.3c.8 0 1.4-.7 1.4-1.5s-.7-1.4-1.5-1.4c-2.3.1-4.6-1.7-5.1-4-.2-.8-.9-1.3-1.7-1.1-.8.2-1.3.9-1.1 1.7.7 3.5 4.1 6.3 7.7 6.3zm-9.7 3.6c.2 0 .3 0 .5-.1 1.6-.6 3-1.6 4.2-2.8.5-.6.5-1.5-.1-2s-1.5-.5-2 .1c-.8.9-1.8 1.6-3 2.1-.7.3-1.1 1.1-.8 1.8 0 .6.6.9 1.2.9z"></path></svg>',
        '<svg class="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M401.7 288.4c-.7-.5-1.6-.5-2.4 0l-.3-.7c-2.6-5.8-7.1-10.1-12.8-12.2l-77.8-31.8-7.1-3.9 1.3-1.7c.2-.3.2-.8-.1-1-.3-.2-.8-.2-1 .1l-1.4 1.9-12-6.6.4-4.5c.1-.8-.5-1.5-1.3-1.5-.8-.1-1.5.5-1.5 1.3l-.1.9-1.4 1.7-13.4-7.4.4-4.3c.1-.8-.5-1.5-1.3-1.6-.8-.1-1.5.5-1.6 1.3l-.1 1-1.2 1.6-13.3-7.3.5-4.4c.1-.8-.5-1.5-1.2-1.6-.8-.1-1.5.5-1.6 1.2l-.4 3.2-17.7-9.8c-5.3-3.1-11.6-3.1-16.5.1-4.6 3-7 8.2-6.3 13.7l1.3 12.6c-8.3 6.5-17.7 10.1-27.2 10.1-8.8 0-17-2.3-24.5-6.7-5.9-3.5-11.1-8.2-15.4-14-2-2.6-5.1-4.9-7.7-4.3-.8.2-2.2.9-2.6 3.2v78l-3.7-.3c-2.5-.2-4.7 1.7-5.3 4.7l-2.3 15.5c-.4 2.2 0 4.4 1.3 6.1.9 1.2 2.2 2 3.7 2.1 19.4 1.2 58.1 2.5 101 2.5 32.5 0 67.4-.8 98.2-3 38.9-2.8 62.8-11.8 73.1-27.4.7-1.1 1.4-2.2 2-3.3.4-1.3.2-2.8-.7-3.5zm-94.5-42.2l.1.1 22 9c-12.2 2.2-24.9.5-36.1-4.9l6.4-8.3 7.6 4.1zm-8.8-4.8l-6.5 8.4-1.5-.7c-.7-.3-1.6-.1-1.9.6-.3.7-.1 1.6.6 1.9l.9.5-2.6 3.3c-.5-.3-1-.5-1.5-.6l1.8-19.2 10.7 5.8zm-12.7 16.3s.1 0 0 0zm-3.2-25.1l-7.2 9-2.7-1.3c-.7-.3-1.6-.1-1.9.6-.3.7-.1 1.6.6 1.9l2.1 1-3.6 4.5c-.5-.3-1-.5-1.5-.7l2.2-21.6 12 6.6zm-14.5 18c.1 0 .1 0 0 0zm-2.6-27.4l-7.4 9.9-2.5-1.2c-.7-.3-1.6-.1-1.9.6-.3.7-.1 1.6.6 1.9l2.1 1-4.3 5.8-1.2-.6 2.8-24 11.8 6.6zm-52-7.4c-.6-4.5 1.3-8.6 5-11 3.7-2.4 8.4-2.6 12.4-.6l-.3.6c-.2.4-.4.9-.6 1.3-.1.3-.3.5-.4.8-2.4 4.8-5.4 9.3-8.8 13.4-2 2.4-4.1 4.5-6.3 6.4l-1-10.9zm-76.1 2.3v-.5c.1-.4.2-.9.5-.9.8-.2 2.9.8 4.7 3.2 4.5 6.1 10 11 16.2 14.7 7.9 4.7 16.7 7.1 26 7.1 14 0 27.6-7 38.3-19.7 3.6-4.3 6.7-8.9 9.2-14 .1-.2.2-.4.3-.7.2-.5.5-1 .7-1.4.1-.1.1-.3.2-.4l17.4 9.6-2.9 25c-4.2.1-7.5 3.5-7.5 7.7 0 .8.1 1.6.4 2.4.2.7 1.1 1.1 1.8.9.7-.2 1.1-1.1.9-1.8-.2-.5-.2-1-.2-1.5 0-2.5 1.9-4.5 4.3-4.8l-.4 3.7c-.1.8.5 1.5 1.2 1.6h.2c.7 0 1.3-.5 1.4-1.3l.1-1 1.3-1.7c.9.9 1.5 2.1 1.5 3.5 0 2.7-2.2 4.8-4.8 4.8-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4 4.2 0 7.7-3.4 7.7-7.7 0-2.3-1-4.4-2.7-5.8l4.5-6 5.8 2.9c.2.1.4.1.6.1.5 0 1-.3 1.3-.8.3-.7.1-1.6-.6-1.9l-5.3-2.6 7.4-9.9 1.1.6-2.3 22.8c-4 .2-7.2 3.6-7.2 7.7 0 .6.1 1.2.2 1.7.2.8.9 1.2 1.7 1.1.8-.2 1.2-.9 1.1-1.7-.1-.4-.1-.7-.1-1.1 0-2.4 1.8-4.4 4.1-4.8l-.4 3.7c-.1.8.5 1.5 1.3 1.6h.1c.7 0 1.3-.5 1.4-1.3l.1-.9 1.5-1.9c.9.9 1.5 2.1 1.5 3.5 0 2.7-2.2 4.8-4.8 4.8-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c4.2 0 7.7-3.4 7.7-7.7 0-2.3-1-4.3-2.6-5.8l3.7-4.7 5.9 2.9c.2.1.4.1.6.1.5 0 1-.3 1.3-.8.3-.7.1-1.6-.6-1.9l-5.3-2.6 7.1-9 1.4.8-1.9 20.4c-3.9.3-7 3.6-7 7.6 0 .8.1 1.6.4 2.3.2.7 1 1.2 1.8.9.7-.2 1.2-1 .9-1.8-.1-.5-.2-1-.2-1.5 0-2.4 1.7-4.3 3.9-4.7l-.4 3.7c-.1.8.5 1.5 1.3 1.5h.1c.7 0 1.3-.6 1.4-1.3l.1-.9 1.5-2c1 .9 1.7 2.2 1.7 3.6 0 2.7-2.2 4.8-4.8 4.8-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4c4.2 0 7.7-3.4 7.7-7.7 0-2.4-1.1-4.5-2.8-5.9l2.7-3.5c8.6 4.2 17.9 6.3 27.4 6.3 4.8 0 9.5-.5 14.2-1.6.2-.1.4-.2.6-.4l51.6 21.1c4.2 1.5 7.6 4.5 10 8.4-2.5 2-10.2 7.5-24 11.9-.4.1-.6.5-.5.9.1.3.4.5.7.5h.2c13.8-4.4 21.4-9.8 24.2-12 .2.3.4.7.5 1l.6 1.4c-.6.4-1.2.9-1.8 1.3-30.8 22.3-83 18.6-133.5 14.9l-46.9-4.2c0-1.1-.1-2.2-.1-3.3 10 1.1 66 6.9 103.8 7.3.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-38.1-.5-94.7-6.4-103.9-7.3-1.4-14.1-7.8-29.6-14-38.7 14.6-3.2 28.2-11.3 38.4-23l5.4-6.2 1.2.6c.7.3 1.6.1 1.9-.6.3-.7.1-1.6-.6-1.9l-2.2-1.1c-.6-.3-1.3-.1-1.7.3l-6.1 7c-12.4 14.2-29.9 22.8-47.9 23.6-1 0-2 .1-3 .1-19.4 0-38.4-7.6-48.7-19.5v-19.8c-.2.7-.2.7-.2.6zm0 24.2c11.1 11.1 29.8 18.1 48.7 18.1 1.1 0 2.1 0 3.1-.1l3.9-.3c2.1 2.9 4.3 6.5 6.2 10.5.1.3.4.4.6.4.1 0 .2 0 .3-.1.4-.2.5-.6.3-.9-1.8-3.7-3.8-7.2-5.9-10.1 1-.1 2-.3 3-.5 0 .1.1.2.1.3 6.8 9.5 13.9 27.4 14.2 42.3l-3-.3v-.2c-.2-7.1-2.1-15.7-5.3-24.3-.1-.4-.6-.5-.9-.4-.4.1-.5.6-.4.9 3.2 8.4 5.1 16.8 5.2 23.8l-70.3-6.4v-52.7zm260.6 51.2c-9.8 14.9-33 23.5-70.9 26.2-71.5 5.1-164.8 2.5-198.8.5-.7 0-1.3-.5-1.6-.9-.7-1-1-2.4-.7-3.8l2.3-15.5c.3-1.4 1.2-2.3 2.2-2.3h.1L258 309.1l3.5.3c2 .1 4 .3 6 .4.6 0 1.2.1 1.8.1 2.2.2 4.3.3 6.5.5h.1c2.1.1 4.2.3 6.3.4.5 0 1.1.1 1.6.1 2.1.1 4.3.3 6.4.4l6.3.3c.5 0 1 0 1.6.1 4.2.2 8.4.3 12.6.4h1.5c2.1 0 4.1.1 6.2.1h6.8c1.2 0 2.4-.1 3.6-.1.6 0 1.2 0 1.8-.1 1.2 0 2.4-.1 3.6-.2.5 0 1.1-.1 1.6-.1 1.7-.1 3.3-.2 4.9-.3h.1c1.7-.1 3.3-.3 4.9-.5.5-.1 1-.1 1.5-.2 1.1-.1 2.3-.3 3.4-.4.6-.1 1.1-.2 1.7-.2 1.1-.2 2.2-.3 3.3-.5.5-.1 1-.2 1.5-.2 1.5-.3 3-.5 4.5-.9h.1c1.5-.3 3-.7 4.5-1 .5-.1.9-.2 1.4-.4 1-.3 2-.5 3-.8.5-.1 1-.3 1.5-.5 1-.3 2-.6 2.9-.9.4-.1.9-.3 1.3-.5 1.4-.5 2.7-1 4-1.5h.1c1.3-.5 2.6-1.1 3.9-1.7l1.2-.6c.9-.4 1.8-.9 2.7-1.3.4-.2.9-.5 1.3-.7.9-.5 1.7-1 2.5-1.5.4-.2.8-.5 1.1-.7 1.2-.8 2.4-1.5 3.5-2.3.4-.3.8-.6 1.3-.9.1-.1.2-.1.2-.2.1 0 0 .3-.2.5z"></path><path d="M192.5 315.8c-2.7-.1-5.3-.1-7.8-.2-.4 0-.7.3-.7.7 0 .4.3.7.7.7 2.6.1 5.2.1 7.8.2.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7z"></path><path d="M227.2 312.5c-25.2-2.1-60.2-5.1-83.3-7.7-2.8-.3-5.4 1.7-5.8 4.5-.2 1.5.2 3 1.1 4.2.9 1.2 2.3 1.9 3.8 1.9 6.2.3 19 .9 34.5 1.4.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-15.5-.5-28.2-1.1-34.5-1.4-1.1-.1-2.1-.6-2.8-1.4-.7-.9-1-2-.8-3.1.3-2.1 2.2-3.5 4.3-3.3 23.2 2.6 58.1 5.6 83.4 7.7.4 0 .7-.3.8-.6 0-.5-.3-.8-.7-.8zm32.5 2.6s-10.3-.8-25.4-2c-.3 0-.7.3-.8.6 0 .4.3.7.6.8 15.1 1.2 25.4 2 25.4 2h.1c.4 0 .7-.3.7-.7.1-.3-.2-.7-.6-.7zm69.1-8.8c10.3-.2 20.1-1.2 29.1-3 .4-.1.6-.5.6-.8-.1-.4-.5-.6-.8-.6-8.9 1.8-18.6 2.8-28.8 3-.4 0-.7.3-.7.7-.1.4.2.7.6.7z"></path></svg>',
        '<svg class="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M381.3 247.3c.3-1.2 1.2-3.4 3.4-4.2l2.5-.9c.5-.2.8-.5.9-1l3.8-16.2c.1-.4 0-.8-.2-1.1-.2-.3-.6-.5-1-.6-61.1-8.3-93.8-.3-113.3 4.6-6.4 1.6-11.1 2.7-14.6 2.7s-8.2-1.1-14.6-2.7c-19.5-4.8-52.2-12.9-113.3-4.6-.4.1-.8.3-1 .6-.2.3-.3.7-.2 1.1l3.8 16.2c.1.5.5.9.9 1l2.5.9c2.2.8 3.1 3 3.4 4.2.4 1.4.7 3 1.1 4.6 1.8 7.6 4 17 7.9 25.9-7.6 8.2-13.4 15.3-16.2 18.9-.5.7-.8 1.5-.7 2.4.1.8.5 1.5 1 2 .5.7 1.9 2.6 4.6 3.4 2.4.7 4.6 1 6.6 1 7.8 0 13.4-4.7 17.5-9.4 6.7 5.9 15.6 9.7 27.8 9.7 43.9 0 52.1-24.5 57.5-40.7 3.3-9.8 5.4-15.3 11.4-15.3 6.1 0 8.3 5.6 11.6 15.4 5.4 16.1 13.5 40.6 57.4 40.6 12.4 0 21.4-4 28.2-10.1 4.2 4.8 9.8 9.8 17.8 9.8 2 0 4.2-.3 6.6-1.1 2.6-.8 4.1-2.7 4.6-3.4.6-.5.9-1.2 1-2 .1-.9-.1-1.7-.7-2.4-2.9-3.7-8.9-11-16.7-19.4 3.8-8.7 6-18 7.7-25.4.3-1.5.7-3 1-4.5zm-238.6 54.5c-2.1-.6-3.1-2.3-3.1-2.3-.1-.2-.2-.3-.4-.4-.1-.1-.1-.2-.1-.2 0-.1 0-.2.1-.3 2.7-3.4 8.2-10.1 15.3-17.9 2.5 4.9 5.5 9.6 9.4 13.5-6.9 7.9-13.1 10.1-21.2 7.6zm244.3-3.3c.1.1.1.2.1.3 0 .1 0 .2-.1.2l-.4.4s-1 1.7-3.1 2.3c-8.2 2.5-14.5.2-21.6-8 3.9-4 6.9-8.7 9.3-13.7 7.4 8.1 13 15 15.8 18.5zm-9.5-47.2c-4.8 20.6-12.1 51.7-45.8 51.7-41.8 0-49.2-22.3-54.7-38.6-3.1-9.3-5.8-17.4-14.3-17.4-8.3 0-11 8-14.1 17.3-5.5 16.3-12.9 38.7-54.8 38.7-33.7 0-41-31.1-45.8-51.7-.4-1.7-.8-3.2-1.1-4.7-.8-3.1-2.6-5.3-5.2-6.2l-1.7-.6-3.2-14c59.5-7.9 91.5 0 110.7 4.7 6.6 1.6 11.4 2.8 15.3 2.8s8.7-1.2 15.3-2.8c19.2-4.7 51.2-12.6 110.7-4.7l-3.2 14-1.7.6c-2.5.9-4.4 3.2-5.2 6.2-.5 1.5-.8 3.1-1.2 4.7z"></path><path d="M383.9 232c0-4.1-13.7-4.1-13.7 0 0 2 3.4 3.1 6.8 3.1 3.5 0 6.9-1 6.9-3.1zm-6.8 1.7c-3.4 0-5.4-1.1-5.4-1.7s2.1-1.7 5.4-1.7c3.4 0 5.4 1.1 5.4 1.7s-2.1 1.7-5.4 1.7zM141.8 232c0 2 3.4 3.1 6.8 3.1s6.8-1.1 6.8-3.1c.1-4-13.6-4-13.6 0zm6.8 1.7c-3.4 0-5.4-1.1-5.4-1.7s2.1-1.7 5.4-1.7 5.4 1.1 5.4 1.7-2 1.7-5.4 1.7zM356 227.6c-7.9-2-36.2-7.4-68 5.5-5.7 2.3-9.4 8-9.1 14.1.9 22.6 7 52.6 48.7 52.6 12.9 0 23.1-3.8 30.2-11.4 11.3-12.1 12.7-30.8 11.8-44.5-.6-7.9-6-14.4-13.6-16.3zm-67.5 6.8c15.7-6.4 30.5-8.2 42.4-8.2 11.9 0 20.8 1.8 24.7 2.8 5.3 1.3 9.4 5.1 11.4 10h-.1c-.1 0-14.3 1.7-36.4 3.5-9 .7-20.2 1.6-32.9 2.2h-.8c-.1 0-.2 0-.3.1-5 .3-10.2.5-15.6.7-.2 0-.3.1-.5.1.4-5.1 3.5-9.4 8.1-11.2zm39.1 64c-39.9 0-46.2-28.5-47.2-50.4.2.1.3.1.5.1 5.8-.2 11.4-.4 16.7-.7 28.4.1 40.9 18.3 51.9 34.4 1.6 2.4 3.2 4.7 4.8 6.9.2.2.4.4.7.5-6.8 6.1-15.9 9.2-27.4 9.2zm29.2-11.1c0-.1-.1-.3-.2-.4-1.6-2.2-3.1-4.4-4.7-6.8-8.8-12.9-19.4-28.3-39.2-33.7 6.5-.4 12.4-.9 17.6-1.3 10.4 5.8 21.4 14.7 33.6 27.3.3.3.6.4 1 .4h.1c-1.8 5.4-4.4 10.4-8.2 14.5zm9-17c-11-11.2-21.1-19.6-30.6-25.5 19.5-1.6 31.9-3.1 32-3.1.2 0 .4-.1.5-.2.2.8.3 1.6.3 2.5.5 6.7.5 16.7-2.2 26.3zM238 233c-31.7-12.9-60-7.5-68-5.5-7.6 1.9-13.1 8.5-13.6 16.4-.9 13.6.5 32.4 11.8 44.5 7.1 7.6 17.3 11.4 30.2 11.4 41.7 0 47.8-30 48.7-52.6.3-6.2-3.4-11.8-9.1-14.2zm-67.6-4.1c7.7-1.9 34.9-7.2 65.7 4.9-8 .9-14.7 1.5-22.6 2.2-5.5.5-11.6 2.6-18.3 6.3-21.8-1.7-35.8-3.4-36-3.4h-.3c2.1-4.9 6.2-8.6 11.5-10zM157.9 244c.1-.9.2-1.8.4-2.6.2.2.4.3.7.3.1 0 12.5 1.5 32 3.1-9.6 6-19.7 14.4-30.7 25.7-2.8-9.7-2.8-19.8-2.4-26.5zm40.5 54.4c-11.5 0-20.6-3.1-27.4-9.2.3-.1.6-.2.8-.5 1.5-2.1 3-4.2 4.6-6.5 11.4-16.5 24.3-35.1 55.1-34 5.1.2 8.8.3 13.6.3.2 0 .3 0 .4-.1-.9 21.9-7.3 50-47.1 50zm46.8-52.7c-4.8 0-8.4-.1-13.5-.3-32.4-1.3-46.4 19-57.6 35.2-1.6 2.3-3 4.4-4.5 6.4-.1.2-.2.3-.2.5-3.9-4.2-6.5-9.2-8.3-14.5h.3c.4 0 .7-.1 1-.4 12.3-12.6 23.4-21.6 34-27.5 6.5-3.6 12.4-5.7 17.6-6.2 8.5-.7 15.7-1.5 24.7-2.4.5-.1 1-.4 1.2-.9 3.5 2.3 5.7 6.1 6 10.2-.4-.1-.5-.1-.7-.1z"></path></svg>',
        '<svg class="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5"><path d="M271.9 192.7c-.5-3.8-3.7-6.1-8.6-6.1-4.9 0-8 2.3-8.6 6.1-66.9 5.7-76 78.9-77.2 102-.1 2 .8 3.7 2.5 4.8 1.1.7 2.3.9 3.5.7v29.4c0 2.8 1.4 5.5 3.7 7.1 2.3 1.6 5.1 2 7.8 1.1 6-2.1 12.1-5.7 18.6-9.4 13.3-7.8 28.4-16.5 48.9-16.5 21.2 0 34.9 8.5 47 16 7.3 4.5 14.2 8.8 21.9 10.7.7.2 1.4.2 2 .2 1.9 0 3.7-.6 5.2-1.8 2.1-1.7 3.4-4.2 3.4-6.9v-29.9c.2 0 .5.1.7.1.9 0 1.9-.3 2.8-.8 1.7-1 2.6-2.8 2.5-4.8-1.2-23-10.2-96.1-76.1-102zm-8.6-3c1.8 0 4.7.4 5.5 2.8-1.8-.1-3.6-.2-5.5-.2h-.1c-1.8 0-3.6.1-5.4.2.8-2.4 3.7-2.8 5.5-2.8zM339 330.1c0 1.8-.8 3.4-2.2 4.5-1.4 1.1-3.1 1.4-4.7 1-7.2-1.8-13.9-5.9-21-10.3-12.5-7.7-26.6-16.4-48.6-16.4-21.3 0-36.7 9-50.4 16.9-6.3 3.7-12.3 7.2-18.1 9.2-1.7.6-3.5.3-5-.7-1.5-1.1-2.4-2.8-2.4-4.7v-29.9c0-.2-.1-.5-.2-.7 10.6-5.8 34.1-15 76.4-15 42.3 0 65.7 9.1 76.4 15-.1.2-.2.4-.2.7v30.4zm4.9-33.1c-.7.4-1.6.5-2.3 0-2.3-1.3-5.4-2.9-9.2-4.4.6-2.3 1.1-4.7 1.6-7.1.1-.4-.2-.8-.6-.9-.4-.1-.8.2-.9.6-.4 2.3-.9 4.6-1.5 6.8-13.3-5.3-35.1-10.9-68.3-10.9-33.2 0-55 5.6-68.2 10.9-.6-2.6-1.2-5.2-1.7-7.8-.1-.4-.5-.7-.9-.6-.4.1-.7.5-.6.9.5 2.7 1.1 5.5 1.8 8.1-3.8 1.6-6.8 3.1-9.2 4.5-.7.4-1.6.4-2.3 0-.7-.4-1.1-1.2-1.1-2 .5-9.1 2.2-26.3 8.4-43.8-.1 3.7-.1 7.5 0 11.2 0 .4.3.7.8.7.4 0 .7-.4.7-.8-.2-5.3-.1-10.6.2-15.8.6-1.5 1.2-2.9 1.8-4.4-.9 9.5-1.5 26.8 2.5 46 .1.4.4.6.7.6h.2c.4-.1.7-.5.6-.9-4.8-22.5-3-42.4-2-49.9 11.3-22.5 31.6-42.4 68-42.6v83c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-83h1.5v4.4c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-4.4c33.8 1.3 53 20.5 63.9 42.1 1 7.1 2.9 27.4-2 50.4-.1.4.2.8.6.9h.2c.3 0 .7-.2.7-.6 4.2-19.5 3.5-37.1 2.5-46.5.7 1.5 1.3 2.9 1.9 4.4.3 4.7.4 9.5.3 14.3 0 .4.3.8.7.8.4 0 .7-.3.8-.7.1-3.3 0-6.5-.1-9.7 6.2 17.6 7.9 34.9 8.4 44.1 0 .8-.4 1.6-1.1 2.1z"></path><path d="M295.5 203.8c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4.1-1.8 4.1-4.1c0-2.2-1.9-4.1-4.1-4.1zm0 6.7c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6s2.6 1.2 2.6 2.6c0 1.4-1.2 2.6-2.6 2.6zm-64.4-6.7c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4.1-1.8 4.1-4.1c0-2.2-1.8-4.1-4.1-4.1zm0 6.7c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6s2.6 1.2 2.6 2.6c0 1.4-1.2 2.6-2.6 2.6zm105.3 90.7c-.4 0-.8.3-.8.8v24.8c0 1.6-.8 3-2.1 3.9-1.3.9-2.9 1-4.3.4-2.2-.9-4.6-2.1-7.2-3.6-.4-.2-.8-.1-1 .3-.2.4-.1.8.3 1 2.7 1.5 5.1 2.7 7.4 3.7.8.3 1.6.5 2.3.5 1.2 0 2.3-.3 3.4-1 1.7-1.1 2.8-3.1 2.8-5.1v-24.8c-.1-.6-.4-.9-.8-.9zm-19.8 23c-1-.6-2-1.2-3-1.9-2.5-1.5-5.1-3.1-7.8-4.7-.4-.2-.8-.1-1 .3-.2.4-.1.8.3 1 2.7 1.5 5.3 3.1 7.8 4.7 1 .6 2 1.2 3 1.9.1.1.3.1.4.1.3 0 .5-.1.6-.4.2-.3.1-.8-.3-1zm-14.6-8.6c-9.1-4.9-21.9-10.5-39.9-10.5-22.3 0-38.6 9.4-53.1 17.6-4.4 2.5-8.5 4.9-12.5 6.8-1.4.7-3.1.6-4.4-.2-1.4-.9-2.2-2.3-2.2-3.9v-23.5c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v23.5c0 2.1 1.1 4.1 2.9 5.2 1 .6 2.1.9 3.2.9.9 0 1.8-.2 2.6-.6 4.1-2 8.2-4.3 12.6-6.9 14.3-8.2 30.4-17.4 52.3-17.4 17.7 0 30.3 5.5 39.2 10.3.4.2.8.1 1-.3.4-.3.3-.8-.1-1z"></path><path d="M192.7 309.8c.4 0 .8-.3.8-.8v-9.1c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v9.1c0 .4.4.8.8.8zm1.1 14.8c.6.4 1.4.6 2.1.6.6 0 1.1-.1 1.7-.4 3-1.4 5.9-3 8.6-4.4.4-.2.5-.7.3-1-.2-.4-.7-.5-1-.3-2.7 1.5-5.7 3-8.6 4.4-.8.4-1.6.3-2.3-.1-.7-.5-1.1-1.2-1.1-2.1v-7.7c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v7.7c0 1.3.7 2.6 1.9 3.3zm15.8-6.1c.1 0 .2 0 .4-.1 2.4-1.3 4.8-2.6 7.3-3.9.4-.2.5-.6.3-1s-.6-.5-1-.3c-2.5 1.3-5 2.6-7.3 3.9-.4.2-.5.7-.3 1 0 .2.3.4.6.4zm12.4-6.4c9.7-4.6 23-10 40.2-10 23.1 0 38 8.6 51.1 16.2 5 2.9 9.8 5.6 14.7 7.7.5.2 1 .3 1.6.3.8 0 1.5-.2 2.2-.7 1.1-.7 1.8-2 1.8-3.3v-22.5c0-.4-.3-.8-.8-.8s-.8.3-.8.8v22.5c0 .8-.4 1.6-1.1 2-.7.5-1.6.5-2.3.2-4.8-2.1-9.5-4.8-14.5-7.7-13.3-7.7-28.4-16.4-51.9-16.4-17.5 0-31 5.4-40.8 10.1-.4.2-.5.6-.4 1 .2.6.7.8 1 .6zm44.3-107.8c-.4 0-.8.3-.8.8v23.7c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-23.7c0-.5-.4-.8-.8-.8zm-6 61c-.4 0-.8.3-.8.8v8.9c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-9c-.1-.4-.4-.7-.8-.7zm0-21.5c-.4 0-.8.3-.8.8v15.3c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-15.3c-.1-.4-.4-.8-.8-.8zm75.3 23c-.4 0-.8.3-.8.7-.3 3.8-.7 7.6-1.2 11.4-.1.4.2.8.6.9h.1c.4 0 .7-.3.7-.6.5-3.8 1-7.6 1.2-11.5.1-.5-.2-.9-.6-.9zm-145.6.3c-.4 0-.7.4-.7.8.3 3.5.6 7.1 1.1 10.6.1.4.4.6.7.6h.1c.4-.1.7-.4.6-.9-.5-3.4-.9-7-1.1-10.5 0-.4-.4-.7-.7-.6z"></path></svg>',
    ]
    return x[Math.floor(Math.random() * x.length)];
}
function usfGetHast(p) {
    return sha256(JSON.stringify(p))
}
// define templates for the Atlantic theme
var _usfFilterBodyTemplate = /*inc_begin_filter-body*/
`<!-- Range filter -->
<div v-if="isRange" class="usf-facet-values usf-facet-range">
    <!-- Range inputs -->
    <div class="usf-slider-inputs usf-clear">
        <span class="usf-slider-input__from">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[0]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[0], 0)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
        <span class="usf-slider-div">-</span>
        <span class="usf-slider-input__to">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[1]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[1], 1)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
    </div>
	<!-- See API reference of this component at https://docs.sobooster.com/search/storefront-js-api/slider-component -->
    <usf-slider :color="facet.sliderColor" :symbols="facet.sliderValueSymbols" :prefix="facet.sliderPrefix" :suffix="facet.sliderSuffix" :min="facet.min" :max="facet.max" :pips="facet.range[0]" :step="facet.range[1]" :decimals="rangeDecimals" :value="range" :converter="rangeConverter" @input="onRangeSliderInput" @change="onRangeSliderChange"></usf-slider>
</div>
<!-- List + Swatch filter -->
<div v-else ref="values" :class="'usf-facet-values usf-scrollbar usf-facet-values--' + facet.display + (facet.navigationCollections ? ' usf-navigation' : '') + (facet.valuesTransformation ? (' usf-' + facet.valuesTransformation.toLowerCase()) : '') + (facet.circleSwatch ? ' usf-facet-values--circle' : '')" :style="!usf.isMobileFilter && facet.maxHeight ? { maxHeight: facet.maxHeight } : null">
    <!-- Filter options -->                
    <usf-filter-option v-for="o in visibleOptions" :facet="facet" :option="o" :key="o.label"></usf-filter-option>
</div>

<!-- More -->
<div v-if="isMoreVisible" class="usf-more" @click="onShowMore" v-html="loc.more"></div>`
/*inc_end_filter-body*/;

var _usfSearchResultsSkeletonItemTpl = `
<li v-if="view === 'grid'" class="usf-sr-product product  usf-skeleton">
    <div class="grid-view-item" v-if="true">
        <div class="usf-img"></div>
        <div class="usf-meta">            
        </div>
    </div>
</li>

<div class="usf-sr-product usf-skeleton" v-else>
    <!-- Image column -->
    <div class="usf-img-column">
        <div class="usf-img"></div>
    </div>

    <!-- Info column -->
    <div class="usf-info-column">
        <div class="usf-title"></div>
        <div class="usf-vendor"></div>
        <div class="usf-price-wrapper"></div>
    </div>
</div>
`;

var _usfSearchResultsSummaryTpl = /*inc_begin_search-summary*/
`<span class="usf-sr-summary" v-html="loader === true ? '&nbsp;' : usf.utils.format(term ? loc.productSearchResultWithTermSummary : loc.productSearchResultSummary, result.total, usf.utils.encodeHtml(term))"></span>`
/*inc_end_search-summary*/;

var _usfSearchResultsViewsTpl = /*inc_begin_search-views*/
`<div class="usf-views">
    <button class="usf-view usf-btn usf-icon usf-icon-grid" :class="{'usf-active': view === 'grid'}" @click.prevent.stop="onGridViewClick"></button>
    <button class="usf-view usf-btn usf-icon usf-icon-list" :class="{'usf-active': view === 'list'}" @click.prevent.stop="onListViewClick"></button>
</div>`
/*inc_end_search-views*/;

var _usfSearchResultsSortByTpl = /*inc_begin_search-sortby*/
`<usf-dropdown :placeholder="loc.sort" :value="sortBy" :options="sortByOptions" v-if="sortByOptions" @input="onSortByChanged"></usf-dropdown>`
/*inc_end_search-sortby*/;

var _usfProductBadges = `
<div class="badges-wrapper">
    <span class="badge badge-soldout" v-if="isSoldOut && usf.settings.search.showSoldOut" v-html="loc.soldOut"></span>
    <span class="badge badge-sale" v-else-if="hasDiscount && usf.settings.search.showSale" v-html="loc.sale"></span>
</div>
`;
var _usfProductPrice = `
<p v-if="hasDiscount" class="price sale"><span class="original money" v-html="displayPrice"></span> <span class="money" v-html="displayDiscountedPrice"></span></p>
<p v-else class="price">
    <span v-if="product.id!=6565406736457" class="money" v-html="displayPrice"></span>
    <span v-else class="money" v-html="displayPrice.replace('0','259.88')"></span>
</p>
`;
var product_card_details_overlay = `
<div class="product-card-details">
    <!--vendor-->
    <h3 class="brand" v-if="window._usfGlobalSettings['brandNames'] && usf.settings.search.showVendor" v-html="product.vendor"></h3>
    <!--title-->
    <h2 class="title" v-html="product.title"></h2>

    <!--price-->
    `+ _usfProductPrice+`
    <!-- Product review -->
    <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
</div>  
    `;


var product_card_interactions = `
<div class="product-card-interactions">
    <button class="product-card-interaction product-card-interaction-quickshop" data-product-card-interaction-quickshop :data-product-sha256="usfGetHast(product)" :data-product-url="productUrl" v-html="loc.quickView"></button>
    <button 
    class="product-card-interaction product-card-interaction-addtocart usf-interaction-addtocart-available addtocart-button-active" 
    data-product-card-interaction-addtocart 
    :data-product-variant-id="selectedVariantForPrice.id" 
    :data-cart-redirect="window._usfGlobalSettings['quickshop_enable_cart_redirect']" 
    :data-add-to-cart-id="selectedVariantForPrice.id"  v-bind="{'disabled': isSoldOut}" >

        <span class="product-card-interaction-addtocart-available" v-html="(!isSoldOut ? loc.addToCart : loc.soldOut)" ></span>

        <span class="product-card-interaction-addtocart-error">
            Item unavailable
        </span>

        <div class="product-card-interaction-addtocart-spinner">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M1.0436 10.9683C1.47582 10.9683 1.8262 11.3255 1.8262 11.7661C1.8262 17.4946 6.38122 22.1385 12.0001 22.1385C17.619 22.1385 22.174 17.4946 22.174 11.7661C22.174 11.3255 22.5244 10.9683 22.9566 10.9683C23.3889 10.9683 23.7392 11.3255 23.7392 11.7661C23.7392 18.3759 18.4835 23.7342 12.0001 23.7342C5.51677 23.7342 0.260986 18.3759 0.260986 11.7661C0.260986 11.3255 0.611372 10.9683 1.0436 10.9683Z"/>
            </svg>
        </div>
      </button>
</div>   
    `;

usf.templates = {


    app: `
<div id="usf_container" class="content-area clearfix usf-zone usf-clear" :class="{'usf-filters-horz': usf.settings.filters.horz}">
    <usf-filters class="usf-sr-filters"></usf-filters>
    <usf-sr></usf-sr>
</div>
`,
    searchResults: `
<div class="usf-sr-container" :class="{'usf-no-facets': noFacets, 'usf-empty': !loader && !hasResults}">
    <!-- Search form -->
    <form v-if="showSearchBox" action="/search" method="get" role="search" class="usf-sr-inputbox">
        <button type="submit" class="usf-icon usf-icon-search usf-btn"></button>
        <input name="q" autocomplete="off" ref="searchInput" v-model="termModel">
        <button v-if="termModel" class="usf-remove usf-btn" @click.prevent.stop="clearSearch"></span>
    </form>

     <div class="usf-sr-config" v-if="usf.isMobile">
        <div class="usf-sr-config__mobile-filters-wrapper">
            <div class="usf-filters" :class="{'usf-has-filters': !!facetFilters}" @click="onMobileToggle">
                <button class="usf-btn" v-html="loc.filters"></button>
            </div>
            ` + _usfSearchResultsSortByTpl + `
        </div>
        
        ` + _usfSearchResultsSummaryTpl + _usfSearchResultsViewsTpl + `
    </div>
    <div class="usf-sr-config" v-else>
        ` + _usfSearchResultsViewsTpl + _usfSearchResultsSummaryTpl + _usfSearchResultsSortByTpl + `
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && !result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Load previous -->
    <div id="usf-sr-top-loader" :class="{'usf-with-loader':loader === 'prev'}" v-if="(loader === 'prev' || itemsOffset) && loader !== true && hasResults && usf.settings.search.more !== 'page'"></div>

    <ul :class="(view === 'grid' ? (' product-list row-of-'+ _usfProductsPerRow) : 'list-view-items') + ' usf-results usf-clear usf-' + view">
        <template v-if="loader===true">` + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl +
        `</template>
        <template v-else>
            <template v-if="hasResults">
                <template v-if="view === 'grid'">
                    <template v-for="(p, index) in result.items">
                        <usf-sr-griditem :product="p" :result="result" :class="_usfGridItemClasses(index,p)" :key="p.id"></usf-sr-griditem>
                    </template>
                </template>
                <template v-else>
                    <template v-for="p in result.items"><usf-sr-listitem :product="p" :result="result" :key="p.id"></usf-sr-listitem></template>
                </template>
            </template>
            <template v-else>
                <!-- Empty result -->
                <div class="usf-sr-empty">
                    <div class="usf-icon"></div>
                    <span v-html="term ? usf.utils.format(loc.productSearchNoResults, term) : loc.productSearchNoResultsEmptyTerm"></span>
                    <button v-if="facetFilters" class="usf-btn usf-btn-action" v-html="loc.clearAllFilters" @click="usf.queryRewriter.removeAllFacetFilters"></button>
                </div>
            </template>
        </template>
    </ul>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Paging & load more -->
    <div class="usf-sr-paging" v-if="loader !== true">
        <div class="usf-sr-more" v-if="hasResults && usf.settings.search.more === 'more'">
            <div class="usf-title" v-html="usf.utils.format(loc.youHaveViewed, itemsLoaded, result.total)"></div>
            <div class="usf-progress">
                <div :style="{width: (itemsLoaded * 100 / result.total) + '%'}"></div>
            </div>
            <button v-if="itemsLoaded < result.total" class="usf-load-more" :class="{'usf-with-loader': loader === 'more'}" @click="onLoadMore"><span v-html="loc.loadMore"></span></button>
        </div>
        <usf-sr-pages v-else-if="hasResults && usf.settings.search.more === 'page'" :page="page" :pages-total="pagesTotal" :pages-to-display="4" :side-pages-to-display="1"></usf-sr-pages>
        <div class="usf-sr-loader usf-with-loader" v-else-if="loader === 'more'"></div>
    </div>
</div>
`,


    searchResultsGridViewItem: `
<li data-product-item :product-selector="product.id" :data-usf-pid="product.id">
    <div class="product-inner">
        <figure class="product-card-figure"  @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave">
            <span v-if="_usfGlobalSettings.product_grid_aspect_ratio != 'default'" class="product-card-figure-ie"></span>
            <template v-if="product.images.length">
             <img :alt="selectedImage.alt || product.title" data-rimg="lazy" data-rimg-scale="1" :data-rimg-template="_usfGetDataRimage(scaledSelectedImageUrl)" :data-rimg-max="selectedImage.width + 'x' + selectedImage.height" data-rimg-crop="" :srcset="selectedImageUrl + ' 1.00x'" data-rimg-template-svg="data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='506'></svg>">
             <img v-if="hoverImage && window._usfGlobalSettings['show_product_secondary_image']" :alt="selectedImage.alt || product.title" data-rimg="lazy" data-rimg-scale="1" :data-rimg-template="_usfGetDataRimage(scaledHoverImageUrl)" :data-rimg-max="hoverImage.width + 'x' + hoverImage.height" data-rimg-crop="" :srcset="hoverImageUrl + ' 1.00x'" class="second_image" data-rimg-template-svg="data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='512'%20height='506'></svg>">
            </template>
            <div v-else v-html="_getEmptyIMG()">
            </div>
            <!-- Wishlist -->
            <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>

            <!-- Labels -->
            <usf-plugin name="searchResultsProductLabel" :data="pluginData"></usf-plugin>

            <a :href="productUrl" :class="{'with-border':window._usfGlobalSettings['media_borders']}"></a>
            <a :href="productUrl" class="product-card-overlay" :class="{'product-card-overlay--hide':(window._usfGlobalSettings['enableQuickshop']==false && window._usfGlobalSettings['enableATC']==false )}">
                <div class="product-card-overlay-content">
                    <template v-if="window._usfGlobalSettings['enable_product_details_overlay']">
                        `+ product_card_details_overlay + `
                    </template>
                    <template v-else>
                        `+ product_card_interactions + `
                    </template>
                </div>
            </a>

            <!--badges-->
            `+ _usfProductBadges+`
        </figure>
            <a style="width:100%;margin-top: 10px;font-size: 14px;" class="product-card-interaction product-card-interaction-quickshop" :href="productUrl" >Go to product</a>
        <div class="product-card-footer"> 
            <template v-else>
                        `+ product_card_details_overlay + `
            </template>
        </div>
        <div  class="product-card-footer-mobile">
            <div class="product-card-details">
                <!--vendor-->
                <h3 class="brand" v-if="window._usfGlobalSettings['brandNames'] && usf.settings.search.showVendor" v-html="product.vendor"></h3>
                <!--title-->
                <h1 class="title">
                    <a :href="productUrl"  v-html="product.title"></a>
                </h2>

                <!--price-->
                `+ _usfProductPrice +`
                <!-- Product review -->
                <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
            </div>  
        </div>
        <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
    </div>
</li>
    `,

    // Search result pages
    searchResultsPages: `
<div class="pagination text-center">
    <template v-for="e in elements">
        <span v-if="e.type === 'prev'" class="prev">
            <a href="javascript:void(0)" :title="loc.prevPage" @click="onPrev" style="font-size:14px">←</a>
        </span>
        <span v-else-if="e.type === 'dots'" class="deco" style="padding:0 7px">…</span>
        <span v-else-if="e.type === 'page' && e.current" class="page current" style="padding:0 7px;font-weight:bold">{{e.page}}</span>
        <span v-else-if="e.type === 'page' && !e.current" class="page" style="padding:0 7px"><a href="javascript:void(0)" @click="ev=>onPage(e.page,ev)" :title="usf.utils.format(loc.gotoPage,e.page)">{{e.page}}</a></span>
        <span v-else-if="e.type === 'next'" class="next" style="padding:0 7px">
            <a href="javascript:void(0)" :title="loc.nextPage" @click="onNext" style="font-size:14px">→</a>
        </span>
    </template>
</div>
`,

    searchResultsListViewItem: /*inc_begin_search-list-item*/
`<a class="usf-sr-product" @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" :href="productUrl" :data-usf-pid="product.id">
    <!-- Image column -->
    <div class="usf-img-column">
        <!-- product image -->
        <div class="usf-img-wrapper usf-sr-product__image-container" :class="{'usf-has-second-img': hoverImage}">
            <div class="usf-main-img lazyload" :data-bgset="_usfGetScaledImageUrl(scaledSelectedImageUrl)" :style="{'background-image': 'url(' + getSelectedImageUrl('600') + ')'}"></div>
            <span class="usf-img-loader"></span>
            <template v-if="hoverImage">
                <div class="usf-second-img lazyload" :data-bgset="_usfGetScaledImageUrl(scaledHoverImageUrl)" :style="{'background-image': 'url(' + getHoverImageUrl('600') + ')'}"></div>
                <span class="usf-img-loader"></span>
            </template>
            <!-- product image extra -->
            <usf-plugin name="searchResultsProductPreview" :data="pluginData"></usf-plugin>
            <usf-plugin name="searchResultsProductCart" :data="pluginData"></usf-plugin>
            
            <div v-if="isSoldOut && usf.settings.search.showSoldOut" class="usf-badge"><span v-html="loc.soldOut"></div>
            <div v-else-if="hasDiscount && usf.settings.search.showSale" class="usf-badge usf-sale-badge"><span v-html="loc.sale"></span></div>
        </div>
    </div>

    <!-- Info column -->
    <div class="usf-info-column">
        <div class="usf-title" v-html="product.title"></div>
        <div class="usf-vendor" v-if="usf.settings.search.showVendor" v-html="product.vendor"></div>

        <!-- price -->
        <usf-plugin name="searchResultsProductPrice" :data="pluginData"></usf-plugin>
        <div class="usf-price-wrapper" :class="{'usf-price--sold-out': isSoldOut}" v-if="!usf.plugins.lastRenderResult" :data-variant-id="product.selectedVariantId">
            <span v-if="product.id!=6565406736457"  class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice"></span>
            <span v-else class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','259.88')"></span>

            <span class="usf-discount" v-if="hasDiscount" v-html="displayDiscountedPrice"></span>
            <span v-if="hasDiscount" class="usf-price-savings" v-html="loc.save + ' ' + salePercent + '%'"></span>
        </div>
        <div class="usf-description"></div>
    </div>


</a>`
/*inc_end_search-list-item*/,
    // AddToCart Plugin	
    addToCartPlugin: ``,
    // Preview Plugin
    previewPlugin: ``,
    previewPluginModal: ``,
    searchResultsBanner: /*inc_begin_search-banner*/        
`<div class="usf-sr-banner">
    <a :href="banner.url || 'javascript:void(0)'" :alt="banner.description">
        <img :src="banner.mediaUrl" style="max-width:100%">
    </a>
</div>
`
/*inc_end_search-banner*/,

    ////////////////////////
    // Filter templates
    // facet filters breadcrumb
    filtersBreadcrumb: /*inc_begin_filters-breadcrumb*/
`<div v-if="usf.settings.filterNavigation.showFilterArea && root.facetFilters && root.facets && facetFilterIds.length" class="usf-refineby">
    <!-- Breadcrumb Header -->
    <div class="usf-title usf-clear">
        <span class="usf-pull-left usf-icon usf-icon-equalizer"></span>
        <span class="usf-label" v-html="loc.filters"></span>

        <!-- Clear all -->
        <button class="usf-clear-all usf-btn" v-html="loc.clearAll" @click.prevent.stop="root.removeAllFacetFilters" :aria-label="loc.clearAllFilters"></button>
    </div>

    <!-- Breadcrumb Values -->
    <div class="usf-refineby__body">
        <template v-for="facetId in facetFilterIds" v-if="(facet = root.facets.find(fc => fc.id === facetId)) && (f = root.facetFilters[facetId])">
            <template v-for="queryValStr in f[1]">
                <div class="usf-refineby__item usf-pointer usf-clear" @click.prevent.stop="root.removeFacetFilter(facetId, queryValStr)">
                    <button class="usf-btn"><span class="usf-filter-label" v-html="facet.title + ': '"></span><b v-html="root.formatBreadcrumbLabel(facet, f[0], queryValStr)"></b></button><span class="usf-remove"></span>
                </div>
            </template>
        </template>
    </div>
 </div>`
 /*inc_end_filters-breadcrumb*/,

    // facet filters    
    filters: /*inc_begin_filters*/
// Vert & Horz modes have different render order
`<div class="usf-facets usf-no-select usf-zone" :class="{'usf-facets--mobile':usf.isMobileFilter}">
<!-- Mobile view -->
<template v-if="usf.isMobile">
    <div class="usf-close" @click="onMobileBack(1)"></div>
    <div class="usf-facets-wrapper">
        <!-- Header. shows 'Filters', facet name, etc. -->
        <div class="usf-header">
            <!-- Single facet mode -->
            <template v-if="isSingleFacetMode">
                <div class="usf-title" @click="onMobileBack(0)" v-html="facets[0].title"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clear"></div>
            </template>

            <!-- When a filter is selected -->
            <template v-else-if="mobileSelectedFacet">
                <div class="usf-title usf-back" @click="onMobileBack(0)" v-html="mobileSelectedFacet.title"></div>
                <div v-if="facetFilters && facetFilters[mobileSelectedFacet.id]" class="usf-clear" @click="removeFacetFilter(mobileSelectedFacet.id)" v-html="loc.clear"></div>
                <div v-else-if="mobileSelectedFacet.multiple" class="usf-all" @click="selectFacetFilter(mobileSelectedFacet)" v-html="loc.all"></div>
            </template>

            <!-- When no filter is selected -->
            <template v-else>
                <div class="usf-title" @click="onMobileBack(0)" v-html="loc.filters"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clearAll"></div>
            </template>
        </div>

        <div class="usf-body">
            <!-- Desktop-like filter in mobile -->
            <template v-if="usf.settings.filters.desktopLikeMobile">
                <usf-filter-breadcrumb></usf-filter-breadcrumb>
                
                <!-- Facets body -->
                <div class="usf-facets__body">
                    <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
                </div>
            </template>
            
            <!-- Mobile filter -->
            <template v-else>
                <!-- List all filter options, in single facet mode -->
                <usf-filter v-if="isSingleFacetMode" :facet="facets[0]"></usf-filter>

                <!-- List all filter options, when a filter is selected -->
                <usf-filter v-else-if="mobileSelectedFacet" :facet="mobileSelectedFacet"></usf-filter>

                <!-- List all when there are more than one facet -->
                <template v-else :key="f.id" v-for="f in facets">
                    <template v-if="canShowFilter(f)">
                        <div class="usf-facet-value" @click="onMobileSelectFacet(f)">
                            <span class="usf-title" v-html="f.title"></span>
                            <div v-if="(selectedFilterOptionValues = facetFilters && (ff = facetFilters[f.id]) ? ff[1] : null)" class="usf-dimmed">
                                <span v-for="cf in selectedFilterOptionValues" v-html="formatBreadcrumbLabel(f, f.facetName, cf)"></span>
                            </div>
                        </div>
                    </template>
                </template>
            </template>
        </div>

        <!-- View items -->
        <div class="usf-footer">
            <div @click="onMobileBack(1)" v-html="loc.viewItems"></div>
        </div>
    </div>
</template>

<!-- Desktop view -->
<template v-else>
    <usf-filter-breadcrumb></usf-filter-breadcrumb>
    <!-- Filters Loader -->
    <div v-if="!facets" class="usf-facets__first-loader">
        <template v-for="i in 3">
            <div class="usf-facet"><div class="usf-title usf-no-select"><span class="usf-label"></span></div>
                <div v-if="!usf.settings.filters.horz" class="usf-container"><div class="usf-facet-values usf-facet-values--List"><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div></div></div>
            </div>
        </template>
    </div>
    <!-- Facets body -->
    <div v-else class="usf-facets__body">
        <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
    </div>
</template>
</div>`
/*inc_end_filters*/,

    // facet filter item
    filter: /*inc_begin_filter*/
`<div v-if="canShow" class="usf-facet" :class="{'usf-collapsed': collapsed && !usf.isMobileFilter, 'usf-has-filter': isInBreadcrumb}">
    <!-- Mobile filter -->
    <div v-if="usf.isMobileFilter" class="usf-container">
        <!-- Search box -->
        <input v-if="hasSearchBox" class="usf-search-box" :aria-label="loc.filterOptions" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

        <!-- Values -->
        ` + _usfFilterBodyTemplate +
    `</div>

    <!-- Desktop filter -->
    <template v-else>
        <!-- Filter title -->
        <div class="usf-clear">
            <div class="usf-title usf-no-select" @click.prevent.stop="onExpandCollapse">
                <button class="usf-label usf-btn" v-html="facet.title" :aria-label="usf.utils.format(loc.filterBy,facet.title)" :aria-expanded="!collapsed"></button>
                <usf-helptip v-if="facet.tooltip" :tooltip="facet.tooltip"></usf-helptip>            
                <!-- 'Clear all' button to clear the current facet filter. -->
                <button v-if="isInBreadcrumb" class="usf-clear-all usf-btn" :title="loc.clearFilterOptions" :aria-label="usf.utils.format(loc.clearFiltersBy,facet.title)" @click.prevent.stop="onClear" v-html="loc.clear"></button>
                <span class="usf-pm"></span>
            </div>
        </div>

        <!-- Filter body -->
        <div class="usf-container">
            <!-- Search box -->
            <input v-if="hasSearchBox" class="usf-search-box" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

            ` + _usfFilterBodyTemplate +
        `
        </div>
    </template>
</div>`
/*inc_end_filter*/,

    // facet filter option
    filterOption: /*inc_begin_filter-option*/
`<div v-if="children" :class="(isSelected ? 'usf-selected ' : '') + ' usf-relative usf-facet-value usf-facet-value-single usf-with-children' + (collapsed ? ' usf-collapsed' : '')">
    <!-- option label -->
    <button class="usf-pm usf-btn" v-if="children" @click.prevent.stop="onToggleChildren"></button>
    <button class="usf-label usf-btn" v-html="label" @click.prevent.stop="onToggle"></button>

    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobileFilter)) && option.value !== undefined" class="usf-value">{{option.value}}</span>    

    <div class="usf-children-container" v-if="children && !collapsed">
        <button :class="'usf-child-item usf-btn usf-facet-value' + (isChildSelected(c) ? ' usf-selected' : '')" v-for="c in children" v-html="getChildLabel(c)" @click="onChildClick(c)"></span>
    </div>
</div>
<button v-else :class="(isSelected ? 'usf-selected ' : '') + (swatchImage ? ' usf-facet-value--with-background' : '') + ' usf-btn usf-relative usf-facet-value usf-facet-value-' + (facet.multiple ? 'multiple' : 'single')" :title="isSwatch || isBox ? option.label + ' (' + option.value + ')' : undefined" :style="usf.isMobileFilter ? null : swatchStyle" @click.prevent.stop="onToggle">
    <!-- checkbox -->
    <div v-if="!isBox && !isSwatch && facet.multiple" :class="'usf-checkbox' + (isSelected ? ' usf-checked' : '')">
        <span class="usf-checkbox-inner"></span>
    </div>

    <!-- swatch image in mobile -->
    <div v-if="swatchImage && usf.isMobileFilter" class="usf-mobile-swatch" :style="swatchStyle"></div>

    <!-- option label -->
    <span class="usf-label usf-btn" v-html="label"></span>
    
    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobileFilter)) && option.value !== undefined" class="usf-value">{{option.value}}</span>
</button>`
/*inc_end_filter-option*/,



    // Instant search popup
    instantSearch: /*inc_begin_instantsearch*/
`<div :class="'usf-popup usf-zone usf-is usf-is--compact usf-is--' + position + (shouldShow ? '' : ' usf-hide') + (isEmpty ? ' usf-empty' : '') + (firstLoader ? ' usf-is--first-loader': '')"  :style="usf.isMobile ? null : {left: this.left + 'px',top: this.top + 'px',width: this.width + 'px'}">
    <!-- Mobile search box -->
    <div v-if="usf.isMobile">
        <form class="usf-is-inputbox" :action="searchUrl" method="get" role="search">
            <span class="usf-icon usf-icon-back usf-close" @click="usf.utils.hideInstantSearch"></span>
            <input name="q" autocomplete="off" ref="searchInput" :value="term" @input="onSearchBoxInput">
            <span class="usf-remove" v-if="term" @click="onClear"></span>
        </form>
    </div>

    <!-- First loader -->
    <div class="usf-is-first-loader" v-if="firstLoader">
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
    </div>

    <!-- All JS files loaded -->
    <template v-else>
        <!-- Empty view -->
        <div v-if="isEmpty" class="usf-is-no-results">
            <div style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-items.png?t=2') center no-repeat;min-height:160px"></div>
            <div v-html="usf.utils.format(loc.noMatchesFoundFor, term)"></div>
        </div>
        <template v-else>
            <!-- Body content -->
            <div class="usf-is-content">
                <!-- Products -->
                <div class="usf-is-matches usf-is-products">
                    <div class="usf-title" v-html="queryOrTerm ? loc.productMatches : loc.trending"></div>
                    
                    <div class="usf-is-list" v-if="result.items.length">
                        <!-- Did you mean -->
                        <span class="usf-is-did-you-mean" v-html="usf.utils.format(loc.didYouMean, usf.utils.encodeHtml(term), result.query)" v-if="termDiffers"></span>

                        <!-- Product -->
                        <usf-is-item v-for="p in result.items" :product="p" :result="result" :key="p.id + '-' + p.selectedVariantId"></usf-is-item>
                    </div>
                    <div class="usf-is-list" v-else style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-products.png?t=2') center no-repeat;min-height:250px"></div>
                </div>

                <div class="usf-is-side">
                    <!-- Suggestions -->
                    <div class="usf-is-matches usf-is-suggestions" v-if="result.suggestions && result.suggestions.length">
                        <div class="usf-title" v-html="loc.searchSuggestions"></div>
                        <span v-for="s in result.suggestions" class="usf-is-match" v-html="usf.utils.highlight(s, result.query)" @click="search(s)"></span>
                    </div>

                    <!-- Collections -->
                    <div class="usf-is-matches usf-is-collections" v-if="result.collections && result.collections.length">
                        <div class="usf-title" v-html="loc.collections"></div>
                        <span v-for="c in result.collections" class="usf-is-match" v-html="usf.utils.highlight(c.title, result.query)" @click="selectCollection(c)"></span>
                    </div>

                    <!-- Pages -->
                    <div class="usf-is-matches usf-is-pages" v-if="result.pages && result.pages.length">
                        <div class="usf-title" v-html="loc.pages"></div>
                        <span v-for="p in result.pages" class="usf-is-match" v-html="usf.utils.highlight(p.title, result.query)" @click="selectPage(p)"></span>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="usf-is-viewall">
                <span @click="redirect(queryOrTerm)" :data-term="queryOrTerm" v-html="usf.utils.format(queryOrTerm ? loc.viewAllResultsFor : loc.viewAllResults, queryOrTerm)"></span>
            </div>
        </template>
    </template>
</div>`
/*inc_end_instantsearch*/
    ,

    // Instant search item
    instantSearchItem:/*inc_begin_instantsearch-item*/
`<span class="usf-is-product usf-clear" @click="onItemClick">
    <!-- Image -->
    <div class="usf-img-wrapper usf-pull-left">
        <img class="usf-img" :src="selectedImageUrl">
    </div>
    
    <div class="usf-pull-left">
        <!-- Title -->
        <div class="usf-title" v-html="usf.utils.highlight(product.title, result.query)"></div>

        <!-- Vendor -->
        <div class="usf-vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

        <!-- Price: $0 Products-->
        <div class="usf-price-wrapper"  >

             <span v-if="product.id==6565406736457"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','259.88')"></span>
            <span style="display:none;" v-html="product.id"></span>

                  <span v-if="product.id==4688258115"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('40.88','41.88')"></span>
            <span style="display:none;" v-html="product.id"></span>

               <span v-if="product.id==214601498648"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','7.48')"></span>
            <span style="display:none;" v-html="product.id"></span>

                      <span v-if="product.id==2105359892553"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','27.88')"></span>
            <span style="display:none;" v-html="product.id"></span>
            
               <span v-if="product.id==9035533902"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('40.88','41.88')"></span>
            <span style="display:none;" v-html="product.id"></span>

             <span v-if="product.id==2105379455049"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','27.88')"></span>

            
             <span v-if="product.id==6581755215945"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','119.88')"></span> 
             <span v-if="product.id==6616327553097"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','109.88')"></span>
             <span v-if="product.id==6639310143561"  class="usf-price e" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice.replace('0','70.00')"></span>


            <span style="display:none;" v-html="product.id"></span>
        </div>
  



  

  <div class="usf-price-wrapper" v-if="price!=0">
 <span v-if="product.id!=4688258115 && product.id!=214601498648 && product.id!=6565406736457 && product.id!=9035533902 && product.id!=2105359892553 && product.id!=2105379455049"  class="usf-price e"   class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice"></span>        
   <span v-if="hasDiscount" class="usf-discount" v-html="displayDiscountedPrice"></span>
            <span style="display:none;" v-html="product.id"></span>
        </div>

    </div>
</span>`
/*inc_end_instantsearch-item*/,
};


function _usfGetDataRimage(url) {
    if (_usfIsDynamicImage)
        return url.replace('{size}x', '{size}')

    return url.replace('_' + usf.settings.search.imageSize + 'x.', '_{size}.');
}

usf.event.add('init', function () {
    usf.settings.priceFormat = `<span class="money money--last">` + usf.settings.priceFormat + `</span>`;


    var bodyyy = document.querySelector('.template-search')
if (bodyyy) bodyyy.classList.add('template-collection')


    usf.event.add(['sr_updated', 'sr_viewChanged', 'rerender'], function () {
        setTimeout(function () {
            window._usfState ? _usfState.init() : null;
            if (window._usfSections)
            _usfSections.register('static-collection', function (section) {
                return new _usfStaticCollection_StaticCollection(section);
            });
        }, 100);
    });
});

var sha256 = function sha256(ascii) {
    function rightRotate(value, amount) {
        return (value >>> amount) | (value << (32 - amount));
    };

    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length'
    var i, j; // Used as a counter across the whole file
    var result = ''

    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;

    //* caching results is optional - remove/add slash from front of this line to toggle
    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
    // (we actually calculate the first 64, but extra values are just ignored)
    var hash = sha256.h = sha256.h || [];
    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
    var k = sha256.k = sha256.k || [];
    var primeCounter = k[lengthProperty];
	/*/
	var hash = [], k = [];
	var primeCounter = 0;
	//*/

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
            for (i = 0; i < 313; i += candidate) {
                isComposite[i] = candidate;
            }
            hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
            k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
        }
    }

    ascii += '\x80' // Append Ƈ' bit (plus zero padding)
    while (ascii[lengthProperty] % 64 - 56) ascii += '\x00' // More zero padding
    for (i = 0; i < ascii[lengthProperty]; i++) {
        j = ascii.charCodeAt(i);
        if (j >> 8) return; // ASCII check: only accept characters in range 0-255
        words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
    words[words[lengthProperty]] = (asciiBitLength)

    // process each chunk
    for (j = 0; j < words[lengthProperty];) {
        var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
        var oldHash = hash;
        // This is now the undefinedworking hash", often labelled as variables a...g
        // (we have to truncate as well, otherwise extra entries at the end accumulate
        hash = hash.slice(0, 8);

        for (i = 0; i < 64; i++) {
            var i2 = i + j;
            // Expand the message into 64 words
            // Used below if 
            var w15 = w[i - 15], w2 = w[i - 2];

            // Iterate
            var a = hash[0], e = hash[4];
            var temp1 = hash[7]
                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
                + ((e & hash[5]) ^ ((~e) & hash[6])) // ch
                + k[i]
                // Expand the message schedule if needed
                + (w[i] = (i < 16) ? w[i] : (
                    w[i - 16]
                    + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) // s0
                    + w[i - 7]
                    + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10)) // s1
                ) | 0
                );
            // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
            var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
                + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

            hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
            hash[4] = (hash[4] + temp1) | 0;
        }

        for (i = 0; i < 8; i++) {
            hash[i] = (hash[i] + oldHash[i]) | 0;
        }
    }

    for (i = 0; i < 8; i++) {
        for (j = 3; j + 1; j--) {
            var b = (hash[i] >> (j * 8)) & 255;
            result += ((b < 16) ? 0 : '') + b.toString(16);
        }
    }
    return result;
};
function redirect(x){
    if(x.length>=1){
        window.location.href='/search?q='+x;
        
    }else{ 
        window.location.href='https://eargasm.com/collections/eargasm-product-line';

    } 
}

/* Begin theme ready code */
// handle search icon
if (usf.settings.instantSearch.online) {
    if(usf.isMobile){
        // User clicks on the input
        var searchIcon = document.querySelector('#ls-button-search')
        if (searchIcon)
            searchIcon.addEventListener('click', function (e) {
                var target  = document.createElement('input');
                usf.utils.loadAndShowInstantSearch(target, true);
                usf.utils.stopEvent(e)
            });
    }else{
         setTimeout(function(){
            if(window.jQuery){
        
                jQuery('#ls-button-search').on('click',function(e){
                    var ip  = document.querySelector('#ls-form input[name="q"]')
                    usf.utils.loadAndShowInstantSearch(ip, true);
                })
            }
        },500)
    }
    
   
   
    // var ip = document.querySelector('.results-search-form .rs-form-input');
    // if(ip){
    //     ip.addEventListener('click',function(){
    //         usf.utils.loadAndShowInstantSearch(ip, true);
    //     })
    // }
}
/* End theme ready code */
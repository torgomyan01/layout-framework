

$('#data-grid').on('click', function (){
    console.log('grid')
    $(this).addClass('active').addClass('show');
    $('#data-list').removeClass('active').addClass('hide');

    $('#grid-block-call').addClass('show').removeClass('hide');
    $('#list-block-call').addClass('hide').removeClass('show');


})
$('#data-list').on('click', function (){
    console.log('list')
    $(this).addClass('active').addClass('show');
    $('#data-grid').removeClass('active');

    $('#grid-block-call').addClass('hide').removeClass('show');
    $('#list-block-call').addClass('show').removeClass('hide');


})






let MenuOpenClose = $('.icon-open-close-menu');
let menuPersonalLibrary = $('.menu-personal-library');
let opening = false;


MenuOpenClose.on('click', function (){
    if(menuPersonalLibrary.hasClass('hide')){
        menuPersonalLibrary.removeClass('hide').addClass('show')
    } else {
        menuPersonalLibrary.removeClass('show').addClass('hide')
    }
    openCloseMenu()
})



function openCloseMenu(){
    let menuIcon = $('.menu-block .icon-open-close-menu');
    let menuSite = $('.personal-library-page .menu-personal-library .menu .menu-list a');
    let CatName = $('.personal-library-page .menu-personal-library .menu .title-menu');
    let buttons = $('.personal-library-page .menu-personal-library .call-buttons-and-user .buttons .neative-button');
    let dropDownBottom = $('.personal-library-page .menu-personal-library .call-buttons-and-user .user-block .btn-outline-light');
    let mainSite = $('.personal-library-page .main')

    if(menuPersonalLibrary.hasClass('hide')){

        menuIcon.children('.solid-1').css({
            transform: 'rotate(0deg) translateX(0px)'
        })
        menuIcon.children('.solid-2').css({
            opacity: '1'
        })
        menuIcon.children('.solid-3').css({
            transform: 'rotate(0deg) translateX(0px)'
        })
        $('.personal-library-page .menu-personal-library .btn-outline-light')
            .addClass('hide')
            .removeClass('show');

        menuSite.children('.menu-texts')
            .addClass('hide')
            .removeClass('show');

        CatName.css('display', 'none')

        menuSite.children('.svg').addClass('hide').removeClass('show');

        buttons.addClass('hide').removeClass('show');

        dropDownBottom.addClass('hide').removeClass('show');
        mainSite.css('width', 'calc(100% - 155px)')
        $('.menu-block').addClass('hide').removeClass('show');



    } else {

        $('.menu-block').addClass('show').removeClass('hide');

        menuIcon.children('.solid-1').css({
            transform: 'rotate(45deg) translateX(10px)'
        })
        menuIcon.children('.solid-2').css({
            opacity: '0'
        })
        menuIcon.children('.solid-3').css({
            transform: 'rotate(-45deg) translateX(10px)'
        })
        $('.personal-library-page .menu-personal-library .btn-outline-light')
            .addClass('show')
            .removeClass('hide');


        menuSite.children('.menu-texts')
            .addClass('show')
            .removeClass('hide');




        CatName.css('display', 'block')

        menuSite.children('.svg').addClass('show').removeClass('hide');
        buttons.addClass('show').removeClass('hide');
        dropDownBottom.addClass('show').removeClass('hide');
        mainSite.css('width', 'calc(100% - 350px)')
    }
}
openCloseMenu();




$('#Members-modal').on('input', function (){
    let ResultBlock = $('.modal-to-add-users .inputs .search-result');
    if($(this).val() !== ''){
        ResultBlock.css('display', 'block')
    } else {
        ResultBlock.css('display', 'none')
    }
})

$('#Members-modal2').on('input', function (){
    let ResultBlock = $('.modal-to-add-users .inputs .search-result');
    if($(this).val() !== ''){
        ResultBlock.css('display', 'block')
    } else {
        ResultBlock.css('display', 'none')
    }
})


// if(window.location.hash === ''){
//     window.location.hash = '#history';
// }


$(window).on('load', function (){
    let solids = $('.call-history .header-dashboard-histories .tabs');
    let hash;
    solids.on('click', function (){
        let thisTab = $(this);
        let thisTabName = $(this).attr('href');
        searchActivate(thisTabName);


        $('.call-history .all-call-block')
            .removeClass('show').addClass('hide');
        $(`div[data-tab-name*='${thisTabName}']`).removeClass('hide').addClass('show')


    })



    function loadingStart(thisTabName){
        $('.call-history .all-call-block')
            .removeClass('show').addClass('hide');
        $(`div[data-tab-name*='${thisTabName}']`).removeClass('hide').addClass('show')
    }




    function searchActivate(hashTags){
        if(hashTags){
            let thisBlock = $(`a[href*='${hashTags}']`);
            let width = thisBlock[0].offsetWidth;
            let left = thisBlock[0].offsetLeft;
            solids.removeClass('active');
            thisBlock.addClass('active');
            $('.call-history .header-dashboard-histories .solid')
                .css({
                    width: `${width}px`,
                    left: `${left}px`
                })
        }

    }
    hash = window.location.hash ? window.location.hash : '';
    searchActivate(hash);
    loadingStart(hash)



    solids.on('mouseenter', function (e){
        let thisWidth = this.offsetWidth;
        let thisLeft = this.offsetLeft;
        $('.call-history .header-dashboard-histories .solid')
            .css({
                width: `${thisWidth}px`,
                left: `${thisLeft}px`
            })
    })

    solids.on('mouseout', function (){
        hash = window.location.hash;
        searchActivate(hash);
    })
})


// SELECTED MESSAGES

let CreateThread = $('.chat-page .chat-empty-body .create-thread');
let CreateMessage = $('.chat-page .chat-empty-body .create-message');
let SelectedMessage = $('.chat-page .chat-empty-body .selected-messages');
let checkboxMessages = $('.chat-page .chat-empty-body .all-messages .all-message-block .selected-message---');
let selectedMessagesNums = $('.chat-page .chat-empty-body .selected-messages .messages-select');




CreateThread.on('click', function (){
    $(this).removeClass('show').addClass('hide');
    CreateMessage.removeClass('show').addClass('hide');
    SelectedMessage.removeClass('hide').addClass('show');

    checkboxMessages.removeClass('closed').addClass('open');



    checkboxMessages.on('input', function (){
        let num = 0;
        checkboxMessages.map((e,x)=>{
            let inputsChecked = $(x).prop('checked');

            if(inputsChecked){
                num++
            }

        })
        console.log(num)
        selectedMessagesNums.text(`${num} messages selected`)
    })
})


// var myModal = $('.open-record-video-left-block')[0]
// var myInput = document.getElementById('Record-Video')




// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

    let contents = [`<div class="tab-content-item">
                    <div class="row">
                        <div class="col-12">
                            <h2>Mango</h2>
                        </div>
                        <div class="col-3">
                            <img src="https://cdn.discordapp.com/attachments/616047039712591882/853947645688807464/img4.jpg" alt="">
                        </div>
                        <div class="col-9">
                        <p>A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India. M. indica has been cultivated in South and Southeast Asia since ancient times resulting in two distinct types of modern mango cultivars: the "Indian type" and the "Southeast Asian type". Other species in the genus Mangifera also produce edible fruits that are also called "mangoes", the majority of which are found in the Malesian ecoregion.</p>
                        </div>
                    </div>
                </div>`,
                `<div class="tab-content-item">
                    <div class="row">
                        <div class="col-12">
                            <h2>Orange</h2>
                        </div>
                        <div class="col-3">
                            <img src="https://cdn.discordapp.com/attachments/616047039712591882/856883205793382400/Screenshot_411.png" alt="">
                        </div>
                        <div class="col-9">
                            <p>The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.</p>
                        </div>
                    </div>
                </div>`,
                `<div class="tab-content-item">
                    <div class="row">
                        <div class="col-12">
                            <h2>Pineapple</h2>
                        </div>
                        <div class="col-3">
                            <img src="https://cdn.discordapp.com/attachments/616047039712591882/853947466382966794/img1.png" alt="">
                        </div>
                        <div class="col-9">
                            <p>The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations. Further, it is the third most important tropical fruit in world production. In the 20th century, Hawaii was a dominant producer of pineapples, especially for the US; however, by 2016, Costa Rica, Brazil, and the Philippines accounted for nearly one-third of the world's production of pineapples.</p>
                        </div>
                    </div>
                </div>`,
                `<div class="tab-content-item">
                    <div class="row">
                        <div class="col-12">
                            <h2>Papaya</h2>
                        </div>
                        <div class="col-3">
                            <img src="https://cdn.discordapp.com/attachments/616047039712591882/853947479971332117/img3.png" alt="">
                        </div>
                        <div class="col-9">
                            <p>The papaya is a small, sparsely branched tree, usually with a single stem growing from 5 to 10 m (16 to 33 ft) tall, with spirally arranged leaves confined to the top of the trunk. The lower trunk is conspicuously scarred where leaves and fruit were borne. The leaves are large, 50–70 cm (20–28 in) in diameter, deeply palmately lobed, with seven lobes. All parts of the plant contain latex in articulated laticifers. Papayas are dioecious. The flowers are five-parted and highly dimorphic; the male flowers have the stamens fused to the petals. The female flowers have a superior ovary and five contorted petals loosely connected at the base. Male and female flowers are borne in the leaf axils, and the males are multiflowered dichasia, and the female flowers are in few-flowered dichasia. The pollen grains are elongated and approximately 35 microns in length.[citation needed] The flowers are sweet-scented, open at night, and wind- or insect-pollinated.</p>
                        </div>
                    </div>
                </div>`,
                `<div class="tab-content-item">
                    <div class="row">
                        <div class="col-12">
                            <h2>Grapefruit</h2>
                        </div>
                        <div class="col-3">
                            <img src="https://cdn.discordapp.com/attachments/616047039712591882/856882689033502800/Screenshot_404.png" alt="">
                        </div>
                        <div class="col-9">
                            <p>The grapefruit (Citrus × paradisi) is a subtropical citrus tree known for its relatively large, sour to semisweet, somewhat bitter fruit. The interior flesh is segmented and varies in color from pale yellow to dark pink. Grapefruit is a citrus hybrid originating in Barbados as an accidental cross between the sweet orange (C. sinensis) and the pomelo or shaddock (C. maxima), both of which were introduced from Asia in the 17th century. When found, it was called the forbidden fruit. In the past it was referred to as the pomelo, but that term is now the common name for Citrus maxima.</p>
                        </div>
                    </div>
                </div>`,
                `<div class="tab-content-item">
                    <div class="row">
                        <div class="col-12">
                            <h2>Pear</h2>
                        </div>
                        <div class="col-3">
                            <img src="https://cdn.discordapp.com/attachments/616047039712591882/853947488121651240/img5.png" alt="">
                        </div>
                        <div class="col-9">
                            <p>Pears are fruits produced and consumed around the world, growing on a tree and harvested in late Summer into October. The pear tree and shrub are a species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pears are valued for their edible fruit and juices, while others are cultivated as trees. The tree is medium-sized and native to coastal and mildly temperate regions of Europe, North Africa, and Asia. Pear wood is one of the preferred materials in the manufacture of high-quality woodwind instruments and furniture.</p>
                        </div>
                    </div>
                </div>`,
                `<div class="tab-content-item">
                <div class="row">
                    <div class="col-12">
                        <h2>Banana</h2>
                    </div>
                    <div class="col-3">
                        <img src="https://cdn.discordapp.com/attachments/616047039712591882/853947471678668830/img2.png" alt="">
                    </div>
                    <div class="col-9">
                        <p>A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana.</p>
                    </div>
                </div>
            </div>`,]

    let buttons = $('.button')

    let lastActive = undefined

    for(let t = 0; t < buttons.length; t++){
        $(buttons).on('click', function(){
            if($(buttons[t]).hasClass('button-active')){
                lastActive = t
                $('#tab-content')
            }
            $(buttons[lastActive]).removeClass('button-active')
            $(this).addClass('button-active')
            if($(buttons[t]).hasClass('button-active')){
                $('#tab-content').html(contents[t])
            }
                
            
        })
    }
    

})

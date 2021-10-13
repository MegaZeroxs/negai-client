import { StyleSheet, Dimensions } from "react-native"
// ..
const win = Dimensions.get('window');
const ratio = win.width / 540; // Anchura de la imagen

export const styles = StyleSheet.create({
    scroolview_container: {
        backgroundColor: '#FFFFFF',
    },
    section_container: {
        padding: 15,
        paddingTop: 0
    },
    list_container: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    card_scroll_container: {
        flexBasis: `${(win.width / 2)}%`,
        marginRight: 15,
        paddingBottom: 15
    },
    card_container: {
        flexBasis: '48%',
        paddingBottom: 15,
    },
    card_img: {
        width: (win.width / 2.25),
        height: 340 * ratio, //340 es la altura de los cover originales
    },
    card_title: {
        fontFamily: 'CreatoDisplay-Regular',
        color: '#686868',
        fontSize: 15,
        width: '100%',
    },
    card_price: {
        fontFamily: 'CreatoDisplay-Bold',
        color: '#000',
        fontSize: 14
    },
    section_title: {
        fontFamily: 'CreatoDisplay-Regular',
        fontSize: 18
    },
    // Highlight

    section_100_container: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.50)',
    },
    section_100_container_black: {
        width: '100%',
        backgroundColor: 'rgb(0,0,0)',
    },
    hl_img_card_container: {
        padding: 15,
        paddingTop: 0,
        flexBasis: '40%',
    },
    hl_card_container: {
        paddingVertical: 5,
        paddingRight: 15,
        flexBasis: '60%',
    },
    hl_card_img: {
        width: (win.width / 3),
        height: (340 * ratio) / 1.2, //340 es la altura de los cover originales
    },
    hl_sec_container: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    hl_background: {
        flex: 1,
        justifyContent: "flex-start"
    },
    hl_card_title: {
        fontFamily: 'CreatoDisplay-Bold',
        color: '#FFFFFF',
        fontSize: 19,
        width: '100%'
    },
    hl_card_dsc: {
        fontFamily: 'CreatoDisplay-Bold',
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 5,
        width: '100%',
    },
    btn: {
        backgroundColor: "#FFF",
        color: "#000",
        marginTop: 15,
        padding: 12,
        borderWidth: 2,
        width: "100%",
        alignItems: 'center'
    },
    btn_mini_text: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'CreatoDisplay-Bold'
    },
    btn_mini: {
        backgroundColor: 'transparent',
        borderColor: "#FFF",
        padding: 5
    },
    // Detalle del manga
    header_go_back: {
        padding: 10,
        backgroundColor: '#FFF',
    },
    txt_header_custom: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'CreatoDisplay-Bold',
    },
    txt_header_icon_custom: {
        fontSize: 16,
    }
    ,
    detail_container: {
        padding: 15
    },
    dsc_title: {
        fontFamily: 'CreatoDisplay-Bold',
        color: '#000',
        fontSize: 16
    },
    dsc_text: {
        fontFamily: 'CreatoDisplay-Regular',
        color: '#686868',
        fontSize: 16,
        width: '100%',
        marginVertical: 10
    },
    list_detail_container: {
        paddingVertical: 5,
        marginLeft: 15,
    },
    list_text: {
        fontFamily: 'CreatoDisplay-Regular',
        color: '#686868',
        fontSize: 16,
    }// Pagos
    ,
    checkout_detail_container: {
        marginTop: 10,
    },
    checkout_detail_text: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'CreatoDisplay-Regular',
    },
    picker_style: {
        marginTop: 10,
        backgroundColor: '#e4e1e6',
        fontFamily: 'CreatoDisplay-Regular',
    },
    text_picker_style: {
        height: 40,
        color: '#EEE',
        fontWeight: 'bold'
    },
    txt_subtitle_icon_custom:{
        fontSize: 18,
    },
    padding_top: {
        marginTop: 10
    },
    detail_checkout: {
        flexDirection: 'row',
        flex: 1
    },
    detail_text_checkout: {
        fontSize: 16,
        fontFamily: 'CreatoDisplay-Regular',
        flex: 1
        
    },
    detail_price_checkout: {
        fontSize: 16,
        fontFamily: 'CreatoDisplay-Bold',
    },
    btn_text: {
        fontSize: 20,
        fontFamily: 'CreatoDisplay-Bold'
    },
    btn_primary: {
        borderColor: "#f04e98",
    },
    btn_text_primary: {
        color: "#f04e98"
    },
    btn_cancel: {
        borderColor: "#CCC",
    },
    btn_text_cancel: {
        color: "#CCC"
    },
    flex_end: {
        marginTop: 25
    }
});
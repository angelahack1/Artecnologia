
class LanguageContainer {
    
    constructor(langP) {
        this.lang = langP;
        this._companyAcronimCapitalized = "ARTECNOLOGIA";
        this._companyAcronimEng = "Artecnología";
        this._companyAcronimSpa = "Artecnología";
        this._companyAcronimPor = "Artecnología";
        this._companyNameEng = "Art and Technology together";
        this._companyNameSpa = "Arte y Tecnología juntos";
        this._companyNamePor = "Arte e Tecnologia juntas";
        this._menuLangSpaSpa = "Español";
        this._menuLangSpaEng = "Inglés";
        this._menuLangSpaPor = "Portugués";
        this._menuLangEngSpa = "Spanish";
        this._menuLangEngEng = "English";
        this._menuLangEngPor = "Portuguese";
        this._menuLangPorSpa = "Espanhol";
        this._menuLangPorEng = "Inglês";
        this._menuLangPorPor = "Português";
        this._textMainPageEng = "Main page";
        this._textMainPageSpa = "Página principal";
        this._textMainPagePor = "Página principal";
        this._textAboutPageEng = "About Artecnología";
        this._textAboutPageSpa = "Acerca de Artecnología";
        this._textAboutPagePor = "Sobre Artecnología";
        this._textProductsPageEng = "Products and Services";
        this._textProductsPageSpa = "Productos y Servicios";
        this._textProductsPagePor = "Produtos e serviços";
        this._textContactPageEng = "Contact Us";
        this._textContactPageSpa = "Contáctenos";
        this._textContactPagePor = "Fale connosco";
        this._textStorePageEng = "Store";
        this._textStorePageSpa = "Tienda";
        this._textStorePagePor = "Loja";
        this._altTextProductDigitalFrameEng = "Product: digital frame";
        this._altTextProductDigitalFrameSpa = "Producto: portaretrato digital";
        this._altTextProductDigitalFramePor = "Produco: moldura digital";
        this._textSpanHeadingUpperEng = "Art of";
        this._textSpanHeadingUpperSpa = "Arte de";
        this._textSpanHeadingUpperPor = "Arte de";
        this._textSpanHeadingLowerEng = "Owing and/or Giving";
        this._textSpanHeadingLowerSpa = "Tener y/o Regalar";
        this._textSpanHeadingLowerPor = "Ter e/ou Dar";
        this._textParagraphIntroEng = "With a cultural special touch, and technological usage, through products which inspires your sense of belonging and comfort.";
        this._textParagraphIntroSpa = "Con un sentido cultural y usabilidad tecnológica, a través de productos que inspiran tu pertenencia y confort.";
        this._textParagraphIntroPor = "Com sentido cultural e usabilidade tecnológica, através de produtos que inspiram o seu pertencimento e conforto.";
        this._textAnchorLetYouKnowOurProductsEng = "Let you know our products!";
        this._textAnchorLetYouKnowOurProductsSpa = "Conoce nuestros productos!";
        this._textAnchorLetYouKnowOurProductsPor = "Conheça nossos produtos!";
        this._textSpanOurProductsEng = "Our products";
        this._textSpanOurProductsSpa = "Nuestros productos";
        this._textSpanOurProductsPor = "Nossos produtos";
        this._textSpanForYouAndEng = "For you or as a gift";
        this._textSpanForYouAndSpa = "Para ti o para regalar";
        this._textSpanForYouAndPor = "Para você ou como presente";
        this._textParagraphWeHave1Eng = "We have a range of technological products with a touch of art that makes you do without the feeling of stress that technology usually generates.";
        this._textParagraphWeHave1Spa = "Contamos con una gama de productos tecnológicos con un toque de arte que te hace prescindir de la sensación de estrés que usualmente genera la tecnología.";
        this._textParagraphWeHave1Por = "Temos uma gama de produtos tecnológicos com um toque de arte que faz com que você passe sem a sensação de estresse que a tecnologia costuma gerar.";
        this._textIWeHave2Eng = "Products focused on various sensations that provide well-being.";
        this._textIWeHave2Spa = "Productos centrados en diversas sensaciones que brindan bienestar.";
        this._textIWeHave2Por = "Produtos focados em diversas sensações que proporcionam bem-estar.";
        this._textSpanHeadingAboutUpperEng = "Art, Comfort and Technology";
        this._textSpanHeadingAboutUpperSpa = "Arte, Confort y Tecnología";
        this._textSpanHeadingAboutUpperPor = "Arte, Conforto e Tecnologia";
        this._textSpanHeadingAboutLowerEng = "About us";
        this._textSpanHeadingAboutLowerSpa = "Acerca de nosotros";
        this._textSpanHeadingAboutLowerPor = "Sobre nós";


        this._textSpanHeadingContactEng = "Wanna know more?...";
        this._textSpanHeadingContactSpa = "¿Quieres saber más?...";
        this._textSpanHeadingContactPor = "Você quer saber mais?...";
        this._textSpanSubHeadingContactEng = "Leave a comment below, we are at your service.";
        this._textSpanSubHeadingContactSpa = "Dejanos un comentario en la parte de abajo, estamos para servirte.";
        this._textSpanSubHeadingContactPor = "Deixe um comentário abaixo, estamos ao seu dispor.";
        this._textLabelEmailEng = "Email:";
        this._textLabelEmailSpa = "Correo electrónico:";
        this._textLabelEmailPor = "Correio eletrônico:";
        this._placeholderEmailEng = "name@domain.com";
        this._placeholderEmailSpa = "nombre@dominio.com";
        this._placeholderEmailPor = "nome@dominio.com";
        this._textLabelTextEng = "Comment";
        this._textLabelTextSpa = "Comentario:";
        this._textLabelTextPor = "Comente:";
        this._placeholderTextEng = "My comment is about...";
        this._placeholderTextSpa = "Mi comentario es acerca de...";
        this._placeholderTextPor = "Meu comentário é sobre...";
        this._textLabelToSendEng = "Button to send:";
        this._textLabelToSendSpa = "Botón para enviar:";
        this._textLabelToSendPor = "Botão enviar:";
        this._textButtonSendEng = "Send";
        this._textButtonSendSpa = "Enviar";
        this._textButtonSendPor = "Enviar";
        this._textSpanThanksEng = "Thanks!";
        this._textSpanThanksSpa = "Gracias!";
        this._textSpanThanksPor = "Obrigado!";
        this._textSpanContentThanksEng = "We have received your comments.";
        this._textSpanContentThanksSpa = "Hemos recibido tus comentarios.";
        this._textSpanContentThanksPor = "Recebemos seus comentários.";
        this._textBack2MainPageEng = "Back to main page...";
        this._textBack2MainPageSpa = "Regresar a página principal...";
        this._textBack2MainPagePor = "Retornar à página principal...";

        console.log("LanguageContainer Object setted!, actual Lang: <"+langP+">");
    }

    setLang(langP) {
        this.lang = langP;
    }

    getLang() {
        return this.lang;
    }

    getCompanyAcronim() {
        return this.company;
    }    

    getEnglishLang() {
        switch(this.lang) {
            case 'es':
                return this._menuLangSpaEng;
            case 'en':
                return this._menuLangEngEng;
            case 'pt':
                return this._menuLangPorEng;
        }
    }

    getSpanishLang() {
        switch(this.lang) {
            case 'es':
                return this._menuLangSpaSpa;
            case 'en':
                return this._menuLangEngSpa;
            case 'pt':
                return this._menuLangPorSpa;
        }
    }

    getPortugueseLang() {
        switch(this.lang) {
            case 'es':
                return this._menuLangSpaPor;
            case 'en':
                return this._menuLangEngPor;
            case 'pt':
                return this._menuLangPorPor;
        }
    }

    getTextareaWrongContent() {
        switch(this.lang) {
            case 'es':
                return "Campo de texto vacio: Porfavor introduzca el contenido de su consulta/duda/comentario...";
            case 'en':
                return "Field text empty: Please introduce valid content in comment area...";
            case 'pt':
                return "Texto do campo vazio: Por favor, introduza conteúdo válido na área de comentários...";
        }
    }

    getEmailEmptyContent() {
        switch(this.lang) {
            case 'es':
                return "Campo de correo vacio: Porfavor introduzca su correo electrónico en el campo de correo...";
            case 'en':
                return "Field email empty: Please introduce a valid email address in email field...";
            case 'pt':
                return "Campo email vazio: Por favor, insira um endereço de email válido no campo email...";
        }
    }

    getEmailWrongContent() {
        switch(this.lang) {
            case 'es':
                return "Campo de correo incorrecto: Porfavor introduzca correctamente su correo electrónico...";
            case 'en':
                return "Field email invalid: Please introduce a valid email address in email field...";
            case 'pt':
                return "Campo email inválido: Por favor, insira um endereço de email válido no campo email...";
        }

    }

    changeContentLang(idP, content) {
        var jElement = $("#"+idP);
        if( (typeof jElement != 'undefined') && (jElement != null) ) {
            $("#"+idP).html(content);
            return true;
        } else {
            console.error("Error: Element with id "+idP+" not found");
            return false;
        }
    }

    changeInnerTextToObject(object, content) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.innerText = content;
            console.log("Object: "+object+", updated to new text content");
        } else {
            console.log("Object not defined, setting innerText: <"+object+">");
        }
    }

    changeInnerHtmlToObject(object, content) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.innerHTML = content;
            console.log("Object: "+object+", updated to new html content");
        } else {
            console.log("Object not defined, setting innerHtml: <"+object+">");
        }
    }

    changePlaceholderToObject(object, content) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.setAttribute("placeholder", content);
            console.log("Object: "+object+", updated to new placeholder content");
        } else {
            console.log("Object not defined, setting placeholder: <"+object+">");
        }
    }

    changeHrefToAnchor(object, href) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.setAttribute("href", href);
            console.log("Object: "+object+", updated to new href content");
        } else {
            console.log("Object not defined, setting href: <"+object+">");
        }
    }

    changeActionToForm(object, action) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.setAttribute("action", action);
            console.log("Object: "+object+", updated to new action trigger");
        } else {
            console.log("Object not defined, setting action: <"+object+">");
        }
    }

    changeAltToImg(object, alt) {
        if(typeof object != 'undefined' && (object != null) ) {
            object.setAttribute("alt", alt);
            console.log("Object: "+object+", updated to new alt content");
        } else {
            console.log("Object not defined, setting action: <"+object+">");
        }
    }

    getActualLangOnActualLang() {
        switch(this.lang) {
            case 'en':
                return this._menuLangEngEng;
            case 'es':
                return this._menuLangSpaSpa;
            case 'pt':
                return this._menuLangPorPor;
        }
    }

    refactorPageLanguage(langP) {
        if(langP != "en" && langP != "es" && langP != "pt") {
            console.error("Language Container, Invalid language setting: <"+langP+">");
            return false;
        }
        this.setLang(langP);
        var lang = $("html").attr("lang", langP);

        this.changeContentLang("spanEng", this.getEnglishLang());
        this.changeContentLang("spanSpa", this.getSpanishLang());
        this.changeContentLang("spanPor", this.getPortugueseLang());

        this.changeContentLang("span-flag", this.getActualLangOnActualLang());
        switch(this.lang) {
            case 'en':
                $("#i-flag").attr("class","flag-usa flag m-0");
                this.changeInnerTextToObject($("#companyAcronim")[0],this._companyAcronimEng);
                this.changeInnerTextToObject($("#companyName")[0],this._companyNameEng);
                this.changeInnerTextToObject($("#navCompanyName")[0],this._companyNameEng);
                this.changeInnerTextToObject($("#anchorMainPage")[0],this._textMainPageEng);
                this.changeInnerTextToObject($("#anchorAbout")[0],this._textAboutPageEng);
                this.changeInnerTextToObject($("#anchorProducts")[0],this._textProductsPageEng);
                this.changeInnerTextToObject($("#anchorContact")[0],this._textContactPageEng);
                this.changeInnerTextToObject($("#anchorStore")[0],this._textStorePageEng);
                this.changeAltToImg($("#imgProductSample")[0], this._altTextProductDigitalFrameEng);
                this.changeInnerTextToObject($("#spanHeadingUpper")[0], this._textSpanHeadingUpperEng);
                this.changeInnerTextToObject($("#spanHeadingLower")[0], this._textSpanHeadingLowerEng);
                this.changeInnerTextToObject($("#paragraphIntro")[0], this._textParagraphIntroEng);
                this.changeInnerTextToObject($("#anchorLetYouKnow")[0], this._textAnchorLetYouKnowOurProductsEng);
                this.changeInnerTextToObject($("#ourProducts")[0], this._textSpanOurProductsEng);
                this.changeInnerTextToObject($("#forYouAnd")[0], this._textSpanForYouAndEng);
                this.changeInnerTextToObject($("#weHave1")[0], this._textParagraphWeHave1Eng);
                this.changeInnerTextToObject($("#weHave2")[0], this._textIWeHave2Eng);
                this.changeInnerTextToObject($("#spanHeadingAboutUpper")[0], this._textSpanHeadingAboutUpperEng);
                this.changeInnerTextToObject($("#spanHeadingAboutLower")[0], this._textSpanHeadingAboutLowerEng);
                


                Cookies.set('lang', 'en', { expires: 7 });
            break;
            case 'es':
                $("#i-flag").attr("class","flag-mexico flag m-0");
                this.changeInnerTextToObject($("#companyAcronim")[0],this._companyAcronimSpa);
                this.changeInnerTextToObject($("#companyName")[0],this._companyNameSpa);
                this.changeInnerTextToObject($("#navCompanyName")[0],this._companyNameSpa);
                this.changeInnerTextToObject($("#anchorMainPage")[0],this._textMainPageSpa);
                this.changeInnerTextToObject($("#anchorAbout")[0],this._textAboutPageSpa);
                this.changeInnerTextToObject($("#anchorProducts")[0],this._textProductsPageSpa);
                this.changeInnerTextToObject($("#anchorContact")[0],this._textContactPageSpa);
                this.changeInnerTextToObject($("#anchorStore")[0],this._textStorePageSpa);
                this.changeAltToImg($("#imgProductSample")[0], this._altTextProductDigitalFrameSpa);
                this.changeInnerTextToObject($("#spanHeadingUpper")[0], this._textSpanHeadingUpperSpa);
                this.changeInnerTextToObject($("#spanHeadingLower")[0], this._textSpanHeadingLowerSpa);
                this.changeInnerTextToObject($("#paragraphIntro")[0], this._textParagraphIntroSpa);
                this.changeInnerTextToObject($("#anchorLetYouKnow")[0], this._textAnchorLetYouKnowOurProductsSpa);
                this.changeInnerTextToObject($("#ourProducts")[0], this._textSpanOurProductsSpa);
                this.changeInnerTextToObject($("#forYouAnd")[0], this._textSpanForYouAndSpa);
                this.changeInnerTextToObject($("#weHave1")[0], this._textParagraphWeHave1Spa);
                this.changeInnerTextToObject($("#weHave2")[0], this._textIWeHave2Spa);
                this.changeInnerTextToObject($("#spanHeadingAboutUpper")[0], this._textSpanHeadingAboutUpperSpa);
                this.changeInnerTextToObject($("#spanHeadingAboutLower")[0], this._textSpanHeadingAboutLowerSpa);

                Cookies.set('lang', 'es', { expires: 7 });
            break;
            case 'pt':
                $("#i-flag").attr("class","flag-brasil flag m-0");
                this.changeInnerTextToObject($("#companyAcronim")[0],this._companyAcronimPor);
                this.changeInnerTextToObject($("#companyName")[0],this._companyNamePor);
                this.changeInnerTextToObject($("#navCompanyName")[0],this._companyNamePor);
                this.changeInnerTextToObject($("#anchorMainPage")[0],this._textMainPagePor);
                this.changeInnerTextToObject($("#anchorAbout")[0],this._textAboutPagePor);
                this.changeInnerTextToObject($("#anchorProducts")[0],this._textProductsPagePor);
                this.changeInnerTextToObject($("#anchorContact")[0],this._textContactPagePor);
                this.changeInnerTextToObject($("#anchorStore")[0],this._textStorePagePor);
                this.changeAltToImg($("#imgProductSample")[0], this._altTextProductDigitalFramePor);
                this.changeInnerTextToObject($("#spanHeadingUpper")[0], this._textSpanHeadingUpperPor);
                this.changeInnerTextToObject($("#spanHeadingLower")[0], this._textSpanHeadingLowerPor);
                this.changeInnerTextToObject($("#paragraphIntro")[0], this._textParagraphIntroPor);
                this.changeInnerTextToObject($("#anchorLetYouKnow")[0], this._textAnchorLetYouKnowOurProductsPor);
                this.changeInnerTextToObject($("#ourProducts")[0], this._textSpanOurProductsPor);
                this.changeInnerTextToObject($("#forYouAnd")[0], this._textSpanForYouAndPor);
                this.changeInnerTextToObject($("#weHave1")[0], this._textParagraphWeHave1Por);
                this.changeInnerTextToObject($("#weHave2")[0], this._textIWeHave2Por);
                this.changeInnerTextToObject($("#spanHeadingAboutUpper")[0], this._textSpanHeadingAboutUpperPor);
                this.changeInnerTextToObject($("#spanHeadingAboutLower")[0], this._textSpanHeadingAboutLowerPor);


                Cookies.set('lang', 'pt', { expires: 7 });
            break;
        }
        return true;
    }
}

$(function() {
    var lang = 'es';
    if(typeof _lang != 'undefined' && (_lang != null) && (_lang.length > 0) ) {
        if( (_lang === 'en') || (_lang === 'es') || (_lang === 'pt') ) {
            lang = _lang;
        } else {
            console.error("Invalid lang specified on GET parameters: "+lang);
        }
    } else {
        console.log("Lang not specified on GET parameters...trying cookie...");
        lang = Cookies.get('lang');
        if( (typeof lang != 'undefined') && (lang != null) && (lang.length > 0) ) {
            console.log("Language Cookie detected!, lang: "+lang);
        } else {
            lang = 'es';
            console.log("Language Cookie Not detected!, lang setted: "+lang);
        }
    }

    _langContainer = new LanguageContainer(lang);

    $(document).ready(function() {
        _langContainer.refactorPageLanguage(_langContainer.getLang());
    });
});

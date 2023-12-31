"use strict";

/*
 * VOICE COMMAND CONFIG
 * dependency: js/speech/voicecommand.js
 */
voice_command = true,
/*
 * Turns on speech as soon as the page is loaded
 */
voice_command_auto = false,
/*
 * 	Sets the language to the default 'en-US'. (supports over 50 languages 
 * 	by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  Català            ['ca-ES']
 *  Čeština           ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  Español           ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'España']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'México']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'Panamá']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'Perú']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'República Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  Français          ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  Íslenska          ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmål      ['nb-NO']
 *  Polski            ['pl-PL']
 *  Português         ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  Română            ['ro-RO']
 *  Slovenčina        ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  Türkçe            ['tr-TR']
 *  български         ['bg-BG']
 *  Pусский           ['ru-RU']
 *  Српски            ['sr-RS']
 *  한국어          ['ko-KR']
 *  中文                            ['cmn-Hans-CN', '普通话 (中国大陆)']
 *                    ['cmn-Hans-HK', '普通话 (香港)']
 *                    ['cmn-Hant-TW', '中文 (台灣)']
 *                    ['yue-Hant-HK', '粵語 (香港)']
 *  日本語                         ['ja-JP']
 *  Lingua latīna     ['la']
 */
voice_command_lang = 'en-US',
/*
 * 	Use localstorage to remember on/off (best used with HTML Version
 * 	when going from one page to the next)
 */
voice_localStorage = false;
/*
 * Voice Commands
 * Defines voice command variables and functions
 */

if (voice_command) {
  var commands = {
    'show dashboard': function showDashboard() {
      $('nav a[href="ajax/dashboard.html"]').trigger("click");
    },
    'show inbox': function showInbox() {
      $('nav a[href="ajax/inbox.html"]').trigger("click");
    },
    'show graphs': function showGraphs() {
      $('nav a[href="ajax/flot.html"]').trigger("click");
    },
    'show flotchart': function showFlotchart() {
      $('nav a[href="ajax/flot.html"]').trigger("click");
    },
    'show morris chart': function showMorrisChart() {
      $('nav a[href="ajax/morris.html"]').trigger("click");
    },
    'show inline chart': function showInlineChart() {
      $('nav a[href="ajax/inline-charts.html"]').trigger("click");
    },
    'show dygraphs': function showDygraphs() {
      $('nav a[href="ajax/dygraphs.html"]').trigger("click");
    },
    'show tables': function showTables() {
      $('nav a[href="ajax/table.html"]').trigger("click");
    },
    'show data table': function showDataTable() {
      $('nav a[href="ajax/datatables.html"]').trigger("click");
    },
    'show jquery grid': function showJqueryGrid() {
      $('nav a[href="ajax/jqgrid.html"]').trigger("click");
    },
    'show form': function showForm() {
      $('nav a[href="ajax/form-elements.html"]').trigger("click");
    },
    'show form layouts': function showFormLayouts() {
      $('nav a[href="ajax/form-templates.html"]').trigger("click");
    },
    'show form validation': function showFormValidation() {
      $('nav a[href="ajax/validation.html"]').trigger("click");
    },
    'show form elements': function showFormElements() {
      $('nav a[href="ajax/bootstrap-forms.html"]').trigger("click");
    },
    'show form plugins': function showFormPlugins() {
      $('nav a[href="ajax/plugins.html"]').trigger("click");
    },
    'show form wizards': function showFormWizards() {
      $('nav a[href="ajax/wizards.html"]').trigger("click");
    },
    'show bootstrap editor': function showBootstrapEditor() {
      $('nav a[href="ajax/other-editors.html"]').trigger("click");
    },
    'show dropzone': function showDropzone() {
      $('nav a[href="ajax/dropzone.html"]').trigger("click");
    },
    'show image cropping': function showImageCropping() {
      $('nav a[href="ajax/image-editor.html"]').trigger("click");
    },
    'show general elements': function showGeneralElements() {
      $('nav a[href="ajax/general-elements.html"]').trigger("click");
    },
    'show buttons': function showButtons() {
      $('nav a[href="ajax/buttons.html"]').trigger("click");
    },
    'show fontawesome': function showFontawesome() {
      $('nav a[href="ajax/fa.html"]').trigger("click");
    },
    'show glyph icons': function showGlyphIcons() {
      $('nav a[href="ajax/glyph.html"]').trigger("click");
    },
    'show flags': function showFlags() {
      $('nav a[href="ajax/flags.html"]').trigger("click");
    },
    'show grid': function showGrid() {
      $('nav a[href="ajax/grid.html"]').trigger("click");
    },
    'show tree view': function showTreeView() {
      $('nav a[href="ajax/treeview.html"]').trigger("click");
    },
    'show nestable lists': function showNestableLists() {
      $('nav a[href="ajax/nestable-list.html"]').trigger("click");
    },
    'show jquery U I': function showJqueryUI() {
      $('nav a[href="ajax/jqui.html"]').trigger("click");
    },
    'show typography': function showTypography() {
      $('nav a[href="ajax/typography.html"]').trigger("click");
    },
    'show calendar': function showCalendar() {
      $('nav a[href="ajax/calendar.html"]').trigger("click");
    },
    'show widgets': function showWidgets() {
      $('nav a[href="ajax/widgets.html"]').trigger("click");
    },
    'show gallery': function showGallery() {
      $('nav a[href="ajax/gallery.html"]').trigger("click");
    },
    'show maps': function showMaps() {
      $('nav a[href="ajax/gmap-xml.html"]').trigger("click");
    },
    'show pricing tables': function showPricingTables() {
      $('nav a[href="ajax/pricing-table.html"]').trigger("click");
    },
    'show invoice': function showInvoice() {
      $('nav a[href="ajax/invoice.html"]').trigger("click");
    },
    'show search': function showSearch() {
      $('nav a[href="ajax/search.html"]').trigger("click");
    },
    'go back': function goBack() {
      history.back(1);
    },
    'scroll up': function scrollUp() {
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    },
    'scroll down': function scrollDown() {
      $('html, body').animate({
        scrollTop: $(document).height()
      }, 100);
    },
    'hide navigation': function hideNavigation() {
      if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")) {
        $('span.minifyme').trigger("click");
      } else {
        $('#hide-menu > span > a').trigger("click");
      }
    },
    'show navigation': function showNavigation() {
      if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")) {
        $('span.minifyme').trigger("click");
      } else {
        $('#hide-menu > span > a').trigger("click");
      }
    },
    'mute': function mute() {
      $.sound_on = false;
      $.smallBox({
        title: "MUTE",
        content: "All sounds have been muted!",
        color: "#a90329",
        timeout: 4000,
        icon: "fa fa-volume-off"
      });
    },
    'sound on': function soundOn() {
      $.sound_on = true;
      $.speechApp.playConfirmation();
      $.smallBox({
        title: "UNMUTE",
        content: "All sounds have been turned on!",
        color: "#40ac2b",
        sound_file: 'voice_alert',
        timeout: 5000,
        icon: "fa fa-volume-up"
      });
    },
    'stop': function stop() {
      smartSpeechRecognition.abort();
      $.root_.removeClass("voice-command-active");
      $.smallBox({
        title: "VOICE COMMAND OFF",
        content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
        color: "#40ac2b",
        sound_file: 'voice_off',
        timeout: 8000,
        icon: "fa fa-microphone-slash"
      });

      if ($('#speech-btn .popover').is(':visible')) {
        $('#speech-btn .popover').fadeOut(250);
      }
    },
    'help': function help() {
      $('#voiceModal').removeData('modal').modal({
        remote: "ajax/modal-content/modal-voicecommand.html",
        show: true
      });

      if ($('#speech-btn .popover').is(':visible')) {
        $('#speech-btn .popover').fadeOut(250);
      }
    },
    'got it': function gotIt() {
      $('#voiceModal').modal('hide');
    },
    'logout': function logout() {
      $.speechApp.stop();
      window.location = $('#logout > span > a').attr("href");
    }
  };
}

;
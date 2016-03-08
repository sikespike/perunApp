var $ = require("jquery");

function Events() {
    return {
        VIEW: {
            FILE_REQUEST:      "view.file.request",
            FILE_RESPONSE:     "view.file.sent",
            TEMPLATE_REQUEST:  "view.template.request",
            TEMPLATE_RESPONSE: "view.template.sent",
            VIEW_CHANGE:        "view.change",
            OPTIONS_LOCATE_MESSAGE: "view.options.locate.msg",
            ACTIONS: {
                IMAGE_LOAD: "view.action.image.load",
                IMAGE_LOADED: "view.action.image.loaded",
                SPIRE_IMPORT: "view.action.sprite.import"
            }
        },
        NET: {
            CLIENT_BROADCAST: "net.msg.broadcast",
            CLIENT_BROADCAST_RESPONSE: "net.msg.broadcast.response"
        },
        createEvent: function(event, target) {
            return {
                event: event,
                target: target ? target : $(document)
            }
        }
    }
}

export var Event = new Events();
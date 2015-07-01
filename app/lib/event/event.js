function Events() {
    return {
        VIEW: {
            FILE_REQUEST:      "view.file.request",
            FILE_RESPONSE:     "view.file.sent",
            TEMPLATE_REQUEST:  "view.template.request",
            TEMPLATE_RESPONSE: "view.template.sent",
            VIEW_CHANGE:        "view.change",
            OPTIONS_LOCATE_MESSAGE: "view.options.locate.msg"
        },
        NET: {
            CLIENT_BROADCAST: "net.msg.broadcast",
            CLIENT_BROADCAST_RESPONSE: "net.msg.broadcast.response"
        }
    }
}

export var Event = new Events();
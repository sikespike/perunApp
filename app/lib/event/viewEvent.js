function Events() {
    return {
        FILE_REQUEST:      "view.file.request",
        FILE_RESPONCE:     "view.file.sent",
        TEMPLATE_REQUEST:  "view.template.request",
        TEMPLATE_RESPONCE: "view.template.sent"
    }
}

export var ViewEvent = new Events();
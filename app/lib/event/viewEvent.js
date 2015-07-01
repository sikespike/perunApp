function Events() {
    return {
        FILE_REQUEST:      "view.file.request",
        FILE_RESPONCE:     "view.file.sent",
        TEMPLATE_REQUEST:  "view.template.request",
        TEMPLATE_RESPONCE: "view.template.sent",
        VIEW_CHANGE:        "view.change"
    }
}

export var ViewEvent = new Events();
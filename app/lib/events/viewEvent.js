define(function () {
    "use strict";

    var VIEW = "view";
    var FILE = VIEW+".file.request";

    return {
        VIEW: VIEW,

        VIEW_FILE_REQUEST: FILE,
        VIEW_FILE_RESPONCE: FILE+".sent",

        VIEW_TEMPLATE_REQUEST: FILE+".template",
        VIEW_TEMPLATE_RESPONCE: FILE+".template.sent"
    }
});
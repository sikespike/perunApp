/**
 * Created by Xif on 15-06-25.
 */
define(function (require) {
    var VIEW = "view";
    var FILE = VIEW+".file.request";

    return {
        VIEW: VIEW,

        VIEW_FILE_REQUEST: FILE,
        VIEW_FILE_RESPONCE: FILE+".sent",

        VIEW_TEMPLATE_REQUEST: FILE+".template",
        VIEW_TEMPLATE_RESPONCE: FILE+".template.sent"
    };
});
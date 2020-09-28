declare global {
    interface Window {
        jsRoutes: Record<string, unknown | Record<string, unknown | Record<string, unknown>>>;
    }
}

declare let isLoggedIn: boolean;
declare let ajaxSettings: JQuery.AjaxSettings;
// declare let jsRoutes: Record<string, unknown | Record<string, unknown | Record<string, unknown>>>;

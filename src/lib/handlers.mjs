import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// LOGIN/LOGOUT ---------------------------------------------------------------------------------

// END LOGIN/LOGOUT ------------------------------------------------------------------------------

// MAIN PAGES ------------------------------------------------------------------------------------
export function home(req, res) {
    res.render('home');
}

export function colorMode(req, res) {
    res.cookie('color_mode', req.params.mode, {maxAge: 30 * 24 * 60 * 60 * 1000});
    res.redirect(req.get('referer'));
}
// END MAIN PAGES --------------------------------------------------------------------------------

// LIST API --------------------------------------------------------------------------------------

// END LIST API ----------------------------------------------------------------------------------

// MESSAGES API ----------------------------------------------------------------------------------

// END MESSAGES API ------------------------------------------------------------------------------

// SEND MESSAGE API ------------------------------------------------------------------------------

// END SEND MESSAGE API --------------------------------------------------------------------------

// ERROR HANDLING --------------------------------------------------------------------------------
export function notFound(req, res) {
    res.render('404');
}

export function serverError(err, req, res) {
    res.render('500');
}
// END ERROR HANDLING ----------------------------------------------------------------------------

export default {
    home, 
    colorMode,
    notFound,
    serverError
}
<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/20/19
 * Time: 12:32 PM
 */
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once 'includer.php';
require_once 'autoloader.php';
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    /* special ajax here */
//    return var_dump($_POST['objectToSend']);
//    $url_arr  = explode('/', $_SERVER['REQUEST_URI']);
    $cl = '\Modules\AjaxModule\\'.'AjaxProcessor';
//    $dir = 'src/controllers/home/';
//    if(end($url_arr)==='admin'){
//        $dir = 'src/controllers/admin/';
//        $cl = '\AdminControllers\\'.'AjaxController';
//    }
//    require_once $dir.'AjaxController.php';
    $aj = new $cl();
    $aj->indexAction();
}else{
   require_once 'public/templates/general_template.php';
}
//require_once 'autoloader.php';

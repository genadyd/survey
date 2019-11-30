<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 9/20/19
 * Time: 9:46 AM
 */
function autoloadAjaxModules($class_name){
    $class_array = explode('\\',$class_name);
//    return var_dump($class_array[2]);
    $file_path = __DIR__.'/api/modules/ajax/'
        .end($class_array).
        '.php';
    if(is_readable($file_path)){
        require $file_path;
    }
}
function autoloadSurvey($class_name){
    $class_array = explode('\\',$class_name);
    $file_path =  __DIR__.'/api/modules/surveys/'.end($class_array).'.php';
    if(is_readable($file_path)){
        require $file_path;
    }
}
function autoloadQuestion($class_name){
    $class_array = explode('\\',$class_name);
    $file_path =  __DIR__.'/api/modules/questions/'.end($class_array).'.php';
    if(is_readable($file_path)){
        require $file_path;
    }
}
function autoloadQuestionShow($class_name){
    $class_array = explode('\\',$class_name);
    $file_path =  __DIR__.'/api/modules/questions/question_presentation_builder/'.end($class_array).'.php';
    if(is_readable($file_path)){
        require $file_path;
    }
}
function autoloadAnswer($class_name){
    $class_array = explode('\\',$class_name);
    $file_path =  __DIR__.'/api/modules/answers/'.end($class_array).'.php';
    if(is_readable($file_path)){
        require $file_path;
    }
}
function autoloadDbProcessor($class_name){
    $class_array = explode('\\',$class_name);
    $file_path = __DIR__.'/api/db_processor/processors/'.end($class_array).'.php';
    if(is_readable($file_path)){
        require $file_path;
    }
}
//function autoloadSystem($class_name){
////    var_dump($class_name);
//    $class_array = explode('\\',$class_name);
//    $file_path = 'sys/'.$class_array[1].'.php';
//    if(is_readable($file_path)){
//        require $file_path;
//    }
//}
spl_autoload_register("autoloadQuestionShow");
spl_autoload_register("autoloadAjaxModules");
spl_autoload_register("autoloadSurvey");
spl_autoload_register("autoloadQuestion");
spl_autoload_register("autoloadAnswer");
spl_autoload_register("autoloadDbProcessor");

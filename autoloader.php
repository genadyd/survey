<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 9/20/19
 * Time: 9:46 AM
 */
function autoloadAjaxModules($class_name){
    $class_array = explode('\\',$class_name);
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
        require_once $file_path;
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
function autoloadInterfaces($class_name){
    $class_array = explode('\\',$class_name);
    $file_path = __DIR__.'/api/interfaces/'.end($class_array).'.php';
    if(is_readable($file_path)){
        require_once $file_path;
    }
}
function autoloadElements($class_name){
    $class_array = explode('\\',$class_name);
    $file_path = __DIR__.'/api/modules/forms_elements/'.end($class_array).'.php';
    if(is_readable($file_path)){
        require_once $file_path;
    }
}

spl_autoload_register("autoloadQuestionShow");
spl_autoload_register("autoloadAjaxModules");
spl_autoload_register("autoloadSurvey");
spl_autoload_register("autoloadQuestion");
spl_autoload_register("autoloadAnswer");
spl_autoload_register("autoloadDbProcessor");
spl_autoload_register("autoloadInterfaces");
spl_autoload_register("autoloadElements");

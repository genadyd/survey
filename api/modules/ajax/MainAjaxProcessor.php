<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/20/19
 * Time: 2:28 PM
 */


namespace Modules\AjaxModule;


class MainAjaxProcessor
{
    public function indexAction(){
        $get_data = json_decode($_POST['objectToSend'], true);
//        return var_dump($get_data);
        $module = isset($get_data['module']) ? $get_data['module'] : '';
        $class_name = isset($get_data['class']) ? $get_data['class']:'';
        $method = isset($get_data['func']) ? $get_data['func'] : '';
        $name_spaces = $this->getNameSpace($module);
        $class = $name_spaces.'\\'.$class_name;
//        return var_dump($class);
//        if( method_exists($class, $method)){
//            return var_dump($class);
            $obj = new $class($get_data);
           echo $obj->$method();
    }
protected function getNameSpace($module){
    $name_spaces = NULL;
        switch ($module){
            case 'surveys':
                $name_spaces = 'Modules\Surveys';
                break;
            case 'questions':
                $name_spaces = 'Modules\Questions';
                break;
            case 'answers':
                $name_spaces = 'Modules\Answers';
                break;
        }

            return $name_spaces;

}

}

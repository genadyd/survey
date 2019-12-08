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
        $class_name = 'Controller';
        $method = isset($get_data['func']) ? $get_data['func'] : '';
        $name_spaces = $this->getNameSpace($module);
        $class = $name_spaces.'\\'.$class_name;
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
            case 'forms_elements':
                $name_spaces = 'Modules\Elements';
                break;
        }

            return $name_spaces;

}

}

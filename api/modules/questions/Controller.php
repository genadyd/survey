<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 12/7/19
 * Time: 5:20 PM
 */


namespace Modules\Questions;

use Interfaces\ControllerInterface;


class Controller extends ControllerInterface
{
    public function setModelName(){
        $this->model_name = 'Modules\Questions\Question';
    }

}

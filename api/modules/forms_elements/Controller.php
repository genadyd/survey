<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 12/8/19
 * Time: 1:22 AM
 */

namespace Modules\Elements;
use Interfaces\ControllerInterface;

class Controller extends ControllerInterface
{
   protected function setModelName(){
       $this->model_name = 'Modules\Elements\Elements';
   }
}

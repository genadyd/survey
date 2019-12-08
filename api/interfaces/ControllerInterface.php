<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 12/6/19
 * Time: 2:44 PM
 */

namespace Interfaces;
abstract class ControllerInterface
{
    protected $form_data,
    $model,
    $model_name;
  function __construct($form_data){
     $this->form_data = $form_data;
     $this->setModelName();
     $this->setModel(new $this->model_name($this->form_data));
  }
  public function getList(){
     return json_encode($this->model->getList());
  }
  public function getOne(){
     return json_encode($this->model->getOne());
  }
  public function save(){
     return json_encode($this->model->save());
  }
  public function edit(){
      return json_encode($this->model->edit());
  }
    public function delete(){
        return json_encode($this->model->delete());
    }
  protected abstract function setModelName();
  private function setModel(ModelInterface $model){
      $this->model = $model;
  }
}

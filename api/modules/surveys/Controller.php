<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 12/6/19
 * Time: 2:11 PM
 */


namespace Modules\Surveys;


use Interfaces\ControllerInterface;


class Controller extends ControllerInterface
{
  protected function setModelName(){
      $this->model_name = 'Modules\Surveys\Survey';
  }
  public function getSurveyQuestionAnswerObject(){
      $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
      $res = $this->model->getOne();
      $question = new \Modules\Questions\Controller(array('survey_crypt'=>$survey_crypt));
      $res['questions'] = json_decode($question->getList());
      return json_encode($res);
  }
    public function saveOrders(){
      $this->model->saveOrders();

    }

}

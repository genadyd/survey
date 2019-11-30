<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/20/19
 * Time: 3:03 PM
 */


namespace Modules\Surveys;


use DBprocessor\Processor\SmartFormProcessor;
use Modules\Questions\Question;

abstract class MainSurvey {
    protected $form_data;
    protected $DB ;
    public function __construct($form_data)
    {
        $this->DB = new SmartFormProcessor('smartform');
        $this->form_data = $form_data;
    }
    public function getSurveysList(){
         $query = "SELECT * FROM sf_surveys ORDER BY survey_order DESC";
        $res = $this->DB->query($query, array(), true);
        return json_encode($res);
    }
    public function newSurveySave(){
      $survey_crypt = (string) md5(microtime());
      $survey_name = (string) htmlspecialchars($this->form_data['survey_name']);
      $survey_thanks_text = (string) htmlspecialchars($this->form_data['thanks_text']);
      $survey_order = $this->getSurveyMaxOrder();
      $ct = date('Y-m-d H:i:s', time());
      $query = "INSERT INTO sf_surveys ( crypt, survey_name, survey_thanks_text,survey_order, CT ) VALUES (:CRYPT, :NAME, :THANKS_TEXT, :SUR_ORDER, :CT )";
      $params_array = array(
          ':CRYPT'=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR),
          ':NAME' => array('val'=>$survey_name, 'type'=>\PDO::PARAM_STR),
          ':THANKS_TEXT'=> array('val'=>$survey_thanks_text, 'type'=>\PDO::PARAM_STR),
          ':SUR_ORDER'=> array('val'=>$survey_order, 'type'=>\PDO::PARAM_INT),
          ':CT' => array('val'=>$ct, 'type'=>''),
      );
      $res = $this->DB->query($query, $params_array, true);
      $this->form_data['crypt'] = $survey_crypt;
      return json_encode($this->form_data);
   }
   public function getOneSurvey(){
    $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
    $query = "SELECT * FROM sf_surveys WHERE crypt = :CRYPT ";
    $params = array(":CRYPT"=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR));
       $res = $this->DB->query($query, $params, false);
       $question = new Question(array('survey_crypt'=>$survey_crypt));
       $res['questions'] = $question->getQuestionsAnswersObjectForPresentation();
       $res['survey_thanks_text']= htmlspecialchars_decode($res['survey_thanks_text']);
       return json_encode($res);
   }
   protected function getSurveyMaxOrder(){
        $query = " SELECT MAX(survey_order) as ord FROM sf_surveys ";
        $res = $this->DB->query($query, array(), false);
        return $res['ord']+1;
   }
   public function editSurveySave(){
       $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
       $survey_name = (string) htmlspecialchars($this->form_data['survey_name']);
       $survey_thanks_text = (string) htmlspecialchars($this->form_data['thanks_text']);
        $query = "UPDATE sf_surveys SET survey_name = :NAME, survey_thanks_text = :THANKS_TEXT WHERE crypt = :CRYPT";
       $params_array = array(
           ':CRYPT'=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR),
           ':NAME' => array('val'=>$survey_name, 'type'=>\PDO::PARAM_STR),
           ':THANKS_TEXT'=> array('val'=>$survey_thanks_text, 'type'=>\PDO::PARAM_STR)
       );
       $res = $this->DB->query($query, $params_array );
        return json_encode($this->form_data);
   }
   public function removeOneSurvey(){
       $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
       $params_array = array(
           ':CRYPT'=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR)
       );
       $query = " DELETE FROM sf_surveys WHERE crypt = :CRYPT ";
       $res = $this->DB->query($query, $params_array );
       return json_encode($this->form_data);
   }

}

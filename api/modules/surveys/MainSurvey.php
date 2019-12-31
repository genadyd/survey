<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/20/19
 * Time: 3:03 PM
 */


namespace Modules\Surveys;


use DBprocessor\Processor\SmartFormProcessor;
use Interfaces\ModelInterface;

abstract class MainSurvey implements ModelInterface {
    protected $form_data;
    protected $DB ;
    public function __construct($form_data)
    {
        $this->DB = new SmartFormProcessor('smartform');
        $this->form_data = $form_data;
    }
    public function getList(){
         $query = "SELECT * FROM sf_surveys ORDER BY survey_order DESC";
        $res = $this->DB->query($query, array(), true);
        return $res;
    }
    public function save(){
      $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
      $survey_name = (string) htmlspecialchars($this->form_data['survey_name']);
      $survey_description = (string) htmlspecialchars($this->form_data['survey_description']);
      $survey_order = $this->getSurveyMaxOrder();
      $ct = date('Y-m-d H:i:s', time());
      $query = "INSERT INTO sf_surveys ( crypt, survey_name, survey_description, survey_order, CT ) VALUES (:CRYPT, :NAME, :SUR_DESCRIPTION, :SUR_ORDER, :CT )";
      $params_array = array(
          ':CRYPT'=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR),
          ':NAME' => array('val'=>$survey_name, 'type'=>\PDO::PARAM_STR),
          ':SUR_DESCRIPTION' =>array('val'=>$survey_description, 'type'=>\PDO::PARAM_STR),
          ':SUR_ORDER'=> array('val'=>$survey_order, 'type'=>\PDO::PARAM_INT),
          ':CT' => array('val'=>$ct, 'type'=>''),
      );
      $res = $this->DB->query($query, $params_array, true);
      return $this->form_data;
   }
   public function getOne(){
    $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
    $query = "SELECT * FROM sf_surveys WHERE crypt = :CRYPT ";
    $params = array(":CRYPT"=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR));
       $res = $this->DB->query($query, $params, false);
       return $res;
   }
   protected function getSurveyMaxOrder(){
        $query = " SELECT MAX(survey_order) as ord FROM sf_surveys ";
        $res = $this->DB->query($query, array(), false);
        return $res['ord']+1;
   }
   public function edit(){
       $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
       $survey_name = (string) htmlspecialchars($this->form_data['survey_name']);
       $survey_description = (string) htmlspecialchars($this->form_data['survey_description']);
        $query = "UPDATE sf_surveys SET survey_name = :NAME , survey_description = :DESC  WHERE crypt = :CRYPT";
       $params_array = array(
           ':CRYPT'=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR),
           ':NAME' => array('val'=>$survey_name, 'type'=>\PDO::PARAM_STR),
           ':DESC' => array('val'=>$survey_description, 'type'=>\PDO::PARAM_STR),
       );
       $res = $this->DB->query($query, $params_array );
        return $this->form_data;
   }
   public function delete(){
       $survey_crypt = (string) htmlspecialchars($this->form_data['survey_crypt']);
       $params_array = array(
           ':CRYPT'=> array('val'=>$survey_crypt, 'type'=>\PDO::PARAM_STR)
       );
       $query = " DELETE FROM sf_surveys WHERE crypt = :CRYPT ";
       $res = $this->DB->query($query, $params_array );
       return $this->form_data;
   }
   public function saveOrders(){
        foreach ($this->form_data['orders'] as $key => $val){
            $params_array = array(
                ':CRYPT'=> array('val'=>$key, 'type'=>\PDO::PARAM_STR),
                ':SUR_ORDER' =>array('val'=>$val, 'type'=>\PDO::PARAM_INT)
            );
            $query = "UPDATE sf_surveys SET survey_order = :SUR_ORDER WHERE crypt = :CRYPT ";
            $res = $this->DB->query($query, $params_array );
            var_dump($res);
        }

   }

}

<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/24/19
 * Time: 7:04 PM
 */


namespace Modules\Answers;


use DBprocessor\Processor\SmartFormProcessor;

class MainAnswer
{
    protected $form_data;
    protected $DB ;
    public function __construct($form_data)
    {
        $this->form_data = $form_data;
        $this->DB = new SmartFormProcessor('smartform');
    }
    public function getTypeByboxId(){
        $box_crypt = htmlspecialchars($this->form_data['box_crypt']);
        $query = "SELECT * FROM sf_elements_types WHERE id = (SELECT has_elements FROM sf_elements_types WHERE crypt = :CRYPT)";
        $params = array(':CRYPT'=> array('val'=>$box_crypt,'type'=>\PDO::PARAM_STR));
//        return var_dump($params);
        $res = $this->DB->query($query, $params);
        $res['parent_box_type_crypt']=$this->form_data['box_crypt'];
        return json_encode($res);
    }
}

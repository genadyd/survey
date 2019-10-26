<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/23/19
 * Time: 5:41 PM
 */


namespace Modules\Questions;


use DBprocessor\Processor\SmartFormProcessor;

class MainQuestion
{
    protected $form_data;
    protected $DB ;
    public function __construct($form_data)
    {
        $this->form_data = $form_data;
        $this->DB = new SmartFormProcessor('smartform');
    }

    public function getQuestionElementsTypes(){
    $query = 'SELECT * FROM sf_elements_types WHERE parent_block = 0  ';
    $res = $this->DB->query($query, array(),true);
    return json_encode($res);
}
}

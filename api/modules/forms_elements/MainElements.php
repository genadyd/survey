<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 12/8/19
 * Time: 1:32 AM
 */


namespace Modules\Elements;


use DBprocessor\Processor\SmartFormProcessor;
use Interfaces\ModelInterface;

class MainElements implements ModelInterface
{
    protected $form_data;
    protected $DB ;
    public function __construct($form_data)
    {
        $this->form_data = $form_data;
        $this->DB = new SmartFormProcessor('smartform');
    }
    public function getList()
    {
        $query = 'SELECT * FROM sf_elements_types WHERE parent_block = 0  ';
        $res = $this->DB->query($query, array(),true);
        return $res;
    }
    public function getOne()
    {
        // TODO: Implement getOne() method.
    }
    public function edit()
    {
        // TODO: Implement edit() method.
    }
    public function save()
    {
        // TODO: Implement save() method.
    }
    public function delete()
    {
        // TODO: Implement delete() method.
    }
}

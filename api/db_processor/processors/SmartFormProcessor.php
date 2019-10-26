<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/12/19
 * Time: 3:35 PM
 */


namespace DBprocessor\Processor;


use DBprocessor\SmartFormConnector;
require_once 'MainProcessor.php';
class SmartFormProcessor extends MainProcessor
{
   protected function dbConnectInit()
   {
       require_once 'SmartFormConnector.php';
       $this->_db = SmartFormConnector::getInstance('smartform');
   }
}
